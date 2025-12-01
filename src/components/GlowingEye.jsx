import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingEyeWithCircles() {
  const eyeRef = useRef();
  const borderRef = useRef();
  const cyanCircleRef = useRef();
  const pinkCircleRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Rotate the main eye torus
    if (eyeRef.current) {
      eyeRef.current.rotation.x = Math.sin(t / 4) * 0.3;
      eyeRef.current.rotation.y = t / 2;
      eyeRef.current.rotation.z = Math.cos(t / 5) * 0.3;
    }

    // Rotate the border torus (bigger, slower)
    if (borderRef.current) {
      borderRef.current.rotation.x = Math.sin(t / 6) * 0.2;
      borderRef.current.rotation.y = t / 3;
      borderRef.current.rotation.z = Math.cos(t / 7) * 0.2;
    }

    // Rotate cyan glowing circle
    if (cyanCircleRef.current) {
      cyanCircleRef.current.rotation.x = Math.sin(t / 3) * 0.15;
      cyanCircleRef.current.rotation.y = t / 1.5;
      cyanCircleRef.current.rotation.z = Math.cos(t / 4) * 0.15;
    }

    // Rotate pink glowing circle
    if (pinkCircleRef.current) {
      pinkCircleRef.current.rotation.x = Math.sin(t / 5) * 0.2;
      pinkCircleRef.current.rotation.y = t / 2.5;
      pinkCircleRef.current.rotation.z = Math.cos(t / 6) * 0.2;
    }
  });

  return (
    <>
      {/* Main eye outline */}
      <mesh ref={eyeRef} castShadow receiveShadow>
        <torusGeometry args={[40, 2.5, 64, 100]} />
        <meshStandardMaterial
          color="#00fff7"
          emissive="#c600ff"
          emissiveIntensity={4}
          roughness={0.1}
          metalness={1}
          transparent
          opacity={0.9}
          toneMapped={false}
        />
      </mesh>

      {/* Glowing border behind eye */}
      <mesh ref={borderRef} castShadow receiveShadow>
        <torusGeometry args={[48, 1.5, 64, 100]} />
        <meshStandardMaterial
          color="#ff3399"
          emissive="#ff3399"
          emissiveIntensity={2}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.4}
          toneMapped={false}
        />
      </mesh>

      {/* Cyan glowing circle */}
      <mesh ref={cyanCircleRef} castShadow receiveShadow>
        <torusGeometry args={[60, 1.8, 64, 100]} />
        <meshStandardMaterial
          color="#00fff7"
          emissive="#00fff7"
          emissiveIntensity={2.5}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.6}
          toneMapped={false}
        />
      </mesh>

      {/* Pink glowing circle */}
      <mesh ref={pinkCircleRef} castShadow receiveShadow>
        <torusGeometry args={[70, 1.5, 64, 100]} />
        <meshStandardMaterial
          color="#FFAA00c"
          emissive="#FFAA00"
          emissiveIntensity={2.5}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.5}
          toneMapped={false}
        />
      </mesh>
    </>
  );
}

export default function NeonGlowingEye3D() {
  return (
    <Canvas
  camera={{ position: [0, 0, 180], fov: 45 }}
  style={{ width: "100%", maxWidth: "700px", height: "350px", backgroundColor: "transparent" }}
  shadows
  gl={{ alpha: true, toneMappingExposure: 1 }}
  onCreated={({ gl }) => {
    gl.setClearColor(0x000000, 0);  // transparent background
  }}
>

      <ambientLight intensity={0.3} />
      <pointLight
        position={[50, 50, 100]}
        intensity={2}
        color="#ff33cc"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight
        position={[-50, -50, 100]}
        intensity={2}
        color="#00fff7"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <RotatingEyeWithCircles />
    </Canvas>
  );
}
