// Single-stroke skid trails, one per stop. Each is drawn twice, offset, to read as a pair of tyre marks.
const TRAILS = [
    'M2 9 C40 5 70 13 110 9 S170 7 198 11',
    'M2 25 C50 25 90 23 120 13 S170 3 198 5',
    'M2 8 H110 C150 8 176 12 176 19 C176 26 152 27 142 21',
    'M2 20 C30 20 40 7 70 7 S110 23 140 23 S176 9 198 9'
];

export default function TyreMarks({ variant = 0 }) {
    const d = TRAILS[variant % TRAILS.length];
    return (
        <svg className="tyre-marks sketch" viewBox="0 0 200 36" aria-hidden="true">
            <g className="draw">
                <path d={d} pathLength="1" />
                <path d={d} pathLength="1" transform="translate(0 6)" />
            </g>
        </svg>
    )
}
