import { myInfo } from '../Information/myInfo';
import Image from 'next/image';

const Intro = () => {

    const { Home } = myInfo;

    return (
        <section className="myinfo-letter-container">
            <div className='row' style={{ alignItems: 'center' }}>
                <div className='col-md-6'>
                    <h1 className="myinfo-letter-heading">Hi, I'm {Home.myName}</h1>
                    <p className="myinfo-letter-about">{Home.myInfo}</p>
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
                    <Image
                        src={'/assert/coding.svg'}
                        alt='hero-image'
                        className='hero-image'
                        priority={true}
                        width={0}
                        height={0}
                        style={{ width: '100%', height: 'auto' }}
                    />
                </div>
            </div>

        </section>
    )

}

export default Intro;
