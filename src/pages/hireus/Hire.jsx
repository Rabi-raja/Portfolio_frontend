import React from 'react'
import MovingParticles from '../../components/MovingParticles.jsx'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import { Link } from 'react-router-dom'
import WhyHire from '../../components/WhyHire.jsx'
import Price from '../../components/Price.jsx'
import Process from '../../components/Process.jsx'
import Chooseus from '../../components/Chooseus.jsx'
import Contact from '../../components/Contact.jsx'


const Hire = () => {


  return (
    <div className='relative'>
        <MovingParticles />
        <div className='absolute w-full top-5'>
          <div className='mb-7'>
<Header />
          </div>
            
<div className='flex flex-col bg-black sm:h-auto md:h-auto lg:h-[55vh] border-2' style = {{boxShadow: ' 0 0 40px rgba(6, 182, 212, 1)'}}>
  <h1 className='glow-text text-white text-[4rem] text-center m-5 mt-3  font-bold py-5'>HIRE US </h1>
  <p className='text-white text-center px-20 py-5 text-[1.25rem] ' style = {{filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.7)) drop-shadow(0 0 40px rgba(155, 48, 255, 1)) drop-shadow(0 0 60px rgba(255, 0, 180, 0.7))'}}>We are a creative and dedicated full-stack development team specializing in modern, high-performance web applications.
From front-end UI to back-end APIs, we build scalable, secure, and visually stunning digital experiences — powered by React, Node.js, Express, MongoDB, and Tailwind.</p>
<div className='flex flex-col lg:flex lg:flex-row justify-center items-center gap-15 m-5'>
<Link to='/contact-us' className=' text-white font-bold bg-gradient-to-r from-cyan-400 to-purple-700 p-4 text-[1.25rem] rounded-xl zoom-zoom' style = {{boxShadow: '0 0 20px rgba(0, 255, 255, 0.7), 0 0 40px rgba(155, 48, 255, 1), 0 0 60px rgba(255, 0, 180, 0.7)'}}>CONTACT US</Link>
<button className=' text-white font-bold bg-gradient-to-r from-cyan-400 to-purple-700 p-4 text-[1.25rem] rounded-xl zoom-zoom ' style = {{boxShadow: '0 0 40px rgba(0, 255, 255, 0.7), 0 0 60px rgba(155, 48, 255, 1), 0 0 90px rgba(255, 0, 180, 0.7)'}}>GET STARTED</button>
</div>
</div>
<WhyHire />

<div className='my-10'>
<Price />
</div>
<Process />
< Chooseus/>
<Contact />
<div className='my-7'>
<Footer />
</div>

        </div>
    </div>
  )
}

export default Hire