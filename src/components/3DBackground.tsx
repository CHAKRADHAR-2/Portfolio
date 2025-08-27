import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

// Animated floating particles
const FloatingParticles = ({ count = 100 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  useEffect(() => {
    if (!mesh.current) return;
    
    const tempObject = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      tempObject.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      tempObject.updateMatrix();
      mesh.current.setMatrixAt(i, tempObject.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    const time = state.clock.getElapsedTime();
    const tempObject = new THREE.Object3D();
    
    for (let i = 0; i < count; i++) {
      const id = i;
      tempObject.position.set(
        (Math.random() - 0.5) * 25 + Math.sin(time + id) * 2,
        (Math.random() - 0.5) * 25 + Math.cos(time + id) * 2,
        (Math.random() - 0.5) * 25 + Math.sin(time + id * 0.5) * 2
      );
      tempObject.updateMatrix();
      mesh.current.setMatrixAt(id, tempObject.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#00FFFF" />
    </instancedMesh>
  );
};

// Neural network connections
const NeuralConnections = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={group}>
      {Array.from({ length: 20 }, (_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#FF00FF" />
        </mesh>
      ))}
    </group>
  );
};

// Holographic sphere
const HolographicSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.5;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#00FFFF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
};

// Energy field
const EnergyField = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <ringGeometry args={[8, 8.5, 64]} />
      <meshBasicMaterial color="#00FFFF" transparent opacity={0.3} />
    </mesh>
  );
};

// Main 3D Background Component
const ThreeDBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00FF" />
        
        <FloatingParticles count={200} />
        <NeuralConnections />
        <HolographicSphere />
        <EnergyField />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground; 