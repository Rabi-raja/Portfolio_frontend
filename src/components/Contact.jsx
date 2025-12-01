import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";


const Contact = () => {
  return (
    <div className=' flex flex-col justify-center items-center text-white h-[40vh] m-7  text-center text-3xl font-bold  ' >
        <h1 className=' text-3xl mt-5 sm:text-3xl md:text-4xl lg:text-5xl'>Interested in working together?</h1>
        <div className='flex items-center justify-center gap-5 m-10  sm:w-full md:w-[40vw] lg:w-[20vw] neonButton  '>
        <Link to = '/contact-us'>Let's Talk </Link>
        <span><IoMdArrowRoundForward /></span>
        </div>
    </div>
  )
}

export default Contact