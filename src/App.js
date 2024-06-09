import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BrowseProperty from './pages/BrowseProperty';
import Home from './pages/Home';
import PropertyHouse from './Components/PropertyHouse';
import Layout from './layout';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/BrowseProperty' element={<BrowseProperty />} />
        <Route path='/AboutUs' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
