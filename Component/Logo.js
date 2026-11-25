export default function Logo({ size = 34 }) {
    return (
        <svg className="logo" width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
            <circle className="logo-ring" cx="20" cy="20" r="19" />
            <path className="logo-s" d="M27 11C14 8 10 18 20 20C30 22 26 32 12 29" pathLength="1" />
            <circle className="logo-dot" cx="27" cy="11" r="3" />
        </svg>
    )
}
