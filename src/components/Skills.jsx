import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { easeInOut, motion } from "framer-motion";
import { animate } from "framer-motion";
import { useState, useEffect } from 'react';



const Skills = ({skills}) => {
    
   const [progress, setProgress] = useState(10);

useEffect(() => {
  const controls = animate(10, 100, {
    duration: 2,
    onUpdate: latest => setProgress(latest),
  });

  return () => controls.stop();
}, []);

  return (
    <div className='my-7' style = {{boxShadow: '0 0 40px rgba(8,145,178,1)'}}>
      <h1 className='text-white text-5xl font-bold text-center p-4 my-4'>Our Extensive List Of Skills</h1>
    
    <div className='flex flex-wrap justify-center my-10 '  >

    {skills?.map ((items)=>
    (
<div className='animate-spin-slow flex flex-col  flex-wrap scaling text-white  bg-gray-800   h-[30vh] m-4 w-[260px] sm:w-full md:w-[260px] lg:w-[260px] ' style = {{boxShadow: '0 0 40px rgba(8,145,178,1)'}} key={items.id}>
    <div className="flex-1 flex items-center justify-center ">
    <motion.div
            className="relative flex items-center justify-center w-16 h-16 rounded-full"
            animate={{
              boxShadow: [
                "0 0 40px #00ffff",
                "0 0 60px #00ffff",
                "0 0 40px #00ffff",
                "0 0 40px #FF1493",
                "0 0 60px #800080",
              ],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            
            <div className='absolute inset-0 rounded-full border-4 border-cyan-400 '></div>
            <div className='absolute inset-0 rounded-full text-[3rem]  flex items-center justify-center text-cyan-400'>{items.icon}</div>
            </motion.div> 
     
     </div>
     
     <h2 className='text-[1.5rem] my-7 text-center'>{items.skill}</h2>
    <p className="text-cyan-400 text-xl font-medium text-center my-3">{items.progress}</p>
     
        
</div>
     
      
    ))}

 
 
    </div>
    </div>
  )
}

export default Skills