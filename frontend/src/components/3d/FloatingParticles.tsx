import React, { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = ({ count = 100 }) => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 2 - 1;
      const y = Math.random() * 2 - 1;
      const z = Math.random() * 2 - 1;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = particles[i].x;
      positions[i * 3 + 1] = particles[i].y;
      positions[i * 3 + 2] = particles[i].z;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count, particles]);

  useFrame((state) => {
    const positions = particlesGeometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const { factor, speed, x, y, z } = particles[i];

      const time = state.clock.elapsedTime * speed;

      positions[i3] = x + Math.cos(time + factor) * 2;
      positions[i3 + 1] = y + Math.sin(time + factor) * 2;
      positions[i3 + 2] = z + Math.cos(time + factor) * 2;
    }

    particlesGeometry.attributes.position.needsUpdate = true;
  });

  return (
    <points>
      <primitive object={particlesGeometry} />
      <pointsMaterial
        size={0.05}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

export default FloatingParticles;