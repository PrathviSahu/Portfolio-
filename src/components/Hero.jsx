import { useEffect, useRef } from 'react';
import gsap from 'gsap';
export default function Hero({ loaded }) {
  const realRef = useRef(null); const animeRef = useRef(null);
  useEffect(() => {
    if (!loaded) return;
    const tl = gsap.timeline({ delay: 0.3 });
    tl.from('.hero-name', { opacity: 0, y: 40, duration: 1.2, ease: 'power3.out' })
      .from('.hero-role', { opacity: 0, y: 30, duration: 1, ease: 'power3.out' }, '-=0.6')
      .from('.hero-subtitle', { opacity: 0, duration: 1, ease: 'power2.out' }, '-=0.6')
      .from('.hero-name-line', { width: 0, duration: 1, ease: 'power2.out' }, '-=0.8')
      .from('.scroll-enter', { opacity: 0, y: 20, duration: 1, ease: 'power2.out' }, '-=0.6');
  }, [loaded]);
  useEffect(() => {
    const hm = (e) => { const x=(e.clientX/window.innerWidth-0.5)*2; const y=(e.clientY/window.innerHeight-0.5)*2;
      if(realRef.current) realRef.current.style.transform=`translate(${x*-8}px,${y*-4}px)`;
      if(animeRef.current) animeRef.current.style.transform=`translate(${x*8}px,${y*4}px)`; };
    document.addEventListener('mousemove', hm); return () => document.removeEventListener('mousemove', hm);
  }, []);
  return (
    <section className="relative w-full min-h-screen bg-ink flex items-center justify-center p-5">
      <div className="manga-panel w-full max-w-[1400px] min-h-[95vh]">
        <div className="manga-inner h-full min-h-[95vh] relative flex">
          <div className="absolute top-0 left-0 w-1/2 h-full z-0"><svg viewBox="0 0 400 600" className="w-full h-full"><path className="ink-path" d="M0,0 C50,50 30,100 80,150 C120,200 60,250 100,300 C140,350 80,400 120,450 C160,500 100,550 150,600 L0,600 Z" fill="#111" style={{animationDelay:'1.5s'}}/><path className="ink-splatter" d="M50,100 C60,90 70,95 65,110 C60,125 45,120 50,100Z" fill="#111" style={{animationDelay:'2s'}}/></svg></div>
          <div className="absolute top-0 right-0 w-1/2 h-full z-0"><svg viewBox="0 0 400 600" className="w-full h-full"><path className="ink-path" d="M400,0 C350,50 370,100 320,150 C280,200 340,250 300,300 C260,350 320,400 280,450 C240,500 300,550 250,600 L400,600 Z" fill="#111" style={{animationDelay:'1.7s'}}/></svg></div>
          <div ref={realRef} className="flex-1 relative flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-ink overflow-hidden transition-all duration-600">
            <svg viewBox="0 0 400 500" className="w-[clamp(200px,30vw,350px)] h-auto">
              <path d="M120,400 Q140,340 200,330 Q260,340 280,400 L320,500 L80,500 Z" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
              <ellipse cx="200" cy="220" rx="95" ry="120" fill="#222" stroke="#444" strokeWidth="1"/>
              <path d="M110,180 C110,100 150,80 200,80 C250,80 290,100 290,180 C280,140 240,120 200,120 C160,120 120,140 110,180Z" fill="#111" stroke="#333" strokeWidth="2"/>
              <ellipse cx="165" cy="210" rx="18" ry="10" fill="#111"/><circle cx="168" cy="209" r="5" fill="#1a1a1a"/><circle cx="166" cy="208" r="2" fill="#444"/>
              <ellipse cx="235" cy="210" rx="18" ry="10" fill="#111"/><circle cx="238" cy="209" r="5" fill="#1a1a1a"/><circle cx="236" cy="208" r="2" fill="#444"/>
              <path d="M145,195 L180,192" stroke="#333" strokeWidth="3" strokeLinecap="round"/><path d="M220,192 L255,195" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
              <path d="M200,225 L196,255 L204,258" fill="none" stroke="#333" strokeWidth="1.5"/><path d="M182,285 Q200,292 218,285" fill="none" stroke="#444" strokeWidth="2"/>
              <circle cx="110" cy="240" r="6" fill="#22c55e" opacity="0.6"/><circle cx="110" cy="240" r="3" fill="#22c55e"/>
            </svg>
            <div className="absolute bottom-[15%] left-[25%] font-heading text-sm tracking-[0.5rem] text-gray-500">REALITY</div>
          </div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[60px] h-full z-10">
            <svg viewBox="0 0 60 600" className="w-full h-full" preserveAspectRatio="none">
              <path className="crack-line" d="M30,0 L25,40 L35,80 L22,120 L33,160 L20,200 L38,240 L25,280 L35,320 L22,360 L33,400 L20,440 L38,480 L25,520 L30,560 L30,600" stroke="#22c55e" strokeWidth="3" fill="none"/>
              <path className="crack-glow" d="M30,0 L25,40 L35,80 L22,120 L33,160 L20,200 L38,240 L25,280 L35,320 L22,360 L33,400 L20,440 L38,480 L25,520 L30,560 L30,600" stroke="#22c55e" strokeWidth="12" fill="none" opacity="0.15"/>
            </svg>
            {[20,35,50,65,80,45].map((top,i)=>(<span key={i} className="absolute w-1 h-1 bg-accent rounded-full crack-drop" style={{top:`${top}%`,left:'50%',animationDelay:`${2.5+i*0.3}s`}}/>))}
          </div>
          <div ref={animeRef} className="flex-1 relative flex items-center justify-center bg-gradient-to-br from-ink to-[#111] overflow-hidden transition-all duration-600">
            <div className="absolute w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl animate-pulse" />
            <svg viewBox="0 0 400 500" className="w-[clamp(200px,30vw,350px)] h-auto relative z-[2]">
              <defs><linearGradient id="eyeGlow" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4ade80"/><stop offset="100%" stopColor="#15803d"/></linearGradient><filter id="glowGreen"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
              <path d="M120,400 Q140,340 200,330 Q260,340 280,400 L320,500 L80,500 Z" fill="#111" stroke="#22c55e" strokeWidth="1.5" opacity="0.5"/>
              <ellipse cx="200" cy="220" rx="95" ry="120" fill="#1a1a1a" stroke="#22c55e" strokeWidth="1.5" opacity="0.6"/>
              <path d="M100,170 C95,120 120,70 170,65 C160,90 150,110 160,130 C170,100 190,75 200,75 C210,75 230,100 240,130 C250,110 240,90 230,65 C280,70 305,120 300,170 C290,140 260,120 200,120 C140,120 110,140 100,170Z" fill="#111"/>
              <path d="M105,160 Q200,130 295,160" stroke="#22c55e" strokeWidth="4" fill="none"/><path d="M105,170 Q200,140 295,170" stroke="#0a5c0a" strokeWidth="3" fill="none"/>
              <path d="M140,210 L185,205 L182,228 L143,230 Z" fill="#111" stroke="#22c55e" strokeWidth="1.5"/><rect x="150" y="210" width="28" height="16" fill="url(#eyeGlow)" filter="url(#glowGreen)"/><circle cx="162" cy="217" r="4" fill="#fff"/>
              <path d="M135,200 L180,196" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/>
              <path d="M218,205 L260,210 L257,230 L221,228 Z" fill="#111" stroke="#22c55e" strokeWidth="1.5"/><rect x="225" y="210" width="28" height="16" fill="url(#eyeGlow)" filter="url(#glowGreen)"/><circle cx="238" cy="217" r="4" fill="#fff"/>
              <path d="M220,196 L265,200" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/>
              <line x1="155" y1="240" x2="168" y2="280" stroke="#22c55e" strokeWidth="2.5" filter="url(#glowGreen)" opacity="0.8"/>
              <path d="M200,230 L196,260 L204,263" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.6"/>
              <path d="M180,295 L200,300 L220,295" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="105" cy="250" r="7" fill="none" stroke="#22c55e" strokeWidth="2" filter="url(#glowGreen)"/><circle cx="105" cy="275" r="7" fill="none" stroke="#22c55e" strokeWidth="2" filter="url(#glowGreen)"/><circle cx="105" cy="300" r="7" fill="none" stroke="#22c55e" strokeWidth="2" filter="url(#glowGreen)"/>
            </svg>
            <div className="absolute bottom-[15%] right-[25%] font-heading text-sm tracking-[0.5rem] text-accent z-[2]" style={{textShadow:'0 0 10px var(--color-accent-glow)'}}>PROTOCOL</div>
          </div>
          <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-center z-[20] w-[90%]">
            <div className="hero-name font-heading text-[clamp(2.5rem,6vw,5rem)] tracking-[0.75rem] text-panel mb-2.5" style={{textShadow:'0 0 40px rgba(245,240,232,0.2)'}}>PRATHVI SAHU</div>
            <div className="hero-name-line w-[120px] h-[2px] bg-accent mx-auto my-4 shadow-[0_0_10px_var(--color-accent)]" />
            <div className="hero-role font-body text-[clamp(0.9rem,1.5vw,1.2rem)] font-semibold tracking-[0.625rem] text-accent mb-2.5">FULL STACK DEVELOPER</div>
            <div className="hero-subtitle text-[0.85rem] tracking-[0.3125rem] text-gray-400 italic">Discipline. Precision. Execution.</div>
          </div>
          <div className="scroll-enter absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 z-[20]">
            <div className="w-10 h-10 border-2 border-accent rounded-full flex items-center justify-center scroll-bounce"><span className="text-accent text-xl">↓</span></div>
            <span className="text-[0.7rem] tracking-[0.25rem] text-gray-600">SCROLL TO ENTER</span>
          </div>
        </div>
      </div>
    </section>
  );
}
