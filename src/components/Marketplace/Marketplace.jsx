/* eslint-disable react/button-has-type */
import React from 'react';
import MusicImage1 from '../../assets/images/marketplace-1.png';
import MusicImage2 from '../../assets/images/marketplace-2.png';
import MusicImage3 from '../../assets/images/marketplace-3.png';
import MusicImage4 from '../../assets/images/marketplace-4.png';

function Marketplace() {
    return (
        <div className="main-container py-5 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-row justify-between px-5">
                    <div>
                        <img
                            className="sm:-ml-5 w-36 md:w-full "
                            src={`${MusicImage1}`}
                            alt="MusicImage1"
                        />
                        <img
                            className="mt-20 w-36 md:w-full"
                            src={`${MusicImage2}`}
                            alt="MusicImage2"
                        />
                    </div>
                    <div className="mt-10">
                        <img
                            className="sm:-ml-5 w-36 md:w-full"
                            src={`${MusicImage3}`}
                            alt="MusicImage3"
                        />
                        <img
                            className="mt-20 w-36 md:w-full"
                            src={`${MusicImage4}`}
                            alt="MusicImage4"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center md:items-start gap-y-5 mt-5">
                    <p className="text-4xl text-center md:text-left lg:text-6xl font-normal">
                        Music NFT Marketplace
                    </p>
                    <p className="text-xs text-center md:text-left sm:text-sm mr-2 font-thin ">
                        Create your first music NFTs with NFT market for musicians. Create music and
                        music videos just under the $1, the platform works with BSC blockchain and
                        supports mp4. With AirNFTs, you are getting the control over your NFTs, no
                        middle man cutting your sales. Create, Buy, Sell and Earn with your music
                        NFTs.
                    </p>
                    <button className="btn w-1/2 md:w-full lg:w-2/3  ">
                        <p>Explore Marketplace</p>
                        <div className="ml-2">&gt;</div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Marketplace;
