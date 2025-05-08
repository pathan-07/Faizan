import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingTextProps {
  text: string;
  position: [number, number, number];
  color?: string;
  fontSize?: number;
  rotation?: number;
}

const FloatingText: React.FC<FloatingTextProps> = ({ 
  text, 
  position, 
  color = 'white',
  fontSize = 0.5,
  rotation = 0.01
}) => {
  const textRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      textRef.current.rotation.y += rotation;
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      color={color}
      fontSize={fontSize}
      font="/fonts/Poppins-Bold.ttf"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
};

interface AnimatedCubeProps {
  position?: [number, number, number];
  color?: string;
  size?: [number, number, number];
  speed?: number;
  wireframe?: boolean;
}

const AnimatedCube: React.FC<AnimatedCubeProps> = ({
  position = [0, 0, 0],
  color = '#6366F1',
  size = [1, 1, 1],
  speed = 0.5,
  wireframe = false
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * speed * 0.5;
      meshRef.current.rotation.y = clock.getElapsedTime() * speed;
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Box
      ref={meshRef}
      args={size}
      position={position}
    >
      <meshStandardMaterial 
        color={color} 
        wireframe={wireframe} 
        transparent 
        opacity={0.7}
      />
    </Box>
  );
};

interface FloatingCubeProps {
  skills?: string[];
}

const FloatingCube: React.FC<FloatingCubeProps> = ({ 
  skills = ["React", "TypeScript", "Node.js", "Python", "CSS", "HTML"] 
}) => {
  return (
    <div className="h-80 w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Center cube */}
        <AnimatedCube 
          position={[0, 0, 0]} 
          color="#6366F1" 
          size={[2, 2, 2]} 
          wireframe={true}
          speed={0.3}
        />
        
        {/* Render skill texts around the cube */}
        {skills.slice(0, 6).map((skill, index) => {
          // Position skills in a circle around the cube
          const angle = (index / 6) * Math.PI * 2;
          const radius = 4;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          const y = Math.sin(index * 0.5) * 1.5;
          
          return (
            <FloatingText 
              key={index}
              text={skill}
              position={[x, y, z]}
              color={index % 2 === 0 ? '#8B5CF6' : '#6366F1'}
              fontSize={0.4}
              rotation={0.005 + (index * 0.002)}
            />
          );
        })}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
};

export default FloatingCube;