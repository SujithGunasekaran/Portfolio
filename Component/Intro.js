import { myInfo } from '../Information/myInfo';
import Image from 'next/image';

const Intro = () => {

    const { Home } = myInfo;

    return (
        <section className="myinfo-letter-container">
            <div className='row' style={{ alignItems: 'center' }}>
                <div className='col-md-6'>
                    <h2 className="myinfo-letter-heading">
                        Hi, I'm <span className='blue'>Sujith</span> Gunasekaran
                    </h2>
                    <p className="myinfo-letter-about">{Home.myInfo}</p>
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
