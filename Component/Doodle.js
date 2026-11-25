const TREAD_ANGLES = Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6);

const SHAPES = {
    squiggle: {
        viewBox: '0 0 200 20',
        paths: ['M2 12 C20 2 30 2 45 10 S75 18 92 8 S125 2 140 10 S175 18 198 6']
    },
    spark: {
        viewBox: '0 0 100 100',
        paths: ['M50 8 C52 36 64 48 92 50 C64 52 52 64 50 92 C48 64 36 52 8 50 C36 48 48 36 50 8Z']
    },
    arrow: {
        viewBox: '0 0 100 100',
        paths: ['M10 72 C28 18 72 16 86 56', 'M86 56 L70 50', 'M86 56 L90 38']
    },
    brackets: {
        viewBox: '0 0 100 100',
        paths: ['M35 25 L10 50 L35 75', 'M65 25 L90 50 L65 75', 'M58 18 L42 82']
    },
    radio: {
        viewBox: '0 0 100 100',
        paths: ['M22 50 a6 6 0 1 0 0.1 0', 'M38 34 A22 22 0 0 1 38 66', 'M52 22 A38 38 0 0 1 52 78', 'M66 10 A54 54 0 0 1 66 90']
    },
    plane: {
        viewBox: '0 0 100 100',
        paths: ['M8 46 L92 10 L62 90 L48 58 Z', 'M92 10 L48 58']
    },
    flag: {
        viewBox: '0 0 100 100',
        paths: ['M20 92 V10', 'M20 14 C40 4 58 26 82 14 V52 C58 64 40 42 20 54', 'M50 10 V48', 'M20 34 C40 24 58 46 82 34']
    },
    wheel: {
        viewBox: '0 0 100 100',
        paths: ['M18 32 Q50 18 82 32 L92 62 Q88 80 72 80 L28 80 Q12 80 8 62 Z', 'M36 56 H64', 'M30 40 a3 3 0 1 0 0.1 0', 'M70 40 a3 3 0 1 0 0.1 0']
    },
    car: {
        viewBox: '0 0 200 64',
        paths: [
            'M8 12 H34',
            'M20 12 V34',
            'M22 38 L58 36 C70 28 88 24 106 26 L146 32 L196 40 L196 44 L22 44 Z',
            'M92 27 C98 15 112 13 122 30',
            'M170 49 H198',
            'M36 46 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0',
            'M149 47 a11 11 0 1 0 22 0 a11 11 0 1 0 -22 0',
            'M0 38 H12',
            'M4 48 H16'
        ]
    },
    tyre: {
        viewBox: '0 0 100 100',
        paths: [
            'M50 8 a42 42 0 1 0 0.1 0',
            'M50 24 a26 26 0 1 0 0.1 0',
            'M50 44 a6 6 0 1 0 0.1 0',
            ...TREAD_ANGLES.map((a) => `M${(50 + Math.cos(a) * 42).toFixed(1)} ${(50 + Math.sin(a) * 42).toFixed(1)} L${(50 + Math.cos(a) * 34).toFixed(1)} ${(50 + Math.sin(a) * 34).toFixed(1)}`)
        ]
    }
};

export default function Doodle({ name, className = '', style, strokeWidth = 1.6 }) {
    const shape = SHAPES[name];
    if (!shape) return null;
    return (
        <svg
            className={`doodle doodle-${name} ${className}`}
            style={style}
            viewBox={shape.viewBox}
            strokeWidth={strokeWidth}
            aria-hidden="true"
        >
            {shape.paths.map((d, i) => <path key={i} d={d} pathLength="1" style={{ '--i': i }} />)}
        </svg>
    )
}
