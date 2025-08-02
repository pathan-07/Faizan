import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Sphere, Billboard, Stars, Trail, useTexture, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { glowPulseAnimation, orbitAnimation } from '../../lib/motion';

// --- CenterSphere Component ---
// Enhanced center sphere with glow effect
interface CenterSphereProps {
  color: string;
  onClick: () => void;
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
}

const CenterSphere = ({ color, onClick, hovered, setHovered }: CenterSphereProps) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  
  // For better glow effect
  const glowParams = useMemo(() => {
    return {
      minIntensity: 0.5,
      maxIntensity: 1.8,
      duration: 3
    };
  }, []);
  
  useFrame((state) => {
    if (sphereRef.current) {
      // Base pulse animation
      const pulseScale = 1 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.05;
      sphereRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      
      // Enhanced emissive intensity for glow effect
      if (sphereRef.current.material instanceof THREE.MeshStandardMaterial) {
        const material = sphereRef.current.material;
        material.emissiveIntensity = glowParams.minIntensity + 
          Math.sin(state.clock.getElapsedTime() * 0.8) * 
          (glowParams.maxIntensity - glowParams.minIntensity) / 2;
      }
    }
    
    // Animate the outer glow sphere
    if (glowRef.current) {
      const glowPulse = 1.2 + Math.sin(state.clock.getElapsedTime() * 0.7) * 0.1;
      glowRef.current.scale.set(glowPulse, glowPulse, glowPulse);
      
      if (glowRef.current.material instanceof THREE.MeshStandardMaterial) {
        const material = glowRef.current.material;
        material.opacity = 0.5 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      }
    }
  });
  
  return (
    <group>
      {/* Main Sphere */}
      <Sphere 
        ref={sphereRef}
        args={[1.5, 64, 64]} 
        onClick={(e) => { e.stopPropagation(); onClick(); }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.2 : 0.8}
          transparent
          opacity={0.9}
          roughness={0.2}
          metalness={0.3}
          distort={hovered ? 0.3 : 0.1} // Add distortion effect on hover
          speed={3}
        />
      </Sphere>
      
      {/* Outer Glow Sphere */}
      <Sphere
        ref={glowRef}
        args={[1.8, 32, 32]}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          transparent
          opacity={0.15}
          roughness={1}
          metalness={0}
        />
      </Sphere>
      
      {/* Add sparkles around the sphere for enhanced effect */}
      <Sparkles 
        count={50} 
        scale={[5, 5, 5]} 
        size={0.4} 
        speed={0.3} 
        opacity={0.7}
        color={color}
      />
    </group>
  );
};

// --- SkillText Component ---
// Yeh component ek skill ko display karta hai aur hamesha camera ki taraf face karta hai.
const SkillText = ({ text, position, color, index }: { text: string; position: [number, number, number]; color: string; index: number }) => {
  const textRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);
  
  // Individual skill animation speed
  const animationSpeed = useMemo(() => 0.0010 + (index % 5) * 0.0002, [index]);
  const animationOffset = useMemo(() => index * 0.5, [index]);

  // Har frame par text ko animate karne ke liye hook
  useFrame(() => {
    if (textRef.current) {
      // More dynamic floating motion with unique animation for each skill
      textRef.current.position.y = position[1] + Math.sin(performance.now() * animationSpeed + animationOffset) * 0.3;
      textRef.current.position.x = position[0] + Math.cos(performance.now() * animationSpeed * 0.7 + animationOffset) * 0.1;

      // Depth effect: Camera se doori ke hisaab se size badalna
      const worldPosition = new THREE.Vector3();
      textRef.current.getWorldPosition(worldPosition);
      const distance = worldPosition.distanceTo(camera.position);
      
      // Camera se jitna door, utna chhota text with hover effect
      const baseScale = Math.max(0.5, Math.min(1.5, 7 / distance));
      const scale = hovered ? baseScale * 1.3 : baseScale;
      textRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    // Billboard component text ko hamesha camera ki taraf rakhta hai
    <Billboard position={position}>
      <Text
        ref={textRef}
        fontSize={0.45}
        color={hovered ? "#ffffff" : color}
        anchorX="center"
        anchorY="middle"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        fontWeight={hovered ? "bold" : "normal"}
      >
        {text}
      </Text>
      {hovered && (
        <group>
          <Sphere args={[0.15, 16, 16]} position={[0, 0, -0.1]}>
            <meshStandardMaterial 
              color={color} 
              emissive={color} 
              emissiveIntensity={1.5} 
              transparent 
              opacity={0.6} 
            />
          </Sphere>
          <Sphere args={[0.25, 16, 16]} position={[0, 0, -0.1]}>
            <meshStandardMaterial 
              color={color} 
              emissive={color} 
              emissiveIntensity={0.8} 
              transparent 
              opacity={0.2} 
            />
          </Sphere>
        </group>
      )}
    </Billboard>
  );
};

// Small particle that orbits around the main sphere
const OrbitalParticle = ({ radius, speed, color }: { radius: number; speed: number; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  const time = useRef(Math.random() * 100);
  
  useFrame(() => {
    if (ref.current) {
      time.current += 0.01 * speed;
      const x = Math.sin(time.current) * radius;
      const z = Math.cos(time.current) * radius;
      const y = Math.sin(time.current * 0.5) * (radius * 0.5);
      
      ref.current.position.set(x, y, z);
    }
  });

  return (
    <Trail
      width={0.8}
      color={color}
      length={8}
      decay={1.5}
      attenuation={(width) => width * 0.5}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} />
      </mesh>
    </Trail>
  );
};


// --- SkillOrbitScene Component ---
// Yeh 3D scene ka main component hai
const SkillOrbitScene = ({ skills, onCategoryChange, color }: { skills: string[], onCategoryChange: () => void, color: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  const mouse = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const [sphereHovered, setSphereHovered] = useState(false);

  // Mouse movement ko track karna
  const handleMouseMove = (event: globalThis.MouseEvent) => {
    mouse.current = {
      x: (event.clientX / viewport.width) * 2 - 1,
      y: -(event.clientY / viewport.height) * 2 + 1,
    };
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Poore group ko rotate karne ke liye animation
  useFrame((state) => {
    if (groupRef.current) {
      // Dheere-dheere mouse position ki taraf rotate karna
      const targetRotationY = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.current.x * 0.3, 0.05);
      const targetRotationX = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.current.y * 0.3, 0.05);
      
      groupRef.current.rotation.y = targetRotationY + state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = targetRotationX;
    }
  });

  // Skills ki position calculate karna (memoized for performance)
  const skillPositions = useMemo(() => {
    const positions: [number, number, number][] = [];
    const numSkills = skills.length > 0 ? skills.length : 1;
    const radius = 5.0; // Radius increased for better spread
    for (let i = 0; i < numSkills; i++) {
      // Using Fibonacci sphere distribution for more even spacing
      const phi = Math.acos(1 - 2 * (i + 0.5) / numSkills);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      positions.push([
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi),
      ]);
    }
    return positions;
  }, [skills]);

  // Create orbital particles
  const orbitalParticles = useMemo(() => {
    const particles = [];
    for (let i = 0; i < 12; i++) { // Increased number of particles
      particles.push({
        radius: 2.0 + Math.random() * 1.0,
        speed: 0.5 + Math.random() * 1.5,
        color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 75%)`
      });
    }
    return particles;
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} />
      
      {/* Background mein stars add kiye hain with enhanced depth */}
      <Stars radius={100} depth={60} count={7000} factor={5} saturation={0.5} fade speed={1.5} />

      <group ref={groupRef}>
        {/* Center sphere with enhanced glow effect */}
        <CenterSphere 
          color={color} 
          onClick={onCategoryChange} 
          hovered={sphereHovered} 
          setHovered={setSphereHovered} 
        />

        {/* Orbital particles with improved trails */}
        {orbitalParticles.map((particle, idx) => (
          <OrbitalParticle 
            key={`particle-${idx}`} 
            radius={particle.radius} 
            speed={particle.speed}
            color={particle.color}
          />
        ))}

        {/* Har skill ko render karna */}
        {skills.map((skill, index) => (
          <SkillText
            key={`${skill}-${index}`}
            text={skill}
            position={skillPositions[index]}
            color={`hsl(${(index * 360 / skills.length) % 360}, 80%, 75%)`}
            index={index}
          />
        ))}
      </group>
    </>
  );
};


// --- Main SkillOrbit Component ---
interface SkillOrbitProps {
  skills: string[];
  onCategoryChange: () => void;
  color: string;
}

const SkillOrbit = ({ skills, onCategoryChange, color }: SkillOrbitProps) => {
  return (
    // Suspense fallback jab tak 3D assets load ho rahe hain
    <Suspense fallback={
      <div className="w-full h-full flex items-center justify-center">
        <p>Loading 3D Skills...</p>
      </div>
    }>
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <SkillOrbitScene skills={skills} onCategoryChange={onCategoryChange} color={color} />
      </Canvas>
    </Suspense>
  );
};

export default SkillOrbit;
