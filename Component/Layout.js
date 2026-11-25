import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV, Socials } from '../Information/myInfo';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import Year from './Year';
import { Cursor, ScrollProgress, useReveal } from './Effects';

const THEME_STORAGE_KEY = 'theme';
const MAIN_NAV = NAV.filter((nav) => nav.href !== '/');

export function Sectors() {
    return (
        <div className="sectors" aria-hidden="true">
            <span></span><span></span><span></span>
        </div>
    )
}

export default function Layout({ children }) {

    const router = useRouter();
    const [theme, setTheme] = useState('light');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setTheme(document.documentElement.dataset.theme || 'light');
    }, []);

    useEffect(() => {
        const closeMenu = () => setMenuOpen(false);
        router.events.on('routeChangeStart', closeMenu);
        return () => router.events.off('routeChangeStart', closeMenu);
    }, [router.events]);

    useEffect(() => {
        document.body.classList.toggle('menu-open', menuOpen);
        return () => document.body.classList.remove('menu-open');
    }, [menuOpen]);

    const toggleTheme = (event) => {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';
        const apply = () => {
            setTheme(nextTheme);
            document.documentElement.dataset.theme = nextTheme;
            try {
                localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
            } catch (e) { }
        };

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!document.startViewTransition || reduceMotion) {
            apply();
            return;
        }

        // Day and night swap as a circle of light growing out of the switch.
        const rect = event.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
        const transition = document.startViewTransition(() => flushSync(apply));
        transition.ready.then(() => {
            document.documentElement.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 800, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' }
            );
        });
    }

    useReveal(router.asPath);

    // /writing/some-post still belongs to the writing section
    const section = router.pathname === '/' ? '/' : `/${router.pathname.split('/')[1]}`;
    const currentIndex = NAV.findIndex((nav) => nav.href === section);
    const currentNav = currentIndex >= 0 ? NAV[currentIndex] : null;
    const nextNav = currentIndex >= 0 ? NAV[(currentIndex + 1) % NAV.length] : null;

    return (
        <div className="shell">
            <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
                <filter id="motion-blur" x="-10%" y="-5%" width="120%" height="110%">
                    <feGaussianBlur id="motion-blur-x" stdDeviation="0 0" />
                </filter>
            </svg>
            <div key={`wipe-${router.asPath}`} className="wipe" aria-hidden="true">
                {[0, 1, 2, 3, 4, 5].map((bar) => <span key={bar} className="wipe-bar" style={{ '--i': bar }}></span>)}
                {currentNav && <span className="wipe-label">{currentNav.index} · {currentNav.lap}</span>}
            </div>
            <Cursor />
            <header className="header">
                <div className="wrap">
                    <Link href="/" className="brand" aria-label="Sujith Gunasekaran, home" title="Sujith Gunasekaran">
                        <Logo />
                    </Link>
                    <button
                        type="button"
                        className="menu-btn mono"
                        aria-expanded={menuOpen}
                        aria-controls="site-nav"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? 'close' : 'menu'}
                    </button>
                    <nav id="site-nav" className={`nav mono ${menuOpen ? 'open' : ''}`} aria-label="Main">
                        {
                            MAIN_NAV.map((nav) => (
                                <Link
                                    key={nav.href}
                                    href={nav.href}
                                    className={`nav-link ${section === nav.href ? 'active' : ''}`}
                                    aria-current={section === nav.href ? 'page' : undefined}
                                >
                                    <span>{nav.index}</span>{nav.label}
                                </Link>
                            ))
                        }
                        <span className="theme-wrap">
                            <ThemeToggle theme={theme} onToggle={toggleTheme} />
                            <span className="theme-label">{theme === 'dark' ? 'night' : 'day'}</span>
                        </span>
                    </nav>
                </div>
                <ScrollProgress />
            </header>

            <main key={router.asPath} className="page">
                {children}
            </main>

            <footer className="footer">
                <div className="wrap">
                    <Sectors />
                    {
                        nextNav &&
                        <Link href={nextNav.href} className="next-lap">
                            <span>
                                <span className="mono eyebrow">next lap · {nextNav.index} {nextNav.lap}</span>
                                <strong>{nextNav.label}</strong>
                            </span>
                            <span className="arrow" aria-hidden="true">→</span>
                        </Link>
                    }
                    <div className="footer-row mono">
                        <span>© <Year /> Sujith Gunasekaran</span>
                        <span className="footer-links">
                            {
                                Socials.map((social) => (
                                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                                        {social.label.toLowerCase()}
                                    </a>
                                ))
                            }
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
