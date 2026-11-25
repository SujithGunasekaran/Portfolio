import Seo from '../Component/Seo';
import Lines from '../Component/Lines';
import Year from '../Component/Year';
import { Socials, myInfo } from '../Information/myInfo';

// Short registration-style code shown at the start of each row.
const CODES = { LinkedIn: 'in', GitHub: 'gh', Medium: 'md' };

export default function ContactPage() {
    const { About } = myInfo;

    return (
        <>
            <Seo title="Contact" description="Get in touch with Sujith Gunasekaran, Senior Software Engineer at Walmart Global Tech, about collaboration. Find the links to LinkedIn, GitHub and Medium here." />
            <div className="wrap contact-grid">
                <div className="page-head contact-copy">
                    <span className="mono eyebrow reveal">05 · finish line</span>
                    <h1 className="h2"><Lines lines={["Let's build", { em: 'something that holds up.' }]} /></h1>
                    <p className="lead reveal" style={{ '--d': '350ms' }}>{About.closing}</p>
                    <p className="mono channel-open reveal" style={{ '--d': '500ms' }}><i className="onair"></i>channel open</p>
                </div>

                <section className="pass-wrap">
                    <article className="pass reveal" aria-label="Paddock pass">
                        <header className="pass-head mono">
                            <span>paddock pass</span>
                            <span><Year /></span>
                        </header>
                        <div className="pass-body">
                            <h2 className="pass-name">Sujith Gunasekaran</h2>
                            <p className="pass-role mono">Senior Software Engineer · Walmart Global Tech</p>
                            <dl className="pass-meta mono">
                                <div><dt>access</dt><dd>all areas</dd></div>
                                <div><dt>open for</dt><dd>collaboration</dd></div>
                            </dl>
                            <ul className="pass-links">
                                {
                                    Socials.map((social) => (
                                        <li key={social.label}>
                                            <a className="pass-link" href={social.href} target="_blank" rel="noopener noreferrer">
                                                <span className="code mono">{CODES[social.label] || social.label.slice(0, 2).toLowerCase()}</span>
                                                <strong>{social.label}</strong>
                                                <span className="handle mono">{social.handle}</span>
                                                <span className="go" aria-hidden="true">↗</span>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="pass-code" aria-hidden="true"></div>
                    </article>
                </section>
            </div>
        </>
    )
}
