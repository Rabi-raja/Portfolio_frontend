import { px } from 'framer-motion'
import React from 'react'

const Testimonials = ({testimon}) => {
  return (
    <div className='w-full  ' >
        <h1 className='text-white text-5xl font-bold text-center p-4 my-7 '>What The Clients Say About Our Work</h1>
<div className='flex justify-center items-center flex-wrap'>
{testimon?.map ((items, index)=>
(
<div key= {index} className=' bg-gray-700 p-4 m-7 w-72 rounded-2xl h-[40vh] text-white'>
    <p>{items.review}</p>
    <h3>{items.name}</h3>
    <p>{items.desig}</p>
    </div>
))}
</div>
    </div>
  )
}

export default Testimonials