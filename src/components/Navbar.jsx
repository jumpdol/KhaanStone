import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
const items = [['home','Home'],['hardscape','Services'],['portfolio','Our Work'],['process','Process'],['about','About']];
export default function Navbar({ activeView, setActiveView }) {
  const [open,setOpen] = useState(false);
  const trigger = useRef(null);
  const drawer = useRef(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawer.current?.querySelector('button')?.focus();
    const key = (e) => {
      if(e.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
      if(e.key === 'Tab') {
        const nodes = drawer.current.querySelectorAll('a,button');
        const first = nodes[0], last = nodes[nodes.length-1];
        if(e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if(!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown',key);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown',key); };
  },[open]);
  const go = (view) => { setOpen(false); setActiveView(view); };
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="refined-header">
      <div className="refined-header-inner">
        <a href="#home" className="brand-lockup" aria-label="Khaan Stone home" onClick={() => go('home')}>
          <img src="/logo/KhaanStoneWhite.png" alt="" />
          <span className="brand-wordmark">KHAAN STONE<small>MASONRY & HARDSCAPING</small></span>
        </a>
        <nav className="refined-nav" aria-label="Main navigation">{items.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => go(id)} aria-current={activeView === id ? 'page' : undefined}>{label}</a>)}</nav>
        <div className="refined-actions">
          <a href="tel:+12368632328" className="nav-call" aria-label="Call Khaan Stone"><Phone size={18}/><span>(236) 863-2328</span></a>
          <a href="#contact" className="action-button header-quote" onClick={() => go('contact')}>Get a quote <ArrowUpRight size={17}/></a>
          <button className="refined-menu" ref={trigger} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Open menu"><Menu/></button>
        </div>
      </div>
    </header>
    {open && <div className="menu-backdrop" onClick={() => {setOpen(false); trigger.current?.focus();}}><div className="refined-drawer" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation" ref={drawer} onClick={e=>e.stopPropagation()}><button className="drawer-close" onClick={() => {setOpen(false); trigger.current?.focus();}} aria-label="Close menu"><X/></button><span className="eyebrow">KHAAN STONE</span><nav>{[...items,['contact','Get a quote']].map(([id,label],i)=><a key={id} href={`#${id}`} onClick={()=>go(id)}><small>0{i+1}</small>{label}</a>)}</nav><a href="tel:+12368632328">(236) 863-2328</a><p>Vancouver-based.<br/>Whistler to Chilliwack.</p></div></div>}
  </>;
}
