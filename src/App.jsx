import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeView, setActiveView] = useState('home');

  useEffect(() => {
    // Scroll to top when switching views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleExplore = () => {
    const el = document.getElementById('statement');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="main-viewport">
        {activeView === 'home' && (
          <div className="home-view animate-fade-in">
            <Hero onExplore={handleExplore} />
            <Statement />
            <Portfolio 
              isFullPage={false} 
              onNavigatePortfolio={() => setActiveView('portfolio')} 
            />
          </div>
        )}

        {activeView === 'process' && (
          <Process onContactClick={() => setActiveView('contact')} />
        )}

        {activeView === 'about' && (
          <About onContactClick={() => setActiveView('contact')} />
        )}

        {activeView === 'systems' && (
          <Services onContactClick={() => setActiveView('contact')} />
        )}

        {activeView === 'portfolio' && (
          <Portfolio isFullPage={true} />
        )}

        {activeView === 'contact' && (
          <Contact />
        )}
      </main>

      <Footer onNavClick={setActiveView} />
    </div>
  );
}
