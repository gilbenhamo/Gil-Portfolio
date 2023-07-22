import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Ball from "./Ball";


const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas frameloop="always">
      <Preload all />
      <Suspense>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
