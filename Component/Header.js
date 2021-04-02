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
        window.addEventListener('scroll', () => getScrollHeight())
    })

    return (
        <div>
            <div className={`header-main ${headerStyle ? 'header-background' : ''}`}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-laptop-info">
                                <div className="header-logo-name">
                                    <Avatar style={{ backgroundColor: '#61dafb', color: 'black' }}>S</Avatar>
                                    <div className="header-my-name">{Header.logoName}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}