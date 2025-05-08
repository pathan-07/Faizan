import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface AnimatedSphereProps {
  position?: [number, number, number];
  color?: string;
  speed?: number;
  distort?: number;
  radius?: number;
  rotation?: number;
}

// Animated floating sphere component
const AnimatedSphere: React.FC<AnimatedSphereProps> = ({ 
  position = [0, 0, 0] as [number, number, number], 
  color = '#6366F1', 
  speed = 0.5,
  distort = 0.4,
  radius = 1,
  rotation = 0.01
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * speed) * 0.2;
      meshRef.current.rotation.x += rotation;
      meshRef.current.rotation.y += rotation * 0.5;
    }
  });

  return (
    <Sphere
      ref={meshRef}
      args={[radius, 64, 64]}
      position={position}
    >
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={1}
        roughness={0.5}
        metalness={0.3}
      />
    </Sphere>
  );
};

// Animated small particles floating in the background
const Particles = ({ count = 50, color = '#6366F1' }) => {
  const particles = useRef<THREE.Points>(null);
  
  useFrame(({ clock }) => {
    if (particles.current) {
      particles.current.rotation.x = clock.getElapsedTime() * 0.05;
      particles.current.rotation.y = clock.getElapsedTime() * 0.075;
    }
  });

  const particlePositions = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [count]);

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlePositions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color={color} 
        sizeAttenuation 
        transparent 
        opacity={0.6}
      />
    </points>
  );
};

// Main Hero Background Component
const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <AnimatedSphere 
          position={[-3, 0, -2]} 
          color="#6366F1" 
          radius={1.5} 
          distort={0.3}
          speed={0.4}
        />
        <AnimatedSphere 
          position={[3, 1, -4]} 
          color="#8B5CF6" 
          radius={2} 
          distort={0.5}
          speed={0.3}
          rotation={0.007}
        />
        <AnimatedSphere 
          position={[0, -2, -3]} 
          color="#34D399" 
          radius={1} 
          distort={0.2}
          speed={0.5}
          rotation={0.015}
        />
        <Particles count={100} color="#8B5CF6" />
      </Canvas>
    </div>
  );
};

export default HeroBackground;