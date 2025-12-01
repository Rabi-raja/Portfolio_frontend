import React from 'react'
import MovingParticles from '../../../components/MovingParticles.jsx'

import Header from '../../../components/Header.jsx'
import OurStory from '../../../components/OurStory.jsx'
import { IoBulbOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import Qualities from '../../../components/Qualities.jsx'
import { MdPublishedWithChanges } from "react-icons/md";
import RotatingCubeCanvas from '../../../components/Cube.jsx';
import Process from '../../../components/Process.jsx';
import HappyClients from '../../../components/HappyClients.jsx';
import Footer from '../../../components/Footer.jsx';
import Contact from '../../../components/Contact.jsx';
import Prefer from '../../../components/Prefer.jsx';
import Certificate from '../../../components/Certificate.jsx';


const AboutUs = () => {

  const quality=[
    {id: 1, icon: <IoBulbOutline />, heading: "Innovative", content: "Breaking limits with fresh ideas."  },
    {id: 2, icon:<FaRegHandshake />, heading: "Collaboration", content: "Together, we achieve more."  },
    {id: 3, icon: <RiShieldCheckLine />, heading: "Integrity", content: "Turning ideas into artful code."  },
    {id: 4, icon: <FaRegUser />, heading: "Client Centric", content: "Putting clients first."  },
    {id: 5, icon: <FaArrowTrendUp />, heading: "Growth Mindset", content: "Always learning, always evolving."  },
    {id: 6, icon: <MdPublishedWithChanges />, heading: "Adaptive", content: "Always ready, always agile."  },
  
  
  ]
  return (
    <div className='bg-gray-900'>
<div>
<Header />
</div>
  <div className="flex flex-col lg:flex-row justify-around items-center h-auto lg:h-[60vh] mt-5 px-5 bg-gray-800" style={{boxShadow: '0px 0px 40px rgba(0, 255, 255, 1)'}}>
    
  <div className='flex flex-col justify-between items-center flex-wrap gap-12'>
   <div> 
<h1 className='text-white text-[3rem] text-center font-extrabold glow-text'>Crafting the Next Wave of Digital Excellence </h1>
<p className='text-white text-[1.5rem] text-center mt-12'>Driven by passion, guided by innovation, committed to excellence.</p>
</div>

</div>
<div className='' style={{display: 'inline-block', filter: 'drop-shadow(0px 0px 40px rgba(0, 255, 255, 1))'}}>
  <RotatingCubeCanvas />
  </div>
</div>
<OurStory />

<Qualities quality={quality} />
<div className='my-5'>
  <Certificate />
</div>
<div className='my-5'>
  <Process />
</div>

<div className='my-7'>
<HappyClients />
<Prefer />
<Contact />

<Footer />
</div>
</div>

    
  )
}

export default AboutUs