import React from 'react'
import { MdLayers } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { BiLink } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";

const WhyHire = () => {
  return (
    <div>
        
    <div className='flex flex-col justify-center items-center lg:flex lg:flex-row gap-7 my-7'>
<div className='w-full md:w-[50vw] lg:w-[25vw] border-2 border-cyan-500 h-auto  text-white flex flex-col m-5  p-5'  style = {{boxShadow: ' 0 0 40px rgba(6, 182, 212, 1)'}}>
<div className='flex items-center gap-4 text-[1rem] my-4 '>

<span className='text-blue-500 text-[2rem]'><MdLayers /></span>
    <span className='text-xl'>Full Stack Development(React, Node.js, Express, MongoDB).</span>
    </div>
    
    <div className='flex items-center gap-4 my-4'>
        <span className='text-pink-400 text-[2rem]'><FaPaintBrush /> </span>
<span className='text-xl'>UI/UX + Tailwind CSS design.</span>
    </div>
    <div className='flex items-center gap-4 my-4'>
         <span className='text-purple-500 text-[2rem]'><BiLink /></span>
        <span className='text-xl'>API development & Integration.</span>
       
    </div>
    <div className='flex items-center gap-4 my-4'>
        <span className='text-gray-500 text-[2rem]'><FaDatabase /></span>
         <span className='text-xl'>Database design + Optimization.</span>
    </div>
   <div className='flex items-center gap-4 my-4'>
    <span className='text-teal-600 text-[2rem]'><FaShippingFast/></span>
    <span className='text-xl'>Fast Delivery.</span>
   </div>
   
</div>
<div>
<div className=' flex flex-col w-full md:w-[50vw] lg:w-[40vw] text-white border-2 border-cyan-500 h-[50vh]'  style = {{boxShadow: ' 0 0 40px rgba(6, 182, 212, 1)'}}>

<h1 className='glow-text text-3xl  p-5 font-bold'>Why Hire Us</h1>
<p className='text-[1.10rem] p-5'>You should hire us because we combine technical expertise with a user-focused approach to deliver complete, efficient solutions.</p>
<p className='text-[1.10rem] p-5'> Our team ensures high-quality development, seamless integration, and optimized performance, all delivered on time to help your business succeed.</p>
</div>
</div>
    </div>
    </div>
  )
}

export default WhyHire