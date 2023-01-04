import { useFrame, extend, useThree } from "@react-three/fiber";
import { React, useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
} from "@react-three/drei";
// extend({ OrbitControls: OrbitControls });
import * as THREE from "three";

import CustomObject from "../Components/CustomObject";

function World() {
  const { camera, gl } = useThree();
  const sphereRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle);
    // state.camera.position.z = Math.cos(angle);
    // state.camera.lookAt(0, 0, 0);
    // state.camera.position.z = Math.cos(angle);
    // sphereRef.current.rotation.x += delta;
    groupRef.current.rotation.y += delta;
    // state.camera.position.x += delta;
  });

  return (
    <>
      {/* <OrbitControls args={[camera, gl.domElement]} /> */}

      <OrbitControls
      // target={[0, 1, 0]}
      // minDistance={1}
      // maxDistance={200}
      // minPolarAngle={0.2}
      // maxPolarAngle={Math.PI / 2.1}
      // enablePan={false}
      />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight />

      <group ref={groupRef}>
        {/* <mesh ref={sphereRef} position-x={-1}>
          <sphereGeometry args={[2, 5, 5]} />
          <meshStandardMaterial color="orangered" />
        </mesh> */}

        <TransformControls>
          <mesh position={(2, -2, 0)} rotation-x={-Math.PI * 0.5} scale={5}>
            <planeGeometry />
            <meshStandardMaterial color="skyblue" side={THREE.DoubleSide} />
          </mesh>

          <mesh position={(3, -2, 0)} rotation-x={-Math.PI * 0.5} scale={5}>
            <torusBufferGeometry />
            <meshStandardMaterial color="orangered" side={THREE.DoubleSide} />
          </mesh>

          <mesh position={(5, -2, 0)} rotation-x={-Math.PI * 0.5} scale={5}>
            <torusKnotBufferGeometry />
            <meshStandardMaterial color="skyblue" side={THREE.DoubleSide} />
          </mesh>
        </TransformControls>

        {/* <mesh>
          <torusKnotGeometry />
          <meshBasicMaterial color="orange" />
        </mesh> */}
      </group>

      <Html wrapperClass="label" center>
        GPT3 - WRITER
      </Html>

      <CustomObject />
    </>
  );
}

export default World;
