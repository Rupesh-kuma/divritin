import './App.css';
import './style/responsive.css';
import react from "react";
import Home from './pages/Home'
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactUs from './pages/ContactUs';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CustomSoftwareDevelopment from './pages/Core-Services-IT/Custom-Software-Development';
import WebDesignDevelopment from './pages/Core-Services-IT/Webdesigndevelopment';
import MobileAppDevelopment from './pages/Core-Services-IT/Mobileappdevelopment';
import WebMobileAppMaintenance from './pages/Core-Services-IT/Webmobileappmaintenance';


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/custom-software-development' element={<CustomSoftwareDevelopment/>}/>
      <Route path='/web-design-development' element={<WebDesignDevelopment/>}/>
      <Route path='/mobile-app-development' element={<MobileAppDevelopment/>}/>
      <Route path='/web-mobile-app-maintenance' element={<WebMobileAppMaintenance/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
