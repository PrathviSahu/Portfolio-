import { useEffect, useRef } from 'react';
export default function InkCanvas() {
  const canvasRef = useRef(null); const dropsRef = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current; const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }; resize();
    window.addEventListener('resize', resize);
    class InkDrop { constructor(x,y) { this.x=x;this.y=y;this.radius=2;this.maxRadius=25+Math.random()*35;this.speed=0.4+Math.random()*1.2;this.opacity=0.5;this.fadeSpeed=0.008+Math.random()*0.008; } update() { if(this.radius<this.maxRadius)this.radius+=this.speed;this.opacity-=this.fadeSpeed;return this.opacity>0; } draw(ctx) { ctx.beginPath();ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);ctx.fillStyle=`rgba(34,197,94,${this.opacity*0.08})`;ctx.fill();ctx.beginPath();ctx.arc(this.x,this.y,this.radius*0.6,0,Math.PI*2);ctx.strokeStyle=`rgba(34,197,94,${this.opacity*0.15})`;ctx.lineWidth=0.8;ctx.stroke(); } }
    const hm = (e) => { if(Math.random()>0.75) dropsRef.current.push(new InkDrop(e.clientX+(Math.random()-0.5)*10, e.clientY+(Math.random()-0.5)*10)); };
    document.addEventListener('mousemove', hm);
    let raf; const loop = () => { ctx.clearRect(0,0,canvas.width,canvas.height); dropsRef.current = dropsRef.current.filter(d => { const a=d.update(); if(a)d.draw(ctx); return a; }); if(dropsRef.current.length>50) dropsRef.current=dropsRef.current.slice(-50); raf=requestAnimationFrame(loop); }; loop();
    return () => { cancelAnimationFrame(raf); document.removeEventListener('mousemove', hm); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1000] mix-blend-screen" />;
}
