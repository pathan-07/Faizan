import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface ParticleBackgroundProps {
  count?: number;
  colors?: string[];
  opacity?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  count = 100,
  colors = ['#6366F1', '#8B5CF6', '#34D399'],
  opacity = 0.5,
  minSize = 1,
  maxSize = 5,
  speed = 0.5,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const requestIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      // Set canvas size to container size, not window size to prevent overflow
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      } else {
        // Fallback to window size but constrain to avoid overflow
        canvas.width = Math.min(window.innerWidth, document.body.clientWidth);
        canvas.height = window.innerHeight;
      }
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Connect particles that are close
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particle.color + Math.floor((opacity * 0.2) * 255).toString(16).padStart(2, '0');
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
      });

      requestIdRef.current = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    drawParticles();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestIdRef.current);
    };
  }, [count, colors, opacity, minSize, maxSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 -z-10 w-full h-full max-w-full overflow-hidden ${className}`}
      style={{ maxWidth: '100%' }}
    />
  );
};

export default ParticleBackground;