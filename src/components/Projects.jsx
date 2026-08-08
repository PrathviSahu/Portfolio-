import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const projects = [
  { num:'01', title:'AI ATTENDANCE SYSTEM', desc:'Automated attendance tracking using facial recognition and AI-powered detection systems.', tags:['Java','OpenCV','MySQL'],
    svg:<svg viewBox="0 0 400 280" className="w-full h-full"><rect width="400" height="280" fill="#0a0a0a"/><rect x="130" y="60" width="140" height="170" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4,4"><animate attributeName="stroke-dashoffset" values="0;-16" dur="1s" repeatCount="indefinite"/></rect><ellipse cx="200" cy="140" rx="50" ry="65" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.6"/><rect x="170" y="120" width="20" height="12" fill="#22c55e" opacity="0.4" rx="2"/><rect x="210" y="120" width="20" height="12" fill="#22c55e" opacity="0.4" rx="2"/><circle cx="330" cy="60" r="25" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.5"/><text x="330" y="65" textAnchor="middle" fill="#22c55e" fontSize="14" fontFamily="Rajdhani">AI</text><text x="200" y="260" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="Rajdhani" letterSpacing="3">IDENTITY CONFIRMED</text></svg> },
  { num:'02', title:'AIRCHORD', desc:'Play music with hand gestures. Virtual guitar controlled by computer vision.', tags:['React','MediaPipe','Web Audio'],
    svg:<svg viewBox="0 0 400 280" className="w-full h-full"><rect width="400" height="280" fill="#0a0a0a"/><g stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.8"><ellipse cx="200" cy="160" rx="45" ry="35"/><line x1="165" y1="145" x2="150" y2="90" strokeWidth="8" strokeLinecap="round"/><line x1="185" y1="130" x2="175" y2="70" strokeWidth="8" strokeLinecap="round"/><line x1="205" y1="125" x2="200" y2="65" strokeWidth="8" strokeLinecap="round"/><line x1="225" y1="130" x2="225" y2="75" strokeWidth="8" strokeLinecap="round"/><line x1="240" y1="145" x2="250" y2="100" strokeWidth="8" strokeLinecap="round"/></g><text x="60" y="100" fill="#22c55e" fontSize="28" opacity="0.3">♪</text><text x="330" y="180" fill="#22c55e" fontSize="22" opacity="0.3">♫</text><text x="200" y="260" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="Rajdhani" letterSpacing="3">GESTURE DETECTED</text></svg> },
  { num:'03', title:'F.R.I.D.A.Y — AI ASSISTANT', desc:'AI-powered personal assistant with voice interaction, task management, and smart responses.', tags:['React','FastAPI','TTS'],
    svg:<svg viewBox="0 0 400 280" className="w-full h-full"><rect width="400" height="280" fill="#0a0a0a"/><circle cx="200" cy="140" r="60" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.4"/><circle cx="200" cy="140" r="40" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3"><animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite"/></circle><circle cx="200" cy="140" r="6" fill="#22c55e" opacity="0.8"/><path d="M100,140 Q115,120 130,140 Q145,160 160,140" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.5"/><path d="M240,140 Q255,120 270,140 Q285,160 300,140" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.5"/><text x="200" y="260" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="Rajdhani" letterSpacing="3">F.R.I.D.A.Y ONLINE</text></svg> },
];
export default function Projects() {
  const sectionRef = useRef(null);
  useEffect(() => { const ctx = gsap.context(() => {
    gsap.from('.projects-header',{scrollTrigger:{trigger:'.projects-header',start:'top 80%',toggleActions:'play none none reverse'},opacity:0,y:40,duration:1,ease:'power3.out'});
    gsap.utils.toArray('.manga-chapter').forEach((ch,i)=>{gsap.from(ch,{scrollTrigger:{trigger:ch,start:'top 85%',toggleActions:'play none none reverse'},opacity:0,y:60,scale:0.9,duration:0.8,delay:i*0.15,ease:'power3.out'});});
  }, sectionRef); return () => ctx.revert(); }, []);
  const rotations = [-1.5, 0.8, -0.5];
  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-ink flex items-center justify-center p-5">
      <div className="manga-panel w-full max-w-[1400px] min-h-screen">
        <div className="manga-inner p-10 md:p-16">
          <div className="projects-header text-center mb-12"><div className="section-label">03 — MY PROJECTS</div><div className="section-label-jp mb-2.5">プロジェクト</div><h2 className="section-heading text-[clamp(3rem,6vw,5rem)]">MY PROJECTS</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p,i) => (<div key={i} className="manga-chapter relative"><div className="chapter-panel border-[3px] border-[#222] bg-[#111] overflow-hidden relative transition-all duration-[400ms] cursor-pointer" style={{transform:`rotate(${rotations[i]}deg)`}}
              onMouseEnter={e=>{e.currentTarget.style.transform='rotate(0deg) scale(1.03)';e.currentTarget.style.borderColor='var(--color-accent)';e.currentTarget.style.boxShadow='0 0 30px var(--color-accent-glow), 4px 4px 0 #000';e.currentTarget.style.zIndex='10';}}
              onMouseLeave={e=>{e.currentTarget.style.transform=`rotate(${rotations[i]}deg)`;e.currentTarget.style.borderColor='#222';e.currentTarget.style.boxShadow='none';e.currentTarget.style.zIndex='1';}}
              onClick={()=>{const f=document.createElement('div');f.style.cssText='position:fixed;inset:0;background:rgba(255,255,255,0.15);pointer-events:none;z-index:9998;';document.body.appendChild(f);gsap.to(f,{opacity:0,duration:0.3,onComplete:()=>f.remove()});}}>
              <div className="w-full aspect-[4/3] overflow-hidden border-b-[3px] border-[#222]">{p.svg}</div>
              <div className="p-5 relative"><div className="absolute -top-6 right-2.5 font-heading text-5xl text-accent opacity-30 leading-none">{p.num}</div><h3 className="font-heading text-2xl tracking-[0.1875rem] text-panel mb-2.5">{p.title}</h3><div className="w-10 h-[2px] bg-accent mb-3" /><p className="font-body text-sm leading-relaxed text-gray-400 mb-4">{p.desc}</p><div className="flex flex-wrap gap-1.5">{p.tags.map((t,j)=><span key={j} className="tech-tag">{t}</span>)}</div></div>
            </div></div>))}
          </div>
        </div>
      </div>
    </section>
  );
}
