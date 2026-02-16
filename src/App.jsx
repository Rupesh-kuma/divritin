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


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
