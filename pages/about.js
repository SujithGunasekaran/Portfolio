import Link from 'next/link';
import Seo from '../Component/Seo';
import Lines from '../Component/Lines';
import { Dim, TitleBlock } from '../Component/Blueprint';
import StrategyBoard from '../Component/StrategyBoard';
import { myInfo } from '../Information/myInfo';

// Tyre compound per skill group: soft, medium, hard.
const COMPOUNDS = {
    frontend: { letter: 'S', word: 'soft', color: '#E5484D' },
    backend: { letter: 'M', word: 'medium', color: '#E8B923' },
    other: { letter: 'H', word: 'hard', color: 'var(--text)' }
};

const TREAD = Array.from({ length: 36 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 36;
    return `M${(70 + Math.cos(angle) * 60).toFixed(1)} ${(70 + Math.sin(angle) * 60).toFixed(1)} L${(70 + Math.cos(angle) * 66).toFixed(1)} ${(70 + Math.sin(angle) * 66).toFixed(1)}`;
}).join(' ');
const SPOKES = Array.from({ length: 5 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
    return `M${(70 + Math.cos(angle) * 8).toFixed(1)} ${(70 + Math.sin(angle) * 8).toFixed(1)} L${(70 + Math.cos(angle) * 27).toFixed(1)} ${(70 + Math.sin(angle) * 27).toFixed(1)}`;
}).join(' ');

/* Side view of a tyre: tread, coloured sidewall band, rim and spokes. The wheel turns on hover. */
function TyreFigure({ compound }) {
    return (
        <svg className="tyre-fig" viewBox="0 0 140 140" style={{ '--c': compound.color }} aria-hidden="true">
            <g className="tyre-turn">
                <circle className="t-tread" cx="70" cy="70" r="60" />
                <path className="t-block" d={TREAD} />
                <circle className="t-band" cx="70" cy="70" r="50" />
                <circle className="t-wall" cx="70" cy="70" r="40" />
                <circle className="t-rim" cx="70" cy="70" r="29" />
                <path className="t-spoke" d={SPOKES} />
                <circle className="t-rim" cx="70" cy="70" r="6" />
            </g>
            <circle className="t-badge" cx="70" cy="14" r="10" />
            <text x="70" y="18" textAnchor="middle">{compound.letter}</text>
        </svg>
    )
}

export default function AboutPage() {
    const { About, Home, Skills } = myInfo;

    return (
        <>
            <Seo title="About" description={Home.myInfo} />
            <div className="bp">
                <div className="wrap sheet">
                    <div className="page-head">
                        <div>
                            <span className="mono eyebrow">01 · pit wall</span>
                            <h1 className="h2"><Lines lines={[About.heading[0], { em: About.heading[1] }]} /></h1>
                            <p className="lead" style={{ '--d': '350ms' }}>{About.lead}</p>
                        </div>
                    </div>

                    <section className="bp-section" style={{ paddingTop: 0 }}>
                        <Dim mark="A" label={About.principlesHeading} />
                        <StrategyBoard principles={About.principles} />
                    </section>

                    <section className="bp-section">
                        <Dim mark="B" label="briefing" />
                        <p className="brief-line mono">{About.readouts.map(([, value]) => value).join(' · ')}</p>
                        <div className="brief">
                            <div className="story">
                                {About.story.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                            </div>
                            <div className="deltas" style={{ '--d': '150ms' }}>
                                <p className="mono">before / after</p>
                                {
                                    About.deltas.map((delta) => (
                                        <div className="delta" key={delta.label}>
                                            <div className="delta-head">
                                                <span className="mono">{delta.label}</span>
                                                <strong>{delta.text}</strong>
                                            </div>
                                            <span className="bar before" style={{ '--w': `${(delta.before / delta.max) * 100}%` }}></span>
                                            <span className="bar after" style={{ '--w': `${(delta.after / delta.max) * 100}%` }}></span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                    <section className="bp-section">
                        <Dim mark="C" label="tyre allocation" />
                        <div className="tyres">
                            {
                                Skills.map((skill, index) => (
                                    <div className="tyre-col" key={skill.name} style={{ '--d': `${index * 100}ms` }}>
                                        <TyreFigure compound={COMPOUNDS[skill.name]} />
                                        <div>
                                            <div className="tyre-head">
                                                <h3 className="tyre-title">{skill.title}</h3>
                                                <span className="tyre-tag">{skill.tagline}</span>
                                            </div>
                                            <ul className="tyre-chips">
                                                {skill.knownSkills.map((knownSkill) => <li key={knownSkill}>{knownSkill}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>

                    <section className="closing">
                        <p className="lead">{About.closing}</p>
                        <div className="btn-row" style={{ '--d': '150ms' }}>
                            <Link href="/contact" className="btn primary">Get in touch <span aria-hidden="true">→</span></Link>
                        </div>
                    </section>

                    <TitleBlock drawing="pit wall" sheet="01 / 05" reveal={false} />
                </div>
            </div>
        </>
    )
}
