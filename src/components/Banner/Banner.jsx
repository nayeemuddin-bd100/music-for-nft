/* eslint-disable react/button-has-type */
import React from 'react';
import MainBanner from '../../assets/images/main-banner.png';
import SolonaLogo from '../../assets/images/solana-logo.png';

function Banner() {
    return (
        <div className="">
            <div className="px-4 sm:px-0 grid grid-cols-1 md:grid-cols-8">
                <div className="   md:col-span-5 flex flex-col justify-center gap-y-3">
                    <p className="text-3xl md:text-4xl lg:text-5xl ">Music for NFT creators.</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl -mt-2">
                        Digital Music for fans.
                    </p>
                    <p className=" text-sm font-thin mt-3">
                        Music NFTs will continue to revolutionize the way that artists and fans
                        create community together as we enter the upcoming year — undoubtedly
                        changing the trajectory of countless budding music careers.{' '}
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <div className="flex flex-col">
                            <p className="text-xs font-thin">Powered by</p>
                            <img className="w-24 h-3" src={SolonaLogo} alt="SOLONA" />
                        </div>
                        <button className="ml-9 flex justify-center items-center border border-white py-2 px-5 rounded-2xl font-thin hover:bg-blue-700 transition duration-500 text-xs md:text-base ">
                            <div>Discover More</div>
                            <div className="ml-2">&gt;</div>{' '}
                        </button>
                    </div>
                </div>
                <div className="   md:col-span-3 lg:-mt-12 flex justify-center ">
                    <img className=" w-60 sm:w-80 md:w-full" src={MainBanner} alt="mainBanner" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
