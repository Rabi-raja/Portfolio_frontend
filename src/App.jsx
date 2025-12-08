import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Home from './pages/Home/index.jsx'
import MovingParticles from './components/MovingParticles.jsx'
import AboutUs from './pages/Home/aboutUs/AboutUs.jsx';
import FormUs from './pages/contactus/FormUs.jsx'
import Hire from './pages/hireus/Hire.jsx';
import Header from './components/Header.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import AdminPage from './pages/admin/AdminPage.jsx'
import { AuthProvider } from './assets/context/AuthContext.jsx';
import LoginPage from './pages/ulits/LoginPage.jsx'


function App() {
  

  return (
    <div>
    <AuthProvider>
      <BrowserRouter>
     
      <Routes>
        <Route path = '/' element = {<Home />} /> 
        <Route path = '/about-us' element = {<AboutUs />} /> 
         <Route path = '/contact-us' element = {<FormUs />} /> 
         <Route path = '/hire-us' element = {<Hire />} />
        <Route path='/login-page' element={<LoginPage />} />
       
      

         <Route path='/admin' element = {
          <ProtectedRoutes>
            <AdminPage />
          </ProtectedRoutes>
         }
          />
           
        
      </Routes>
      <ToastContainer />
      </BrowserRouter>
      
    </AuthProvider >
    </div>
  )
}

export default App
