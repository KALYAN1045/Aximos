import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, Stars } from '@react-three/drei';
import FloatingCube from './FloatingCube';
import FloatingParticles from './FloatingParticles';

const Scene = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Environment preset="night" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Float
            speed={1.5}
            rotationIntensity={1}
            floatIntensity={2}
          >
            <FloatingCube />
          </Float>
          <FloatingParticles count={100} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;