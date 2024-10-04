import { React, useEffect, useRef, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Import icons for mobile menu toggle
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import Li from '../components/Li';
import routes from '../routes';
import useLanguage from '../locale/useLanguage';
import Lang from '../components/Lang';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const translate = useLanguage();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <header className="w-full shadow-sm z-10 bg-slate-300">
      <HeaderTop />
      <div className="bg-blue-500">
        <nav className="relative pl-4 pr-8 py-2 flex justify-between items-center bg-white">
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-between">
              <img src={logo} alt="Logo" className="w-32" />
              <div className="md:text-lg font-bold leading-none text-xl" translate='no'>
                <p> Mondial Sampling Gmbh</p>
                <p className='text-blue-950'> Germany </p>
              </div>
            </div>
          </Link>
          {/* Mobile burger menu */}
          <div className="lg:hidden">
            <button
              className="navbar-burger flex items-center text-gray-600 p-3"
              onClick={toggleMenu}
            >
              <svg
                className="block h-6 w-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>

          {/* Menu for larger screens */}
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            {routes.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                {/* Link for the route */}
                <Link className="text-black font-bold hover:text-gray-500" to={item.link}>
                  {translate(item.name)}
                </Link>
                {routes.length - 1 > index && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>)
                }
              </li>
            ))}
          </ul>
          <div className="hidden lg:inline-block lg:ml-auto mx-3">
            <Lang />
          </div>
          <div className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200">
            <Link to="/contact"> {translate('contact_us')}</Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" onClick={toggleMenu}></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <svg className="h-12" alt="logo" viewBox="0 0 10240 10240">
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886..."
                  />
                </svg>
              </a>
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                {routes.map((item, index) => (
                  <li key={index} className="mb-1">
                    <Link
                      className="block p-4 text-md font-bold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded"
                      to={item.link}
                    >
                      {translate(item.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <Link
                  className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                  to={'/contact'}
                >
                  {translate('contatc_us')}
                </Link>
                <Lang />
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>  &copy; {new Date().getFullYear() + " " + translate('copyright')} </span>
              </p>
            </div>
          </nav>
        </div >
      )
      }

    </header >
  );
}
