import { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { myInfo } from '../Information/myInfo';

export default function Header({ setPageName }) {

    const { Header } = myInfo;
    const [headerStyle, setHeaderStyle] = useState(false);

    const getScrollHeight = () => {
        if (window.scrollY > 100) setHeaderStyle(true)
        else setHeaderStyle(false);
    }

    useEffect(() => {
        // let navOpen = document.getElementsByClassName("header-hamburger-logo");
        // for (let i = 0; i < navOpen.length; i++) {
        //     navOpen[i].addEventListener("click", () => {
        //         var panel = document.getElementById('navOpen');
        //         panel.classList.add('open')
        //     })
        // }
        // let navClose = document.getElementsByClassName("header-hamburger-logo-two")
        // for (let i = 0; i < navClose.length; i++) {
        //     navClose[i].addEventListener('click', () => {
        //         var panel = document.getElementById('navOpen');
        //         panel.classList.remove('open')
        //     })
        // }

        // let childNode = document.getElementsByClassName('header-list-name-style')
        // for (let i = 0; i < childNode.length; i++) {
        //     childNode[i].addEventListener('click', () => {
        //         var activeNodeList = document.getElementsByClassName("active");
        //         if (activeNodeList.length > 0) activeNodeList[1].className = activeNodeList[1].className.replace(' active', '');
        //         childNode[i].classList.add("active")
        //     })
        // }
        // let mobileHeaderName = document.getElementsByClassName('header-dropdown-li-name');
        // for (let i = 0; i < mobileHeaderName.length; i++) {
        //     mobileHeaderName[i].addEventListener('click', () => {
        //         let closeSideNav = document.getElementById('navOpen')
        //         closeSideNav.classList.remove('open')
        //         let activeNode = document.getElementsByClassName('active');
        //         if (activeNode.length > 0) activeNode[0].className = activeNode[0].className.replace(' active', '');
        //         mobileHeaderName[i].classList.add('active');
        //     })
        // }

        window.addEventListener('scroll', () => getScrollHeight())
    })

    return (
        <div>
            {/* <div className="header-list-dropdown-name" id="navOpen">
                <div className="header-hamburger-logo-two" />
                <div className="header-dropdown-li-display">
                    {
                        Header.componentsName.map((headerInfo, index) => (
                            <li key={index}>
                                <i className={`${headerInfo.fontAwesomeIcon} header-dropdown-li-icon`}></i>
                                <div className={index === 0 ? 'header-dropdown-li-name active' : 'header-dropdown-li-name'} onClick={() => setPageName(headerInfo.labelName)}>{headerInfo.displayName}</div>
                            </li>
                        ))
                    }
                </div>
            </div> */}
            <div className={`header-main ${headerStyle ? 'header-background' : ''}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-laptop-info">
                                <div className="header-logo-name">
                                    <Avatar style={{ backgroundColor: '#61dafb', color: 'black' }}>S</Avatar>
                                    <div className="header-my-name">{Header.logoName}</div>
                                </div>
                                {/* <div className="header-list-name">
                                    {
                                        Header.componentsName.map((componentInfo, index) => (
                                            <div key={index}>
                                                <div className={index === 0 ? 'header-list-name-style active' : 'header-list-name-style'} onClick={() => setPageName(componentInfo.labelName)}>{componentInfo.displayName}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="header-mobile-info">
                                    <div className="header-hamburger-logo" id="hamburger-1" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}