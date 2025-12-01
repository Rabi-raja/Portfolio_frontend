import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NeonGlowingEye3D from '../../components/GlowingEye'
import ContactForm from '../../components/ContactForm'


const Form = () => {
  return (
    <div className='bg-black'>

        <Header />
        <div>
            <h1 className='text-6xl text-center glow-text m-5 mb-5 p-3'>Let's Work Together</h1>
            <p className='text-2xl text-cyan-500 text-center'>Have a project in mind? Get in touch and let’s make it happen together.</p>
        </div>
        <div className='flex bg-transparent justify-around items-center m-5 flex-wrap'>
            
            <div>
                <NeonGlowingEye3D />
            </div>
            <div>
                <ContactForm />
            </div>
 
        </div>
       
        
        <Footer />
    </div>
  )
}

export default Form