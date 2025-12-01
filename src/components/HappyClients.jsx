import React, { useEffect, useState } from 'react'
import clients from '../assets/clients.jpg'
import { FaUserAlt } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";

const HappyClients = () => {

    const [happyClients, setHappyClients] = useState(0)
    const [project, setProject] = useState(0)
    const [experience, setExperience] = useState(0)


    useEffect(() => {
 const interval = setInterval(() => {
    setHappyClients(prev =>
    {
        if(prev < 100)
        {
         return prev  +1
        } else
        {
            clearInterval(interval)
            return prev
        }

    } )   
    
}, 50);

return ()=>
{
    clearInterval(interval)
}
}, [])


useEffect(() => {

  const interval2=  setInterval(() => {
    setProject(prev =>
    {
         if(prev < 80)
    {
       
            return prev +1
    }
    else
    {
        clearInterval(interval2)
        return prev
    }
}
    )
        
    }, 50);
  

  return () => {
    clearInterval(interval2)
  }
}, [])

  useEffect(() => {
   const interval3= setInterval(() => {
       setExperience(prev =>
       {
        if(prev < 6)
        {
            return prev +1
        }
        else
        {
            clearInterval(interval3)
            return prev
        }
       }
       ) 
    }, 50);
  
    return () => {
      clearInterval(interval3)
    }
  }, [])
    
  return (
    <div className='relative '>
        <img className='w-full object-fill  h-[120vh] sm:h-[120vh] md:h-[120vh] lg:h-[60vh] 'style= {{boxShadow : '0 0 40px rgba(6, 182, 212, 0.8)'}} src={clients} alt="" />
        <div className='bg-black/50 absolute inset-0 z-50'></div>
        <div className='absolute inset-0 z-[100] flex justify-center items-center '>
<div className=' w-full flex flex-col md:flex-row justify-around items-center gap-20 flex-wrap p-4'>
<div className='flex flex-col justify-around items-center gap-4  '>
<FaUserAlt className='text-white text-5xl' />

   <span className='text-white text-7xl font-extrabold'>{happyClients}+ </span>
   <h2 className='text-white text-3xl font-bold text-center'>Happy Clients</h2>
</div>
<div className='flex flex-col justify-around items-center gap-4  '>
<AiFillProject className='text-white text-5xl' />

  <span className='text-white text-7xl font-extrabold'>{project}+ </span>  
   <h2 className='text-white text-3xl font-bold text-center'>Completed Projects</h2>
</div>
<div className='flex flex-col justify-around items-center gap-4  '>
<SlCalender className='text-white text-5xl' />

   <span className='text-white text-7xl font-extrabold'>{experience}</span>  
   <h2 className='text-white text-3xl font-bold text-center'>Years of Experience</h2>

</div>


</div>
</div>
   </div> 
  )
}

export default HappyClients