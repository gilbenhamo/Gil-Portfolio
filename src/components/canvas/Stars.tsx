import { PointMaterial, Points } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
//@ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props:any) => {
  const ref = useRef<any>();
  const sphere = random.inSphere(new Float32Array(5001), { radius: 1.2 });

  useFrame((state,delta) => {
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/15;
  })
  
  return (
    <group rotation={[0,0,Math.PI/4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled B {...props}>
      <PointMaterial
        transparent
        color="#fefefe"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        
        />
      </Points>
    </group>
  );
};

export default Stars;
