import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Earth from "./Earth";

const EarthCanvas = () => (
  <Canvas
    frameloop="demand"
    shadows
    gl={{ preserveDrawingBuffer: true }}
    camera={{
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,6]
    }}
  >
    <Preload all />
    <Suspense>
      <OrbitControls
        enableZoom={false}
        autoRotate
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
    </Suspense>
  </Canvas>
);

export default EarthCanvas;
