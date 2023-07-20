import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  OrbitControls,
  Preload,
  Sphere,
} from "@react-three/drei";
import { CanvasLoader } from "./CanvasLoader";
import { Computers } from "./Computers";
import { motion } from "framer-motion";
import { gil, moon } from "../../assets";

const HeroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:600px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={1.5} position={[0, -1, 0]}>
            <MeshDistortMaterial
              color="#05386B"
              attach="material"
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Suspense>
      </Canvas>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 1.5, duration: 1 }}
        className="absolute mb-24 xs:mb-52 bottom-10 h-96 w-full flex justify-center items-center"
      >
        <motion.img
          animate={{
            y: [0, 24],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="h-[400px] xs:h-[500px]"
          src={moon}
          alt="gil"
        />
      </motion.div>
    </>
  );
};

export default HeroCanvas;
