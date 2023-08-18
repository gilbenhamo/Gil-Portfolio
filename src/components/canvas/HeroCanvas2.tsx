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
          <Sphere args={[1, 100, 200]} scale={2} position={[0, 0.2, 0]} key={undefined} onUpdate={undefined} id={undefined} onClick={undefined} onContextMenu={undefined} onDoubleClick={undefined} onPointerDown={undefined} onPointerMove={undefined} onPointerUp={undefined} onPointerCancel={undefined} onPointerEnter={undefined} onPointerLeave={undefined} onPointerOver={undefined} onPointerOut={undefined} onWheel={undefined} material={undefined} quaternion={undefined} clear={undefined} add={undefined} copy={undefined} visible={undefined} name={undefined} type={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} onPointerMissed={undefined} attach={undefined} up={undefined} rotation={undefined} matrix={undefined} layers={undefined} dispose={undefined} uuid={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} animations={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} translateOnAxis={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} remove={undefined} removeFromParent={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getObjectsByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} getWorldDirection={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateMatrixWorld={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} geometry={undefined} morphTargetInfluences={undefined} morphTargetDictionary={undefined} isMesh={undefined} updateMorphTargets={undefined} getVertexPosition={undefined} >
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
        initial={{ y: 100, opacity: 0 ,scale:0.8}}
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
