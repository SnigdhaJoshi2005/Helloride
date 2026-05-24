import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import cardboardBoxUrl from "./cardboard_box.glb?url";

export default function CardboardBox(props) {
  const ref = useRef();
  const { scene } = useGLTF(cardboardBoxUrl);

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={3}
      position={[0, -0.1, 0]}
      {...props}
    />
  );
}

useGLTF.preload(cardboardBoxUrl);
