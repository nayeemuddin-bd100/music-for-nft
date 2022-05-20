/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import AllData from '../../shared/data/data';
import NftCard from '../NftCard/NftCard';

function DiscoverMarketPlace() {
    const [data, setData] = useState(AllData);
    const [bgColor, setBgColor] = useState('All');

    const allItem = () => {
        const finalData = AllData.filter((value) => value);
        setData(finalData);
        setBgColor('All');
    };

    const onlyRock = (categoryItem) => {
        const finalData = AllData.filter((value) => value.category == categoryItem);

        setData(finalData);
        setBgColor('Rock');
    };
    const onlyPop = (categoryItem) => {
        const finalData = AllData.filter((value) => value.category == categoryItem);

        setData(finalData);
        setBgColor('Pop');
    };
    const onlyJazz = (categoryItem) => {
        const finalData = AllData.filter((value) => value.category == categoryItem);
        setData(finalData);
        setBgColor('Jazz');
    };

    return (
        <>
            <div className="main-container my-3">
                <div className="flex flex-col justify-center items-center gap-y-5">
                    <p className=" text-4xl sm:text-5xl md:text-6xl font-medium text-center ">
                        Discover Music NFT
                    </p>
                    <div className="flex flex-row gap-x-5">
                        <button
                            className={`btn ${bgColor === 'All' ? 'bg-blue-500' : ''}`}
                            onClick={allItem}
                        >
                            All
                        </button>

                        <button
                            className={`btn ${bgColor === 'Rock' ? 'bg-blue-500' : ''}`}
                            onClick={() => onlyRock('Rock')}
                        >
                            Rock
                        </button>

                        <button
                            className={`btn ${bgColor === 'Pop' ? 'bg-blue-500' : ''}`}
                            onClick={() => onlyPop('Pop')}
                        >
                            Pop
                        </button>

                        <button
                            className={`btn ${bgColor === 'Jazz' ? 'bg-blue-500' : ''}`}
                            onClick={() => onlyJazz('Jazz')}
                        >
                            Jazz
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 ">
                    {data.map((value) => (
                        <NftCard
                            key={value.name}
                            name={value.name}
                            token={value.token}
                            solana={value.solana}
                            image={value.image}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DiscoverMarketPlace;
