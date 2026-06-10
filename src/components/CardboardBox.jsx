import { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import cardboardBoxUrl from "./cardboard_box.glb?url";

export default function CardboardBox(props) {
  const ref = useRef();
  const { scene } = useGLTF(cardboardBoxUrl);
  const brandedScene = useMemo(() => {
    const clone = scene.clone(true);
    const yellowParcelMaterial = new MeshStandardMaterial({
      color: "#ffe100",
      roughness: 0.72,
      metalness: 0.02,
    });

    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = yellowParcelMaterial.clone();
      }
    });

    return clone;
  }, [scene]);

  return (
    <primitive
      ref={ref}
      object={brandedScene}
      scale={3}
      position={[0, -0.1, 0]}
      {...props}
    />
  );
}

useGLTF.preload(cardboardBoxUrl);
