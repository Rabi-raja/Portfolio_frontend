import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { TfiAlignJustify } from "react-icons/tfi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaAnglesRight } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <div className='flex justify-around items-center h-20'>
      <div>
        <img className='w-72 mt-10' src={logo} alt="Logo" />
      </div>

      {/* Desktop menu */}
      <div className='flex justify-center items-center gap-3 hidden md:block'>
        <ul className='flex justify-center items-center gap-5 text-[18px] text-white'>
          <Link to='/'>Home</Link>
          <Link to='/about-us'>About</Link>
          <Link to='/contact-us'>Contact</Link>
        </ul>
      </div>

      
      <div className='hidden lg:flex text-[18px] font-bold justify-center items-center gap-3 w-40 border-transparent rounded-full bg-gray-700 p-3 text-cyan-500'>
        <Link to='/hire-us' className='cursor-pointer text-white'>Hire Us</Link>
        <FaAnglesRight />
      </div>

      <div className='hidden lg:flex gap-4 items-center justify-center text-[18px] '>
        <span className=' text-2xl bg-gray-100 rounded-[50%] p-2 '><FaRegUser /></span>
        <Link to='/login-page' className='cursor-pointer text-gray-100'>Admin</Link>
      </div>
      <div className='text-white text-4xl flex items-center md:hidden'>
        {hamburger ? (
          <ImCross className='relative cursor-pointer' onClick={() => setHamburger(false)} />
        ) : (
          <TfiAlignJustify
            className='relative cursor-pointer transition-transform duration-500 hover:rotate-180'
            onClick={() => setHamburger(true)}
          />
        )}

        {hamburger && (
          <ul
            className={`
              fixed top-40 right-0 h-screen w-full bg-black text-white rounded-2xl p-6 z-80
              transform transition-transform duration-1000 ease-in-out
              ${hamburger ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <li className='p-3 rounded-2xl text-2xl'>
              <Link to='/' onClick={() => setHamburger(false)}>Home</Link>
            </li>
            <li className='p-3 rounded-2xl text-2xl'>
              <Link to='/about-us' onClick={() => setHamburger(false)}>About</Link>
            </li>
            <li className='p-3 rounded-2xl text-2xl'>
              <Link to='/contact-us' onClick={() => setHamburger(false)}>Contact</Link>
            </li>
           
            <li className='p-3 rounded-2xl text-2xl'>
              <Link to='/login-page' onClick={() => setHamburger(false)}>Admin Dashboard</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
