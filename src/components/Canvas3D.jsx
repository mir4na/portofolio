import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Preload, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Floating geometric shape that follows cursor
const FloatingShape = ({ position, geometry, color, speed = 1, floatIntensity = 1 }) => {
  const meshRef = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;

    // Smooth rotation
    meshRef.current.rotation.x += 0.003 * speed;
    meshRef.current.rotation.y += 0.005 * speed;

    // Follow mouse with smooth lerp
    const targetX = position[0] + mouse.x * 0.5;
    const targetY = position[1] + mouse.y * 0.5;

    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      targetX,
      0.02
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      targetY,
      0.02
    );
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={floatIntensity}
    >
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

// Particle field background
const ParticleField = () => {
  const points = useRef();
  const { mouse } = useThree();

  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (!points.current) return;

    // Slow rotation
    points.current.rotation.x -= delta * 0.02;
    points.current.rotation.y -= delta * 0.03;

    // Mouse parallax
    points.current.rotation.x += mouse.y * 0.0003;
    points.current.rotation.y += mouse.x * 0.0003;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#915eff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

// Main 3D Scene
const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} color="#915eff" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#00cea8" />

      {/* Particle Field */}
      <ParticleField />

      {/* Floating Shapes */}
      <FloatingShape
        position={[2.5, 1, -2]}
        geometry={<icosahedronGeometry args={[0.4, 1]} />}
        color="#915eff"
        speed={1.2}
        floatIntensity={1}
      />
      <FloatingShape
        position={[-2.5, -1, -1]}
        geometry={<octahedronGeometry args={[0.35, 0]} />}
        color="#00cea8"
        speed={0.8}
        floatIntensity={1.2}
      />
      <FloatingShape
        position={[1, -2, -3]}
        geometry={<tetrahedronGeometry args={[0.3, 0]} />}
        color="#bf61ff"
        speed={1}
        floatIntensity={0.8}
      />
      <FloatingShape
        position={[-1.5, 2, -2]}
        geometry={<dodecahedronGeometry args={[0.25, 0]} />}
        color="#6366f1"
        speed={1.5}
        floatIntensity={1.5}
      />
      <FloatingShape
        position={[3, -1.5, -4]}
        geometry={<torusGeometry args={[0.3, 0.1, 16, 32]} />}
        color="#915eff"
        speed={0.6}
        floatIntensity={1}
      />
      <FloatingShape
        position={[-3, 0.5, -2.5]}
        geometry={<boxGeometry args={[0.4, 0.4, 0.4]} />}
        color="#00cea8"
        speed={1.1}
        floatIntensity={0.9}
      />
    </>
  );
};

const Canvas3D = () => {
  return (
    <div className="w-full h-full fixed inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Canvas3D;
