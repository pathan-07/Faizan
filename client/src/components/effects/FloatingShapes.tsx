"use client"; // Sabse important: Yeh component ko client-side banata hai

import React, { useState, useEffect } from 'react';

// Shape ke data ke liye ek type define karna acchi practice hai
interface Shape {
  id: number;
  left: string;
  size: string;
  animationDuration: string;
  animationDelay: string;
}

// Props interface jo component ko customizable banata hai
interface FloatingShapesProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
}

const FloatingShapes: React.FC<FloatingShapesProps> = ({
  count = 10,
  minSize = 20,
  maxSize = 80,
  minDuration = 15,
  maxDuration = 35,
}) => {
  // useState ko type <Shape[]> ke saath initialize kiya hai taaki TypeScript ko pata ho ki ismein kya data aayega
  const [shapes, setShapes] = useState<Shape[]>([]);

  // useEffect ka istemal karke hum yeh sunishchit karte hain ki yeh code sirf browser mein chalega
  useEffect(() => {
    const generatedShapes = Array.from({ length: count }).map((_, index) => {
      const size = Math.floor(Math.random() * (maxSize - minSize)) + minSize;
      return {
        id: index,
        left: `${Math.random() * 100}%`,
        size: `${size}px`,
        animationDuration: `${minDuration + Math.random() * (maxDuration - minDuration)}s`,
        animationDelay: `${Math.random() * 10}s`,
      };
    });
    setShapes(generatedShapes);
  }, [count, minSize, maxSize, minDuration, maxDuration]); // Props ko dependencies mein add kiya hai

  // If no shapes are visible, we might have a rendering issue
  if (shapes.length === 0) {
    console.log("Warning: No shapes generated in FloatingShapes component");
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="floating-shapes-container relative w-full h-full">
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="shape"
            style={{
              left: shape.left,
              width: shape.size,
              height: shape.size,
              animationDuration: shape.animationDuration,
              animationDelay: shape.animationDelay,
              // Using CSS variable for theme-aware coloring
              backgroundColor: `hsl(var(--primary) / ${Math.random() * 0.15 + 0.1})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingShapes;
