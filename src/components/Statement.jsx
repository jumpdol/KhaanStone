import { ArrowUpRight } from 'lucide-react';
const services = [
 ['01','Patios & pathways','A place to gather. A path to wander. Paving and natural stone that bring your outdoor space together.','sand'],
 ['02','Retaining walls','Give your landscape structure with carefully built walls, considered grading and drainage.','terracotta'],
 ['03','Stone & masonry','Texture, character and a lasting finish. Custom stonework, brick, cladding and entrance features.','slate']
];
export default function Statement({ onNavigate }) {
 return <section id="statement" className="craft-section"><div className="service-ribbon"><span>Residential & commercial</span><span>Stonework with purpose</span><span>From the coast to the valley</span></div><div className="craft-intro"><span className="eyebrow">GROUNDED IN CRAFT</span><div><h2>Good spaces start<br/>with a solid foundation.</h2><p>From a welcoming front entrance to a backyard made for everyday life, we bring care to what you see—and what lies beneath. Based in Vancouver, Khaan Stone works with homeowners and builders from Whistler to Chilliwack.</p></div></div><div className="craft-services">{services.map(([num,title,desc,color])=><a href="#hardscape" onClick={()=>onNavigate('hardscape')} className={`craft-service craft-${color}`} key={num}><div className="service-number"><span>{num}</span><ArrowUpRight size={23}/></div><h3>{title}</h3><p>{desc}</p><span className="service-more">Explore service</span></a>)}</div></section>;
}
