import Header from '../Component/Header';
import MyInfo from '../Component/MyInfo';
import Footer from '../Component/Footer';

export default function Home() {

    return (
        <div>
            <div className="main-info-css">
                <Header />
                <MyInfo />
                <Footer />
            </div>
        </div>
    )
}
