import { useEffect, useState } from 'react';
import { myInfo } from '../Information/myInfo';
import Image from 'next/image';

export default function Header() {

    const { Header } = myInfo;
    const [headerStyle, setHeaderStyle] = useState(false);

    const getScrollHeight = () => {
        if (window.scrollY > 20) setHeaderStyle(true)
        else setHeaderStyle(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', () => getScrollHeight())
    })

    useEffect(() => {
        document.querySelector('.header-nav-list').addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.classList.contains('header-nav-item')) {
                let section = e.target.dataset.section;
                document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });
            }
        })

        const sectionObserver = new IntersectionObserver((entries => {
            if (entries[0].isIntersecting) {
                const navList = document.querySelectorAll('.header-nav-item');
                const currentSection = entries[0].target.id;
                for (let i = 0; i < navList.length; i++) {
                    navList[i].classList.remove('active');
                    if (navList[i].dataset.section === currentSection) navList[i].classList.add('active');
                }
            }
        }), {
            root: null,
            threshold: 0.30
        });

        [document.querySelector('#home'), document.querySelector('#about'), document.querySelector('#resume'), document.querySelector('#project'), document.querySelector('#contact')]
            .forEach(section => {
                sectionObserver.observe(section);
            })

    })

    return (
        <div>
            <div className={`header-main ${headerStyle ? 'header-background' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-container-display">
                                <div className="header-laptop-info">
                                    <div className="header-logo-name">
                                        <Image src={'/assert/favicon_io/desktop_icon.png'} width={46} height={46} />
                                    </div>
                                </div>
                                <div className="header-nav-list">
                                    <div data-section="home" className="header-nav-item active">Home</div>
                                    <div data-section="about" className="header-nav-item">About</div>
                                    <div data-section="resume" className="header-nav-item">Experience</div>
                                    <div data-section="project" className="header-nav-item">Projects</div>
                                    <div data-section="contact" className="header-nav-item">Contact Me</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
