import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FallingLeaves from './FallingLeaves';
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const sectionRef = useRef(null);
  useEffect(() => { const ctx = gsap.context(() => {
    gsap.from('.about-label',{scrollTrigger:{trigger:'.about-content',start:'top 80%',toggleActions:'play none none reverse'},opacity:0,x:-50,duration:0.8,ease:'power2.out'});
    gsap.from('.about-heading',{scrollTrigger:{trigger:'.about-content',start:'top 75%',toggleActions:'play none none reverse'},opacity:0,x:-60,duration:1,ease:'power3.out'});
    gsap.from('.about-heading-line',{scrollTrigger:{trigger:'.about-content',start:'top 70%',toggleActions:'play none none reverse'},width:0,duration:0.8,delay:0.3,ease:'power2.out'});
    gsap.from('.about-text',{scrollTrigger:{trigger:'.about-content',start:'top 70%',toggleActions:'play none none reverse'},opacity:0,y:30,duration:0.8,stagger:0.2,ease:'power2.out'});
    gsap.from('.about-quote',{scrollTrigger:{trigger:'.about-content',start:'top 60%',toggleActions:'play none none reverse'},opacity:0,x:60,duration:1,ease:'power3.out'});
    gsap.to('.wano-mountains',{scrollTrigger:{trigger:'#about',start:'top bottom',end:'bottom top',scrub:1},y:-50,ease:'none'});
    gsap.to('.wano-moon',{scrollTrigger:{trigger:'#about',start:'top bottom',end:'bottom top',scrub:1.5},y:-80,ease:'none'});
  }, sectionRef); return () => ctx.revert(); }, []);
  return (
    <section id="about" ref={sectionRef} className="relative w-full min-h-screen bg-ink flex items-center justify-center p-5">
      <div className="manga-panel w-full max-w-[1400px] min-h-[90vh]">
        <div className="manga-inner relative overflow-hidden p-10 md:p-16 min-h-[90vh] flex flex-col justify-end">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-ink via-[#1a1510] via-50% to-transparent" />
            <div className="wano-moon absolute top-[15%] right-[20%] w-20 h-20 rounded-full" style={{background:'radial-gradient(circle at 35% 35%, #f5f0e8 0%, #d4cfc5 50%, #8a8580 100%)',boxShadow:'0 0 60px rgba(245,240,232,0.15)'}} />
            <div className="wano-mountains absolute bottom-[25%] w-full h-[40%]">
              <div className="absolute bottom-0 left-[5%] w-0 h-0 border-l-[180px] border-r-[220px] border-l-transparent border-r-transparent border-b-[280px] border-b-[#111]" />
              <div className="absolute bottom-0 left-[30%] w-0 h-0 border-l-[220px] border-r-[200px] border-l-transparent border-r-transparent border-b-[320px] border-b-[#0f0f0f]" />
              <div className="absolute bottom-0 right-[5%] w-0 h-0 border-l-[200px] border-r-[180px] border-l-transparent border-r-transparent border-b-[260px] border-b-[#121212]" />
            </div>
            <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 opacity-70"><svg viewBox="0 0 300 200" className="w-[150px] h-[100px]"><rect x="120" y="130" width="60" height="70" fill="#111"/><rect x="140" y="150" width="20" height="50" fill="#0a0a0a"/><polygon points="80,130 220,130 200,100 100,100" fill="#111"/><polygon points="100,100 200,100 180,75 120,75" fill="#111"/><polygon points="120,75 180,75 160,50 140,50" fill="#111"/><line x1="150" y1="50" x2="150" y2="30" stroke="#22c55e" strokeWidth="2" opacity="0.5"/></svg></div>
            <div className="absolute bottom-[25%] left-[15%] opacity-40"><svg viewBox="0 0 200 150" className="w-[100px] h-[75px]"><rect x="40" y="30" width="8" height="120" fill="#111"/><rect x="152" y="30" width="8" height="120" fill="#111"/><rect x="20" y="20" width="160" height="8" fill="#111"/><polygon points="15,15 185,15 175,5 25,5" fill="#111"/></svg></div>
            <div className="absolute bottom-[25%] right-[8%] opacity-50"><svg viewBox="0 0 200 250" className="w-[100px] h-[125px]"><rect x="75" y="180" width="50" height="70" fill="#111"/><polygon points="50,180 150,180 135,155 65,155" fill="#111"/><polygon points="65,155 135,155 120,130 80,130" fill="#111"/></svg></div>
            <div className="fog-drift absolute top-[40%] w-[200%] h-[60px] bg-gradient-to-r from-transparent via-white/5 via-50% to-transparent" />
            <div className="fog-drift absolute top-[50%] w-[200%] h-[60px] bg-gradient-to-r from-transparent via-white/5 via-50% to-transparent" style={{animationDirection:'reverse',animationDuration:'30s'}} />
            <div className="absolute bottom-0 w-full h-[25%] bg-gradient-to-b from-ink to-[#111]" />
            <div className="absolute bottom-[15%] right-[10%] z-[3]"><svg viewBox="0 0 250 300" className="w-[120px] h-[150px] opacity-80"><ellipse cx="125" cy="200" rx="40" ry="50" fill="#0a0a0a"/><circle cx="125" cy="140" r="25" fill="#0a0a0a"/><ellipse cx="110" cy="250" rx="30" ry="15" fill="#0a0a0a"/><ellipse cx="140" cy="250" rx="30" ry="15" fill="#0a0a0a"/><line x1="80" y1="220" x2="170" y2="230" stroke="#22c55e" strokeWidth="2.5" opacity="0.6"/></svg></div>
          </div>
          <FallingLeaves density={1} />
          <div className="about-content relative z-[5] max-w-[600px]">
            <div className="about-label section-label">02 — ABOUT ME</div><div className="about-label-jp section-label-jp mb-5">私の物語</div>
            <h2 className="about-heading section-heading text-[clamp(3rem,6vw,5rem)] leading-none mb-4">ABOUT ME</h2>
            <div className="about-heading-line heading-line mb-6" />
            <p className="about-text font-body text-[1.05rem] leading-[1.7] text-gray-300 mb-4">A passionate developer who believes in building impactful digital experiences. I turn ideas into real world solutions.</p>
            <p className="about-text font-body text-[1.05rem] leading-[1.7] text-gray-300 mb-4">Like a swordsman who trains every single day — no shortcuts, no excuses. Every line of code is a strike of the blade.</p>
            <div className="about-quote mt-8 pl-5 border-l-[3px] border-accent relative">
              <span className="font-heading text-5xl text-accent opacity-50 leading-none">"</span>
              <p className="font-jp text-xl text-panel my-2.5 tracking-wider">背中の傷は剣士の恥だ</p>
              <p className="font-body text-base italic text-gray-400 leading-relaxed">"Scars on the back are a swordsman's shame."</p>
              <span className="block font-heading text-sm tracking-[0.25rem] text-accent mt-2.5">— RORONOA ZORO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
