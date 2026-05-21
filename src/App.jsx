import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Estimator from './components/Estimator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  // Intersection Observer for scroll-fade-in animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      root: null,
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element fully enters
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we don't need to observe it anymore
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
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Estimator />
      <Contact />
      <Footer />
    </>
  );
}
