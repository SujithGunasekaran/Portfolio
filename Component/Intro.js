import { myInfo } from '../Information/myInfo';
import Image from 'next/image';

const Intro = () => {

    const { Home } = myInfo;

    return (
        <div className="myinfo-letter-container">
            <div className='row' style={{ alignItems: 'center' }}>
                <div className='col-md-6'>
                    <h1 className="myinfo-letter-heading">Hi, I'm {Home.myName}</h1>
                    <div className="myinfo-letter-about">{Home.myInfo}</div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="myinfo-resume-btn-display">
                                <button className="myinfo-resume-btn">
                                    <a href={Home.myResumeBtn.myResumeLink} rel="noreference" target="_blank">{Home.myResumeBtn.myResumeName}</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <Image src={'/assert/coding.svg'} width={500} height={500} />
                </div>
            </div>

        </div>
    )

}

export default Intro;
