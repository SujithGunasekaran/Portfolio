import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { myInfo } from '../Information/myInfo';

function Footer() {
    const { Footer } = myInfo;
    return (
        <div>
            <div className="footer-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-icon-display">
                                <GitHubIcon className="footer-icon" onClick={() => { window.open('https://github.com/SujithGunasekaran') }} />
                                <InstagramIcon className="footer-icon" onClick={() => { window.open('https://www.instagram.com/sujith_guna_/') }} />
                                <LinkedInIcon className="footer-icon" onClick={() => { window.open('https://www.linkedin.com/in/sujith-g-3b21a4140/') }} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-copyright">{Footer.FooterInfo}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
