import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
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
                                <a
                                    href='https://github.com/SujithGunasekaran'
                                    target="_blank"
                                    rel="noreference"
                                    aria-label="github link"
                                >
                                    <FaGithub className="footer-icon" />
                                </a>
                                <a
                                    href='https://medium.com/@sujithg1999'
                                    target="_blank"
                                    rel="noreference"
                                    aria-label="medium link"
                                >
                                    <FaMedium className="footer-icon" />
                                </a>
                                <a
                                    href='https://www.linkedin.com/in/sujith-g-3b21a4140/'
                                    target="_blank"
                                    rel="noreference"
                                    aria-label="medium link"
                                >
                                    <FaLinkedin className="footer-icon" />
                                </a>
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
