import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { gil } from "../../assets";

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
    <div className="relative h-full">
      <Canvas className="">
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Sphere args={[1, 100, 200]} scale={2} position={[0, 0.2, 0]}>
            <MeshDistortMaterial
              color="#374785"
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
        className="absolute pb-20 top-0 h-full flex justify-center items-center w-full "
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
          src={gil}
          alt="gil"
        />
      </motion.div>
    </div>
  );
};

export default HeroCanvas;
