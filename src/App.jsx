import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Expertise from './components/sections/Expertise';
import Portfolio from './components/sections/Portfolio';
import Certifications from './components/sections/Certifications';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import FloatingContact from './components/FloatingContact';
import DevicePreview from './components/DevicePreview';
import { ThemeProvider } from './context/ThemeContext';
import './components/DevicePreview.css';

function App() {

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="App" >
        <Navbar />
        <main>
          <Hero />
          <Expertise />
          <Portfolio />
          <Certifications />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingContact />
        <DevicePreview />
      </div>
    </ThemeProvider>
  );
}

export default App;
