import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import Services from './Components/Services';
import Layout from './layout';
import Property from './Components/Property';
import StorySection from './Components/StorySection';
import FindPlace from './Components/FindPlace';
import LearnMore from './Components/LearnMore';
import TeamSection from './Components/TeamSection';
import BlogSection from './Components/BlogSection';
import ContactUs from './Components/ContactUs';
import BrowseProperties from './Components/BrowseProperties';
import About from './Components/About';
import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import BrowseProperty from './pages/BrowseProperty';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/Home' element={<Home />}></Route>
     <Route path='/BrowseProperty' element={<BrowseProperty/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
