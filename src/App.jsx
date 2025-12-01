import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './pages/Home/index.jsx'
import MovingParticles from './components/MovingParticles.jsx'
import AboutUs from './pages/Home/aboutUs/AboutUs.jsx';
import Form from './pages/contactus/form.jsx';
import Hire from './pages/hireus/Hire.jsx';
import Header from './components/Header.jsx';

function App() {
  

  return (
    <div>
      <BrowserRouter>
     
      <Routes>
        <Route path = '/' element = {<Home />} /> 
        <Route path = '/about-us' element = {<AboutUs />} /> 
         <Route path = '/contact-us' element = {<Form />} /> 
         <Route path = '/hire-us' element = {<Hire />} />      
        
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
