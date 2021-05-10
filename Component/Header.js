import { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { myInfo } from '../Information/myInfo';

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
                                        <Avatar style={{ backgroundColor: 'var(--dark-first)', border: '2px solid var(--primary-blue)', color: 'var(--primary-blue)' }}>S</Avatar>
                                        {/* <div className="header-my-name">{Header.logoName}</div> */}
                                    </div>
                                </div>
                                <div className="header-nav-list">
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
