import { useCallback, useEffect, useRef, useState } from 'react';
import ScrollWind from './ScrollWind';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const WIDE_BREAKPOINT = 820;

/*
 * A winding track drawn through every stop. As the page scrolls, the accent line
 * fills in and a car marker drives along it; stops light up once passed.
 * stops: [{ kind: 'edu' | 'role', mark }]; renderStop(stop) returns the card body.
 */
export default function Journey({ stops, renderStop }) {
    const wrapRef = useRef(null);
    const itemRefs = useRef([]);
    const dotRefs = useRef([]);
    const progressRef = useRef(null);
    const progressTwinRef = useRef(null);
    const carRef = useRef(null);
    const [geo, setGeo] = useState(null);

    const measure = useCallback(() => {
        const wrap = wrapRef.current;
        if (!wrap) return;
        const width = wrap.offsetWidth;
        const height = wrap.offsetHeight;
        const wide = width >= WIDE_BREAKPOINT;
        const x0 = wide ? width / 2 : 28;
        const amp = wide ? 48 : 6;
        const endY = height - 80;

        const dots = itemRefs.current.filter(Boolean).map((item, index) => {
            const card = item.querySelector('.stop-card');
            return {
                x: x0 + (index % 2 ? amp : -amp),
                y: item.offsetTop + card.offsetTop + 18
            };
        });

        const points = [{ x: x0, y: 0 }, ...dots, { x: x0, y: endY }];
        const d = `M${points[0].x} ${points[0].y}` + points.slice(1).map((point, index) => {
            const prev = points[index];
            const mid = (prev.y + point.y) / 2;
            return ` C${prev.x} ${mid} ${point.x} ${mid} ${point.x} ${point.y}`;
        }).join('');

        setGeo({ width, height, d, x0, endY, dots });
    }, []);

    useEffect(() => {
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(wrapRef.current);
        document.fonts?.ready.then(measure);
        return () => observer.disconnect();
    }, [measure, stops]);

    useEffect(() => {
        if (!geo) return;
        const path = progressRef.current;
        const twin = progressTwinRef.current;
        const car = carRef.current;
        const total = path.getTotalLength();
        path.style.strokeDasharray = total;
        twin.style.strokeDasharray = total;

        const lengthAtY = (y) => {
            let low = 0;
            let high = total;
            for (let i = 0; i < 16; i++) {
                const mid = (low + high) / 2;
                if (path.getPointAtLength(mid).y < y) low = mid; else high = mid;
            }
            return high;
        };

        let frame = 0;
        const update = () => {
            frame = 0;
            const top = wrapRef.current.getBoundingClientRect().top;
            const lead = window.innerHeight * 0.6 - top;

            // On tall screens the footer keeps the end of the track below the 60% line even at the bottom of
            // the page. Over the last screenful of scrolling, ease the car to the finish so the lap always completes.
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const zone = window.innerHeight * 0.8;
            const nearEnd = maxScroll > zone ? clamp(1 - (maxScroll - window.scrollY) / zone, 0, 1) : 0;
            const y = clamp(lead + (geo.endY - lead) * nearEnd, 0, geo.endY);
            const length = y <= 0 ? 0 : lengthAtY(y);
            const point = path.getPointAtLength(length);
            const ahead = path.getPointAtLength(Math.min(total, length + 2));
            const behind = path.getPointAtLength(Math.max(0, length - 2));
            const angle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180 / Math.PI;
            path.style.strokeDashoffset = total - length;
            twin.style.strokeDashoffset = total - length;
            car.setAttribute('transform', `translate(${point.x} ${point.y}) rotate(${angle}) scale(1.1)`);
            geo.dots.forEach((dot, index) => {
                const reached = dot.y <= y;
                dotRefs.current[index]?.classList.toggle('reached', reached);
                itemRefs.current[index]?.classList.toggle('reached', reached);
            });
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            cancelAnimationFrame(frame);
        };
    }, [geo]);

    return (
        <div className="journey" ref={wrapRef}>
            {
                geo &&
                <svg className="journey-svg" width={geo.width} height={geo.height} viewBox={`0 0 ${geo.width} ${geo.height}`} aria-hidden="true">
                    <path className="jr-edge" d={geo.d} />
                    <path className="jr-road" d={geo.d} />
                    <path className="jr-dash" d={geo.d} />
                    <path className="jr-progress" d={geo.d} ref={progressRef} transform="translate(-6 0)" />
                    <path className="jr-progress" d={geo.d} ref={progressTwinRef} transform="translate(6 0)" />
                </svg>
            }
            {
                geo &&
                <svg className="journey-car" width={geo.width} height={geo.height} viewBox={`0 0 ${geo.width} ${geo.height}`} aria-hidden="true">
                    <g ref={carRef}>
                        <path className="car-dark" d="M-19 -8 H-16 V8 H-19 Z" />
                        <path className="car-dark" d="M-12.5 -9.6 H-5.5 V-5.4 H-12.5 Z M-12.5 5.4 H-5.5 V9.6 H-12.5 Z" />
                        <path className="car-dark" d="M6 -9 H12 V-5 H6 Z M6 5 H12 V9 H6 Z" />
                        <path className="car-dark" d="M14 -8 H17.5 V8 H14 Z" />
                        <path className="car-body" d="M-16 -3.4 L5 -2.6 L15 -1.1 L15 1.1 L5 2.6 L-16 3.4 Z" />
                        <circle className="car-cockpit" cx="-3" cy="0" r="1.9" />
                    </g>
                </svg>
            }
            <ScrollWind />
            {
                geo && geo.dots.map((dot, index) => (
                    <span
                        key={index}
                        ref={(el) => { dotRefs.current[index] = el; }}
                        className={`stop-dot ${stops[index].kind}`}
                        style={{ left: dot.x, top: dot.y }}
                        aria-hidden="true"
                    >
                        {stops[index].mark}
                    </span>
                ))
            }
            {
                stops.map((stop, index) => (
                    <article
                        key={stop.key}
                        ref={(el) => { itemRefs.current[index] = el; }}
                        className={`stop stop--${index % 2 ? 'r' : 'l'} stop--${stop.kind}`}
                    >
                        <div className="stop-card reveal">{renderStop(stop, index)}</div>
                    </article>
                ))
            }
            {
                geo &&
                <div className="finish" style={{ left: geo.x0, top: geo.endY }} aria-hidden="true">
                    <span className="finish-flag"></span>
                    <span className="mono">still racing</span>
                </div>
            }
        </div>
    )
}
