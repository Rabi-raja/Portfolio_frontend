import React from 'react'
import { Link } from 'react-router-dom'

const Prefer = () => {
  return (
    <div className='flex flex-col'  style = {{boxShadow: '0 40px 40px rgba(8,145,178,1)'}}>
<h1 className='text-white text-[3rem] my-10 text-center shadow-[0 0 30px rgba()]' >Why People Prefer Us</h1>
    
    <div className='flex flex-col justify-center items-center gap-7 my-10   lg:flex lg:flex-row' >
        
        <div className='w-auto md:w-full lg:w-[28vw] bg-gray-800 text-white p-5 rounded-2xl flex flex-col items-start flex-wrap shadow-[0_0_30px_rgba(14,116,144,0.8)] rotation'>
<h1 className='text-white text-[1.75rem] py-3'>Technical Mastery & Innovation:</h1>
<ul className='list-disc list-inside'>
    <li className='text-[1rem] text-white p-1'>Expertise in React, Next.js, and modern frameworks.</li>
    <li className='text-[1rem] text-white p-1'>Scalable and maintainable code architecture.</li>
    <li className='text-[1rem] text-white p-1'>Performance-optimized, clean coding standards.</li>
    <li className='text-[1rem] text-white p-1'>Adherence to best industry practices.</li>
</ul>
        </div>

         <div className='w-auto md:w-full lg:w-[28vw] bg-gray-800 text-white p-5 rounded-2xl flex flex-col items-start flex-wrap shadow-[0_0_40px_rgba(14,116,144,0.8)] rotation'>
<h1 className='text-white text-[1.75rem] py-3'>Transparent Collaboration & Support:</h1>
<ul className='list-disc list-inside'>
    <li className='text-[1rem] text-white p-1'>Clear, proactive communication at every stage.</li>
    <li className='text-[1rem] text-white p-1'>Real-time progress tracking and iterative feedback.</li>
    <li className='text-[1rem] text-white p-1'>24/7 WhatsApp support for immediate assistance.</li>
    <li className='text-[1rem] text-white p-1'>Dedicated project management for seamless delivery.</li>
    <li className='text-[1rem] text-white p-1'>Transparent timelines and milestone updates.</li>
</ul>
        </div>
<div className='w-auto md:w-full lg:w-[28vw] bg-gray-800 text-white p-5 rounded-2xl flex flex-col items-start flex-wrap shadow-[0_0_30px_rgba(14,116,144,0.8)] rotation'>
<h1 className='text-white text-[1.75rem] py-3'>Transparent Collaboration & Support:</h1>
<h1 className='text-white text-[1.5rem] py-3'>Bespoke Solutions & Client Success:</h1>
<ul className='list-disc list-inside'>
    <li className='text-[1rem] text-white p-1'>Custom-built solutions tailored to your unique needs.</li>
    <li className='text-[1rem] text-white p-1'>Strategic, innovative problem-solving approach.</li>
    <li className='text-[1rem] text-white p-1'>Intuitive, user-centric design principles.</li>
    <li className='text-[1rem] text-white p-1'>Agile workflows ensuring flexibility and speed.</li>
    <li className='text-[1rem] text-white p-1'>Commitment to long-term partnership and growth.</li>
     <li className='text-[1rem] text-white p-1'>Ongoing support beyond project completion.</li>
    
</ul>
        </div>
        
        </div>
        <Link
  to='/hire-us'
  className='neonButton w-[250px] sm:w-[300px] md:w-[15vw] lg:w-[18vw]
             h-20 mx-auto px-6 text-[1.5rem] text-white rounded-2xl
             font-bold my-5 flex justify-center items-center text-center'
>
  Hire Our Experts
</Link>

        <div>

        </div>

    </div>
  )
}

export default Prefer