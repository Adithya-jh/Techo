import React from "react";
import World from "../Components/World";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

function animate() {
  return (
    <>
      <Canvas
        // orthographic
        camera={{ fov: 45, near: 0.1, far: 200, position: [5, 8, 6] }}
        gl={{
          antialias: true,
          // toneMapping: THREE.CineonToneMapping
          // outputEncoding:THREE.sRGBEncoding //this is the default
        }}
      >
        <World />
      </Canvas>
    </>
  );
}

export default animate;
