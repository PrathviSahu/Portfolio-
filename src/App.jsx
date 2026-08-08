import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Loader from './components/Loader';
import InkCanvas from './components/InkCanvas';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    let lastSection = '';
    const checkImpact = () => {
      const sections = document.querySelectorAll('section');
      const wh = window.innerHeight;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const id = section.id;
        if (rect.top < wh * 0.4 && rect.bottom > wh * 0.4 && id !== lastSection && id) {
          lastSection = id;
          if (id !== 'hero') {
            const flash = document.createElement('div');
            flash.style.cssText = 'position:fixed;inset:0;background:white;opacity:0.12;pointer-events:none;z-index:9998;';
            document.body.appendChild(flash);
            gsap.to(flash, { opacity: 0, duration: 0.25, ease: 'power2.out', onComplete: () => flash.remove() });
          }
        }
      });
    };
    window.addEventListener('scroll', checkImpact, { passive: true });
    return () => window.removeEventListener('scroll', checkImpact);
  }, []);
  useEffect(() => {
    ScrollTrigger.create({ trigger: '#hero', start: 'top top', end: '300px top',
      onUpdate: (self) => { const ind = document.querySelector('.scroll-enter'); if (ind) ind.style.opacity = 1 - self.progress; }
    });
  }, []);
  return (<>
    <Loader onComplete={() => setLoaded(true)} />
    <InkCanvas />
    <Hero loaded={loaded} />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <footer className="bg-ink py-8 text-center border-t border-[#1a1a1a]">
      <p className="font-body text-xs tracking-[0.25rem] text-gray-500">Designed with discipline. Built with precision.</p>
      <p className="font-jp text-xl text-accent opacity-30 mt-2.5">侍の精神</p>
    </footer>
  </>);
}
