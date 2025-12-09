import axios from 'axios'
import React from 'react'
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Name is Required').min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters').matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    phone: Yup.string().matches(/^[+0-9\s-]{7,20}$/, 'Enter a valid phone number'),
    subject: Yup.string().required('Subject is Required'). min(3, 'Subject must be at least 3 characters' ).max(100, 'Subject is too long '),
    message: Yup.string().required('Message is Required').min(10, 'Message must be at least 10 characters')

});

const ContactForm = () => {
  return (
    <div className='container border-2 border-cyan-500 rounded-2xl flex flex-col justify-between items-center gap-5 m-5 p-5 w-auto lg:w-[35vw] md:w-fit mx-auto '>
<Formik
                initialValues={{ first_name: '', email: '', phone: '', subject: '', message:'' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
try{
    const response = await axios.post(`https://portfoliobackend-production-d54c.up.railway.app/api/v1/client/create-client`, values)
   toast.success(response.data.message ||"Message sent Successfully!")
   resetForm()
}
catch(error)
{
    if(error.response)
    {
        toast.error(error.response.data.error || "Failed to send message")
    }
    else
    {
        toast.error("Network error: Unable to send message")
    }
   
}
 finally{
    setSubmitting(false)
        
    }

                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    handleReset
                    /* and other goodies */
                }) => (
<form onSubmit={handleSubmit}>
                        <div className= 'text-cyan-500 lg:w-[30vw] md:w-fit sm:w-fit p-3 m-5 text-xl border-2 border-cyan-500 rounded-xl'>
                            
                            
                            <input
                            
                                type="text"
                                name="first_name"
                                placeholder='Name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.first_name}
                                className='form-control fomr_input focus:outline-none'
                            />
                            <p className='form_error' >
                                {errors.first_name && touched.first_name && errors.first_name}
                            </p>

                        </div>
                        
                        <div className='text-cyan-500 lg:w-[30vw] md:w-fit sm:w-fit p-3 m-5 text-xl border-2 border-cyan-500 rounded-xl '>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className='form-control form_input focus:outline-none'
                            />
                            <p className='form_error ' >
                                {errors.email && touched.email && errors.email}
                            </p>

                        </div>
                        <div className='text-cyan-500 lg:w-[30vw] md:w-fit sm:w-fit p-3 m-5 text-xl border-2 border-cyan-500 rounded-xl'>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Phone Number'
                                className='form-control form_input focus:outline-none'
                                value={values.phone}
                            />
                            <p className='form_error' >
                                {errors.phone && touched.phone && errors.phone}
                            </p>
                        </div>
                        <div className='text-cyan-500 lg:w-[30vw] md:w-fit sm:w-fit p-3 m-5 text-xl border-2 border-cyan-500 rounded-xl'>

                     <input type='text'
                     name="subject" 
                     id="subject" 
                     onChange={handleChange}
                     onBlur={handleBlur}
                     
                     value={values.subject}
                     placeholder='Subject'
                     className='form-control fomr_input focus:outline-none'
                     
                     />
                      <p className='form_error' >
                                {errors.subject && touched.subject && errors.subject}
                            </p>
                        
</div>
                        <div className='text-cyan-500 lg:w-[30vw] md:w-fit sm:w-fit p-3 m-5 text-xl border-2 border-cyan-500 rounded-xl'>
<Field

                     as ='textarea'
                     name="message" 
                     id="message" 
                     onChange={handleChange}
                     onBlur={handleBlur}
                     
                     value={values.message}
                     placeholder='Message'
                     className='form-control fomr_input focus:outline-none'
                     
                     />
                      <p className='form_error' >
                                {errors.message && touched.message && errors.message}
                            </p>
                        
</div>
<div className='flex flex-row justify-around items-center'>
                        <button type="submit" disabled={isSubmitting} className='border-2 border-cyan-600 rounded-2xl p-4 my-5 text-2xl lg:w-[12vw] md:w-fit sm:w-fit font-bold text-white block m-auto' style={{boxShadow: '0px 0px 20px rgb(6, 182, 212),0px 0px 40px rgb(236, 72, 153),0px 0px 40px rgb(139, 92, 246)  '}}>
                            Submit
                        </button>
                        <button onClick={handleReset} className='border-2 border-cyan-600 rounded-2xl p-4 my-5 text-2xl lg:w-[12vw] md:w-fit sm:w-fit font-bold text-white block m-auto' style={{boxShadow: '0px 0px 20px rgb(6, 182, 212),0px 0px 40px rgb(236, 72, 153),0px 0px 40px rgb(139, 92, 246)'}}>Reset</button>

                        </div>
                    </form>
                
             )}
            </Formik>
             <ToastContainer />
        </div>

    )
}

export default ContactForm;