import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NoiseOverlay, HUD } from "./components/ui/PersonaUI";

// Sections
import HomeSection from "./components/sections/HomeSection";
import PersonaSection from "./components/sections/PersonaSection";
import ArsenalSection from "./components/sections/ArsenalSection";
import MissionsSection from "./components/sections/MissionsSection";
import AchievementSection from "./components/sections/MilestoneSection";
import CallingCardSection from "./components/sections/CallingCardSection";

const App = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const MenuButton = ({ label, id, color, className = "" }) => (
    <div className={className}>
      <motion.button
        onClick={() => setActiveSection(id)}
        className={`group relative h-12 md:h-24 w-auto min-w-[100px] md:min-w-[300px] text-left transition-all w-full`}
        whileHover={{ scale: 1.05, y: -5, zIndex: 100 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background shape */}
        <div className={`
                absolute inset-0 bg-black border-[2px] md:border-[4px] border-white transform skew-x-[-15deg] shadow-[3px_3px_0_rgba(0,0,0,0.8)] md:shadow-[5px_5px_0_rgba(0,0,0,0.8)]
                transition-colors duration-200 group-hover:bg-white group-hover:border-black pointer-events-none
            `} />

        {/* Content */}
        <div className="relative h-full flex items-center justify-between px-3 md:px-8 transform skew-x-[-15deg] z-10 w-full gap-2 md:gap-4">
          <span className={`
                    text-lg md:text-5xl font-persona italic tracking-tighter text-white whitespace-nowrap
                    group-hover:text-black transition-colors duration-200 text-stroke-sm group-hover:text-stroke
                 `}>
            {label}
          </span>

          <div className={`
                    w-4 h-4 md:w-10 md:h-10 flex-shrink-0 ${color} border-[2px] md:border-[3px] border-black
                    transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-500 shadow-md
                 `} />
        </div>
      </motion.button>
    </div>
  );

  return (
    <main className="w-screen h-screen bg-[#111] overflow-hidden relative flex flex-col justify-between">
      <NoiseOverlay />
      <HUD />

      {/* TOP NAVIGATION (2 Buttons) */}
      <div className="w-full relative z-50 flex justify-center items-start pt-1 md:pt-8 pb-2 md:pb-4 gap-1 md:gap-16 pointer-events-none">
        <div className="pointer-events-auto flex gap-2 md:gap-24 items-start scale-[0.6] md:scale-100 origin-top">
          {/* Persona: Higher, Tilted Left */}
          <MenuButton
            label="PERSONA" id="Persona" color="bg-[#00eaff]"
            className="transform -rotate-6 mt-1 md:mt-2 origin-bottom-right"
          />
          {/* Arsenal: Lower, Tilted Right */}
          <MenuButton
            label="ARSENAL" id="Arsenal" color="bg-[#ffe600]"
            className="transform rotate-3 mt-6 md:mt-16 origin-top-left"
          />
        </div>
      </div>

      {/* CENTRAL CONTENT AREA */}
      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="w-full h-full pointer-events-auto bg-transparent">
          <AnimatePresence mode="wait">
            {activeSection === "Home" && <HomeSection key="home" />}
            {activeSection === "Persona" && <PersonaSection key="persona" />}
            {activeSection === "Arsenal" && <ArsenalSection key="arsenal" />}
            {activeSection === "Missions" && <MissionsSection key="missions" />}
            {activeSection === "Achievement" && <AchievementSection key="achievement" />}
            {activeSection === "Calling" && <CallingCardSection key="calling" />}
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM NAVIGATION (3 Buttons) */}
      <div className="w-full relative z-50 flex justify-center items-end pb-2 md:pb-12 pointer-events-none">
        <div className="pointer-events-auto flex flex-wrap justify-center gap-1 md:gap-16 items-end scale-[0.6] md:scale-100 origin-bottom">
          {/* Missions: High */}
          <MenuButton
            label="MISSIONS" id="Missions" color="bg-[#ff0055]"
            className="transform -rotate-3 mb-4 md:mb-12"
          />
          {/* Milestones: Low */}
          <MenuButton
            label="MILESTONES" id="Achievement" color="bg-[#a855f7]"
            className="transform rotate-2 mb-1 md:mb-2"
          />
          {/* Calling: High */}
          <MenuButton
            label="CONTACT" id="Calling" color="bg-[#d90000]"
            className="transform -rotate-6 mb-6 md:mb-16"
          />
        </div>
      </div>

      {/* GLOBAL BACKGROUND ART */}
      <div className="absolute inset-0 z-0 bg-black pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] text-white opacity-[0.03] font-persona pointer-events-none animate-spin-slow">
          ★
        </div>
      </div>

      {/* GLOBAL BACK TO HOME BUTTON */}
      <AnimatePresence>
        {activeSection !== "Home" && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[200] pointer-events-auto"
          >
            <button
              onClick={() => setActiveSection("Home")}
              className="bg-black border-[3px] border-white text-white px-4 md:px-8 py-2 font-persona text-xl md:text-3xl hover:bg-white hover:text-black hover:scale-110 transition-all shadow-[5px_5px_0_#d90000] transform -skew-x-12 flex items-center gap-2 group"
            >
              <span className="transform skew-x-12">↩ RETURN</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;