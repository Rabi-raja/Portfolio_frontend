import React from 'react'
import Wave from 'react-wavify'
import logo from '../assets/logo.png'
import { IoMdArrowRoundForward } from "react-icons/io";

const Footer = () => (
  <div className="relative bg-gray-900 text-white pt-10 pb-10 ">

    {/* Wave Background */}
    <div className="absolute inset-x-0 bottom-0 w-full h-[45vh] overflow-hidden">
      <Wave
        fill="#0891b2"
        paused={false}
        style={{ width: '100%', height: '100%' }}
        options={{
          height: 5,
          amplitude: 40,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>

    {/* Main Content */}
    <div className="relative z-10 container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-10 md:gap-0">

      {/* Logo */}
      <div className="flex-shrink-0">
        <img className="w-48 md:w-64" src={logo} alt="LORDS IT SERVICES" />
      </div>

      {/* Get in Touch */}
      <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-bold">Get in touch</h1>
          <IoMdArrowRoundForward className="text-purple-700 text-4xl" />
        </div>

        <div className="flex flex-col sm:flex-row gap-8 text-lg font-medium">
          <div>
            <p>EMAIL ME:</p>
            <p className="underline cursor-pointer">lordsitservices@gmail.com</p>
          </div>
          <div>
            <p>CALL ME:</p>
            <p className="underline cursor-pointer">+92 331 5594357</p>
          </div>
        </div>
      </div>
    </div>

   
    <div className="relative z-10 container mx-auto px-6 md:px-12 mt-12">
      <div className="border-t border-gray-500 opacity-60"></div>
    </div>

    
    <div className="relative z-10 container mx-auto px-6 md:px-12 mt-6 flex flex-col lg:flex-row items-center justify-between gap-6">

      <ul className="hidden lg:flex flex-row gap-8 text-white text-base font-medium">
        <li className="cursor-pointer hover:text-purple-900 transition">Home</li>
        <li className="cursor-pointer hover:text-purple-900 transition">About</li>
        <li className="cursor-pointer hover:text-purple-900 transition">Blog</li>
        <li className="cursor-pointer hover:text-purple-900 transition">Portfolio</li>
        <li className="cursor-pointer hover:text-purple-900 transition">Pages</li>
        <li className="cursor-pointer hover:text-purple-900 transition">Contact</li>
      </ul>

      
      <p className="text-center text-gray-300 text-sm lg:text-base">
        &copy; {new Date().getFullYear()} LORDS IT SERVICES (PRIVATE) LIMITED. All rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
