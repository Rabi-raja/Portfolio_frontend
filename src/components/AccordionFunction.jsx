import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import { FaHospitalAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaLock } from "react-icons/fa6";
import 'react-accessible-accordion/dist/fancy-example.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default function AccordionFunction() {
    return (
        <>
        <h1 className='text-[2.75rem] text-white text-center my-5'>From Shops to AI — We Build Everything</h1>
        <p className='text-gray-400 text-center text-[1.25rem] mb-4 animate-bounce'>
            Tap a service — details slide down ⬇
        </p>
        
        <Accordion className="max-w-xl mx-auto my-7 bg-gray-900 rounded-lg shadow-lg">
            <AccordionItem className="border-b border-gray-500 last:border-b-0">
                <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center gap-4 px-8 py-5 text-cyan-500 text-2xl font-extrabold cursor-pointer hover:bg-cyan-700 hover:text-cyan-100 focus:outline-none focus:bg-cyan-700 focus:text-cyan-100 transition-colors">
                       <FaCartArrowDown className="text-cyan-500 text-3xl flex-shrink-0" /> eCommerce & Marketplaces
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-800 px-8 py-6 text-white text-lg leading-relaxed">
                    <p>
                       Complete online stores and multi-vendor platforms with payments, carts, and seller management.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="border-b border-gray-500 last:border-b-0">
                <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center gap-4 px-8 py-5 text-cyan-500 text-2xl font-extrabold cursor-pointer hover:bg-cyan-700 hover:text-cyan-100 focus:outline-none focus:bg-cyan-700 focus:text-cyan-100 transition-colors">
                     <FaHospitalAlt className="text-cyan-500 text-3xl flex-shrink-0" />  Management Systems
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-800 px-8 py-6 text-white text-lg leading-relaxed">
                    <p>
                      Custom hospital, CRM, ERP & employee management solutions.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem className="border-b border-gray-500 last:border-b-0">
                <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center gap-4 px-8 py-5 text-cyan-500 text-2xl font-extrabold cursor-pointer hover:bg-cyan-700 hover:text-cyan-100 focus:outline-none focus:bg-cyan-700 focus:text-cyan-100 transition-colors">
                     <FaRobot className="text-cyan-500 text-3xl flex-shrink-0" />  AI & Automation
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-800 px-8 py-6 text-white text-lg leading-relaxed">
                    <p>
                     Smart AI apps, chatbots, recommendation engines, and automation tools.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem className="border-b border-gray-500 last:border-b-0">
                <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center gap-4 px-8 py-5 text-cyan-500 text-2xl font-extrabold cursor-pointer hover:bg-cyan-700 hover:text-cyan-100 focus:outline-none focus:bg-cyan-700 focus:text-cyan-100 transition-colors">
                     <IoBarChartSharp className="text-cyan-500 text-3xl flex-shrink-0" />  Dashboards & Analytics
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-800 px-8 py-6 text-white text-lg leading-relaxed">
                    <p>
                    Powerful admin dashboards with reports, charts, and user management.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
                 <AccordionItem className="border-b border-gray-500 last:border-b-0">
                <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center gap-4 px-8 py-5 text-cyan-500 text-2xl font-extrabold cursor-pointer hover:bg-cyan-700 hover:text-cyan-100 focus:outline-none focus:bg-cyan-700 focus:text-cyan-100 transition-colors">
                     <FaMobileScreenButton className="text-cyan-500 text-3xl flex-shrink-0" />  Mobile & Web Apps
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-800 px-8 py-6 text-white text-lg leading-relaxed">
                    <p>
                  Responsive websites and cross-platform mobile applications.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
                  <AccordionItem className="border-b border-gray-500 last:border-b-0">
                <AccordionItemHeading>
                    <AccordionItemButton className="flex items-center gap-4 px-8 py-5 text-cyan-500 text-2xl font-extrabold cursor-pointer hover:bg-cyan-700 hover:text-cyan-100 focus:outline-none focus:bg-cyan-700 focus:text-cyan-100 transition-colors">
                    <FaLock className="text-cyan-500 text-3xl flex-shrink-0" /> Security & Integrations
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-800 px-8 py-6 text-white text-lg leading-relaxed">
                    <p>
                Authentication, authorization, API integrations, and custom plugins.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </>
    );
}
