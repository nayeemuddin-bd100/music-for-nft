/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const facebookIcon = (
        <svg
            className=" w-5 h-5 fill-current text-white hover:text-blue-500 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
        >
            <path d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
        </svg>
    );
    const instagramIcon = (
        <svg
            className=" w-5 h-5 fill-current text-white hover:text-blue-500 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
        >
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
    );
    const githubIcon = (
        <svg
            className=" w-5 h-5 fill-current text-white hover:text-blue-500 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path d="M224 202.66A53.34 53.34 0 1 0 277.36 256 53.38 53.38 0 0 0 224 202.66Zm124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33ZM224 338a82 82 0 1 1 82-82 81.9 81.9 0 0 1-82 82Zm85.38-148.3a19.14 19.14 0 1 1 19.13-19.14 19.1 19.1 0 0 1-19.09 19.18ZM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48Zm-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132 1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0 25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88Z" />
        </svg>
    );

    return (
        <div className="main-container lg:px-3">
            <nav className=" py-2 px-4 lg:bg-transparent">
                <div className="flex flex-wrap justify-between items-center">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="flex flex-col text-xl text-bold"
                    >
                        <p className="font-semibold">Music</p>
                        <p className="">NFT Platform</p>
                    </button>
                    <div className="flex md:order-2">
                        {/* Social Icons */}
                        <div className="flex items-center mr-5 gap-3">
                            {facebookIcon}
                            {instagramIcon}
                            {githubIcon}
                        </div>
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="NavBarId"
                            type="button"
                            className="inline-flex items-center p-2 text-base  text-main-white rounded-lg lg:hidden hover:bg-orange-light focus:outline-none focus:ring-2 focus:ring-main-white"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6 sm:w-8 sm:h-8"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden w-full lg:block md:w-auto" id="NavBarId">
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 md:mt-0 md:text-xl  text-offWhite font-light text-base">
                            <li className="hover:text-reddishYellow">Marketplace</li>
                            <li className="hover:text-reddishYellow">About</li>
                            <li className="hover:text-reddishYellow">Resources</li>
                            <li className="hover:text-reddishYellow">Faq</li>
                        </ul>
                    </div>
                </div>
                {/* mobile */}
                <div className="w-full md:w-auto block lg:hidden">
                    <ul
                        className={`${
                            isOpen ? 'block' : 'hidden'
                        } flex flex-col items-center mt-4 text-base sm:text-lg text-main-white space-y-4`}
                    >
                        <li
                            className="mt-6"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            Marketplace
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            About
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            Resources
                        </li>
                        <li
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            Faq
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
