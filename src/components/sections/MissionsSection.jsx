import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SystemBgText, HexOverlay } from "../ui/PersonaUI";

const MissionsSection = () => {
    const BASE_PROJECTS = [
        { name: "DeFi EXCHANGE", cat: "WEB3", tags: ["Solidity", "React", "Ethers"], desc: "Decentralized trading protocol." },
        { name: "VULN SCANNER", cat: "CYBER", tags: ["Python", "Bash", "Nmap"], desc: "Automated vulnerability assessment." },
        { name: "PIXEL ODYSSEY", cat: "GAME", tags: ["Unity", "C#", "Pixel Art"], desc: "2D Action RPG with rogue-like." },
        { name: "CI/CD PIPELINE", cat: "DEVOPS", tags: ["Docker", "Jenkins", "AWS"], desc: "Automated deployment." },
    ];

    const PROJECTS = [...BASE_PROJECTS, ...BASE_PROJECTS];

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full h-full bg-[#ff0055] relative flex items-center overflow-hidden"
        >
            <SystemBgText text="MISSIONS" />
            <HexOverlay />

            {/* BACKGROUND CHAOS LAYER */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Giant Background Star */}
                <div className="absolute top-[-10%] right-[-10%] text-[40vw] font-persona text-black opacity-[0.05] rotate-12 select-none">
                    ★
                </div>

                {/* Horizontal Lines */}
                <div className="absolute top-[15%] w-[120%] -left-[10%] h-4 md:h-8 bg-black opacity-80 rotate-[-2deg] border-y md:border-y-2 border-white mix-blend-overlay" />
                <div className="absolute top-[18%] w-[120%] -left-[10%] h-1 md:h-2 bg-white opacity-60 rotate-[-2deg]" />

                <div className="absolute bottom-[20%] w-[120%] -left-[10%] h-3 md:h-6 bg-white opacity-70 rotate-[1deg] border-y md:border-y-2 border-black mix-blend-overlay" />

                {/* Jagged Edges */}
                <div className="absolute top-0 w-full h-8 md:h-16 bg-black" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 90% 80%, 85% 100%, 80% 80%, 75% 100%, 70% 80%, 65% 100%, 60% 80%, 55% 100%, 50% 80%, 45% 100%, 40% 80%, 35% 100%, 30% 80%, 25% 100%, 20% 80%, 15% 100%, 10% 80%, 5% 100%, 0 80%)" }} />
                <div className="absolute bottom-0 w-full h-6 md:h-12 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 95% 0%, 90% 20%, 85% 0%, 80% 20%, 75% 0%, 70% 20%, 65% 0%, 60% 20%, 55% 0%, 50% 20%, 45% 0%, 40% 20%, 35% 0%, 30% 20%, 25% 0%, 20% 20%, 15% 0%, 10% 20%, 5% 0%, 0 20%)" }} />
            </div>

            {/* MARQUEE CONTAINER */}
            <div className="w-full h-full flex items-center overflow-hidden relative z-10 pt-12 pb-12 md:pt-0 md:pb-0">
                <motion.div
                    className="flex gap-4 md:gap-16 px-2 md:px-20"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {PROJECTS.map((p, i) => (
                        <div
                            key={i}
                            className="min-w-[200px] md:min-w-[500px] h-[45vh] md:h-[65vh] bg-white border-4 md:border-[12px] border-black transform -skew-x-3 shadow-[8px_8px_0_rgba(0,0,0,0.6)] md:shadow-[25px_25px_0_rgba(0,0,0,0.6)] flex flex-col p-1 md:p-2 group hover:scale-105 transition-transform relative cursor-pointer"
                        >
                            {/* Card Content */}
                            <div className="flex-1 bg-black relative overflow-hidden border-2 md:border-4 border-black">
                                <div className="absolute inset-0 bg-[#ff0055] opacity-20 group-hover:opacity-40 transition-opacity" />
                                <span className="absolute bottom-[-10px] md:bottom-[-20px] right-[-10px] md:right-[-20px] text-white text-5xl md:text-[12rem] font-persona opacity-20 leading-none">
                                    {(i % BASE_PROJECTS.length) + 1}
                                </span>
                                <div className="p-2 md:p-8 relative z-10">
                                    <h3 className="text-white text-xl md:text-5xl font-persona leading-none text-stroke">{p.name}</h3>
                                    <p className="text-gray-400 font-mono mt-2 md:mt-4 font-bold text-[10px] md:text-base">&gt; {p.desc}</p>
                                </div>
                            </div>

                            {/* Yellow Footer */}
                            <div className="p-2 md:p-6 bg-yellow-400 mt-1 md:mt-2 border-2 md:border-4 border-black relative">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dot-matrix.png')] opacity-10" />
                                <div className="flex flex-wrap gap-1 md:gap-2 font-mono text-[8px] md:text-sm font-bold relative z-10">
                                    <span className="bg-black text-white px-1 md:px-2 border border-white">{p.cat}</span>
                                    {p.tags.slice(0, 2).map(t => (
                                        <span key={t} className="bg-white text-black px-1 md:px-2 border border-black">{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Deployed Badge */}
                            <div className="absolute -top-2 -left-2 md:-top-6 md:-left-6 bg-[#00eaff] px-2 py-0.5 md:px-6 md:py-2 border-2 md:border-[6px] border-black text-xs md:text-2xl font-persona transform rotate-[-10deg] shadow-md md:shadow-lg">
                                DEPLOYED
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default MissionsSection;
