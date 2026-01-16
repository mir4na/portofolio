import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NoiseOverlay, HUD } from "./components/ui/PersonaUI";

import HomeSection from "./components/sections/HomeSection";
import PersonaSection from "./components/sections/PersonaSection";
import ArsenalSection from "./components/sections/ArsenalSection";
import MissionsSection from "./components/sections/MissionsSection";
import MilestoneSection from "./components/sections/MilestoneSection";
import CallingCardSection from "./components/sections/CallingCardSection";

const App = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const MenuButton = ({ label, id, color, className = "", isMobile = false }) => (
    <div className={className}>
      <motion.button
        onClick={() => setActiveSection(id)}
        className={`group relative ${isMobile ? 'h-12 min-w-[110px]' : 'h-10 sm:h-14 md:h-20 lg:h-24 min-w-[80px] sm:min-w-[120px] md:min-w-[220px] lg:min-w-[360px]'} w-auto text-left transition-all`}
        whileHover={{ scale: 1.05, y: -5, zIndex: 100 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={`
                absolute inset-0 bg-black border-[2px] sm:border-[3px] md:border-[3px] lg:border-[4px] border-white transform skew-x-[-15deg] shadow-[2px_2px_0_rgba(0,0,0,0.8)] sm:shadow-[3px_3px_0_rgba(0,0,0,0.8)] md:shadow-[4px_4px_0_rgba(0,0,0,0.8)] lg:shadow-[5px_5px_0_rgba(0,0,0,0.8)]
                transition-colors duration-200 group-hover:bg-white group-hover:border-black pointer-events-none
            `} />

        <div className="relative h-full flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-10 transform skew-x-[-15deg] z-10 w-full gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          <span className={`
                    text-base sm:text-xl md:text-3xl lg:text-6xl font-persona italic tracking-tighter text-white whitespace-nowrap
                    group-hover:text-black transition-colors duration-200 text-stroke-sm group-hover:text-stroke
                 `}>
            {label}
          </span>

          <div className={`
                    w-3 h-3 sm:w-5 sm:h-5 md:w-8 md:h-8 lg:w-12 lg:h-12 flex-shrink-0 ${color} border-[1px] sm:border-[2px] md:border-[3px] border-black
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

      <div className="absolute top-24 w-full z-50 flex md:hidden justify-center items-center gap-4 pointer-events-none">
        <div className="pointer-events-auto flex gap-4">
          <MenuButton
            label="PERSONA" id="Persona" color="bg-[#00eaff]"
            className="transform -rotate-2 origin-bottom-right"
            isMobile={true}
          />
          <MenuButton
            label="ARSENAL" id="Arsenal" color="bg-[#ffe600]"
            className="transform rotate-2 origin-bottom-left"
            isMobile={true}
          />
        </div>
      </div>

      <div className="w-full relative z-50 hidden md:flex justify-center items-start pt-8 md:pt-4 lg:pt-8 pb-4 gap-16 md:gap-8 lg:gap-16 pointer-events-none">
        <div className="pointer-events-auto flex gap-24 md:gap-12 lg:gap-24 items-start">
          <MenuButton
            label="PERSONA" id="Persona" color="bg-[#00eaff]"
            className="transform -rotate-6 mt-2 origin-bottom-right"
          />
          <MenuButton
            label="ARSENAL" id="Arsenal" color="bg-[#ffe600]"
            className="transform rotate-3 mt-16 md:mt-8 lg:mt-16 origin-top-left"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-40 pointer-events-none">
        <div className="w-full h-full pointer-events-auto bg-transparent">
          <AnimatePresence mode="wait">
            {activeSection === "Home" && <HomeSection key="home" />}
            {activeSection === "Persona" && <PersonaSection key="persona" />}
            {activeSection === "Arsenal" && <ArsenalSection key="arsenal" />}
            {activeSection === "Missions" && <MissionsSection key="missions" />}
            {activeSection === "Achievement" && <MilestoneSection key="achievement" />}
            {activeSection === "Calling" && <CallingCardSection key="calling" />}
          </AnimatePresence>
        </div>
      </div>

      <div className={`absolute ${activeSection === "Home" ? 'bottom-4' : 'bottom-24'} md:bottom-0 w-full z-50 flex justify-center items-end pb-0 sm:pb-4 md:pb-6 lg:pb-12 pointer-events-none transition-all duration-500`}>
        <div className="hidden md:flex pointer-events-auto flex-wrap justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-16 items-end px-2">
          <MenuButton
            label="PROJECTS" id="Missions" color="bg-[#ff0055]"
            className="transform -rotate-2 mb-2 sm:mb-4 md:mb-6 lg:mb-12"
          />
          <MenuButton
            label="MILESTONES" id="Achievement" color="bg-[#a855f7]"
            className="transform rotate-1 mb-0.5 sm:mb-1 md:mb-1 lg:mb-2"
          />
          <MenuButton
            label="CONTACT" id="Calling" color="bg-[#d90000]"
            className="transform -rotate-3 mb-3 sm:mb-6 md:mb-8 lg:mb-16"
          />
        </div>

        {/* MOBILE BOTTOM NAV (3 Buttons) */}
        <div className="flex md:hidden pointer-events-auto items-end gap-2 justify-center pb-4">
          <MenuButton
            label="PROJECTS" id="Missions" color="bg-[#ff0055]"
            className="transform -rotate-1 origin-bottom-right"
            isMobile={true}
          />
          <MenuButton
            label="MILESTONE" id="Achievement" color="bg-[#a855f7]"
            className="transform -translate-y-2"
            isMobile={true}
          />
          <MenuButton
            label="CONTACT" id="Calling" color="bg-[#d90000]"
            className="transform rotate-1 origin-bottom-left"
            isMobile={true}
          />
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-black pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-red-900/10 rounded-full blur-[60px] sm:blur-[90px] md:blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-blue-900/10 rounded-full blur-[50px] sm:blur-[75px] md:blur-[100px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] sm:text-[35vw] md:text-[40vw] text-white opacity-[0.03] font-persona pointer-events-none animate-spin-slow">
          ★
        </div>
      </div>

      <AnimatePresence>
        {activeSection !== "Home" && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 z-[200] pointer-events-auto"
          >
            <button
              onClick={() => setActiveSection("Home")}
              className="bg-black border-[2px] sm:border-[3px] border-white text-white px-3 sm:px-5 md:px-8 py-1.5 sm:py-2 font-persona text-base sm:text-xl md:text-3xl hover:bg-white hover:text-black hover:scale-110 transition-all shadow-[3px_3px_0_#d90000] sm:shadow-[5px_5px_0_#d90000] transform -skew-x-12 flex items-center gap-2 group"
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