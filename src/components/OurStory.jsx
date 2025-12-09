import React from 'react';
import { AiFillSafetyCertificate } from "react-icons/ai";

const OurStory = () => {
  return (
    <div className="max-w-4xl mx-auto p-8  rounded-2xl shadow-lg text-white">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Who We Are</h1>
      
      <div className="flex items-start gap-6">
        <AiFillSafetyCertificate className="text-yellow-500 text-7xl drop-shadow-lg mt-1" />
        <p className="text-[1rem] leading-relaxed font-sans">
          We specialize in creating digital solutions that combine creativity with advanced technology.  
          Our expertise includes designing intuitive user interfaces and building scalable backend systems, delivering full-stack web applications tailored to diverse needs.
          <br /><br />
          LORDS IT SERVICES (PRIVATE) LIMITED is duly incorporated under the Companies Act, 2017 of Pakistan (Corporate Unique Identification No.: 0237347, incorporated on 17th August 2023).  
          Registered with the Securities and Exchange Commission of Pakistan (SECP), we provide MERN-stack development services fully compliant with applicable laws and industry standards.
          <br /><br />
          Our approach centers on quality, innovation, and collaboration to build effective web experiences that seamlessly connect users and businesses.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
