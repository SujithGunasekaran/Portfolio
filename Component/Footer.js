import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
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
                                <FaGithub className="footer-icon" onClick={() => { window.open('https://github.com/SujithGunasekaran') }} />
                                <FaInstagram className="footer-icon" onClick={() => { window.open('https://www.instagram.com/sujith_guna_/') }} />
                                <FaLinkedin className="footer-icon" onClick={() => { window.open('https://www.linkedin.com/in/sujith-g-3b21a4140/') }} />
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
