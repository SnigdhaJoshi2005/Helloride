import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CardboardBox from "./CardboardBox";

export default function Parcel3DScene() {
  return (
    <div className="parcel-3d-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 3, 7], fov: 42 }}
        gl={{ antialias: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 2, -3]} intensity={0.4} />
        <Suspense fallback={null}>
          <CardboardBox />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={3} />
      </Canvas>
    </div>
  );
}
