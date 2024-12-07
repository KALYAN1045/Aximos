import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { MeshDistortMaterial } from '@react-three/drei';

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        roughness={0}
        metalness={1}
        distort={0.4}
        speed={2}
      />
    </mesh>
  );
};

export default FloatingCube;