import Link from 'next/link';
import Seo from '../Component/Seo';
import Lines from '../Component/Lines';
import ShiftDial from '../Component/ShiftDial';
import { Sectors } from '../Component/Layout';
import { CountUp } from '../Component/Effects';

const STATS = [
    { prefix: '+', to: 43, suffix: '%', label: 'external developer adoption after GA' },
    { prefix: '', to: 96, suffix: '', label: 'core web vitals score, up from 72' },
    { prefix: '', to: 7, suffix: '+', label: 'years shipping' }
];

export default function HomePage() {
    return (
        <>
            <Seo home />
            <div className="wrap hero3">
                <div className="hero3-copy">
                    <span className="mono eyebrow reveal">frontend engineer · lap 07</span>

                    <h1 className="h1">
                        <Lines lines={['Sujith', { em: 'Gunasekaran' }]} />
                    </h1>

                    <div className="hero-desc reveal" style={{ '--d': '450ms' }}>
                        <p>With more than seven years of experience across insurance platforms and B2B SaaS, I now work at Walmart Global Tech, part of a B2C e-commerce team operating at a much bigger scale, where even small frontend improvements can impact millions of customers.</p>
                        <p className="mono">react.js · next.js · typescript · node.js</p>
                        <div className="btn-row">
                            <Link href="/projects" className="btn primary">Work <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                </div>

                <div className="hero3-art reveal" style={{ '--d': '300ms' }}>
                    <ShiftDial />
                </div>
            </div>

            <div className="wrap">
                <Sectors />
                <div className="stats">
                    {
                        STATS.map((stat, index) => (
                            <div className="stat reveal" key={stat.label} style={{ '--d': `${index * 120}ms` }}>
                                <b><CountUp prefix={stat.prefix} to={stat.to} suffix={stat.suffix} /></b>
                                <span className="mono">{stat.label}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
