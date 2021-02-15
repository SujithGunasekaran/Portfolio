import { myInfo } from '../Information/myInfo';
export default function About() {
    const { Home } = myInfo;
    return (
        <div>
            <div className="about-container">
                <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                    <div className="col-md-12">
                        <div className="about-heading">{Home.myActivityHeading}</div>
                    </div>
                </div>
                <div className="row">
                    {
                        Home.myActivity.map((aboutInfo, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="about-info-container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                                    <div className="about-info-heading">{aboutInfo.ActivityHeading}</div>
                                    <div className="about-info-line" />
                                    <div className="about-info-icon-display">
                                        {
                                            aboutInfo.ActivityLogos.map((logoInfo, index) => (
                                                <i className={`${logoInfo.fontAwesomeIcon} about-info-icon`} key={index} style={{ color: logoInfo.color }}></i>
                                            ))
                                        }
                                    </div>
                                    {
                                        aboutInfo.ActivityPoints.map((pointInfo, index) => (
                                            <div className="about-intrest-info" key={index}>⚡ {pointInfo.Point}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* <div className="row">
                    <div className="col-md-6">
                        <div className="about-info-container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <div className="about-info-heading">Web Develop</div>
                            <div className="about-info-heading-line"></div>
                            <div className="about-intrest-info">I started Learning with HTML,CSS,Javascript later on, I started to learn framekworks in which i loved Reactjs Library more. After learning Reactjs, I have developed some projects using React. Still I am learning New concept in react and also Exploring new Technologies.</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-info-container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <div className="about-info-heading">Photography</div>
                            <div className="about-info-heading-line"></div>
                            <div className="about-intrest-info">I love to take photo of Nature. Usually i will focus on Nature and take a shot, Each time i take shot i will look into the nature beauty. It makes my mind feels better and happy.</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-info-container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <div className="about-info-heading">Reading Books</div>
                            <div className="about-info-heading-line"></div>
                            <div className="about-intrest-info">I will make seperate time for reading books in my life. Apart from my work, I mostly read books based on Economy while reading these type of books i can get knowledge about how to save money, how to start business, and many more. My most liked author 'Warren Buffet'.</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-info-container" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                            <div className="about-info-heading">Bike Riding</div>
                            <div className="about-info-heading-line"></div>
                            <div className="about-intrest-info">During my holidays time i will take a long ride with my bike, It makes me happy and It will be more enjoyable moment in my life.</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

