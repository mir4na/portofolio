import { motion } from "framer-motion";
import { SystemBgText, HexOverlay } from "../ui/PersonaUI";

const MissionsSection = () => {
    // Duplicating for infinite loop effect
    const BASE_PROJECTS = [
        { name: "DeFi EXCHANGE", cat: "WEB3", tags: ["Solidity", "React", "Ethers"], desc: "Decentralized trading protocol." },
        { name: "VULN SCANNER", cat: "CYBER", tags: ["Python", "Bash", "Nmap"], desc: "Automated vulnerability assessment tool." },
        { name: "PIXEL ODYSSEY", cat: "GAME", tags: ["Unity", "C#", "Pixel Art"], desc: "2D Action RPG with rogue-like elements." },
        { name: "CI/CD PIPELINE", cat: "DEVOPS", tags: ["Docker", "Jenkins", "AWS"], desc: "Automated deployment infrastructure." },
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

            {/* ========== BACKGROUND CHAOS LAYER (DENSITY BOOSTER) ========== */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* 1. Giant Background Typography */}
                <div className="absolute top-[-10%] right-[-10%] text-[40vw] font-persona text-black opacity-[0.05] rotate-12 select-none">
                    ★
                </div>

                {/* 2. Abstract Horizontal Lines (No Text) */}
                <div className="absolute top-[15%] w-[120%] -left-[10%] h-8 bg-black opacity-80 rotate-[-2deg] border-y-2 border-white mix-blend-overlay">
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20" />
                </div>
                <div className="absolute top-[18%] w-[120%] -left-[10%] h-2 bg-white opacity-60 rotate-[-2deg]" />

                <div className="absolute bottom-[20%] w-[120%] -left-[10%] h-6 bg-white opacity-70 rotate-[1deg] border-y-2 border-black mix-blend-overlay">
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dot-matrix.png')] opacity-30" />
                </div>
                <div className="absolute bottom-[24%] w-[120%] -left-[10%] h-1 bg-black opacity-50 rotate-[1deg]" />

                {/* Extra Lines for Density */}
                <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white opacity-20" />
                <div className="absolute top-[42%] left-0 w-full h-[1px] bg-black opacity-10" />
                <div className="absolute top-[60%] left-0 w-full h-[2px] bg-white opacity-10 dashed-border" />

                {/* 3. Polkadot & Grid Patterns */}
                <div className="absolute top-0 left-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-10 mix-blend-multiply" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 mix-blend-screen" />

                {/* Random Polkadot Cluster */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-[radial-gradient(circle,_#000_2px,_transparent_2.5px)] bg-[length:10px_10px] opacity-10 rotate-12" />
                <div className="absolute bottom-40 right-40 w-48 h-48 bg-[radial-gradient(circle,_#fff_2px,_transparent_2.5px)] bg-[length:12px_12px] opacity-10 -rotate-6" />

                {/* 3. Halftone Patterns */}
                <div className="absolute top-0 left-0 w-1/3 h-full bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-10 mix-blend-multiply" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 mix-blend-screen" />

                {/* 4. Jagged Torn Paper Edges */}
                <div className="absolute top-0 w-full h-16 bg-black" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 90% 80%, 85% 100%, 80% 80%, 75% 100%, 70% 80%, 65% 100%, 60% 80%, 55% 100%, 50% 80%, 45% 100%, 40% 80%, 35% 100%, 30% 80%, 25% 100%, 20% 80%, 15% 100%, 10% 80%, 5% 100%, 0 80%)" }}></div>
                <div className="absolute bottom-0 w-full h-12 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 95% 0%, 90% 20%, 85% 0%, 80% 20%, 75% 0%, 70% 20%, 65% 0%, 60% 20%, 55% 0%, 50% 20%, 45% 0%, 40% 20%, 35% 0%, 30% 20%, 25% 0%, 20% 20%, 15% 0%, 10% 20%, 5% 0%, 0 20%)" }}></div>
            </div>

            {/* MARQUEE CONTAINER */}
            <div className="w-full h-full flex items-center overflow-hidden relative z-10">
                <motion.div
                    className="flex gap-8 md:gap-16 px-4 md:px-20"
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
                        <div key={i} className="min-w-[300px] md:min-w-[500px] h-[50vh] md:h-[65vh] bg-white border-[8px] md:border-[12px] border-black transform -skew-x-3 shadow-[15px_15px_0_rgba(0,0,0,0.6)] md:shadow-[25px_25px_0_rgba(0,0,0,0.6)] flex flex-col p-2 group hover:scale-105 transition-transform relative cursor-pointer">
                            {/* Original Card Layout (Restored) */}
                            <div className="flex-1 bg-black relative overflow-hidden border-4 border-black mask-diagonal">
                                <div className="absolute inset-0 bg-[#ff0055] opacity-20 group-hover:opacity-40 transition-opacity" />
                                <span className="absolute bottom-[-20px] right-[-20px] text-white text-[8rem] md:text-[12rem] font-persona opacity-20 leading-none">
                                    {(i % BASE_PROJECTS.length) + 1}
                                </span>
                                <div className="p-4 md:p-8 relative z-10">
                                    <h3 className="text-white text-3xl md:text-5xl font-persona leading-none text-stroke">{p.name}</h3>
                                    <p className="text-gray-400 font-mono mt-4 font-bold text-sm md:text-base">&gt; {p.desc}</p>
                                </div>
                            </div>

                            <div className="p-4 md:p-6 bg-yellow-400 mt-2 border-4 border-black relative">
                                {/* Small texture on yellow footer */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dot-matrix.png')] opacity-10" />
                                <div className="flex flex-wrap gap-2 font-mono text-xs md:text-sm font-bold relative z-10">
                                    <span className="bg-black text-white px-2 border border-white">{p.cat}</span>
                                    {p.tags.map(t => (
                                        <span key={t} className="bg-white text-black px-2 border border-black">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-[#00eaff] px-4 py-1 md:px-6 md:py-2 border-[4px] md:border-[6px] border-black text-xl md:text-2xl font-persona transform rotate-[-10deg] shadow-lg">
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
