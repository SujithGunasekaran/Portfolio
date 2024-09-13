import About from '../Component/About';
import Experience from './Experience';
import Project from '../Component/Project';
import Blog from '../Component/Blog';
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
                        <section id="about">
                            <About />
                        </section>
                        <section id="experience">
                            <Experience />
                        </section>
                        <section id="project">
                            <Project />
                        </section>
                        <section id="blog">
                            <Blog />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MyInfo
