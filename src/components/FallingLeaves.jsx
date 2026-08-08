import { useEffect, useRef, useCallback } from 'react';
export default function FallingLeaves({ density = 1 }) {
  const leavesContainerRef = useRef(null);
  const animationRef = useRef(null);
  const leavesRef = useRef([]);
  const timeRef = useRef(0);
  const spawnTimerRef = useRef(0);
  const LEAF_PATHS = ['M50,0 C60,15 75,15 80,30 C90,25 100,35 95,50 C110,55 110,75 95,80 C100,95 85,105 70,95 C65,110 35,110 30,95 C15,105 0,95 5,80 C-10,75 -10,55 5,50 C0,35 10,25 20,30 C25,15 40,15 50,0Z','M50,5 C70,10 90,30 90,55 C90,80 70,95 50,95 C30,95 10,80 10,55 C10,30 30,10 50,5Z','M50,0 L85,35 L75,65 L90,95 L50,85 L10,95 L25,65 L15,35 Z'];
  const createLeaf = useCallback(() => {
    const container = leavesContainerRef.current; if (!container) return null;
    const cw = container.offsetWidth; const depth = Math.random();
    const leaf = { id: Date.now()+Math.random(), x: Math.random()*cw-50, y: -30-Math.random()*50, rotation: Math.random()*360, rotationSpeed: (Math.random()-0.5)*3, scale: 0.4+depth*0.8, speed: 0.5+depth*1.5, drift: (Math.random()-0.3)*1.5, opacity: 0.2+depth*0.5, wobbleAmp: 10+depth*20, wobbleSpeed: 0.01+Math.random()*0.02, wobbleOffset: Math.random()*Math.PI*2, pathIndex: Math.floor(Math.random()*LEAF_PATHS.length), colorVariant: Math.random(), element: null };
    const el = document.createElement('div'); el.style.cssText = 'position:absolute;pointer-events:none;will-change:transform,opacity;';
    const size = 15*leaf.scale; const svgSize = size*2;
    const r = Math.floor(20+leaf.colorVariant*20); const g = Math.floor(140+leaf.colorVariant*60); const b = Math.floor(60+leaf.colorVariant*40);
    const lc = `rgb(${r},${g},${b})`;
    el.innerHTML = `<svg width="${svgSize}" height="${svgSize}" viewBox="0 0 100 100" style="overflow:visible"><path d="${LEAF_PATHS[leaf.pathIndex]}" fill="${lc}" opacity="${0.7+leaf.colorVariant*0.3}"/><line x1="50" y1="20" x2="50" y2="85" stroke="${lc}" stroke-width="0.8" opacity="0.4"/></svg>`;
    el.style.width = `${size}px`; el.style.height = `${size}px`;
    container.appendChild(el); leaf.element = el; return leaf;
  }, []);
  const animate = useCallback(() => {
    const container = leavesContainerRef.current; if (!container) return;
    const ch = container.offsetHeight; const cw = container.offsetWidth;
    timeRef.current += 1; const t = timeRef.current;
    spawnTimerRef.current += 1; const spawnRate = Math.max(8, 30-density*5);
    if (spawnTimerRef.current > spawnRate) { spawnTimerRef.current = 0; const nl = createLeaf(); if (nl) leavesRef.current.push(nl); }
    leavesRef.current = leavesRef.current.filter(leaf => {
      if (!leaf.element) return false;
      leaf.y += leaf.speed; const wobble = Math.sin(t*leaf.wobbleSpeed+leaf.wobbleOffset)*leaf.wobbleAmp*0.02;
      leaf.x += leaf.drift+wobble; leaf.rotation += leaf.rotationSpeed;
      let opacity = leaf.opacity; if (leaf.y<50) opacity *= leaf.y/50; if (leaf.y>ch-100) opacity *= (ch-leaf.y)/100;
      leaf.element.style.transform = `translate(${leaf.x}px,${leaf.y}px) rotate(${leaf.rotation}deg)`; leaf.element.style.opacity = opacity;
      if (leaf.y>ch+50||leaf.x<-100||leaf.x>cw+100) { leaf.element.remove(); return false; } return true;
    });
    if (leavesRef.current.length>80) { const r2 = leavesRef.current.splice(0,leavesRef.current.length-80); r2.forEach(l=>l.element?.remove()); }
    animationRef.current = requestAnimationFrame(animate);
  }, [createLeaf, density]);
  useEffect(() => { animationRef.current = requestAnimationFrame(animate); return () => { if (animationRef.current) cancelAnimationFrame(animationRef.current); leavesRef.current.forEach(l=>l.element?.remove()); leavesRef.current=[]; }; }, [animate]);
  return <div ref={leavesContainerRef} className="absolute inset-0 pointer-events-none overflow-hidden" style={{zIndex:4}} />;
}
