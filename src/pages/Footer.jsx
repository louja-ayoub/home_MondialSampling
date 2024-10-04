import React from 'react';
import logo from '../img/logo.png';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import useLanguage from '../locale/useLanguage';

const Footer = () => {
    const translate = useLanguage();
    return (<footer className="max-w-screen-xl px-8 mx-auto mt-10">
        <div className="w-full border-t border-b border-gray-200 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {/* Logo and Navigation */}
                <div className="flex flex-col items-start">
                    <ul className="space-y-2">
                        <NavLink name="Mondial Sampling" url="/about" />
                        <NavLink name="contact" url="/contact" />
                        <NavLink name="products" url="/products" />
                        <NavLink name="sampling" url="/sampling" />
                        <NavLink name="home" url="/" />
                        <NavLink name="privacy_policies" url="/privacyPolicy" />
                    </ul>
                    <a href="#" className="my-4">
                        <img src={logo} className="w-16" alt
                            ="Nefa Logo" />
                    </a>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col">
                    <h5 className="text-lg font-extrabold mb-4"> {translate('contact')} </h5>
                    <p className="text-sm mb-4">
                        Mondial Sampling GmbH
                        <br />
                        An der Alster 6, D-20099 Hamburg, Germany
                        <br />
                        +49 1525 850 52 64
                    </p>
                    <a href="mailto:info@mondial-sampling.com" className="text-teal-500 hover:underline">
                        info@mondial-sampling.com
                    </a>
                </div>

                {/* Contact Us Button */}
                <div className="flex items-center lg:order-2">
                    <a href="/contact"
                        className="text-white bg-[#45cde9] hover:bg-[#47d8f6] focus:ring-1 
                  rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2 sm:mr-2 lg:mr-0 
                 dark:bg-[#47d8f6] dark:hover:bg-[#47d8f6] focus:outline-none flex items-center">
                        <span className='text-xl'> {translate('contact_us')}</span>
                        <GoArrowUpRight className='ml-1 text-2xl' />
                    </a>
                </div>
            </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear() + " " + translate('copyright')}
        </div>
    </footer>
    );
}

export default Footer;

const NavLink = ({ name, url }) => {
    const translate = useLanguage();
    return (
        <li translate='no'>
            <Link
                to={url}
                className="text-gray-600 hover:text-teal-500 focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
                {translate(name)}
            </Link>
        </li>
    );
}
