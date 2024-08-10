import React from 'react';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaLinkedin, FaTwitter, FaPinterestP, FaPhone } from 'react-icons/fa';

const HeaderTop = () => {
    return (
        <div className="bg-[#102C57] text-white py-2">
            <div className="container flex justify-around items-center ">
                <ul className="flex space-x-4">
                    <li>
                        <a href="mailto:info@homeverse.com" className="flex items-center space-x-2">
                            <FiMail className="text-lg" />
                            <span>info@mondial-sampling.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2">
                            <GoLocation className="text-sm" />
                            <address className="not-italic"> Hambourg, Germany </address>
                        </a>
                    </li>
                </ul>
                <ul className="flex space-x-4 justify-end items-center">
                    <li>
                        <a href="#" className="hover:text-teal-400">
                            <FaLinkedin className="text-lg" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-teal-400">
                            <FaTwitter className="text-lg" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-teal-400">
                            <FaPinterestP className="text-lg" />
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" className="hover:text-teal-400 flex items-center gap-2">
                            <FaPhone className="text-lg" />
                            <span>+49 1525 850 52 64</span>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default HeaderTop;
