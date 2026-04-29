"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type * as THREE from "three";

export default function Geometries() {
  const icoRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);
  const tetraRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (icoRef.current) {
      icoRef.current.rotation.x = t * 0.2;
      icoRef.current.rotation.y = t * 0.3;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = t * 0.3;
      octaRef.current.rotation.y = t * 0.2;
    }
    if (tetraRef.current) {
      tetraRef.current.rotation.x = t * 0.4;
      tetraRef.current.rotation.y = t * 0.1;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[4, 2, -5]}>
        <mesh ref={icoRef}>
          <icosahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#64ffda" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5} position={[-5, -1, -8]}>
        <mesh ref={octaRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.1} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={1} position={[3, -3, -6]}>
        <mesh ref={tetraRef}>
          <tetrahedronGeometry args={[1.2, 0]} />
          <meshBasicMaterial color="#64ffda" wireframe transparent opacity={0.15} />
        </mesh>
      </Float>
    </>
  );
}
