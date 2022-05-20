import React from 'react';

function EngageFan() {
    return (
        <div className="main-container py-5 mt-0 sm:mt-10">
            <div className=" text-center md:text-left text-4xl sm:text-5xl md:text-6xl font-medium">
                <h1>Engage your Fans with community </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-y-5 md:gap-x-5 text-sm font-thin mt-10">
                <div>
                    <h1 className="text-3xl md:text-5xl">01/</h1>
                    <p className="mt-5">
                        Artists themselves become a platform. NFTs allow artistes, especially
                        upcoming ones, to create an ecosystem that allows genuine fans to buy into
                        their market.
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl">02/</h1>
                    <p className="mt-5">
                        NFT gives all the power to creators. Anyone upcoming artiste can do their
                        stuff on-chain, making them more independent and freeing them from
                        unfavorable deals from record labels.{' '}
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl md:text-5xl">03/</h1>
                    <p className="mt-5">
                        A positive NFT-fueled change in the music market can upstage crypto adoption
                        at large.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EngageFan;
