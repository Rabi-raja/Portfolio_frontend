import React from 'react'
import {Link} from 'react-router-dom'
import { FaChevronRight } from "react-icons/fa6";

const HireSection = () => {
  return (
    <div className='borderthree'>
      <h1 className='text-white text-[2.5rem] text-center'>Ready to bring your project <span className='text-cyan-600 font-bold'>to Life?</span></h1>
      <h2 className='text-cyan-600 text-[2.5rem] font-bold text-center'>Team our expert team today!</h2>
      <div className='flex items-center justify-center gap-5 borderthree w-60 p-3 text-2xl text-center'>
      <Link to='/hire-us' className='text-cyan-500 text-center'>HIRE US</Link>
      <span className='text-cyan-500'><FaChevronRight /></span>
      </div>
        </div>

   
  )
}

export default HireSection