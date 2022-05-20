/* eslint-disable react/button-has-type */
import React from 'react';
import SideBar from '../../assets/images/sidebar.png';
import SolanaLogo2 from '../../assets/images/solana-logo2.png';

function NftCard({ name, solana, token, image }) {
    return (
        <div className="">
            <div className="w-52 ml-6 z-0">
                <img src={image} alt="" />
                <div className="flex flex-col gap-y-3">
                    <p className="text-lg font-medium mt-3">{name}</p>
                    <div className="flex flex-row justify-start ">
                        <div className="flex flex-row gap-x-2 items-center">
                            <img className="w-5 h-4" src={SolanaLogo2} alt="" />
                            <p className="text-sm">{solana}</p>
                        </div>
                        <p className="text-sm ml-5"> {token} Tokens</p>
                    </div>
                    <div className="flex flex-row justify-start gap-x-5 ">
                        <button className="btn px-3 text-xs"> Play Now</button>
                        <button className="btn px-3 text-black font-bold bg-gradient-to-r from-[#06DBAC] to-[#BD00FF] text-xs">
                            Buy NFT
                        </button>
                    </div>
                </div>
            </div>
            <img className="z-50 -mt-[320px] w-[267px] h-[337px] " src={SideBar} alt="" />
        </div>
    );
}

export default NftCard;
