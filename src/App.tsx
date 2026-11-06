import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArtGallery from './pages/ArtGallery';
import EcoClub from './pages/EcoClub';
import NavBar from './components/NavBar';
import KairaPosters from './pages/KairaPosters';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <NavBar />
        {/* <Hero /> */}
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kaira-posters" element={<KairaPosters />} />
            <Route path="/art" element={<ArtGallery />} />
            <Route path="/eco-club" element={<EcoClub />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
