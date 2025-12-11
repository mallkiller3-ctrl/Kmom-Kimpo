import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Main from './pages/Main';
import Program from './pages/Program';
import Caregiver from './pages/Caregiver';
import About from './pages/About';
import Contact from './pages/Contact';
import Recruitment from './pages/Recruitment';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-[#333333] bg-white selection:bg-[#FF9E9E] selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/program" element={<Program />} />
            <Route path="/caregiver" element={<Caregiver />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recruitment" element={<Recruitment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;