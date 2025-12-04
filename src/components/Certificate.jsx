import React from 'react'
import { AiFillSafetyCertificate } from "react-icons/ai";

const Certificate = () => {
  return (
    <div
      className='flex flex-col gap-5 bg-gray-800 p-5'
      style={{ boxShadow: '0 0 40px rgba(8, 145, 178, 0.8)' }}
    >
      <div className='flex flex-col items-center justify-center gap-7 p-3 md:flex md:flex-row sm:flex sm:flex-row'>
        <span
          className='text-[7rem] text-[#B8860B]'
          style={{
            filter:
              'drop-shadow(0 0 20px rgba(0, 0, 0, 1)) drop-shadow(0 0 10px rgba(6, 182, 212, 0.8)) drop-shadow(0 0 10px rgba(236, 72, 153, 1)) drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))',
          }}
        >
          <AiFillSafetyCertificate />
        </span>
        <h1 className='text-gray-200 text-[2.75rem] text-left m-3 uppercase font-bold'>
          Registered Company
        </h1>
      </div>

      <p className='text-[1.35rem] text-white m-3'>
        <span className='font-bold'>LORDS IT SERVICES (PRIVATE) LIMITED</span> is officially
        incorporated under the Companies Act, 2017 (XIX of 2017) in Pakistan.
      </p>
      <ul className='list-disc list-inside text-gray-400'>
        <li className='text-gray-400 m-3 text-[1.15rem]'>
          Corporate Unique Identification No.: 0237347
        </li>
        <li className='text-gray-400 m-3 text-[1.15rem]'>Date of Incorporation: 17th August 2023</li>
        <li className='text-gray-400 m-3 text-[1.15rem]'>
          Registered With: Securities and Exchange Commission of Pakistan (SECP)
        </li>
      </ul>
      <p className='text-white m-3 text-[1.35rem]'>
        We are proud to be a legally registered company committed to delivering professional MERN- Stack
 development services with integrity and trust.
      </p>
      <p className='text-white m-3 text-[1.35rem]'>
        For your reference, the{' '}
        <span className='text-[1.75rem] font-bold capitalize text-[#B8860B]'>
          Certificate of Incorporation
        </span>{' '}
        issued by SECP is available here.
      </p>

      <div>
        <a
          href='/CertificateInc.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='text-cyan-500 underline text-[1.25rem] font-semibold cursor-pointer'
        >
          View Certificate of Incorporation
        </a>
      </div>
    </div>
  )
}

export default Certificate
