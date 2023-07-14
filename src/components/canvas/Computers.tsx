import { useGLTF } from '@react-three/drei';
import React from 'react'

export 
const Computers = ({isMobile}:{isMobile:boolean;}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        scale={isMobile? 0.5 : 0.75}
        position={isMobile ?[0,-2,-1.5] :[0, -3, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        object={computer.scene}
      />
    </mesh>
  );
};