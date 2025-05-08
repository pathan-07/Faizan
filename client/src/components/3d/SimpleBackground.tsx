import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Animated floating sphere with basic material
const AnimatedSphere = ({ 
  position = [0, 0, 0] as [number, number, number],
  color = '#6366F1',
  size = 1,
  speed = 0.5
}) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.position.y = Math.sin(clock.getElapsedTime() * speed) * 0.2;
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

// Simple particles
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

// Simpler 3D background that's more compatible with different versions
const SimpleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <AnimatedSphere 
          position={[-3, 0, -2]} 
          color="#6366F1" 
          size={1.5} 
          speed={0.4}
        />
        <AnimatedSphere 
          position={[3, 1, -4]} 
          color="#8B5CF6" 
          size={2} 
          speed={0.3}
        />
        <AnimatedSphere 
          position={[0, -2, -3]} 
          color="#34D399" 
          size={1} 
          speed={0.5}
        />
        
        <Particles count={100} color="#8B5CF6" />
      </Canvas>
    </div>
  );
};

export default SimpleBackground;