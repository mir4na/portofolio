import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "../../constants";
import { SystemBgText, RadarChart } from "../ui/PersonaUI";

const ArsenalSection = () => {
    const categories = Object.keys(TECH_STACK);
    const [activeCat, setActiveCat] = useState(categories[0]);
    const details = TECH_STACK[activeCat];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full bg-[#111] relative flex items-center justify-center p-2 md:p-12 overflow-hidden"
        >
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <SystemBgText text="ARSENAL" />
                <div className="absolute inset-0 bg-stripes-white opacity-5" />

                <div className="absolute -bottom-20 -left-20 text-[25vw] font-persona text-[#ffe600] opacity-[0.05] transform rotate-[-15deg] leading-none whitespace-nowrap">
                    SKILLS
                </div>

                <div className="absolute top-10 right-20 w-16 md:w-32 h-16 md:h-32 bg-[#ffe600] opacity-20 transform rotate-45 border-2 md:border-4 border-[#ffe600] mix-blend-screen" />
                <div className="absolute bottom-40 left-10 w-8 md:w-16 h-8 md:h-16 bg-[#ffe600] opacity-30 transform rotate-45 mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-7xl h-full flex flex-col md:flex-row gap-2 md:gap-12 items-center justify-center pt-14 pb-16 md:py-0">

                <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-start md:justify-center gap-1.5 md:gap-6 relative overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar flex-shrink-0">
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-[#ffe600]/30 -skew-x-12" />

                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`
                                min-w-[100px] md:min-w-0 md:w-full text-left p-2 md:p-6 md:pl-12 border-b-2 md:border-b-0 md:border-l-[12px] transition-all transform md:skew-x-[-12deg] group relative overflow-hidden flex-shrink-0
                                ${activeCat === cat
                                    ? `bg-white md:border-l-${details.color.replace('text-', '')} border-b-${details.color.replace('text-', '')} shadow-[3px_3px_0_rgba(0,0,0,0.5)] md:shadow-[15px_15px_0_rgba(0,0,0,0.5)] md:translate-x-4`
                                    : 'bg-black/50 border-gray-600 hover:bg-white/10 md:hover:translate-x-2'}
                            `}
                        >
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity transform skew-x-12" />

                            <div className="flex items-center gap-2 md:gap-4 transform md:skew-x-[12deg]">
                                <div className={`
                                    ${activeCat === cat ? 'text-black' : 'text-gray-400 group-hover:text-white'} 
                                    transition-colors scale-75 md:scale-110 duration-300
                                 `}>
                                    {TECH_STACK[cat].icon}
                                </div>
                                <h3 className={`
                                    text-xs md:text-3xl font-persona font-bold uppercase tracking-tighter
                                    ${activeCat === cat ? 'text-black' : 'text-gray-400 group-hover:text-white'}
                                 `}>
                                    {cat}
                                </h3>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <div className="w-full md:w-2/3 flex-1 relative perspective-1000">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCat}
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                            className="h-full w-full relative group"
                        >
                            <div className={`absolute inset-0 bg-black border-2 md:border-[5px] border-white transform rotate-1 md:rotate-2 shadow-[10px_10px_0_rgba(0,0,0,0.8)] md:shadow-[20px_20px_0_rgba(0,0,0,0.8)] z-0`} />
                            <div className="absolute -inset-1 md:-inset-2 bg-[#ffe600] opacity-50 transform rotate-[-1deg] md:rotate-[-2] z-[-2]" />
                            <div className={`absolute -inset-2 md:-inset-4 ${details.bg} opacity-80 transform -rotate-1 z-[-1] clip-comic`} />

                            <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#e0e0e0] opacity-90 transform rotate-[-2deg] shadow-md z-20" />

                            <div className="relative z-10 h-full w-full p-3 md:p-12 flex flex-col justify-center overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-10 pointer-events-none mix-blend-overlay" />

                                <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-center relative w-full">

                                    <div className="flex-shrink-0 relative hidden md:block">
                                        <div className="absolute inset-0 bg-[#ffe600] transform rotate-6 border-2 border-black scale-110" />
                                        <div className={`relative w-32 h-32 md:w-48 md:h-48 bg-black border-2 md:border-[4px] border-white flex items-center justify-center overflow-hidden transform rotate-[-3deg]`}>
                                            <div className={`absolute inset-0 ${details.bg} opacity-20`} />
                                            <div className={`text-${details.color.replace('text-', '')}`}>
                                                <RadarChart color={details.color} />
                                            </div>
                                        </div>
                                        <div className={`absolute -bottom-4 -right-4 bg-black text-white px-2 md:px-3 py-0.5 md:py-1 font-mono text-[10px] md:text-xs font-bold border-2 border-white transform rotate-[-6deg]`}>
                                            LVL. MAX
                                        </div>
                                    </div>

                                    <div className="flex-1 w-full text-left">
                                        <h2 className={`text-2xl md:text-6xl lg:text-7xl font-persona text-white mb-1 md:mb-2 ${details.color} drop-shadow-[3px_3px_0_#000] md:drop-shadow-[5px_5px_0_#000] text-stroke-sm relative inline-block leading-none`}>
                                            {activeCat.split('&')[0]}
                                            <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-1 md:h-2 bg-white transform -skew-x-12" />
                                        </h2>

                                        <div className="bg-white/10 p-2 md:p-4 border-l-2 md:border-l-4 border-[#ffe600] mt-2 md:mt-4 mb-3 md:mb-8 transform -skew-x-6 backdrop-blur-sm">
                                            <p className="font-mono text-gray-200 text-[10px] md:text-base font-bold skew-x-6">
                                                &gt; {details.description}
                                            </p>
                                        </div>

                                        <div className="space-y-1.5 md:space-y-4 mb-3 md:mb-6 w-full">
                                            {details.stats.map((stat, idx) => (
                                                <div key={idx} className="flex items-center gap-2 md:gap-4 w-full group/stat">
                                                    <span className="w-12 md:w-20 text-right font-mono text-[10px] md:text-sm font-bold text-gray-400 group-hover/stat:text-white transition-colors">{stat.label}</span>
                                                    <div className="flex-1 flex gap-0.5 md:gap-1 h-3 md:h-6 items-center">
                                                        {[...Array(10)].map((_, bulletIdx) => (
                                                            <motion.div
                                                                key={bulletIdx}
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: bulletIdx < (stat.val / 10) ? 1 : 0.2 }}
                                                                transition={{ delay: 0.1 * bulletIdx }}
                                                                className={`
                                                                    h-2 md:h-4 w-full transform -skew-x-[20deg] border border-black
                                                                    ${bulletIdx < (stat.val / 10) ? details.bg : 'bg-gray-800'}
                                                                `}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap gap-1 md:gap-3">
                                            {details.skills.map((skill, sIdx) => (
                                                <span key={skill} className={`
                                                    px-1.5 py-0.5 md:px-3 md:py-1 bg-black border md:border-2 border-white text-white font-bold text-[8px] md:text-sm uppercase tracking-wider
                                                    transform rotate-${sIdx % 2 === 0 ? '1' : '-1'} hover:scale-110 hover:rotate-0 transition-all cursor-default shadow-[2px_2px_0_rgba(255,255,255,0.2)]
                                                  `}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default ArsenalSection;
