import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Header() {

    const [headerStyle, setHeaderStyle] = useState(false);
    const [colorTheme, setColorTheme] = useState('dark');

    const getScrollHeight = () => {
        if (window.scrollY > 20) setHeaderStyle(true)
        else setHeaderStyle(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => getScrollHeight())
    }, [])

    useEffect(() => {
        document.querySelector('.header-nav-list').addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains('header-nav-item')) {
                let section = e.target.dataset.section;
                if (section) {
                    document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });
                }
            }
        });



        const sectionObserver = new IntersectionObserver((entries => {
            if (entries[0].isIntersecting) {
                const navList = document.querySelectorAll('.header-nav-item');
                const mobileMenuList = document.getElementById('model-list');
                const mobileMenuItem = mobileMenuList.children;
                const currentSection = entries[0].target.id;
                for (let i = 0; i < navList.length; i++) {
                    navList[i].classList.remove('active');
                    if (navList[i].dataset.section === currentSection) navList[i].classList.add('active');
                }
                if (mobileMenuItem) {
                    for (let i = 0; i < mobileMenuItem.length; i++) {
                        const childElement = mobileMenuItem[i].children;
                        childElement[0].classList.remove('active');
                        if (childElement[0].dataset.section === currentSection) {
                            childElement[0].classList.add('active');
                        }
                    }
                }
            }
        }), {
            root: null,
            threshold: 0.30
        });

        [document.querySelector('#home'), document.querySelector('#about'), document.querySelector('#resume'), document.querySelector('#project')]
            .forEach(section => {
                sectionObserver.observe(section);
            })

    }, [])


    useEffect(() => {

        let mobileModel = document.getElementById('model-list');
        let modelOverlay = document.getElementById('model-overlay');
        let modelContaier = document.getElementById('model-container');
        mobileModel.addEventListener('click', function (e) {
            e.preventDefault();
            if (e.path[1] && e.path[1].classList.contains('item')) {
                const section = e.path[1].dataset.section;
                modelContaier.classList.remove('active');
                modelOverlay.classList.remove('active');
                document.getElementById(`${section}`).scrollIntoView({ behavior: 'smooth' });
            }
        })

    })

    useEffect(() => {

        let menuIcon = document.getElementById('menu-icon');
        let closeIcon = document.getElementById('close-icon');
        if (menuIcon) {
            menuIcon.addEventListener('click', handleMobileModel)
        }
        if (closeIcon) {
            closeIcon.addEventListener('click', handleMobileModel)
        }

    }, [])

    const handleMobileModel = () => {
        let modelOverlay = document.getElementById('model-overlay');
        let modelContaier = document.getElementById('model-container');
        modelOverlay.classList.toggle('active');
        if (modelContaier) {
            modelContaier.classList.toggle('active');
        }
    }

    const handleColorTheme = (themeType) => {
        let mainContent = document.getElementById('main-body');
        mainContent.classList.remove(colorTheme);
        setColorTheme(themeType);
        mainContent.classList.add(themeType);
    }


    const renderThemeElement = () => (
        <Fragment>
            {
                colorTheme === 'dark' ?
                    <div className="header-nav-item" onClick={() => handleColorTheme('white')}>
                        <i class="fi fi-rr-sun header-nav-theme-icon"></i>
                    </div>
                    :
                    <div className="header-nav-item" onClick={() => handleColorTheme('dark')}>
                        <i class="fi fi-rr-moon header-nav-theme-icon"></i>
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
                                    <div className="header-logo-name">
                                        <Image src={'/assert/favicon_io/desktop_icon.png'} width={46} height={46} alt="SujithGunasekaran" />
                                    </div>
                                </div>
                                <div className="header-mobile-container">
                                    <div id="menu-icon" >
                                        <i class="fi fi-rr-menu-burger header-mobile-menu-icon"></i>
                                    </div>
                                    {renderThemeElement()}
                                </div>
                                <div className="header-nav-list">
                                    <div data-section="home" className="header-nav-item active">Home</div>
                                    <div data-section="about" className="header-nav-item">About</div>
                                    <div data-section="resume" className="header-nav-item">Experience</div>
                                    <div data-section="project" className="header-nav-item">Projects</div>
                                    {renderThemeElement()}
                                    {/* {
                                        colorTheme === 'dark' ?
                                            <div className="header-nav-item" onClick={() => handleColorTheme('white')}>
                                                <i class="fi fi-rr-sun header-nav-theme-icon"></i>
                                            </div>
                                            :
                                            <div className="header-nav-item" onClick={() => handleColorTheme('dark')}>
                                                <i class="fi fi-rr-moon header-nav-theme-icon"></i>
                                            </div>
                                    } */}
                                    {/* <div data-section="contact" className="header-nav-item">Contact Me</div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="model-overlay" className='overlay'>
                    <div id="model-container" className={`header-mobile-menu-container`}>
                        <div className='model-header'>
                            <div id="close-icon" className="header-mobile-container">
                                <i class="fi fi-rr-cross header-mobile-menu-icon close"></i>
                            </div>
                        </div>
                        <div id="model-list" className='model-list'>
                            <div className='model-item'>
                                <div data-section="home" className='item'>
                                    <i class="fi fi-rr-home"></i>
                                    <span className="name">Home</span>
                                </div>
                            </div>
                            <div className='model-item'>
                                <div data-section="about" className='item'>
                                    <i class="fi fi-rr-user"></i>
                                    <span className="name">About</span>
                                </div>
                            </div>
                            <div className='model-item'>
                                <div data-section="resume" className='item'>
                                    <i class="fi fi-rr-graduation-cap"></i>
                                    <span className="name">Experience</span>
                                </div>
                            </div>
                            <div className='model-item'>
                                <div data-section="project" className='item'>
                                    <i class="fi fi-rr-document"></i>
                                    <span className="name">Profile</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
