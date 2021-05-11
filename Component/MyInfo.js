import { myInfo } from '../Information/myInfo';
import About from '../Component/About';
import Contact from '../Component/Contact';
import Resume from '../Component/Resume';
import Project from '../Component/Project';

function MyInfo() {

    const { Home } = myInfo;

    return (
        <div className="myinfo-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="myinfo-letter-container">
                            <div className="myinfo-letter-intro">Hi, my name is</div>
                            <h2 className="myinfo-letter-heading">{Home.myName}</h2>
                            <div className="myinfo-letter-about">{Home.myInfo}</div>
                            <div className="myinfo-font-icon-display">
                                {
                                    Home.mySocialIcon.map((myIcon, index) => (
                                        <a href={myIcon.socailLink} target="_blank" rel="noreference">
                                            <i className={`${myIcon.fontAwesomeIcon} myinfo-font-icon`} style={{ backgroundColor: myIcon.fontbackgroundColor }} key={index}></i>
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="myinfo-resume-btn-display">
                                        <button className="myinfo-resume-btn">
                                            <a href={Home.myResumeBtn.myResumeLink} rel="noreference" target="_blank">{Home.myResumeBtn.myResumeName}</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="about">
                            <About />
                        </div>
                        <div id="resume">
                            <Resume />
                        </div>
                        <div id="project">
                            <Project />
                        </div>
                        <div id="contact">
                            <Contact />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyInfo
