import { useRef, useState } from 'react'
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber'

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"


extend({ OrbitControls })

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
}

function Shape() {
  const ref = useRef()


  useFrame((state) => {
    ref.current.rotation.y += -0.01;
    ref.current.rotation.z += -0.01;
  })


  return (<mesh ref={ref} >
    <torusKnotGeometry args={[1, 0.4, 256, 64]}></torusKnotGeometry>
    <meshPhysicalMaterial
        color={"#05a34a"}
        roughness={0.1}
        metalness={0.4}
        clearcoat={0.9}
      />
  </mesh>)
}

export default function Abstract() {
  return <Canvas>
    <CameraControls />
    <pointLight position={[5, 10, 15]} intensity={1} />
      <Shape />
    </Canvas>
}
