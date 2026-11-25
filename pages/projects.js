import { useState } from 'react';
import Seo from '../Component/Seo';
import Lines from '../Component/Lines';
import { Dim, TitleBlock } from '../Component/Blueprint';
import { myInfo } from '../Information/myInfo';

const hasLink = (link) => link && link !== 'No';
const COLUMNS = 3;
const LAMP_X = [200, 600, 1000];

/* A quiet lintel with three pendant lamps. The glow brightens while a bay is open. */
function Roof({ lit }) {
    return (
        <svg className={`garage-roof ${lit ? 'lit' : ''}`} viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true">
            <defs>
                <radialGradient id="lamp-glow" cx="50%" cy="0%" r="100%">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
            </defs>
            <path className="lintel" d="M0 10 H1200" />
            {LAMP_X.map((x) => (
                <g key={x}>
                    <ellipse className="glow" cx={x} cy="40" rx="120" ry="56" fill="url(#lamp-glow)" />
                    <path className="pendant" d={`M${x} 10 V30 M${x - 16} 44 Q${x} 26 ${x + 16} 44 Z`} />
                </g>
            ))}
        </svg>
    )
}

export default function ProjectsPage() {
    const { Project } = myInfo;
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <Seo title="Projects" description="Side projects built on weekends: web apps, a lazy loading image component, React experiments and frontend challenges, with live demos and source code." />
            <div className="bp">
                <div className="wrap sheet">
                    <div className="page-head">
                        <span className="mono eyebrow">03 · garage</span>
                        <h1 className="h2"><Lines lines={['Things I', { em: 'built on weekends.' }]} /></h1>
                        <p className="lead" style={{ '--d': '350ms' }}>Six bays. Open a door to see what's inside.</p>
                    </div>

                    <section className="bp-section" style={{ paddingTop: 0 }}>
                        <Dim mark="A" label="garage · bays 01 to 06" />
                        <div className="garage">
                            <Roof lit={openIndex !== null} />
                            <div className="bays">
                                {
                                    Project.ProjectList.map((project, index) => {
                                        const live = hasLink(project.ProjectLink);
                                        const open = openIndex === index;
                                        const number = String(index + 1).padStart(2, '0');
                                        return (
                                            <div key={project.ProjectName}>
                                            <article className={`bay ${open ? 'open' : ''}`}>
                                                <div className="bay-room">
                                                    <header className="bay-room-head mono">
                                                        <span className="bay-room-id">
                                                            <svg className="wheel-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M12 3v6M12 15v6M3 12h6M15 12h6" /></svg>
                                                            bay {number}
                                                        </span>
                                                        <span className={`led ${live ? 'on' : ''}`}>{live ? 'on track' : 'in the garage'}</span>
                                                    </header>
                                                    <ul className="bay-parts mono" aria-label="Built with">
                                                        {project.ProjectLanguage.split(',').map((tech, techIndex) => <li key={tech} style={{ '--k': techIndex }}>{tech.trim()}</li>)}
                                                    </ul>
                                                    <div className="jobcard">
                                                        <h2 className="bay-title">{project.ProjectName}</h2>
                                                        <p className="bay-desc">{project.ProjectDescription}</p>
                                                    </div>
                                                    <footer className="bay-links mono">
                                                        {live && <a href={project.ProjectLink} target="_blank" rel="noopener noreferrer">live ↗</a>}
                                                        {hasLink(project.ProjectGitLink) && <a href={project.ProjectGitLink} target="_blank" rel="noopener noreferrer">code ↗</a>}
                                                    </footer>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="bay-door"
                                                    aria-expanded={open}
                                                    aria-label={`${open ? 'Close' : 'Open'} bay ${number}: ${project.ProjectName}`}
                                                    onClick={() => setOpenIndex(open ? null : index)}
                                                >
                                                    <span className="bay-no mono">bay {number}</span>
                                                    <span className="bay-door-name">{project.ProjectName}</span>
                                                    <span className="bay-hint mono">{open ? 'close' : 'open'}</span>
                                                    <i className="bay-handle" aria-hidden="true"></i>
                                                </button>
                                            </article>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="garage-floor" aria-hidden="true"></div>
                        </div>
                        <p className="bom-note mono">
                            <a href={Project.ProjectBtnLink} target="_blank" rel="noopener noreferrer">more projects on GitHub ↗</a>
                        </p>
                    </section>

                    <TitleBlock drawing="garage" sheet="03 / 05" reveal={false} />
                </div>
            </div>
        </>
    )
}
