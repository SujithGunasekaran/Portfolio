import Header from '../Component/Header';
import MyInfo from '../Component/MyInfo';
import Footer from '../Component/Footer';

export default function Home() {

    return (
        <div>
            <div id="main-body" className="main-info-css dark">
                <Header />
                <MyInfo />
                <Footer />
            </div>
        </div>
    )
}
