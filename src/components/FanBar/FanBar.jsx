import React from 'react';

function FanBar() {
    return (
        <div className="py-3 lg:mt-20  ">
            <div className=" border-b border-white/50  " />
            <div className="main-container flex gap-x-3 justify-around py-1">
                <p> 🧊 New way to reach the new fan</p>
                <p className=" hidden md:block "> 🧊 New way to reach the new fan</p>
            </div>
            <div className=" border-b border-white/50 " />
        </div>
    );
}

export default FanBar;
