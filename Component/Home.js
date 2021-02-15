import { useState } from 'react';
import Header from '../Component/Header';
import MyInfo from '../Component/MyInfo';
import Footer from '../Component/Footer';

export default function Home() {

    const [pageName, setPageName] = useState('About');

    return (
        <div>
            <div className="main-info-css">
                <Header
                    setPageName={setPageName}
                />
                <MyInfo />
                <Footer />
            </div>
        </div>
    )
}