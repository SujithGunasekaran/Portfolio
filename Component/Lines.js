import { Fragment } from 'react';

/*
 * Headline reveal: each word slides up from a mask.
 * lines: array of strings, or { em: string } for the muted/accent line.
 */
export default function Lines({ lines }) {
    let wordIndex = 0;
    return (
        <span className="hl">
            {
                lines.map((line, lineIndex) => {
                    const isEm = typeof line === 'object';
                    const text = isEm ? line.em : line;
                    const words = text.split(' ').map((word) => (
                        <Fragment key={`${lineIndex}-${word}-${wordIndex}`}>
                            <span className="w">
                                <span style={{ '--i': wordIndex++ }}>{word}</span>
                            </span>{' '}
                        </Fragment>
                    ));
                    return isEm
                        ? <em className="line" key={lineIndex}>{words}</em>
                        : <span className="line" key={lineIndex}>{words}</span>;
                })
            }
        </span>
    )
}
