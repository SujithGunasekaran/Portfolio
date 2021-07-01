import { myInfo } from '../Information/myInfo';
import About from '../Component/About';
import Contact from '../Component/Contact';
import Resume from '../Component/Resume';
import Project from '../Component/Project';
import Intro from '../Component/Intro';

function MyInfo() {

    const { Home } = myInfo;

    return (
        <div className="myinfo-main">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="home">
                            <Intro />
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
