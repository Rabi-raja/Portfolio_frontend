import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { SiAffinitydesigner } from "react-icons/si";
import { SiBackendless } from "react-icons/si";
import { BiTestTube } from "react-icons/bi";
import { HiRocketLaunch } from "react-icons/hi2";

const Process = () => {
    
  return (
    <div className='flex flex-col justify-center items-center  'style= {{boxShadow : '0 0 40px rgba(6, 182, 212, 0.8)'}} >
        <h1 className='text-white text-[2.75rem] text-center m-5  font-bold'>Our Process (From Vision to Reality)</h1>
<div className='flex justify-between items-center gap-2 m-5 flex-wrap '>
<div className='flex flex-col items-center '>
    <span className='text-7xl p-4 text-cyan-400 icons'  ><FaLightbulb /></span>
        <p className='text-white text-3xl'>Discovery</p>
        </div>
        
        <span className='text-cyan-500 text-7xl font-extrabold'><IoIosArrowRoundForward /></span>
        <div className='flex flex-col items-center'>
            <span className='text-7xl p-4 text-pink-500 icons'><SiAffinitydesigner /></span>
        <p className='text-white text-3xl'>Design</p>
        </div>
        <span className='text-cyan-500 text-7xl font-extrabold'><IoIosArrowRoundForward /></span>
         <div className='flex flex-col items-center'>
              <span className='text-7xl p-4 text-purple-500 icons '><SiBackendless /></span>
        <p className='text-white text-3xl'>Backend</p>
         </div>
       
        <span className='text-cyan-500 text-7xl font-extrabold'><IoIosArrowRoundForward /></span>
         <div className='flex flex-col items-center'>
     <span className='text-7xl p-4 text-pink-600 icons'><BiTestTube /></span>
        <p className='text-white text-3xl'>Testing</p>
         </div>
    
        <span className='text-cyan-500 text-7xl font-extrabold'><IoIosArrowRoundForward /></span>
          <div className='flex flex-col items-center'>
              <span className='text-7xl p-4 text-cyan-500 icons '><HiRocketLaunch /></span>
        <p className='text-white text-3xl'>Launch</p>
          </div>
        
        


        

</div>
</div>
    
  )
}

export default Process