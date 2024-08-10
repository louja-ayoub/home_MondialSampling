import { React, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import logo from "../img/logo.png"
import { Link } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import Li from '../components/Li';

export default function Header() {

  const titles = ['COMPANY',
    'SAMPLING',
    'RECYCLING',
    'PRODUCTS',
    'PROJECTS',

  ]
  return (
    <header className="w-full shadow-sm z-10 bg-slate-300">
      <HeaderTop />
      <nav className="bg-white border-gray-200 py-2 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <div className="flex items-center justify-between">
              <img src={logo} alt="Logo" className="w-36" />
              <h1 className="text-2xl font-bold"> Mondial Sampling </h1>
            </div>
          </Link>
          <div className="flex items-center lg:order-2">
            <a href="#"
              className="text-white bg-[#45cde9] hover:bg-[#47d8f6] focus:ring-1 
                  rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2 sm:mr-2 lg:mr-0 
                 dark:bg-[#47d8f6] dark:hover:bg-[#47d8f6] focus:outline-none flex items-center">
              <span className='text-xl'> Contact us </span>
              <GoArrowUpRight className='ml-1 text-2xl' />
            </a>
          </div>
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {titles.map((item, index) => (
                <Li key={index} title={item} />
              ))}
            </ul>
          </div>

        </div>
      </nav>
    </header >

  )
}
