import { useEffect, useState } from 'react';
import gsap from 'gsap';
export default function Loader({ onComplete }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => { const t = setTimeout(() => { gsap.to('.loader-wrapper', { opacity: 0, duration: 1, ease: 'power2.inOut', onComplete: () => { setHidden(true); onComplete?.(); } }); }, 2800); return () => clearTimeout(t); }, [onComplete]);
  if (hidden) return null;
  return (<div className="loader-wrapper fixed inset-0 bg-ink z-[9999] flex flex-col items-center justify-center"><div className="font-jp text-4xl md:text-6xl font-black text-accent tracking-widest loader-pulse mb-10">未来を切り開け</div><div className="w-72 max-w-[80vw] h-[3px] bg-gray-800 rounded overflow-hidden mb-5"><div className="h-full bg-gradient-to-r from-accent-dark to-accent rounded loader-fill shadow-[0_0_10px_var(--color-accent)]" /></div><div className="font-body text-xs tracking-[0.375rem] text-gray-600">LOADING PROTOCOL...</div></div>);
}
