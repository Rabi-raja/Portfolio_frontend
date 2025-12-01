import React from 'react'
import chooseus from '../assets/chooseus.jpg'

const Chooseus = () => {
  return (
    <div className='mt-15' style = {{boxShadow: ' 0 0 40px rgba(6, 182, 212, 1)'}}>
<h1 className=''></h1>
<div className='flex flex-col justify-center items-center md:flex md:flex-col lg:flex lg:flex-row gap-5'>
<div className=' w-full md:full lg:w-[30vw]'>
<img src={chooseus} alt="" />
</div>
<div className='w-full md:w-full lg:w-[40vw]'>
    <h1 className='text-white text-[3rem] m-5 mt-5'>Why Choose Us</h1>
<p className='text-white text-[1.25rem] p-5'>We deliver reliable, high-quality software tailored to your needs, with transparent pricing, timely delivery, and ongoing support to ensure your success.</p>
<ul className='text-white p-5'>
<li>✅ On-time delivery.   </li>             
<li>✅ Transparent pricing.</li>             
<li>✅ Quality code & best practices.</li>  
<li>✅ Excellent communication.</li>         
<li>✅ Post-launch support.</li>      
</ul>
</div>

    </div>
    </div>
  )
}

export default Chooseus