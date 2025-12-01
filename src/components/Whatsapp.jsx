import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";

const Whatsapp = () => {
    const phonenumber = "923215664603"

    const whatsappUrl = `https://wa.me/${phonenumber}`
  return (
    <div>
<a href={whatsappUrl} target='_blank' rel="noopener noreferrer" className='text-green-500 text-7xl fixed bottom-5 right-5 z-50'>

<RiWhatsappFill /> 
</a>
       
       
    </div>
  )
}

export default Whatsapp