import React from 'react';
import Banner2 from '../../assets/images/banner-2.png';

function BannerTwo() {
    return (
        <div className="main-container">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="col-span-3 flex flex-col justify-center items-start text-center md:text-left gap-y-3 lg:-mt-14 ">
                    <p className="text-5xl md:text-6xl lg:text-7xl font-normal ">
                        How do Music NFTs work?
                    </p>
                    <p className="text-xs font-light md:mt-10 md:mr-5">
                        NFTs are unique assets stored and tradable on a blockchain. They are,
                        immutable, scarce and publicly verifiable. In the music world, artistes get
                        to sell limited digital content to their fans who pay via crypto. You can
                        now produce any music content that cannot be counterfeited.
                    </p>
                </div>
                <div className="hidden px-5 sm:flex justify-center  sm:px-0 mt-5 md:mt-0 lg:mt-40 col-span-2">
                    <img className="w-80 sm:w-full " src={`${Banner2}`} alt="Banner two" />
                </div>
            </div>
        </div>
    );
}

export default BannerTwo;
