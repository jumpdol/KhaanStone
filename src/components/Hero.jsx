import { useState } from 'react';
import { ArrowUpRight, ArrowDown, ChevronLeft, ChevronRight } from 'lucide-react';
const images = ['/houston3.jpg','/houston1.jpg','/houston5.jpg'];
export default function Hero({ onExplore, onNavigate }) {
  const [slide,setSlide] = useState(0);
  return <section className="editorial-hero" aria-label="Khaan Stone hardscaping">
    <div className="hero-photography" style={{backgroundImage:`url(${images[slide]})`}} />
    <div className="hero-shade"/>
    <div className="hero-editorial-content">
      <span className="eyebrow light-eyebrow"><span/> VANCOUVER · WHISTLER TO CHILLIWACK</span>
      <h1>Built with stone.<br/><em>Made for living.</em></h1>
      <p>Thoughtful hardscaping & stone masonry.<br/>Patios, retaining walls and outdoor spaces<br className="desktop-break"/> built around the way you live.</p>
      <div className="hero-links"><a className="action-button" href="#contact" onClick={()=>onNavigate('contact')}>Let's talk about your project <ArrowUpRight size={19}/></a><a className="hero-secondary" href="#portfolio" onClick={()=>onNavigate('portfolio')}>Explore our work <ArrowUpRight size={18}/></a></div>
    </div>
    <div className="hero-bottom"><button onClick={onExplore} className="hero-explore"><ArrowDown size={18}/> Discover the details</button><div className="hero-image-controls"><span>OUTDOOR SPACES</span><button onClick={()=>setSlide((slide+2)%3)} aria-label="Previous photograph"><ChevronLeft size={19}/></button><span className="image-count">0{slide+1} <i>/ 03</i></span><button onClick={()=>setSlide((slide+1)%3)} aria-label="Next photograph"><ChevronRight size={19}/></button></div></div>
  </section>;
}
