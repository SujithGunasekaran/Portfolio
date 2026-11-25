import Image from 'next/image';
import Seo from '../Component/Seo';
import Lines from '../Component/Lines';
import Doodle from '../Component/Doodle';
import Journey from '../Component/Journey';
import TyreMarks from '../Component/TyreMarks';
import { myInfo } from '../Information/myInfo';

const { Education, Experience } = myInfo;

// Oldest first, so the track reads as a journey from school to today.
const educationStops = Education.slice().reverse().map((school) => ({
    key: `edu-${school.institute}`,
    kind: 'edu',
    mark: '',
    date: `${school.year} · ${school.type.toLowerCase()}`,
    title: school.course,
    org: school.institute
}));

const roleStops = Experience
    .flatMap((company) => company.roles.map((role) => ({ company, role })))
    .reverse()
    .map(({ company, role }, index) => ({
        key: `role-${company.company}-${role.period}`,
        kind: 'role',
        mark: `T${index + 1}`,
        date: role.period,
        title: role.title,
        org: company.company,
        logo: company.logo,
        bullets: role.highlights
    }));

const STOPS = [...educationStops, ...roleStops];

function StopBody({ stop, index }) {
    return (
        <>
            <span className="mono">{stop.date}</span>
            <h2 className="stop-title">{stop.title}</h2>
            <span className="stop-co mono">
                {stop.logo && <Image src={`/assets/${stop.logo}`} alt="" width={16} height={16} />}
                {stop.org}
            </span>
            <TyreMarks variant={index} />
            {
                stop.bullets?.length > 0 &&
                <ul className="stop-bullets">
                    {stop.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
            }
            {stop.note && <p className="mono stop-note">{stop.note}</p>}
        </>
    )
}

export default function ExperiencePage() {
    return (
        <>
            <Seo title="Experience" description="Explore more than seven years of frontend engineering experience across insurance platforms, B2B SaaS and B2C e-commerce at Walmart Global Tech." />
            <div className="wrap">
                <div className="page-head">
                    <span className="mono eyebrow reveal">02 · race history</span>
                    <h1 className="h2"><Lines lines={['Every lap', { em: 'a little faster.' }]} /></h1>
                    <p className="lead reveal" style={{ '--d': '350ms' }}>
                        From a first bug fix to e-commerce at Walmart Global Tech. Scroll to drive the lap.
                    </p>
                    <Doodle name="flag" className="float" style={{ width: 76, right: '5%', top: '14%' }} />
                </div>
                <Journey stops={STOPS} renderStop={(stop, index) => <StopBody stop={stop} index={index} />} />
            </div>
        </>
    )
}
