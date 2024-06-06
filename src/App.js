import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BrowseProperty from './pages/BrowseProperty';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/BrowseProperty' element={<BrowseProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
