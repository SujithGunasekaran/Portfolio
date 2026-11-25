import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Adds `.in` to .reveal / .split / .doodle once they scroll into view */
export function useReveal(routeKey) {
    useEffect(() => {
        const targets = document.querySelectorAll('.reveal, .hl, .doodle, .sketch');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        targets.forEach((target) => observer.observe(target));
        return () => observer.disconnect();
    }, [routeKey]);
}

/* Lagging ring + dot that follows a fine pointer */
export function Cursor() {
    const ringRef = useRef(null);
    const dotRef = useRef(null);

    useEffect(() => {
        if (!window.matchMedia('(pointer: fine)').matches || prefersReducedMotion()) return;
        const ring = ringRef.current;
        const dot = dotRef.current;
        let x = -100, y = -100, ringX = -100, ringY = -100, frame = 0;

        const onMove = (event) => {
            x = event.clientX;
            y = event.clientY;
            dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            ring.classList.add('on');
            dot.classList.add('on');
            ring.classList.toggle('hot', Boolean(event.target.closest?.('a, button')));
        };
        const onLeave = () => {
            ring.classList.remove('on');
            dot.classList.remove('on');
        };
        const tick = () => {
            ringX += (x - ringX) * 0.16;
            ringY += (y - ringY) * 0.16;
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            frame = requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        frame = requestAnimationFrame(tick);
        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <>
            <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
            <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
        </>
    )
}

/* Thin sector-coloured lap bar that fills as the page scrolls */
export function ScrollProgress() {
    const barRef = useRef(null);
    const { asPath } = useRouter();

    useEffect(() => {
        const update = () => {
            const root = document.documentElement;
            const max = root.scrollHeight - root.clientHeight;
            barRef.current.style.transform = `scaleX(${max > 0 ? root.scrollTop / max : 0})`;
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [asPath]);

    return (
        <div className="progress" aria-hidden="true">
            <span ref={barRef}></span>
        </div>
    )
}

/* Counts up to a value the first time it is visible. value: { prefix, to, suffix } */
export function CountUp({ prefix = '', to, suffix = '' }) {
    const [current, setCurrent] = useState(to);
    const ref = useRef(null);

    useEffect(() => {
        if (prefersReducedMotion()) return;
        setCurrent(0);
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            const start = performance.now();
            const duration = 1400;
            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                setCurrent(Math.round(to * (1 - Math.pow(1 - progress, 3))));
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }, { threshold: 0.6 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [to]);

    return <span ref={ref}>{prefix}{current}{suffix}</span>
}
