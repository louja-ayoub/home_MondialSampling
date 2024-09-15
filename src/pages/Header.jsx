import { React, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Import icons for mobile menu toggle
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import Li from '../components/Li';
import routes from '../routes';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full shadow-sm z-10 bg-slate-300">
      <HeaderTop />
      <nav className="bg-white border-gray-200 py-2 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-between">
              <img src={logo} alt="Logo" className="w-36" />
              <h1 className="text-2xl font-bold" translate='false'> Mondial Sampling Gmbh</h1>
            </div>
          </Link>

          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            {menuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>

          {/* Navigation menu */}
          <div className={`lg:flex lg:w-auto lg:order-1 w-full ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {routes.map((item, index) => (
                  <Li key={index} title={item.name.toUpperCase()} to={item.link} />
                ))}
              </ul>
              <div className="flex items-center sm:ml-0 mt-2 lg:ml-16 lg:mt-0">
                <a href="/contact"
                  className="text-white bg-[#45cde9] hover:bg-[#47d8f6] focus:ring-1 
                        rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2 sm:mr-2 lg:mr-0 
                      dark:bg-[#47d8f6] dark:hover:bg-[#47d8f6] focus:outline-none flex items-center">
                  <span className='text-xl'> Contact us </span>
                  <GoArrowUpRight className='ml-1 text-2xl' />
                </a>
              </div>
            </div>
          </div>


        </div>
      </nav>
    </header>
  );
}
