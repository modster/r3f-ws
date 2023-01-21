import React from "react";
import { Canvas } from "react-three-fiber";
import { Box, Stats, Sky, OrbitControls } from "drei";

export default function App() {
  return (
    <Canvas
      colorManagement
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 2, 2] }}
    >
      <Sky />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
      <Stats />
      <OrbitControls />
    </Canvas>
  );
}
