import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { PiTimerDuotone } from "react-icons/pi";
import { MdOutlineHighQuality } from "react-icons/md";
import {Link} from 'react-router-dom'

const HireHome = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 my-10 p-10 bg-gray-800' style = {{boxShadow: '0 0 40px rgba(8,145,178,1)'}}>
        <h1 className='text-cyan-500 text-[2.5rem] text-center font-bold'>Ready to Build Something Amazing?</h1>
        <p className='text-white text-[1.5rem] text-center'>Partner with LORDS IT SERVICES to bring your vision to life with <span className='text-cyan-500 text-[2rem] font-bold'>Expert Developers</span> and cutting-edge solutions.</p>
        <div className='flex flex-col justify-center items-center gap-8 md:flex md:flex-col lg:flex lg:flex-row'>
<div className='flex flex-col justify-between items-center gap-5 w-[20vw] text-center'>
<span className='text-cyan-500 text-[3rem]'><FaRegUser /></span>
<h2 className='text-[1.5rem] text-white font-bold'>Expert Team</h2>
<p className='text-white text-[1.25rem] '>Skilled, experienced & passionate professional.</p>
</div>
<div className='flex flex-col justify-between items-center gap-5  w-[20vw] text-center'>
<span className='text-cyan-500 text-[3rem]'><PiTimerDuotone /></span>
<h2 className='text-[1.5rem] text-white font-bold'>On-Time Delivery</h2>
<p className='text-white text-[1.25rem] '>We respect your deadlines & commitments.</p>
</div>
<div className='flex flex-col justify-between items-center gap-5  w-[20vw] text-center'>
<span className='text-cyan-500 text-[3rem]'><MdOutlineHighQuality /></span>
<h2 className='text-[1.5rem] text-white font-bold' >Quality Work</h2>
<p className='text-white text-[1.25rem] '>Reliable, tested  and maintainable code.</p>
</div>
        </div>
        <Link to='/hire-us'className='neonButton p-4 text-[1.5rem] text-white rounded-2xl font-bold my-5  '>Hire Our Experts</Link>
    </div>
  )
}

export default HireHome