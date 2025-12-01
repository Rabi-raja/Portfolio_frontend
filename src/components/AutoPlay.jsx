import React from "react";
import Slider from "react-slick";
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import { motion } from "framer-motion";

import slider3 from '../assets/slider3.jpg'
import { Typewriter } from 'react-simple-typewriter';


function AutoPlay() {
  const settings = {

    dots: true,
    infinite: true,
    speed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    
    autoplaySpeed: 7000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container mt-5">
      <Slider {...settings}>
        

        <div className="relative ">
            <img className="w-full h-[60vh]  " src={slider1} alt="" />
              <div className="absolute inset-0 bg-black/20"></div>
          <div className=" z-60 flex  flex-col items-start gap-10 my-10 absolute top-[30%] left-[10%] md:top-[20%] md:left-[10%] sm:top-[10%] sm:left-[5%] ">
<h1 className=" font-bold text-cyan-400 md:w-fit text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
<Typewriter
  words={[
    'Building the Future, One Line at a Time'
  ]}
  loop={0}
  cursor
  cursorStyle="|"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={2000}
/>
</h1>
<motion.p
  animate={{ x: ["0%", "10%", "0%"] }} // horizontal wave
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="text-xl font-medium text-gray-300 sm:text-xl md:text-3xl lg:text-4xl sm:w-full"
>
  Focused minds, powerful code — shaping the digital world.
</motion.p>
            </div>
        </div>
       
        <div className="relative">
            <img className="w-full h-[60vh]" src={slider2} alt="" />
           <div className="absolute inset-0  bg-black/20"></div>
          <div className=" z-60 flex  flex-col items-start gap-10 my-10 absolute top-[30%] left-[10%] md:top-[20%] md:left-[10%] sm:top-[10%] sm:left-[5%]">
<h1 className="  font-bold text-cyan-400 md:w-fit text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
  <Typewriter
  words={[
    
    'Strategic Minds. Smart Solutions.',
  ]}
  loop={0}
  cursor
  cursorStyle="|"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={2000}
/>
</h1>
<motion.p
  animate={{ x: ["0%", "10%", "0%"] }} // horizontal wave
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="text-xl font-medium text-gray-300 sm:text-xl md:text-3xl  lg:text-4xl sm:w-full"
>
We turn complex challenges into seamless digital outcomes.
</motion.p>

            </div>
        </div>

        <div className="relative">
            <img className="w-full h-[60vh] " src={slider3} alt="" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className=" z-60 flex  flex-col items-start gap-10 my-10 absolute top-[30%] left-[10%] md:top-[20%] md:left-[10%] sm:top-[10%] sm:left-[5%]">
<h1 className=" font-bold text-cyan-400 md:w-fit sm:w-fit text-2xl sm:text-3xl md:text-4xl lg:text-5xl"><Typewriter
  words={[
    
    'Together, We Create What’s Next.'
  ]}
  loop={0}
  cursor
  cursorStyle="|"
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={2000}
/></h1>
<motion.p
  animate={{ x: ["0%", "10%", "0%"] }} // horizontal wave
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="text-xl font-medium text-gray-300 sm:text-xl md:text-3xl  lg:text-4xl sm:w-full"
>
Collaboration turns innovation into reality.
</motion.p>

            </div>
        </div>
      
      </Slider>
    </div>
  );
}

export default AutoPlay;
