import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const skills = [{name:'JAVA',value:90},{name:'REACT',value:85},{name:'PYTHON',value:75},{name:'MYSQL',value:80},{name:'DSA',value:85}];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skills-header',{scrollTrigger:{trigger:'.skills-header',start:'top 80%',toggleActions:'play none none reverse'},opacity:0,y:40,duration:1,ease:'power3.out'});
      gsap.from('.skills-warrior',{scrollTrigger:{trigger:'.skills-layout',start:'top 75%',toggleActions:'play none none reverse'},opacity:0,x:-60,duration:1,ease:'power3.out'});
      gsap.from('.warrior-kanji',{scrollTrigger:{trigger:'.skills-warrior',start:'top 70%',toggleActions:'play none none reverse'},opacity:0,scale:0.5,duration:0.8,delay:0.5,ease:'back.out(1.7)'});
      ScrollTrigger.create({trigger:'.skills-bars',start:'top 75%',onEnter:()=>{
        if(animated)return;setAnimated(true);
        skills.forEach((s,i)=>{
          gsap.to(`.skill-fill-${i}`,{width:`${s.value}%`,duration:1.5,delay:i*0.15,ease:'power2.out'});
          gsap.to({},{duration:1.5,delay:i*0.15,ease:'power2.out',onUpdate:function(){const el=document.querySelector(`.skill-pct-${i}`);if(el)el.textContent=Math.round(this.progress()*s.value)+'%';}});
        });
      }});
    }, sectionRef);
    return () => ctx.revert();
  }, [animated]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-ink flex items-center justify-center p-5">
      <div className="manga-panel w-full max-w-[1400px] min-h-[90vh]">
        <div className="manga-inner relative p-10 md:p-16 overflow-hidden">
          <div className="skills-header text-center mb-12 relative z-[2]">
            <div className="section-label">04 — MY SKILLS</div>
            <div className="section-label-jp mb-2.5">私のスキル</div>
            <h2 className="section-heading text-[clamp(3rem,6vw,5rem)]">MY SKILLS</h2>
          </div>
          <div className="skills-layout flex gap-[60px] items-center relative z-[2] flex-wrap">
            <div className="skills-warrior flex-1 min-w-[250px] text-center">
              <svg viewBox="0 0 300 400" className="warrior-stance w-[250px] h-[340px] mx-auto">
                <ellipse cx="150" cy="200" rx="120" ry="180" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.15"><animate attributeName="rx" values="120;130;120" dur="3s" repeatCount="indefinite"/></ellipse>
                <ellipse cx="150" cy="200" rx="100" ry="160" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.2"><animate attributeName="ry" values="160;170;160" dur="2.5s" repeatCount="indefinite"/></ellipse>
                <ellipse cx="150" cy="170" rx="35" ry="45" fill="#111"/>
                <circle cx="150" cy="110" r="28" fill="#111"/>
                <path d="M122,105 Q150,95 178,105" stroke="#22c55e" strokeWidth="3" fill="none"/>
                <circle cx="142" cy="108" r="3" fill="#22c55e"/>
                <circle cx="158" cy="108" r="3" fill="#22c55e"/>
                <line x1="120" y1="150" x2="80" y2="100" stroke="#111" strokeWidth="10" strokeLinecap="round"/>
                <line x1="80" y1="100" x2="40" y2="30" stroke="#22c55e" strokeWidth="3"/>
                <rect x="75" y="95" width="10" height="20" fill="#22c55e" rx="2"/>
                <line x1="180" y1="150" x2="220" y2="130" stroke="#111" strokeWidth="10" strokeLinecap="round"/>
                <line x1="135" y1="210" x2="110" y2="300" stroke="#111" strokeWidth="12" strokeLinecap="round"/>
                <line x1="165" y1="210" x2="190" y2="300" stroke="#111" strokeWidth="12" strokeLinecap="round"/>
              </svg>
              <div className="warrior-kanji font-jp text-[3.5rem] font-black text-accent mt-5" style={{textShadow:'0 0 30px var(--color-accent-glow)'}}>三刀流</div>
              <div className="font-heading text-sm tracking-[0.5rem] text-accent opacity-70 mt-1.5">SANTORYU</div>
            </div>
            <div className="skills-bars flex-[1.5] min-w-[300px] relative">
              {skills.map((s,i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="font-heading text-xl tracking-[0.25rem] text-panel">{s.name}</span>
                    <span className={`font-heading text-xl skill-pct-${i} text-accent`}>0%</span>
                  </div>
                  <div className="w-full h-3 bg-[#1a1a1a] border-2 border-[#333] relative overflow-hidden">
                    <div className={`skill-fill-${i} h-full w-0 bg-gradient-to-r from-accent-dark to-accent relative`}>
                      <div className="skill-shine absolute top-0 left-0 w-[30%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute top-1/2 -right-2.5 -translate-y-1/2 opacity-15">
                <svg viewBox="0 0 60 60" className="w-20 h-20">
                  <line x1="10" y1="50" x2="50" y2="10" stroke="#22c55e" strokeWidth="3"/>
                  <line x1="50" y1="50" x2="10" y2="10" stroke="#22c55e" strokeWidth="3"/>
                  <circle cx="30" cy="30" r="8" fill="#22c55e" opacity="0.3"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
