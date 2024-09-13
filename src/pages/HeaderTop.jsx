import React from 'react';
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaLinkedin, FaTwitter, FaPinterestP, FaPhone } from 'react-icons/fa';

const HeaderTop = () => {
    return (
        <div className="bg-[#102C57] text-white py-2 lg:px-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center space-y-2 md:space-y-0">
                {/* Email and Location Section */}
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <li>
                        <a href="mailto:info@homeverse.com" className="flex items-center space-x-2">
                            <FiMail className="text-lg" />
                            <span>info@mondial-sampling.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-2">
                            <GoLocation className="text-sm" />
                            <address className="not-italic">Hambourg, Germany</address>
                        </a>
                    </li>
                </ul>

                {/* Social Media Icons Section */}
                <ul className="flex space-x-4">
                    <li>
                        <a href="https://www.linkedin.com/company/104098661" className="hover:text-teal-400">
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

                {/* Phone Number Section */}
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
