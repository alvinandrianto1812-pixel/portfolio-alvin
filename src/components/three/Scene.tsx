/* eslint-disable react-hooks/immutability */
"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useEffect } from "react";
import Particles from "./Particles";
import Geometries from "./Geometries";

function CameraParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.current.y * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={["#050508", 10, 30]} />
        <Suspense fallback={null}>
          <Particles />
          <Geometries />
        </Suspense>
        <CameraParallax />
      </Canvas>
    </div>
  );
}
