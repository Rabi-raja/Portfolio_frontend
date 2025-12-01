import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const RotatingCube = () => {
  const meshRef = useRef();

  const textures = useLoader(THREE.TextureLoader, [
    "/images/face1.jpg", // right
    "/images/face2.png", // left
    "/images/face3.webp", // top
    "/images/face4.png", // bottom
    "/images/face5.webp", // front
    "/images/face6.avif", // back
  ]);

  const materials = textures.map(
    (texture) => new THREE.MeshBasicMaterial({ map: texture })
  );

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
    meshRef.current.rotation.x += 0.005;
  });

  return (
    <mesh ref={meshRef} material={materials}>
      <boxGeometry args={[3, 3, 3]} />
    </mesh>
  );
};

const RotatingCubeCanvas = () => {
  return (
    <Canvas style={{width:'75vw', maxWidth: '550px', height: "75vw", maxHeight:'550px' }} camera={{ position: [5, 5, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
    </Canvas>
  );
};

export default RotatingCubeCanvas;
