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

const VALID_VIEWS = ['home', 'process', 'about', 'hardscape', 'services', 'systems', 'portfolio', 'contact'];
function readView() {
  const view = window.location.hash.slice(1);
  return VALID_VIEWS.includes(view) ? view : 'home';
}

export default function App() {
  const [activeView, updateView] = useState(readView);
  const setActiveView = (view) => {
    window.location.hash = view;
    updateView(view);
  };

  useEffect(() => {
    const handleHash = () => updateView(readView());
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeView]);

  const handleExplore = () => {
    const el = document.getElementById('statement');
    if (el) {
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    }
  };

  return (
    <div className="site-wrapper">
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="main-viewport" id="main-content">
        {activeView === 'home' && (
          <div className="home-view animate-fade-in">
            <Hero onExplore={handleExplore} onNavigate={setActiveView} />
            <Statement onNavigate={setActiveView} />
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

        {(activeView === 'hardscape' || activeView === 'services' || activeView === 'systems') && (
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
