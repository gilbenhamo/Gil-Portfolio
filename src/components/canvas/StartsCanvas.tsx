import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Stars from "./Stars";

const StartsCanvas = () => {
  useState();
  return (
    <div className=" w-full h-auto absolute inset-0 z-[-1]">
        <Canvas
        camera={{position:[0,0,1]}}
        >
            <Suspense fallback={null}>
                <Stars/>
            </Suspense>
        <Preload all/>
        </Canvas>
    </div>

  );
};

export default StartsCanvas;
