// Tyre compound for each stint, like the strategy bars shown on a race broadcast.
const COMPOUNDS = ['soft', 'medium', 'hard', 'medium', 'soft'];

/*
 * The principles laid out as a race strategy: one stint after another, each with its compound-coloured
 * bar on top. Quiet by default; the bar fills in and the title warms up when you point at a stint.
 */
export default function StrategyBoard({ principles }) {
    return (
        <ol className="strategy">
            {
                principles.map((principle, index) => (
                    <li
                        key={principle.title}
                        className={`stint c-${COMPOUNDS[index % COMPOUNDS.length]}`}
                        style={{ '--d': `${index * 90}ms` }}
                        tabIndex={0}
                    >
                        <span className="stint-bar" aria-hidden="true"></span>
                        <span className="stint-no mono">stint {String(index + 1).padStart(2, '0')}</span>
                        <h2 className="stint-name">{principle.title}</h2>
                        <p className="stint-text">{principle.text}</p>
                    </li>
                ))
            }
        </ol>
    )
}
