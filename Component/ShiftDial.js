import { useEffect, useRef } from 'react';

const LED_COUNT = 15;
const ARC_START = 135;
const ARC_SWEEP = 270;
const MAX_SPEED = 340;
const PARTICLES = 80;

const polar = (degrees, radius) => {
    const radians = (degrees * Math.PI) / 180;
    return { x: 200 + Math.cos(radians) * radius, y: 200 + Math.sin(radians) * radius };
};

const LEDS = Array.from({ length: LED_COUNT }, (_, i) => {
    const point = polar(ARC_START + (i / (LED_COUNT - 1)) * ARC_SWEEP, 172);
    const color = i < 5 ? 'var(--sector-2)' : i < 10 ? '#E5484D' : 'var(--sector-1)';
    return { ...point, color };
});

const TICKS = Array.from({ length: 28 }, (_, k) => {
    const angle = ARC_START + k * 10;
    const outer = polar(angle, 146);
    const inner = polar(angle, k % 5 === 0 ? 128 : 136);
    return `M${outer.x.toFixed(1)} ${outer.y.toFixed(1)} L${inner.x.toFixed(1)} ${inner.y.toFixed(1)}`;
}).join(' ');

const spawn = (anywhere) => ({
    angle: Math.random() * Math.PI * 2,
    r: anywhere ? Math.random() : 0.03 + Math.random() * 0.09,
    speed: 0.6 + Math.random() * 0.8,
    accent: Math.random() < 0.12
});

/*
 * Gear, speed and revs as a steering-wheel dial. It sits in neutral until you press and hold
 * it (mouse, finger, or Space / Enter). While it is moving, thin lines of wind rush out of the
 * dial towards the screen, and the speed is published as --speed (0 to 1) so the rest of the
 * page can react to it.
 */
export default function ShiftDial() {
    const rootRef = useRef(null);
    const arcRef = useRef(null);
    const gearRef = useRef(null);
    const speedRef = useRef(null);
    const ledRefs = useRef([]);

    useEffect(() => {
        const render = (speed) => {
            const gear = speed < 2 ? 0 : Math.min(8, Math.floor(speed / 45) + 1);
            const step = gear === 8 ? MAX_SPEED - 315 : 45;
            const within = gear ? Math.min(1, (speed - (gear - 1) * 45) / step) : 0;
            const revs = gear ? 0.3 + 0.7 * within : 0.08;
            arcRef.current.setAttribute('stroke-dasharray', `${(revs * ARC_SWEEP).toFixed(1)} 360`);
            const lit = gear ? Math.floor(revs * LED_COUNT) : 0;
            ledRefs.current.forEach((led, i) => led?.classList.toggle('on', i < lit));
            gearRef.current.textContent = gear ? String(gear) : 'N';
            speedRef.current.textContent = `${Math.round(speed)} km/h`;
        };

        render(0);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const root = rootRef.current;
        const canvas = document.createElement('canvas');
        canvas.className = 'wind';
        canvas.setAttribute('aria-hidden', 'true');
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        let width = 0;
        let height = 0;
        const resize = () => {
            const ratio = Math.min(2, window.devicePixelRatio || 1);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        };
        resize();
        window.addEventListener('resize', resize);

        const particles = Array.from({ length: PARTICLES }, () => spawn(true));
        let speed = 0;
        let target = 0;
        let pressed = false;
        let running = false;
        let frame = 0;
        let last = 0;
        let ticks = 0;
        const blur = document.getElementById('motion-blur-x');
        let textColor = '#000';
        let accentColor = '#f80';

        const readColors = () => {
            const styles = getComputedStyle(document.documentElement);
            textColor = styles.getPropertyValue('--text').trim() || textColor;
            accentColor = styles.getPropertyValue('--accent').trim() || accentColor;
        };
        readColors();

        const drawWind = (v, dt) => {
            ctx.clearRect(0, 0, width, height);
            if (v < 0.02) return;
            const rect = root.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const maxRadius = Math.hypot(Math.max(cx, width - cx), Math.max(cy, height - cy)) * 1.05;
            particles.forEach((p, index) => {
                p.r += dt * (0.12 + v * 1.5) * (0.25 + p.r * 1.4) * p.speed;
                if (p.r > 1) Object.assign(particles[index], spawn(false));
                const tail = (0.015 + 0.1 * v) * (0.3 + p.r);
                const from = Math.max(0, p.r - tail) * maxRadius;
                const to = p.r * maxRadius;
                ctx.globalAlpha = Math.min(1, p.r * 2.5) * v * (p.accent ? 0.4 : 0.22);
                ctx.lineWidth = 0.5 + p.r * 1.6;
                ctx.strokeStyle = p.accent ? accentColor : textColor;
                ctx.beginPath();
                ctx.moveTo(cx + Math.cos(p.angle) * from, cy + Math.sin(p.angle) * from);
                ctx.lineTo(cx + Math.cos(p.angle) * to, cy + Math.sin(p.angle) * to);
                ctx.stroke();
            });
            ctx.globalAlpha = 1;
        };

        const loop = (now) => {
            const dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            const rate = target > speed ? 90 : 110;
            speed += Math.max(-rate * dt, Math.min(rate * dt, target - speed));
            render(speed);

            const v = speed / MAX_SPEED;
            const shake = v > 0.6 ? (Math.random() - 0.5) * v * 1.6 : 0;
            document.documentElement.style.setProperty('--speed', v.toFixed(3));
            document.documentElement.toggleAttribute('data-rev', v > 0.65);
            document.documentElement.toggleAttribute('data-moving', v > 0.04);
            blur?.setAttribute('stdDeviation', `${(v * 1.5).toFixed(2)} 0`);
            root.style.transform = `perspective(900px) translateZ(${(v * 46).toFixed(1)}px) translate(${shake.toFixed(2)}px, ${(shake * 0.6).toFixed(2)}px)`;
            if (++ticks % 40 === 0) readColors();
            drawWind(v, dt);

            if (speed < 0.3 && target === 0) {
                speed = 0;
                render(0);
                root.style.transform = '';
                document.documentElement.style.setProperty('--speed', '0');
                document.documentElement.removeAttribute('data-rev');
                document.documentElement.removeAttribute('data-moving');
                blur?.setAttribute('stdDeviation', '0 0');
                ctx.clearRect(0, 0, width, height);
                running = false;
                return;
            }
            frame = requestAnimationFrame(loop);
        };

        const start = () => {
            if (running) return;
            running = true;
            last = performance.now();
            frame = requestAnimationFrame(loop);
        };

        const press = () => { pressed = true; target = MAX_SPEED; start(); };
        const release = () => { pressed = false; target = 0; };
        const keyPress = (event) => {
            if (event.code !== 'Space' && event.code !== 'Enter') return;
            event.preventDefault();
            if (!pressed) press();
        };
        const keyRelease = (event) => {
            if (event.code === 'Space' || event.code === 'Enter') release();
        };

        root.addEventListener('pointerdown', press);
        root.addEventListener('keydown', keyPress);
        root.addEventListener('keyup', keyRelease);
        root.addEventListener('blur', release);
        window.addEventListener('pointerup', release);
        window.addEventListener('pointercancel', release);
        return () => {
            root.removeEventListener('pointerdown', press);
            root.removeEventListener('keydown', keyPress);
            root.removeEventListener('keyup', keyRelease);
            root.removeEventListener('blur', release);
            window.removeEventListener('pointerup', release);
            window.removeEventListener('pointercancel', release);
            document.documentElement.style.removeProperty('--speed');
            document.documentElement.removeAttribute('data-rev');
            document.documentElement.removeAttribute('data-moving');
            blur?.setAttribute('stdDeviation', '0 0');
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(frame);
            canvas.remove();
        };
    }, []);

    return (
        <div className="dial-stage" ref={rootRef} tabIndex={0} role="button" aria-label="Hold to accelerate">
            <svg className="shift-dial" viewBox="0 0 400 400" aria-hidden="true">
                <circle className="dial-ring" cx="200" cy="200" r="196" />
                <circle className="dial-ring inner" cx="200" cy="200" r="104" />
                <path className="dial-ticks" d={TICKS} />
                <circle className="dial-arc" cx="200" cy="200" r="154" pathLength="360" transform="rotate(135 200 200)" ref={arcRef} strokeDasharray="0 360" />
                {LEDS.map((led, i) => (
                    <circle
                        key={i}
                        className="dial-led"
                        cx={led.x.toFixed(1)}
                        cy={led.y.toFixed(1)}
                        r="6"
                        style={{ '--c': led.color }}
                        ref={(el) => { ledRefs.current[i] = el; }}
                    />
                ))}
                <text className="dial-label" x="200" y="150" textAnchor="middle">gear</text>
                <text className="dial-gear" x="200" y="250" textAnchor="middle" ref={gearRef}>N</text>
                <text className="dial-speed" x="200" y="290" textAnchor="middle" ref={speedRef}>0 km/h</text>
            </svg>
            <p className="mono dial-hint">hold to accelerate</p>
        </div>
    )
}
