/* Small shared pieces of the "engineering drawing" look used on about, projects and writing. */

export function Dim({ mark, label }) {
    return (
        <div className="dim">
            <b className="balloon">{mark}</b>
            <span className="mono">{label}</span>
            <i className="dim-line"></i>
        </div>
    )
}

export function TitleBlock({ drawing, sheet, reveal = true }) {
    const cells = [
        ['drawing', drawing],
        ['project', 'Sujith Gunasekaran'],
        ['scale', '1:1'],
        ['rev', '06'],
        ['sheet', sheet]
    ];
    return (
        <dl className={`titleblock${reveal ? ' reveal' : ''}`}>
            {cells.map(([label, value]) => (
                <div key={label}>
                    <dt className="mono">{label}</dt>
                    <dd className="mono">{value}</dd>
                </div>
            ))}
        </dl>
    )
}
