import { Fragment, useEffect, useState } from 'react';
import NavItems from './Navtems';
import { MdOutlineWbSunny, MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { navList } from '../Information/myInfo';


export default function Header() {

    const [headerStyle, setHeaderStyle] = useState(false);
    const [colorTheme, setColorTheme] = useState('dark');
    const [activeSection, setActiveSection] = useState('home');
    const [toggleHeader, setToggleHeader] = useState(false);

    const getScrollHeight = () => {
        if (window.scrollY > 20) {
            setHeaderStyle(true);
        }
        else {
            setHeaderStyle(false);
        }
    }

    const handleNavClick = (section) => {
        setActiveSection(section);
        document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });
        setToggleHeader(false);
    }

    const toggleHeaderAction = () => {
        setToggleHeader((prevState) => !prevState);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => getScrollHeight());
    }, []);

    const handleColorTheme = (themeType) => {
        let mainContent = document.getElementById('main-body');
        mainContent.classList.remove(colorTheme);
        setColorTheme(themeType);
        mainContent.classList.add(themeType);
    }

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries => {
            if (entries[0].isIntersecting) {
                const navList = document.querySelectorAll('.header-nav-item');
                const mobileMenuList = document.getElementById('model-list');
                const mobileMenuItem = mobileMenuList.children;
                const currentSection = entries[0].target.id;
                for (let i = 0; i < navList.length; i++) {
                    const section = navList[i].dataset.section;
                    if (section === currentSection) {
                        setActiveSection(section);
                    }
                }
                if (mobileMenuItem) {
                    for (let i = 0; i < mobileMenuItem.length; i++) {
                        const childElement = mobileMenuItem[i].children;
                        const section = childElement[0].dataset.section;
                        if (section === currentSection) {
                            setActiveSection(section);
                        }
                    }
                }
            }
        }), {
            threshold: 0.3
        });

        [document.querySelector('#home'), document.querySelector('#about'), document.querySelector('#experience'), document.querySelector('#project'), document.querySelector('#blog')]
            .forEach(section => {
                sectionObserver.observe(section);
            })

    }, []);

    const renderThemeElement = () => (
        <Fragment>
            {
                colorTheme === 'dark' ?
                    <div className="header-nav-item" onClick={() => handleColorTheme('white')}>
                        <MdOutlineWbSunny className='header-nav-theme-icon' />
                    </div>
                    :
                    <div className="header-nav-item" onClick={() => handleColorTheme('dark')}>
                        <FiMoon className='header-nav-theme-icon' />
                    </div>
            }
        </Fragment>
    )


    return (
        <div>
            <div className={`header-main ${headerStyle ? 'header-background' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-container-display">
                                <div className="header-laptop-info">
                                    <div className="header-my-name">
                                        <div className='name_large'>Sujith Gunasekaran</div>
                                        <div className='name_small'>Sujith G</div>
                                    </div>
                                </div>
                                <div className="header-mobile-container">
                                    <div id="menu-icon" onClick={toggleHeaderAction}>
                                        <MdOutlineMenu className='header-mobile-menu-icon' />
                                    </div>
                                    {renderThemeElement()}
                                </div>
                                <div className="header-nav-list">
                                    {
                                        navList.map((nav) => (
                                            <NavItems
                                                key={nav.id}
                                                sectionName={nav.name}
                                                displayName={nav.displayName}
                                                activeSection={activeSection}
                                                handleNavClick={handleNavClick}
                                            />
                                        ))
                                    }
                                    {renderThemeElement()}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="model-overlay" className='overlay'>
                    <div id="model-container" className={`header-mobile-menu-container ${toggleHeader ? 'active' : ''}`}>
                        <div className='model-header'>
                            <div
                                id="close-icon"
                                className="header-mobile-container"
                                onClick={toggleHeaderAction}
                            >
                                <MdOutlineClose className='header-mobile-menu-icon close' />
                            </div>
                        </div>
                        <div id="model-list" className='model-list'>
                            <div className='model-item'>
                                <div
                                    onClick={() => handleNavClick('home')}
                                    data-section="home"
                                    className={`item ${activeSection === 'home' ? 'active' : ''}`}
                                >
                                    <span className="name">Home</span>
                                </div>
                            </div>
                            <div className='model-item'>
                                <div
                                    onClick={() => handleNavClick('about')}
                                    data-section="about"
                                    className={`item ${activeSection === 'about' ? 'active' : ''}`}
                                >
                                    <span className="name">About</span>
                                </div>
                            </div>
                            <div className='model-item'>
                                <div
                                    onClick={() => handleNavClick('experience')}
                                    data-section="experience"
                                    className={`item ${activeSection === 'experience' ? 'active' : ''}`}
                                >
                                    <span className="name">Experience</span>
                                </div>
                            </div>
                            <div className='model-item'>
                                <div
                                    onClick={() => handleNavClick('project')}
                                    data-section="project"
                                    className={`item ${activeSection === 'project' ? 'active' : ''}`}
                                >
                                    <span className="name">Projects</span>
                                </div>
                            </div>
                            <div className='model-item'>
                                <div
                                    onClick={() => handleNavClick('blog')}
                                    data-section="blog"
                                    className={`item ${activeSection === 'blog' ? 'active' : ''}`}
                                >
                                    <span className="name">Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
