import React from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../shared/sharedcomponents/Footer';
import Navbar from '../shared/sharedcomponents/Navbar';
import Styles from '../styles/Home.module.css';

function Home() {
    return (
        <>
            <div className={` ${Styles.bgImage1}`}>
                <div className="backdrop-blur-xl bg-white/10   ">
                    <Navbar />
                    <div className=" border-b main-container " />
                </div>
                <div className="main-container">
                    <Banner />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
