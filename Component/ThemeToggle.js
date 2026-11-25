/* Day / night switch. The thumb slides between a sun and a moon. */
export default function ThemeToggle({ theme, onToggle }) {
    const isNight = theme === 'dark';
    return (
        <button
            type="button"
            className={`theme-toggle ${isNight ? 'night' : 'day'}`}
            role="switch"
            aria-checked={isNight}
            aria-label="Night mode"
            onClick={onToggle}
        >
            <svg className="tt-icon tt-sun" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
            </svg>
            <svg className="tt-icon tt-moon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
            </svg>
            <span className="tt-thumb" aria-hidden="true"></span>
        </button>
    )
}
