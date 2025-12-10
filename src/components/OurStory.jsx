import React from 'react';
import { AiFillSafetyCertificate } from "react-icons/ai";

const OurStory = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12  rounded-3xl shadow-2xl">
      
      
      <h1 className="text-5xl font-extrabold text-center text-white tracking-wide mb-12">
        Who We Are
      </h1>

      <div className="flex items-start gap-8">
        
       
        <div className="p-6 bg-gradient-to-tr from-yellow-500 to-yellow-300 rounded-full shadow-xl flex items-center justify-center">
          <AiFillSafetyCertificate className="text-white text-6xl drop-shadow-xl" />
        </div>

        
        <p className="text-[1.20rem] text-gray-200 leading-relaxed font-sans">
          We craft modern digital experiences that merge creativity with technical precision. 
          Our focus is on building intuitive user interfaces, scalable backend systems,
          and full-stack MERN applications that deliver real value.

          <br /><br />

          <span className="font-semibold text-yellow-300">
            LORDS IT SERVICES (PRIVATE) LIMITED
          </span>{" "}
          is incorporated under the Companies Act, 2017 of Pakistan (CUIN: 0237347),
          established on 17th August 2023. Registered with the Securities and Exchange
          Commission of Pakistan (SECP), we provide fully compliant, industry-standard
          MERN-stack development services.

          <br /><br />

          Our philosophy is simple:  
          <span className="text-yellow-400 font-semibold">
            quality, innovation, and meaningful results.
          </span>  
          We collaborate closely with clients to build experiences that connect users,
          elevate brands, and solve real-world problems through technology.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
