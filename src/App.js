import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import Preloader from './components/Preloader';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Network = lazy(() => import('./pages/Network'));
const Fleet = lazy(() => import('./pages/Fleet'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      offset: 50,
      delay: 50
    });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Preloader />
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />
          
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/network" element={<Network />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
