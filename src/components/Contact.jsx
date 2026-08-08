import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const contactLinks = [
  { label:'GITHUB', href:'https://github.com/PrathviSahu', icon:<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/> },
  { label:'LINKEDIN', href:'https://linkedin.com/in/prathvisahu', icon:<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/> },
  { label:'EMAIL', href:'mailto:prathvisahu@example.com', icon:<path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/> },
  { label:'INSTAGRAM', href:'#', icon:<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/> },
];
export default function Contact() {
  const sectionRef = useRef(null);
  useEffect(() => { const ctx = gsap.context(() => {
    gsap.from('.contact-label',{scrollTrigger:{trigger:'.contact-content',start:'top 80%',toggleActions:'play none none reverse'},opacity:0,y:30,duration:0.8,ease:'power2.out'});
    gsap.from('.contact-heading',{scrollTrigger:{trigger:'.contact-content',start:'top 75%',toggleActions:'play none none reverse'},opacity:0,y:50,duration:1,ease:'power3.out'});
    gsap.from('.contact-link',{scrollTrigger:{trigger:'.contact-links',start:'top 80%',toggleActions:'play none none reverse'},opacity:0,y:30,duration:0.6,stagger:0.1,ease:'power2.out'});
    gsap.from('.final-quote',{scrollTrigger:{trigger:'.final-quote',start:'top 85%',toggleActions:'play none none reverse'},opacity:0,y:20,duration:1,ease:'power2.out'});
    gsap.to('.setting-sun',{scrollTrigger:{trigger:'#contact',start:'top bottom',end:'bottom top',scrub:1},y:-40,ease:'none'});
    gsap.to('.sun-reflection',{scrollTrigger:{trigger:'#contact',start:'top bottom',end:'bottom top',scrub:1.2},y:-30,ease:'none'});
    gsap.from('.shore-samurai',{scrollTrigger:{trigger:'#contact',start:'top 60%',toggleActions:'play none none reverse'},opacity:0,y:30,duration:1.5,ease:'power2.out'});
  }, sectionRef); return () => ctx.revert(); }, []);
  return (
    <section id="contact" ref={sectionRef} className="relative w-full min-h-screen bg-ink flex items-center justify-center p-5">
      <div className="manga-panel w-full max-w-[1400px] min-h-[90vh]">
        <div className="manga-inner relative p-10 md:p-16 overflow-hidden min-h-[90vh] flex flex-col justify-end">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[55%]" style={{background:'linear-gradient(to bottom, #0a0a0a 0%, #1a0808 15%, #3d1008 30%, #7c2d12 45%, #c2410c 55%, #ea580c 65%, #f97316 75%, #fbbf24 85%, #fde047 95%, transparent 100%)',opacity:0.5}} />
            <div className="setting-sun absolute top-[30%] left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full" style={{background:'radial-gradient(circle at 40% 40%, #fde047 0%, #f97316 50%, #ea580c 100%)',boxShadow:'0 0 40px rgba(251,191,36,0.4), 0 0 80px rgba(249,115,22,0.3)'}} />
            <div className="sun-reflection absolute top-[55%] left-1/2 -translate-x-1/2 w-[60px] h-[40%]" style={{background:'linear-gradient(to bottom, rgba(251,191,36,0.3), rgba(249,115,22,0.1), transparent)',filter:'blur(10px)'}} />
            <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-b from-[#1a0f08] via-[#0a0505] to-ink"><div className="ocean-wave wave-1" /><div className="ocean-wave wave-2" /><div className="ocean-wave wave-3" /></div>
            <div className="absolute bottom-[42%] left-[20%] opacity-40"><svg viewBox="0 0 60 40" className="w-[50px] h-[30px]"><path d="M10,30 L15,20 L45,20 L50,30 Z" fill="#0a0a0a"/><line x1="30" y1="20" x2="30" y2="5" stroke="#0a0a0a" strokeWidth="2"/><polygon points="30,5 45,15 30,15" fill="#0a0a0a"/></svg></div>
            <div className="absolute bottom-[44%] right-[25%] opacity-40" style={{transform:'scale(0.7)'}}><svg viewBox="0 0 60 40" className="w-[50px] h-[30px]"><path d="M10,30 L15,20 L45,20 L50,30 Z" fill="#0a0a0a"/><line x1="30" y1="20" x2="30" y2="5" stroke="#0a0a0a" strokeWidth="2"/><polygon points="30,5 45,15 30,15" fill="#0a0a0a"/></svg></div>
            {[{top:'20%',left:'15%',delay:0},{top:'25%',left:'60%',delay:3},{top:'18%',left:'80%',delay:6}].map((b,i)=>(<div key={i} className="absolute" style={{top:b.top,left:b.left,animation:`birdFly ${15+i*3}s linear infinite`,animationDelay:`${b.delay}s`}}><svg viewBox="0 0 30 10" className="w-[25px] h-[10px]"><path d="M0,5 Q7,0 15,5 Q23,0 30,5" fill="none" stroke="#0a0a0a" strokeWidth="1.5"/></svg></div>))}
          </div>
          <div className="shore-samurai absolute bottom-[5%] left-[10%] z-[3]"><svg viewBox="0 0 200 250" className="w-[150px] h-[190px]"><ellipse cx="100" cy="230" rx="80" ry="20" fill="#0a0a0a"/><ellipse cx="100" cy="170" rx="30" ry="40" fill="#0a0a0a"/><circle cx="100" cy="120" r="20" fill="#0a0a0a"/><path d="M80,118 Q100,112 120,118" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.5"/><ellipse cx="85" cy="215" rx="22" ry="12" fill="#0a0a0a"/><ellipse cx="115" cy="215" rx="22" ry="12" fill="#0a0a0a"/><line x1="40" y1="220" x2="160" y2="225" stroke="#22c55e" strokeWidth="2" opacity="0.4"/><path d="M80,160 Q70,190 80,210" stroke="#0a0a0a" strokeWidth="7" fill="none" strokeLinecap="round"/></svg></div>
          <div className="contact-content relative z-[5] text-center">
            <div className="section-label">05 — LET'S CONNECT</div><div className="section-label-jp mb-5">また会おう</div>
            <h2 className="contact-heading section-heading text-[clamp(2rem,5vw,4rem)] leading-tight mb-8">LET'S BUILD SOMETHING<br/>LEGENDARY <span className="text-accent" style={{textShadow:'0 0 20px var(--color-accent-glow)'}}>TOGETHER.</span></h2>
            <div className="flex justify-center mb-10"><svg viewBox="0 0 200 20" className="w-[200px] h-5"><line x1="0" y1="10" x2="85" y2="10" stroke="#333" strokeWidth="2"/><line x1="115" y1="10" x2="200" y2="10" stroke="#333" strokeWidth="2"/><line x1="90" y1="10" x2="110" y2="10" stroke="#22c55e" strokeWidth="3"/><circle cx="100" cy="10" r="4" fill="#22c55e" opacity="0.5"/></svg></div>
            <div className="contact-links flex justify-center gap-5 flex-wrap mb-10">
              {contactLinks.map((link,i)=>(<a key={i} href={link.href} className="contact-link flex items-center gap-2.5 px-6 py-3 border-2 border-[#333] bg-black/50 text-panel no-underline font-heading text-sm tracking-[0.1875rem] transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_var(--color-accent-glow)] hover:-translate-y-0.5 relative overflow-hidden group" target={link.href.startsWith('http')?'_blank':undefined}><div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-accent/15 to-transparent transition-all duration-500 group-hover:left-full" /><svg className="w-[18px] h-[18px] relative z-10" viewBox="0 0 24 24" fill="currentColor">{link.icon}</svg><span className="relative z-10">{link.label}</span></a>))}
            </div>
          </div>
          <div className="final-quote text-center py-8 border-t border-[#333] relative z-[5]"><p className="font-jp text-xl text-accent mb-2.5 tracking-wider opacity-80">強くなれる… それが唯一の地図だ</p><p className="font-body text-sm text-gray-400 tracking-[0.1875rem] italic">"I can get stronger... That's the only map." — RORONOA ZORO</p></div>
        </div>
      </div>
    </section>
  );
}
