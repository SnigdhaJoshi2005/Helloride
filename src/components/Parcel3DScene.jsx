import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Edges, Html, Line, Text, useTexture } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import { Vector3, PlaneGeometry, MeshBasicMaterial } from "three";
import logo from "../assets/logoo.png";

const parcelCallouts = [
  {
    label: "Secure Packaging",
    anchor: [-0.72, 0.92, 1.04],
    labelPosition: [-2.15, 1.95, 0.58],
  },
  {
    label: "Real-Time Tracking",
    anchor: [1.42, 0.08, 1.02],
    labelPosition: [2.35, 0.72, 0.58],
  },
  {
    label: "Fast & Reliable Delivery",
    anchor: [0.14, -0.92, 1.04],
    labelPosition: [0.72, -1.72, 0.86],
  },
];

function ParcelSceneCallouts({ parcelRef }) {
  const anchors = useMemo(
    () => parcelCallouts.map((callout) => new Vector3(...callout.anchor)),
    []
  );
  const labelPositions = useMemo(
    () => parcelCallouts.map((callout) => new Vector3(...callout.labelPosition)),
    []
  );
  const [linePoints, setLinePoints] = useState(() =>
    parcelCallouts.map((_, index) => [
      anchors[index].clone(),
      labelPositions[index].clone(),
    ])
  );

  useFrame(() => {
    if (!parcelRef.current) return;

    const nextPoints = anchors.map((anchor, index) => {
      const worldAnchor = anchor.clone();
      parcelRef.current.localToWorld(worldAnchor);
      return [worldAnchor, labelPositions[index].clone()];
    });

    setLinePoints(nextPoints);
  });

  return (
    <group>
      {parcelCallouts.map((callout) => (
        <group key={callout.label}>
          <Line
            points={linePoints[parcelCallouts.indexOf(callout)]}
            color="#ffe100"
            lineWidth={1.5}
            dashed
            dashSize={0.08}
            gapSize={0.06}
            transparent
            opacity={0.95}
          />
          <mesh position={linePoints[parcelCallouts.indexOf(callout)][0]}>
            <sphereGeometry args={[0.07, 18, 18]} />
            <meshStandardMaterial color="#ffe100" emissive="#ffe100" emissiveIntensity={0.45} />
          </mesh>
          <Html
            position={callout.labelPosition}
            center
            distanceFactor={4.4}
            occlude={false}
            className="parcel-scene-callout"
          >
            <span>{callout.label}</span>
          </Html>
        </group>
      ))}
    </group>
  );
}

function FrontText({ position, fontSize, children, color = "#050505", anchorX = "center" }) {
  return (
    <Text
      position={position}
      fontSize={fontSize}
      color={color}
      anchorX={anchorX}
      anchorY="middle"
      maxWidth={1.6}
      textAlign={anchorX === "left" ? "left" : "center"}
    >
      {children}
    </Text>
  );
}

function LogoOnBox() {
  const texture = useTexture(logo);
  const aspect = (texture.image?.width ?? 1) / (texture.image?.height ?? 1);
  return (
    <mesh position={[0, 0.18, 1.07]}>
      <planeGeometry args={[0.7, 0.7 / aspect]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

function TopText({ position, fontSize, children }) {
  return (
    <Text
      position={position}
      rotation={[-Math.PI / 2, 0, 0]}
      fontSize={fontSize}
      color="#050505"
      anchorX="center"
      anchorY="middle"
      maxWidth={1.4}
      textAlign="center"
    >
      {children}
    </Text>
  );
}

function TopTapeLogo({ z }) {
  return (
    <TopText position={[0, 0.955, z]} fontSize={0.105}>HR</TopText>
  );
}

function BrandedParcelBox() {
  return (
    <group>
      <RoundedBox args={[2.84, 1.8, 2.04]} radius={0.1}>
        <meshStandardMaterial color="#d8a765" roughness={0.68} metalness={0.01} />
      </RoundedBox>

      <RoundedBox args={[0.48, 0.034, 2.1]} radius={0.012} position={[0, 0.918, 0]}>
        <meshStandardMaterial color="#fdcd6f" roughness={0.62} />
        <Edges color="#a87a48" threshold={20} />
      </RoundedBox>

      <RoundedBox args={[0.48, 1.8, 0.028]} radius={0.012} position={[0, 0, 1.034]}>
        <meshStandardMaterial color="#fdcd6f" roughness={0.62} />
        <Edges color="#a87a48" threshold={20} />
      </RoundedBox>

      <RoundedBox args={[0.48, 1.8, 0.028]} radius={0.012} position={[0, 0, -1.034]}>
        <meshStandardMaterial color="#fdcd6f" roughness={0.62} />
        <Edges color="#a87a48" threshold={20} />
      </RoundedBox>

      <group position={[0, -0.22, 1.06]}>
        <Text fontSize={0.17} color="#323232" anchorX="right" anchorY="middle" position={[-0.04, 0, 0]}>Hello</Text>
        <Text fontSize={0.17} color="#fee600" anchorX="left" anchorY="middle" position={[0.04, 0, 0]}>Ride</Text>
      </group>
      <LogoOnBox />

      <TopTapeLogo z={-0.66} />
      <TopTapeLogo z={0} />
      <TopTapeLogo z={0.66} />
    </group>
  );
}

function RotatingParcel({ parcelRef }) {
  useFrame((_, delta) => {
    if (parcelRef.current) {
      parcelRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group ref={parcelRef}>
      <BrandedParcelBox />
    </group>
  );
}

function ParcelScene({ showCallouts }) {
  const parcelRef = useRef();

  return (
    <>
      <RotatingParcel parcelRef={parcelRef} />
      {showCallouts && <ParcelSceneCallouts parcelRef={parcelRef} />}
    </>
  );
}

export default function Parcel3DScene({ showCallouts = true, cameraZ = 7 }) {
  return (
    <div className="parcel-3d-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 3, cameraZ], fov: 42 }}
        gl={{ antialias: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-3, 2, -3]} intensity={0.4} />
        <Suspense fallback={null}>
          <ParcelScene showCallouts={showCallouts} />
        </Suspense>
      </Canvas>
    </div>
  );
}
