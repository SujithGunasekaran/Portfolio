import { myInfo } from '../Information/myInfo';
export default function About() {
    const { Home } = myInfo;
    return (
        <div>
            <div className="about-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-hero-container">
                            <div className="about-heading">{Home.myActivityHeading}</div>
                            <div className="about-heading-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-info">{Home.myActivityInfoOne}</div>
                        <div className="about-info">{Home.myActivityInfoTwo}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

