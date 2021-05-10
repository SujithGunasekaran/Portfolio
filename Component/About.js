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
                <div className="row" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-sine">
                    <div className="col-md-12">
                        <div className="about-info">{Home.myActivityInfoOne}</div>
                        <div className="about-info">{Home.myActivityInfoTwo}</div>
                        <div className="about-info">{Home.myActivityInfoThree}</div>
                        <div className="row" style={{ maxWidth: '300px' }}>
                            {
                                Home.myActivityTechInfo.map((techInfo, index) => (
                                    <div className="col-md-6" key={index}>
                                        <div className="about-tech">{techInfo.techName}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="row">
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
                </div> */}
            </div>
        </div>
    )
}

