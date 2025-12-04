import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Cube({ offset = 0, size = 10, thickness = 10 }) {
  const groupRef = useRef();

  const lines = useMemo(() => {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const edges = new THREE.EdgesGeometry(geometry);
    const positions = edges.attributes.position.array;

    const lineObjects = [];

    for (let i = 0; i < positions.length; i += 6) {
      const points = [
        new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]),
        new THREE.Vector3(positions[i + 3], positions[i + 4], positions[i + 5]),
      ];

      const geom = new THREE.BufferGeometry().setFromPoints(points);

      const mat = new THREE.LineBasicMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 1,
        linewidth: thickness,
      });

      lineObjects.push(new THREE.Line(geom, mat));
    }

    return lineObjects;
  }, [size, thickness]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() + offset;

    if (groupRef.current) {
      groupRef.current.rotation.x = t * 0.9;
      groupRef.current.rotation.y = t * 1.2;
      groupRef.current.rotation.z = t * 0.75;

      const colors = [
      new THREE.Color(0x8B5CF6), // cyan-600

  new THREE.Color(0xFFD700),
 new THREE.Color(0x8b0000)

 

      ];

      groupRef.current.children.forEach((line, idx) => {
        const cycleTime = (t + idx * 0.3) % colors.length;
        const colorIndex = Math.floor(cycleTime);
        const nextColorIndex = (colorIndex + 1) % colors.length;
        const lerpAmount = cycleTime - colorIndex;

        line.material.color.copy(colors[colorIndex]).lerp(colors[nextColorIndex], lerpAmount);
      });
    }
  });

  return <group ref={groupRef}>{lines.map((l, i) => <primitive key={i} object={l} />)}</group>;
}

export default function HolographicStackedCubesLarge() {
  return (
    <div className="relative w-full h-[700px] m-0 p-0 bg-transparent">
      <Canvas
        camera={{ position: [35, 35, 35], fov: 50 }}
        gl={{ alpha: true }}         // ← allows transparency
        style={{ background: "transparent" }} // ← removes background color
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[100, 100, 100]} intensity={2} />

        <Cube offset={0} size={10} thickness={3} />
        <Cube offset={2} size={14} thickness={4} />
        <Cube offset={4} size={18} thickness={5} />
      </Canvas>
    </div>
  );
}
