import { myInfo } from '../Information/myInfo';
import About from '../Component/About';
import Contact from '../Component/Contact';
import Resume from '../Component/Resume';
import Project from '../Component/Project';

function MyInfo() {
    const { Home } = myInfo;
    return (
        <div className="myinfo-main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="myinfo-letter-container">
                            <div className="myinfo-letter-heading">{Home.myName}</div>
                            <div className="myinfo-line"></div>
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
                                <div className="col-md-4 mx-auto">
                                    <div className="myinfo-resume-btn-display">
                                        <button className="myinfo-resume-btn">
                                            <a href={Home.myResumeBtn.myResumeLink} target="_blank">{Home.myResumeBtn.myResumeName}</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <About />
                        <Resume />
                        <Project />
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyInfo