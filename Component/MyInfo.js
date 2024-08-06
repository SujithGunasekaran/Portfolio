import About from '../Component/About';
import Experience from './Experience';
import Project from '../Component/Project';
import Intro from '../Component/Intro';

function MyInfo() {

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
                        <div id="experience">
                            <Experience />
                        </div>
                        <div id="project">
                            <Project />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyInfo
