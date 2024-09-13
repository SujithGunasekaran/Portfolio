import { myInfo } from '../Information/myInfo';
export default function About() {
    const { Home } = myInfo;
    return (
        <div>
            <div className="about-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="about-hero-container">
                            <h2 className="about-heading">{Home.myActivityHeading}</h2>
                            <div className="about-heading-line"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="about-info">{Home.myActivityInfoOne}</p>
                        <p className="about-info">{Home.myActivityInfoTwo}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

