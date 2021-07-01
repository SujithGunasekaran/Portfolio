import { myInfo } from '../Information/myInfo';

const Intro = () => {

    const { Home } = myInfo;

    return (
        <div className="myinfo-letter-container">
            <div className="myinfo-letter-intro">Hi, my name is</div>
            <h2 className="myinfo-letter-heading">{Home.myName}</h2>
            <div className="myinfo-letter-about">{Home.myInfo}</div>
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
    )

}

export default Intro;
