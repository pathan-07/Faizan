import React, { useEffect, useRef } from 'react';

interface FloatingTextProps {
  text: string;
  position: [number, number, number];
  color?: string;
  fontSize?: number;
  rotation?: number;
}

const FloatingSkillCube: React.FC<{ skills?: string[] }> = ({ 
  skills = [
    "JavaScript", "React", "Node.js", "TypeScript", 
    "HTML/CSS", "Python", "SQL", "AWS",
    "UI/UX", "Git", "REST API", "MongoDB"
  ] 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cubeFacesRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let rotateX = 0;
    let rotateY = 0;
    let rotateZ = 0;
    
    const animate = () => {
      rotateX += 0.005;
      rotateY += 0.01;
      
      container.style.transform = `rotateX(${rotateX}rad) rotateY(${rotateY}rad) rotateZ(${rotateZ}rad)`;
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Use only the skills that will fit on the cube (6 faces)
  const displaySkills = skills.slice(0, 6);
  
  return (
    <div className="flex justify-center items-center h-full perspective-500">
      <div 
        ref={containerRef}
        className="cube relative w-32 h-32 transform-style-3d"
      >
        {displaySkills.map((skill, index) => {
          // Position for each face of the cube
          let style: React.CSSProperties = {};
          
          switch(index) {
            case 0: // front
              style = { transform: 'translateZ(64px)' };
              break;
            case 1: // back
              style = { transform: 'rotateY(180deg) translateZ(64px)' };
              break;
            case 2: // right
              style = { transform: 'rotateY(90deg) translateZ(64px)' };
              break;
            case 3: // left
              style = { transform: 'rotateY(-90deg) translateZ(64px)' };
              break;
            case 4: // top
              style = { transform: 'rotateX(90deg) translateZ(64px)' };
              break;
            case 5: // bottom
              style = { transform: 'rotateX(-90deg) translateZ(64px)' };
              break;
          }
          
          return (
            <div
              key={index}
              ref={el => el && (cubeFacesRef.current[index] = el)}
              className="cube-face absolute w-full h-full bg-[#2D2D2D] border-2 border-[#6366F1] flex justify-center items-center"
              style={style}
            >
              <span className="text-center font-bold text-white">
                {skill}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingSkillCube;