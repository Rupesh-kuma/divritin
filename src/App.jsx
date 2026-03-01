import './App.css';
import './style/responsive.css';
import './js/slider.js';
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
import UIUXDesignPage from './pages/Core-Services-IT/WebsiteUI/UXdesign';
import Mobilescreendesign from './pages/Core-Services-IT/WebsiteUI/Mobilescreendesign';
import OtherDesignServices from './pages/Core-Services-IT/WebsiteUI/OtherDesignServices';
import Searchengineoptimization from './pages/Branding-Marketing/SearchEngineOptimization';
import Smo from './pages/Branding-Marketing/smo';
import Ppc from './pages/Branding-Marketing/Ppc';
import Promotionalservices from './pages/Branding-Marketing/Promotionalservices';
import Technologies from './pages/Technologies/Technologies';
import CaseStudies from './pages/Technologies/Casestudies';
import Industries from './pages/Technologies/Industrie';
import OurPortfolios from './pages/Company-Profile/OurPortfolios';
import Ourclient from './pages/Company-Profile/OurClient';
import Blogs from './pages/Company-Profile/Blogs';
import Events from './pages/Company-Profile/Event';
import AutoPopup from './components/AutoPopup';


function App() {

  return (
    <>
    <AutoPopup/>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/custom-software-development' element={<CustomSoftwareDevelopment/>}/>
      <Route path='/web-design-development' element={<WebDesignDevelopment/>}/>
      <Route path='/mobile-app-development' element={<MobileAppDevelopment/>}/>
      <Route path='/web-mobile-app-maintenance' element={<WebMobileAppMaintenance/>}/>
      <Route path='/website-ui-ux-design' element={<UIUXDesignPage/>}/>
      <Route path='/mobile-screen-design' element={<Mobilescreendesign/>}/>
      <Route path='/other-design-services' element={<OtherDesignServices/>}/>
      <Route path='/search-engine-optimization' element={<Searchengineoptimization/>}/>
      <Route path='/social-media-optimization' element={<Smo/>}/>
      <Route path='/pay-per-click' element={<Ppc/>}/>
      <Route path='/other-promotional-services' element={<Promotionalservices/>}/>
      <Route path='/technologies' element={<Technologies/>}/>
      <Route path='/case-studies' element={<CaseStudies/>}/>
      <Route path='/industries' element={<Industries/>}/>
      <Route path='/our-portfolios' element={<OurPortfolios/>}/>
      <Route path='/our-client' element={<Ourclient/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/events' element={<Events/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
