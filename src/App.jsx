import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statement from './components/Statement';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Intersection Observer for smooth scroll-fade-in animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observerInstance.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach(reveal => {
      observer.observe(reveal);
    });

    return () => {
      reveals.forEach(reveal => {
        observer.unobserve(reveal);
      });
    };
  }, []);

  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
