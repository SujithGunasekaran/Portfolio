import { useEffect } from 'react';

const WISPS = 36;

const spawn = (width, height, anywhere, down) => ({
    x: Math.random() * width,
    y: anywhere ? Math.random() * height : (down ? -Math.random() * 240 : height + Math.random() * 240),
    length: 90 + Math.random() * 190,
    speed: 0.5 + Math.random() * 0.9,
    wobble: 3 + Math.random() * 8,
    phase: Math.random() * Math.PI * 2,
    depth: 0.3 + Math.random() * 0.7
});

/*
 * A light breeze of long, thin wisps flowing straight up and down the page, the same way the car
 * travels along the track. It idles gently downwards; scroll to make it gust, and it follows the
 * scroll direction (down while the car drives down, up when you scroll back).
 */
export default function ScrollWind() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const canvas = document.createElement('canvas');
        canvas.className = 'wind-scroll';
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

        const wisps = Array.from({ length: WISPS }, () => spawn(width, height, true, true));
        let lastY = window.scrollY;
        let lastTime = performance.now();
        let gust = 0; // smoothed scroll speed, 0 to 1
        let direction = 1; // 1 = flowing down, -1 = flowing up
        let flow = 1; // smoothed direction
        let frame = 0;
        let ticks = 0;
        let color = '#000';

        const readColor = () => {
            color = getComputedStyle(document.documentElement).getPropertyValue('--text').trim() || color;
        };
        readColor();

        const tick = (now) => {
            const dt = Math.min(0.05, (now - lastTime) / 1000);
            lastTime = now;
            const scrollY = window.scrollY;
            const velocity = dt > 0 ? (scrollY - lastY) / dt : 0;
            lastY = scrollY;
            gust += (Math.min(1, Math.abs(velocity) / 1800) - gust) * 0.08;
            if (Math.abs(velocity) > 60) direction = velocity > 0 ? 1 : -1;
            flow += (direction - flow) * 0.12;
            if (++ticks % 60 === 0) readColor();

            ctx.clearRect(0, 0, width, height);
            ctx.lineCap = 'round';
            const trail = flow >= 0 ? 1 : -1; // the tail streams behind the head
            wisps.forEach((wisp, index) => {
                wisp.y += dt * (16 + gust * 560) * wisp.speed * wisp.depth * flow;
                const stretch = wisp.length * (1 + gust * 1.2);
                const gone = flow >= 0 ? wisp.y - stretch > height : wisp.y + stretch < 0;
                if (gone) Object.assign(wisps[index], spawn(width, height, false, flow >= 0));

                const sway = Math.sin(now / 1000 + wisp.phase) * wisp.wobble * (0.5 + gust);
                const tailY = wisp.y - trail * stretch;
                const edge = Math.min(1, wisp.y / 160 + 0.2, (height - wisp.y + stretch) / 200);
                ctx.globalAlpha = Math.max(0, edge) * (0.05 + gust * 0.11) * wisp.depth;
                ctx.lineWidth = 0.6 + wisp.depth * 0.9;
                ctx.strokeStyle = color;
                ctx.beginPath();
                ctx.moveTo(wisp.x, tailY);
                ctx.bezierCurveTo(
                    wisp.x + sway, tailY + trail * stretch * 0.33,
                    wisp.x - sway, tailY + trail * stretch * 0.66,
                    wisp.x, wisp.y
                );
                ctx.stroke();
            });
            ctx.globalAlpha = 1;
            frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', resize);
            canvas.remove();
        };
    }, []);

    return null;
}
