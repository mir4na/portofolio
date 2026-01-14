import { useRef, useState, useEffect, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  Float,
  Stars,
  Sparkles,
  SpotLight,
  PerspectiveCamera,
  Environment
} from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// ==================== THEME & ASSETS ====================
// Vibrant Persona-inspired Palette
const COLORS = {
  bg: "#101010",
  red: "#ff003c",      // Persona Red
  yellow: "#facc15",   // Highlight
  cyan: "#06b6d4",     // Secondary
  dark: "#0a0a0a",
  white: "#ffffff"
};

// ==================== 3D COMPONENTS ====================

const DramaticCastle = () => {
  const castleRef = useRef();

  // Castle is the "Goal" in the distance.
  // Made simpler but grander silhouette to ensure visibility
  return (
    <group position={[0, 0, -35]} ref={castleRef}>
      {/* Height increased, position adjusted to be visible above horizon */}

      {/* Main Spire */}
      <mesh position={[0, 15, 0]}>
        <coneGeometry args={[6, 40, 4]} />
        <meshStandardMaterial color="#2d2d2d" roughness={0.2} />
      </mesh>

      {/* Glowing Core/Eye of the Castle */}
      <mesh position={[0, 25, 2]}>
        <circleGeometry args={[2, 32]} />
        <meshBasicMaterial color={COLORS.red} toneMapped={false} />
      </mesh>
      <pointLight position={[0, 25, 5]} color={COLORS.red} intensity={10} distance={50} />

      {/* Side Towers */}
      <mesh position={[-10, 8, 5]}>
        <boxGeometry args={[4, 25, 4]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[10, 8, 5]}>
        <boxGeometry args={[4, 25, 4]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Floating Crown Halo */}
      <mesh position={[0, 38, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[5, 0.2, 16, 64]} />
        <meshBasicMaterial color={COLORS.yellow} toneMapped={false} />
      </mesh>
    </group>
  );
};

const StylizedCharacter = () => {
  const ref = useRef();

  useFrame((state) => {
    // Idle Animation
    const t = state.clock.elapsedTime;
    ref.current.position.y = Math.sin(t * 1.5) * 0.1;
  });

  return (
    <group ref={ref} position={[0, 0, 0]}> {/* Centered in foreground */}
      {/* Character Base/Feet Area for POV anchor */}

      {/* Stylized Coat - Sharp geometric shapes */}
      <mesh position={[0, 1.5, -0.2]} rotation={[0.1, 0, 0]}>
        <planeGeometry args={[1.2, 2.5]} />
        <meshStandardMaterial color="#000" side={THREE.DoubleSide} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1.5, 0]}>
        <capsuleGeometry args={[0.3, 1.8, 4, 16]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metaness={0.8} />
      </mesh>

      {/* Scarf / Accessory */}
      <mesh position={[0, 2.2, 0.1]} rotation={[0.2, 0, 0]}>
        <torusGeometry args={[0.25, 0.1, 8, 16]} />
        <meshStandardMaterial color={COLORS.cyan} emissive={COLORS.cyan} emissiveIntensity={0.5} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 2.7, 0]}>
        <sphereGeometry args={[0.22, 32, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
};

const Floor = () => {
  // Infinite-looking floor
  return (
    <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#080808" roughness={0.1} metalness={0.8} />
      </mesh>
      <gridHelper args={[100, 40, COLORS.red, "#222"]} position={[0, 0.05, -10]} rotation={[Math.PI / 2, 0, 0]} />

      {/* The Road to the Castle */}
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[4, 100]} />
        <meshBasicMaterial color="#111" transparent opacity={0.9} />
      </mesh>
    </group>
  );
};

// ==================== UI SYSTEM ====================
// Using 3D-anchored HTML for clean layout
// Arrangement: 2 left, 2 right, clear of the center
const SceneUI = ({ onSelect }) => {
  const items = [
    { id: 'about', label: 'ABOUT', color: COLORS.red, pos: [-4, 3, -2], rot: 15 },
    { id: 'skills', label: 'SKILLS', color: COLORS.cyan, pos: [-4, 1, -1], rot: 10 },
    { id: 'projects', label: 'PROJECTS', color: COLORS.yellow, pos: [4, 3, -2], rot: -15 },
    { id: 'contact', label: 'CONTACT', color: '#ff00ff', pos: [4, 1, -1], rot: -10 },
  ];

  return (
    <group>
      {items.map((item) => (
        <Html key={item.id} position={item.pos} center>
          <div
            className="group cursor-pointer"
            onClick={() => onSelect(item.id)}
            style={{ perspective: '1000px' }}
          >
            {/* Card Container with Skew & Rotation */}
            <div
              className="bg-black border-2 md:border-4 transition-all duration-300 transform group-hover:scale-110 group-hover:translate-x-2"
              style={{
                borderColor: item.color,
                padding: '12px 24px',
                transform: `rotateY(${item.rot}deg) skewX(-10deg)`,
                width: '200px',
                boxShadow: `8px 8px 0px rgba(0,0,0,0.5)`
              }}
            >
              <h3 className="text-2xl md:text-3xl font-black italic text-white tracking-tighter"
                style={{ textShadow: `2px 2px 0px ${item.color}` }}>
                {item.label}
              </h3>

              {/* Decorative Line */}
              <div className="w-full h-1 mt-1 bg-white" style={{ backgroundColor: item.color }} />
            </div>
          </div>
        </Html>
      ))}
    </group>
  );
};

// ==================== CAMERA RIG ====================
const CameraController = () => {
  useFrame((state) => {
    const mouse = state.mouse;

    // Base Position: Low (y=1), Behind (z=6), Centered (x=0)
    // Look At: Higher up (y=5) in the distance (z=-20) where Castle is

    // Add slight parallax based on mouse
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 1, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, 1 - mouse.y * 0.5, 0.05);

    state.camera.lookAt(0, 4, -20);
  });
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 1, 7]} // Starting position
      fov={60}
    />
  );
};

// ==================== MODAL OVERLAY ====================
const DetailModal = ({ sectionId, onClose }) => {
  const data = {
    about: {
      title: "WHO AM I?",
      color: COLORS.red,
      text: "I am Muhammad Afwan Hafizh, a digital craftsman studying Computer Science at UI. I blend secure architecture with visuals.",
      tags: ["Student", "Developer", "Security"]
    },
    skills: {
      title: "ARSENAL",
      color: COLORS.cyan,
      text: "My technical loadout includes:",
      tags: ["Cyber Security", "Web3", "Unity/Three.js", "React"]
    },
    projects: {
      title: "MISSION LOG",
      color: COLORS.yellow,
      text: "Recent deployed operations:",
      tags: ["DeFi Exchange", "Security Tools", "3D Portfolio"]
    },
    contact: {
      title: "CALLING CARD",
      color: '#ff00ff',
      text: "Send your request:",
      tags: ["muhammadafizh10@gmail.com", "LinkedIn", "GitHub"]
    }
  }[sectionId];

  if (!sectionId) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -5 }} animate={{ scale: 1, rotate: 0 }}
        className="bg-black border-4 max-w-lg w-full p-8 relative overflow-hidden"
        style={{ borderColor: data.color, boxShadow: `0 0 30px ${data.color}40` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visual Flair */}
        <div className="absolute top-0 right-0 p-4 opacity-20 text-9xl font-black leading-none select-none text-white">
          !
        </div>

        <h2 className="text-6xl font-black italic text-white mb-4 tracking-tighter" style={{ color: data.color }}>
          {data.title}
        </h2>

        <p className="text-xl text-white font-bold mb-6 font-mono leading-relaxed">
          {data.text}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {data.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-white text-black font-bold uppercase text-sm transform -skew-x-12">
              {tag}
            </span>
          ))}
        </div>

        <div className="text-right">
          <button onClick={onClose} className="text-white hover:underline uppercase font-bold tracking-widest">
            [ Close Dislpay ]
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==================== MAIN COMPONENT ====================
const Canvas3D = () => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="w-full h-full relative">
      <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          {/* Environment */}
          <color attach="background" args={[COLORS.bg]} />
          <fog attach="fog" args={[COLORS.bg, 10, 60]} />
          <Stars radius={100} depth={50} count={3000} factor={4} fade speed={1} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <SpotLight position={[10, 20, 10]} intensity={1} color={COLORS.cyan} />
          <SpotLight position={[-10, 20, 10]} intensity={1} color={COLORS.red} />

          {/* Objects */}
          <group position={[0, -1, 0]}> {/* Shift world down slightly to fit camera */}
            <Floor />
            <DramaticCastle />
            <StylizedCharacter />
            <SceneUI onSelect={setActiveSection} />
          </group>

          {/* Rig */}
          <CameraController />
        </Suspense>
      </Canvas>

      {/* Modal Overlay based on state */}
      <AnimatePresence>
        {activeSection && <DetailModal sectionId={activeSection} onClose={() => setActiveSection(null)} />}
      </AnimatePresence>

      {/* Helper Text */}
      <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
        <p className="text-white/50 text-sm font-bold tracking-wider uppercase bg-black/50 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
          Move cursor to look around • Click cards to interact
        </p>
      </div>
    </div>
  );
};

export default Canvas3D;
