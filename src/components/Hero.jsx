import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: '/houston1.jpg',
    title: 'The Pride of Meticulous\nCraftsmanship',
    subtitle: 'VANCOUVER & SEA-TO-SKY',
    alt: 'Luxury architectural stone masonry by Khaan Stone'
  },
  {
    id: 2,
    image: '/houston3.jpg',
    title: 'Providing Modern Precision Finishes\nWith Old World Masonry Traditions',
    subtitle: 'ENGINEERED ARCHITECTURE',
    alt: 'Custom stone retaining walls and structural masonry'
  },
  {
    id: 3,
    image: '/houston5.jpg',
    title: 'Delivering Finished Work That Infuses\nDurability With Artistic Expression',
    subtitle: 'COMMERCIAL & RESIDENTIAL',
    alt: 'Granite and basalt stone entryways and courtyards'
  }
];

export default function Hero({ onExplore }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  return (
    <section 
      className="hero-slider-wrap"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase"
    >
      {/* Slides Container */}
      <div className="hero-slider-container">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`hero-slide ${isActive ? 'slide-active' : ''}`}
              style={{
                backgroundImage: `linear-gradient(rgba(10, 15, 20, 0.42), rgba(10, 15, 20, 0.58)), url(${slide.image})`
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${SLIDES.length}`}
            >
              <div className="hero-slide-content">
                <span className="hero-slide-tag">{slide.subtitle}</span>
                <h1 className="hero-slide-title">
                  {slide.title.split('\n').map((line, lIdx) => (
                    <span key={lIdx} className="hero-title-line">
                      {line}
                      <br />
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Controls (Left & Right) */}
      <div className="slider-controls-wrap">
        <button 
          className="slider-nav-btn slider-prev" 
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
          <span className="slider-count-label">
            0{currentSlide + 1} <span className="slider-count-sep">/</span> 0{SLIDES.length}
          </span>
        </button>

        <button 
          className="slider-nav-btn slider-next" 
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <span className="slider-count-label">
            0{currentSlide + 1} <span className="slider-count-sep">/</span> 0{SLIDES.length}
          </span>
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="slider-indicators">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`slider-indicator-dot ${idx === currentSlide ? 'dot-active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Hint */}
      <button 
        className="slider-down-arrow"
        onClick={onExplore}
        aria-label="Scroll to content"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
