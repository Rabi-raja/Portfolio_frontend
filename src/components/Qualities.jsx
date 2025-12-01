import React from 'react'
import AboutUs from '../pages/Home/aboutUs/AboutUs'
import { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import qualities from '../assets/qualities.jpg'


const Qualities = ({quality}) => {
    const [progress, setProgress] = useState(10);

useEffect(() => {
  const controls = animate(10, 100, {
    duration: 2,
    onUpdate: latest => setProgress(latest),
  });

  return () => controls.stop();
}, []);

  return (
    
    <div className='flex flex-wrap justify-center mt-7  ' style= {{boxShadow : '0 0 40px rgba(6, 182, 212, 0.8)'}} >

    {quality?.map ((items)=>
    (
<div className='animate-spin-slow flex flex-col flex-wrap text-white  rounded-2xl bg-gray-800 h-[32vh] m-4 w-full md:w-[19vw] lg:w-[19vw] '  key={items.id} style= {{boxShadow : '0 0 40px rgba(6, 182, 212, 0.8)'}}>
    <div className="flex-1 flex items-center justify-center">
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
            <div className='absolute inset-0 rounded-full text-9xl  flex items-center justify-center text-cyan-400'>{items.icon}</div>
            </motion.div> 
     
     </div>
     
     <h2 className='text-2xl my-7 text-center'>{items.heading}</h2>
    <p className="text-cyan-400 text-xl font-medium text-center my-3">{items.content}</p>
     
        
</div>
     
      
    ))}

 
 
    </div>
  )
}


export default Qualities