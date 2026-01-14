import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==================== THEME CONFIG ====================
// distinct vibrant themes for each section
const THEMES = {
  about: { bg: "bg-[#00eaff]", text: "text-black", accent: "black", label: "CYAN_PHANTOM" },
  skills: { bg: "bg-[#ffe600]", text: "text-black", accent: "black", label: "YELLOW_THUNDER" },
  projects: { bg: "bg-[#ff0055]", text: "text-white", accent: "white", label: "PINK_CHAOS" },
  contact: { bg: "bg-[#ccff00]", text: "text-black", accent: "black", label: "TOXIC_SIGNAL" },
  home: { bg: "bg-[#d90000]", text: "text-white" }
};

// ==================== BACKGROUND ====================
const MainBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-[#111]">
    {/* Base */}
    <div className="absolute inset-0 bg-[#d90000] z-0" />

    {/* Giant Background Text */}
    <div className="absolute top-0 right-0 leading-[0.8] font-persona text-black/20 text-[50vh] transform rotate-90 origin-top-right select-none pointer-events-none">
      ROYAL
    </div>

    {/* Texture Overlay */}
    <div className="absolute inset-0 bg-dots opacity-40 mix-blend-multiply" />

    {/* Dynamic Black Splash */}
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      className="absolute -bottom-1/2 -left-1/4 w-[150%] h-full bg-black transform rotate-12 opacity-90 clip-shatter"
    />
  </div>
)

// ==================== FULL SCREEN MODAL ====================
const FullScreenSection = ({ id, onClose }) => {
  const theme = THEMES[id];

  // Content Mapping
  const content = {
    about: (
      <div className="flex flex-col h-full justify-center p-8 md:p-20 relative">
        <h1 className="text-[12rem] md:text-[20rem] font-persona leading-[0.8] opacity-20 absolute top-0 -left-20 pointer-events-none text-white">
          WHO?
        </h1>

        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          {/* Giant Image/Shape */}
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: -5 }}
            className="w-80 h-80 md:w-[500px] md:h-[500px] bg-black border-8 border-white clip-busted overflow-hidden relative shadow-[20px_20px_0_rgba(0,0,0,0.5)] flex-shrink-0"
          >
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Joker&backgroundColor=b6e3f4" className="w-full h-full object-cover grayscale contrast-125" />
            <div className="absolute bottom-0 w-full bg-white text-black font-persona text-4xl text-center py-2">
              CODENAME: JOKER
            </div>
          </motion.div>

          <div className="flex-1 bg-white/90 p-12 transform rotate-2 border-4 border-black shadow-[20px_20px_0_#000]">
            <h2 className="text-8xl font-persona mb-4 text-black">PROFILE</h2>
            <p className="font-mono text-3xl font-bold leading-relaxed">
              NAME: <span className="bg-black text-white px-2">AFWAN H.</span><br />
              ROLE: <span className="bg-[#00eaff] px-2 text-black">DEV_ARCHITECT</span>
            </p>
            <div className="h-2 w-full bg-black my-8" />
            <p className="text-2xl font-bold">
              "I steal bad UX and replace it with style. Specialized in Frontend chaos and Backend order."
            </p>
          </div>
        </div>
      </div>
    ),
    skills: (
      <div className="flex flex-col h-full justify-center items-center p-8 relative">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-right">
            <h2 className="text-[10rem] font-persona leading-none text-black drop-shadow-[10px_10px_0_#fff]">
              POWER<br />LEVEL
            </h2>
            <div className="bg-black text-white inline-block text-3xl font-mono px-4 py-2 transform -skew-x-12 mt-4">
              SYSTEM ANALYSIS: COMPLETE
            </div>
          </div>

          <div className="space-y-8">
            {[
              { n: "REACT / NEXT", v: "100%" },
              { n: "THREE.JS", v: "85%" },
              { n: "SECURITY", v: "92%" },
              { n: "BLOCKCHAIN", v: "78%" }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className="bg-black p-4 transform -skew-x-12 border-4 border-white shadow-[10px_10px_0_rgba(0,0,0,0.5)] relative group"
              >
                <div className="flex justify-between items-center text-white font-persona text-5xl relative z-10">
                  <span>{s.n}</span>
                  <span className="text-[#ffe600]">{s.v}</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  className="absolute inset-0 bg-[#ffe600] z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
    projects: (
      <div className="h-full flex flex-col justify-center items-center relative overflow-y-auto custom-scroll w-full">
        <h2 className="fixed top-10 left-10 text-[8rem] font-persona text-white text-outline-thick z-50 pointer-events-none">
          HEISTS
        </h2>

        <div className="flex flex-nowrap gap-12 px-20 py-10 overflow-x-auto w-full items-center h-full">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="min-w-[400px] h-[600px] bg-black border-[6px] border-white transform rotate-3 flex flex-col relative group cursor-pointer shadow-[30px_30px_0_rgba(0,0,0,0.8)]"
            >
              <div className="h-1/2 bg-white relative overflow-hidden group-hover:invert transition-all duration-75">
                {/* Geometric Glitch Art */}
                <div className="absolute inset-0 bg-[#ff0055] opacity-20 transform rotate-45 scale-150" />
                <div className="absolute bottom-4 left-4 font-persona text-6xl text-black">
                  CASE_{n}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-persona text-5xl mb-4">PROJECT {n}</h3>
                  <p className="text-white/70 font-mono text-xl">
                    Full stack implementation of a decentralized exchange protocol.
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="bg-[#ff0055] text-white px-3 py-1 font-bold text-lg">WEB3</span>
                  <span className="bg-white text-black px-3 py-1 font-bold text-lg">REACT</span>
                </div>
              </div>

              {/* Tape */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-[#ffe600] opacity-90 shadow-lg rotate-2" />
            </motion.div>
          ))}
        </div>
      </div>
    ),
    contact: (
      <div className="h-full flex flex-col justify-center items-center relative">
        <div className="w-full max-w-4xl bg-black border-[10px] border-white p-20 transform -rotate-2 relative shadow-[40px_40px_0_#000]">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ccff00] rounded-full flex items-center justify-center animate-bounce border-4 border-black">
            <span className="font-persona text-5xl text-black">!!!</span>
          </div>

          <h2 className="text-[10rem] font-persona text-[#ccff00] leading-none mb-8 text-center">
            CALLING<br />CARD
          </h2>
          <p className="text-white text-4xl font-bold font-mono text-center mb-12">
            Ready to steal the show? Send me a request.
          </p>

          <a href="mailto:muhammadafizh10@gmail.com" className="block text-center bg-white text-black font-persona text-7xl py-8 hover:bg-[#ccff00] transition-colors border-4 border-black">
            SEND EMAIL
          </a>
        </div>
      </div>
    )
  };

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 50% 50%)" }}
      animate={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 0.8, ease: "circIn" }}
      className={`fixed inset-0 z-50 ${theme.bg} ${theme.text} overflow-hidden`}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-stripes-bold opacity-10 pointer-events-none" />

      {/* Close Button - Massive */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-50 text-[5rem] font-persona hover:scale-125 transition-transform drop-shadow-md text-white mix-blend-difference"
      >
        ✕
      </button>

      {/* Giant Label Watermark */}
      <div className="absolute bottom-0 left-0 text-[20vw] font-persona opacity-10 leading-none select-none pointer-events-none whitespace-nowrap">
        {theme.label}
      </div>

      {/* Content Container */}
      <div className="w-full h-full relative z-10">
        {content[id]}
      </div>
    </motion.div>
  );
};

// ==================== MAIN APP ====================
const App = () => {
  const [activeSection, setActiveSection] = useState(null);

  const MenuButton = ({ id, label, color }) => (
    <motion.button
      onClick={() => setActiveSection(id)}
      whileHover={{ scale: 1.1, x: 50 }}
      whileTap={{ scale: 0.9 }}
      className="group relative w-full md:w-[600px] h-32 md:h-40 mb-8"
    >
      {/* Background Shape */}
      <div className="absolute inset-0 bg-black border-[6px] border-white transform skew-x-[-20deg] shadow-[20px_20px_0_rgba(0,0,0,0.5)] transition-all group-hover:bg-white group-hover:border-black" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-between px-12 skew-x-[-20deg]">
        <span className="text-7xl md:text-8xl font-persona text-white group-hover:text-black transition-colors" style={{ WebkitTextStroke: '2px black' }}>
          {label}
        </span>
        <div className={`w-12 h-12 ${color} border-2 border-black transform rotate-45 group-hover:animate-spin`} />
      </div>
    </motion.button>
  );

  return (
    <main className="w-screen h-screen relative overflow-hidden font-sans">
      <MainBackground />

      {/* HUD / DECOR */}
      <div className="fixed top-8 left-8 z-30 flex gap-4 pointer-events-none">
        <div className="bg-black text-white px-6 py-2 border-4 border-white font-persona text-3xl transform -skew-x-12">
          AFWAN HAFIZH
        </div>
        <div className="bg-[#ffe600] text-black px-4 py-2 border-4 border-black font-bold text-xl transform skew-x-12">
          LV. 99
        </div>
      </div>

      {/* MAIN BATTLE MENU */}
      <div className="absolute bottom-10 left-10 md:left-20 z-30 flex flex-col items-start transform -rotate-2 origin-bottom-left">
        <MenuButton id="about" label="ATTACK" color="bg-[#00eaff]" />
        <MenuButton id="skills" label="MAGIC" color="bg-[#ffe600]" />
        <MenuButton id="projects" label="ITEM" color="bg-[#ff0055]" />
        <MenuButton id="contact" label="GUARD" color="bg-[#ccff00]" />
      </div>

      {/* FULL SCREEN TRANSITION LAYERS */}
      <AnimatePresence>
        {activeSection && (
          <FullScreenSection id={activeSection} onClose={() => setActiveSection(null)} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;