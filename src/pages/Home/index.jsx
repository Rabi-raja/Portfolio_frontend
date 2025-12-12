import React from 'react'
import Header from '../../components/Header.jsx'
import FuturisticLogo from "../../components/FuturisticLogo.jsx";
import Hero from '../../components/Hero.jsx';
import AutoPlay from '../../components/AutoPlay.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import Skills from '../../components/Skills.jsx';
import { RiReactjsLine } from "react-icons/ri";
import { progress } from 'framer-motion';
import { LiaNode } from "react-icons/lia";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Testimonials from '../../components/Testimonials.jsx'
import HappyClients from '../../components/HappyClients.jsx'
import Contact from '../../components/Contact.jsx';
import Footer from '../../components/Footer.jsx';
import HireSection from '../../components/HireSection.jsx';
// import HireHome from '../../components/HireHome.jsx';
import { PiFileHtmlFill } from "react-icons/pi";
import { PiFileCssFill } from "react-icons/pi";
import Prefer from '../../components/Prefer.jsx';
import {Link} from 'react-router-dom'
import Whatsapp from '../../components/Whatsapp.jsx';
import AccordionFunction from '../../components/AccordionFunction.jsx';

const Home = () => {

  const skillArray = [
    {id: 1, icon: <RiReactjsLine />, skill: "React.js", progress: "Highly proficient" },
    {id: 2, icon: <SiTailwindcss />, skill: "Tailwind", progress: "Strong expertise "  },
    {id: 3, icon: <TbBrandJavascript />, skill: "JavaScript", progress: "Advanced level"  },
    {id: 4, icon: <PiFileHtmlFill />, skill: "HTML", progress: "Solid knowledge"  },
     {id: 5, icon: <PiFileCssFill />, skill: "CSS", progress: "Experienced user"  },
    {id: 6, icon: <LiaNode />, skill: "Node.js", progress: "Reliable mastery"  },
    {id: 7, icon: <SiExpress />, skill: "Express", progress: "Skilled developer"  },
    {id: 8, icon: <SiMongodb />, skill: "MongoDB", progress: "Practical experience"  },
    
    

  ];
  const testimon = [
    {id: 1, review: "We got our company website developed by them, and honestly, it turned out better than what we had in mind. Clean design, fast performance, and zero bugs even after launch.", desig: ""},
    {id: 2, review: "Working with this team felt effortless. They understood our business needs right away and turned ideas into a fully functional site ahead of schedule.", name: "", desig: ""},
    {id: 3, review: "We needed a custom web app for our events, and they handled everything — backend, frontend, API, even deployment. The best part? It just works flawlessly.", name: "", desig: ""},
    {id: 4, review: "They built our e-commerce site from scratch and it runs smoother than any template we tried before. Very professional and detail-oriented.", name: "", desig: ""},
    {id: 5, review: "Communication was clear from day one. We explained our concept once and they nailed both the look and logic without endless revisions.", name: "", desig: ""},
    {id: 6, review: "Our previous website had constant issues, but after the rebuild, we’ve had zero downtime and faster loading times. Totally worth it.", name: "", desig: ""},
    {id: 7, review: "What impressed us most was how they managed both the database structure and the front-end animations perfectly. True full-stack skills.", name: "", desig: ""},
    {id: 8, review: "We hired them for a short project, ended up extending the contract twice. Reliable, fast, and creative with solutions.", name: "", desig: ""},
    {id: 9, review: "Even after delivering the site, they helped with updates and explained everything clearly. Support like this is hard to find.", name: "", desig: ""},
    {id: 1, review: "We had no technical background, but they guided us step by step. Our website now looks modern and loads in seconds.", name: "", desig: ""},
    
  ]



  return (
   <div className='bg-gray-900 w-full '>
<Header />
<AutoPlay />
{/* <Hero /> */}
   <div className="h-auto w-full flex-wrap  flex items-center justify-around " style = {{boxShadow: '0 0 40px rgba(8,145,178,1)'}}>
    <div className='flex w-[600px] m-0 p-0' >
      <FuturisticLogo text="LORDS IT SERVICES PTIVATE LIMITED" />
</div>
<div className='text-white h-auto  w-[600px] sm:h-auto md:h-auto lg:h-[50vh] '>
  <h1 className='text-4xl font-bold py-6 rainbowText sm:text-xl text-center lg:text-left md:text-4xl lg:text-5xl'>ABOUT US</h1>
  <h2 className='text-3xl font-medium rainbowText py-4 text-center lg:text-left'>The People Behind the Code</h2>

  <p className='text-xl py-6 text-center lg:text-left'>We’re a team of passionate MERN-Stack Developers turning ideas into sleek, scalable digital experiences. At LORDS IT SERVICES, innovation meets precision — one line of code at a time.</p>
  <Link
  to='/about-us'
  className='flex items-start gap-2 w-[250px] sm:w-[300px] md:w-[15vw] lg:w-[18vw] h-20 py-1 text-2xl rounded-2xl my-7 neonButton mx-auto'
>
  Discover us <IoMdArrowRoundForward />
</Link>

</div>
    </div>
   <AccordionFunction />
    <div>
    <Skills skills = {skillArray} />
    </div>
    {/* <Testimonials testimon={testimon}/> */}
    <HappyClients />
    
    {/* <HireHome /> */}
    <Prefer />
    <Contact/>
    <Whatsapp />
    <Footer />
   </div>
  )
}

export default Home