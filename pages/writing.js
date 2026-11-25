import { useState } from 'react';
import Link from 'next/link';
import Seo from '../Component/Seo';
import Lines from '../Component/Lines';
import { Dim, TitleBlock } from '../Component/Blueprint';
import { myInfo } from '../Information/myInfo';

const WAVE_BARS = 140;

// Deterministic so server and client render the same bars.
const barHeight = (bar) => 14 + Math.round(Math.abs(Math.sin(bar * 0.43) * Math.cos(bar * 0.17)) * 86);

// Posts that live on this site open in place; the rest still open on Medium.
function Row({ blog, children }) {
    if (blog.BlogSlug) {
        return <Link className="msg" href={`/writing/${blog.BlogSlug}`}>{children}</Link>;
    }
    return <a className="msg" href={blog.BlogLink} target="_blank" rel="noopener noreferrer">{children}</a>;
}

export default function WritingPage() {
    const { Blog } = myInfo;
    const [listening, setListening] = useState(false);

    return (
        <>
            <Seo title="Writing" description="Articles on frontend performance, React and JavaScript: lazy loading, throttling, CSS-in-JS, SonarQube in Cursor and performance testing with Sitespeed.io." />
            <div className="bp">
                <div className="wrap sheet">
                    <div className="page-head">
                        <span className="mono eyebrow">04 · team radio</span>
                        <h1 className="h2"><Lines lines={['Notes from', { em: 'the pit wall.' }]} /></h1>
                        <p className="lead" style={{ '--d': '350ms' }}>Short transmissions on building for the web.</p>
                    </div>

                    <section className="bp-section" style={{ paddingTop: 0 }}>
                        <Dim mark="A" label="transcript" />

                        <div className={`air-head ${listening ? 'live' : ''}`}>
                            <span className="mono air-label"><i className="onair"></i>channel open</span>
                            <div className="airwave" aria-hidden="true">
                                {Array.from({ length: WAVE_BARS }, (_, bar) => (
                                    <i key={bar} style={{ '--h': barHeight(bar), '--k': bar }}></i>
                                ))}
                            </div>
                        </div>

                        <ol className="transcript" onMouseEnter={() => setListening(true)} onMouseLeave={() => setListening(false)}>
                            {
                                Blog.BlogList.map((blog, index) => (
                                    <li key={blog.BlogLink} style={{ '--d': `${index * 80}ms` }}>
                                        <Row blog={blog}>
                                            <span className="msg-meta mono">
                                                <span>msg {String(index + 1).padStart(2, '0')}</span>
                                                <span>pit wall</span>
                                            </span>
                                            <span className="msg-body">
                                                <h2 className="msg-title">{blog.BlogName}</h2>
                                                <span className="msg-desc">{blog.BlogDescription}</span>
                                                <span className="chips mono">
                                                    {blog.BlogTags.split(',').map((tag) => <span className="chip" key={tag}>{tag.trim()}</span>)}
                                                </span>
                                            </span>
                                            <span className="msg-go" aria-hidden="true">{blog.BlogSlug ? '→' : '↗'}</span>
                                        </Row>
                                    </li>
                                ))
                            }
                        </ol>
                    </section>

                    <TitleBlock drawing="team radio" sheet="04 / 05" reveal={false} />
                </div>
            </div>
        </>
    )
}
