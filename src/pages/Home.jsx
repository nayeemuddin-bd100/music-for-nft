import React from 'react';
import Footer from '../shared/sharedcomponents/Footer';
import Navbar from '../shared/sharedcomponents/Navbar';
import Styles from '../styles/Home.module.css';

function Home() {
    return (
        <>
            <div className={` ${Styles.bgImage1}`}>
                <div className="backdrop-blur-xl bg-white/10   ">
                    <Navbar className="" />
                    <div className=" border-b main-container " />
                </div>
                <div className="py-96 ">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore tenetur
                        ullam laboriosam ipsum, consectetur animi facere cumque tempora cupiditate
                        quo iure voluptatum excepturi veniam totam incidunt dolore doloribus quidem
                        laudantium laborum ex cum aperiam. Inventore, perferendis recusandae? Eum
                        sed in possimus quis temporibus quaerat aliquam reiciendis blanditiis dolore
                        esse corrupti fuga autem nisi harum adipisci, ut quia nesciunt assumenda
                        doloremque ipsam! Amet eaque nam, deleniti unde iure est fugit natus
                        blanditiis quia ab esse, porro rerum odit earum neque! Possimus tempora ab
                        reiciendis blanditiis adipisci accusamus commodi explicabo, excepturi eos
                        perspiciatis neque nulla magnam. Saepe natus accusamus ut ullam nihil!
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
