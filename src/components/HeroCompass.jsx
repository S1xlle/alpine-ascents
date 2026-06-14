import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";

function SummitPortal() {
  const groupRef = useRef();
  const ringOne = useRef();
  const ringTwo = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
    }

    if (ringOne.current) {
      ringOne.current.rotation.z += 0.01;
    }

    if (ringTwo.current) {
      ringTwo.current.rotation.z -= 0.007;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Main mountain */}
        <mesh position={[0, -0.35, 0]}>
          <coneGeometry args={[0.8, 1.9, 4]} />
          <meshStandardMaterial
            color="#f8f9fa"
            metalness={0.75}
            roughness={0.22}
          />
        </mesh>

        {/* Side peaks */}
        <mesh position={[0.55, -0.45, 0.12]}>
          <coneGeometry args={[0.45, 1.25, 4]} />
          <meshStandardMaterial
            color="#dfe6ef"
            metalness={0.65}
            roughness={0.28}
          />
        </mesh>

        <mesh position={[-0.55, -0.48, -0.08]}>
          <coneGeometry args={[0.42, 1.15, 4]} />
          <meshStandardMaterial
            color="#cbd5e1"
            metalness={0.65}
            roughness={0.3}
          />
        </mesh>

        {/* Orange glowing portal ring */}
        <mesh ref={ringOne} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.45, 0.035, 24, 140]} />
          <meshStandardMaterial
            color="#e67e22"
            emissive="#e67e22"
            emissiveIntensity={1.6}
            metalness={0.8}
            roughness={0.18}
          />
        </mesh>

        {/* White outer ring */}
        <mesh ref={ringTwo} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <torusGeometry args={[1.85, 0.022, 24, 140]} />
          <meshStandardMaterial
            color="#f8f9fa"
            emissive="#f8f9fa"
            emissiveIntensity={0.45}
            metalness={0.9}
            roughness={0.18}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroCompass() {
  return (
    <div className="summit-portal">
      <Canvas camera={{ position: [0, 0, 4.6], fov: 42 }}>
        <ambientLight intensity={0.9} />

        <directionalLight
          position={[4, 5, 4]}
          intensity={2.2}
          color="#f8f9fa"
        />

        <pointLight
          position={[2.5, 1.5, 2]}
          intensity={8}
          color="#e67e22"
        />

        <pointLight
          position={[-2, 1, 3]}
          intensity={3}
          color="#f8f9fa"
        />

        <SummitPortal />
      </Canvas>
    </div>
  );
}