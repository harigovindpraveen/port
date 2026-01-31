
import React, { useRef, useEffect } from 'react';
import { SKILLS } from '../constants';

const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !canvas.parentElement) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    const borderColor = getComputedStyle(document.documentElement).getPropertyValue('--border-color').trim();

    let skillNodes: SkillNode[] = [];
    const baseRadius = 10;
    const hoverRadius = 14;
    let animationFrameId: number;


    const setCanvasSize = () => {
      canvas.width = canvas.parentElement!.clientWidth;
      canvas.height = canvas.parentElement!.clientHeight;
    };

    setCanvasSize();
    
    class SkillNode {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      label: string;
      baseRadius: number;

      constructor(label: string) {
        this.x = Math.random() * (canvas.width - hoverRadius * 2) + hoverRadius;
        this.y = Math.random() * (canvas.height - hoverRadius * 2) + hoverRadius;
        this.baseRadius = baseRadius;
        this.radius = this.baseRadius;
        this.speedX = (Math.random() - 0.5) * 0.2; // Reduced speed
        this.speedY = (Math.random() - 0.5) * 0.2; // Reduced speed
        this.label = label;
      }

      update(mousePos: { x: number, y: number }) {
        // Wall collision with bounce
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.speedX *= -1;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.speedY *= -1;
        }
        
        this.x += this.speedX;
        this.y += this.speedY;

        // Simple mouse hover interaction (grow)
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const targetRadius = (distance < this.radius + 60) ? hoverRadius : this.baseRadius;
        this.radius += (targetRadius - this.radius) * 0.1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        
        if (this.radius > baseRadius * 1.2) {
            ctx.fillStyle = borderColor;
            ctx.font = 'bold 14px "Work Sans"';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.label, this.x, this.y - this.radius - 12);
        }
      }
    }

    function init() {
      skillNodes = [];
      const skillsToShow = canvas.width < 768 ? SKILLS.slice(0, 6) : SKILLS;
      skillsToShow.forEach(skill => {
        skillNodes.push(new SkillNode(skill.name));
      });
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const node of skillNodes) {
        node.update(mouse.current);
        node.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    
    init();
    animate();

    const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.current.x = event.clientX - rect.left;
        mouse.current.y = event.clientY - rect.top;
    };
    
    const handleMouseOut = () => {
        mouse.current.x = -2000;
        mouse.current.y = -2000;
    };

    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = canvas.getBoundingClientRect();
        mouse.current.x = touch.clientX - rect.left;
        mouse.current.y = touch.clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.current.x = -2000;
      mouse.current.y = -2000;
    };
    
    const handleResize = () => {
        setCanvasSize();
        init();
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseout', handleMouseOut);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd);


    return () => {
        window.removeEventListener('resize', handleResize);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseout', handleMouseOut);
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchend', handleTouchEnd);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default ParticleCanvas;