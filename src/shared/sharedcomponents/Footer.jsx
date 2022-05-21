/* eslint-disable react/button-has-type */
import React from 'react';

function Footer() {
    return (
        <div className="main-container">
            <div className="grid grid-cols-1 md:grid-cols-5 justify-center md:justify-between py-5 mt-3 text-white/50 ">
                <div className="col-span-3 flex flex-col md:justify-start gap-y-3">
                    <p className="text-white text-3xl text-center md:text-left ">
                        Shape the NFT Music
                    </p>
                    <div className="flex flex-row justify-center md:justify-start divide-x-2 divide-gray-700 text-sm  gap-x-7">
                        <button className="hover:text-blue-500">Facebook</button>
                        <button className="pl-8 hover:text-blue-500">Twittter</button>
                        <button className="pl-8 hover:text-blue-500">Medium</button>
                    </div>
                    <div className="flex flex-row justify-center md:justify-start gap-x-5">
                        <small>Privacy Policy</small>
                        <small>Terms and Conditions</small>
                    </div>
                </div>
                <div className="col-span-2 flex items-end justify-center md:justify-end ">
                    <small>Copyright © 2022 Nayeem</small>
                </div>
            </div>
        </div>
    );
}

export default Footer;
