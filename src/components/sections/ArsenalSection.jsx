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
            className="w-full h-full bg-[#111] relative flex items-center justify-center p-2 sm:p-4 md:p-12 overflow-hidden"
        >
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <SystemBgText text="ARSENAL" />
                <div className="absolute inset-0 bg-stripes-white opacity-5" />

                <div className="absolute -bottom-20 -left-20 text-[20vw] sm:text-[22vw] md:text-[25vw] font-persona text-[#ffe600] opacity-[0.05] transform rotate-[-15deg] leading-none whitespace-nowrap">
                    SKILLS
                </div>

                <div className="absolute top-10 right-10 sm:right-20 w-10 sm:w-16 md:w-32 h-10 sm:h-16 md:h-32 bg-[#ffe600] opacity-20 transform rotate-45 border sm:border-2 md:border-4 border-[#ffe600] mix-blend-screen" />
                <div className="absolute bottom-40 left-5 sm:left-10 w-6 sm:w-8 md:w-16 h-6 sm:h-8 md:h-16 bg-[#ffe600] opacity-30 transform rotate-45 mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-7xl h-full flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-12 items-center justify-center pt-12 sm:pt-14 pb-14 sm:pb-16 md:py-0">

                {/* MOBILE LAYOUT */}
                <div className="md:hidden w-full h-full flex flex-col justify-center py-2 px-1 gap-4">
                    {/* Top Buttons (Cloud & Web) */}
                    <div className="flex gap-2 h-14 shrink-0 px-2">
                        {categories.slice(0, 2).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`flex-1 border-2 border-black flex items-center justify-center relative overflow-hidden transition-all transform -skew-x-6 shadow-[2px_2px_0_rgba(0,0,0,0.5)] ${activeCat === cat
                                    ? `bg-white text-black`
                                    : 'bg-black/50 text-gray-400'
                                    }`}
                            >
                                <div className={`absolute inset-0 ${TECH_STACK[cat].bg} opacity-20 pointer-events-none`} />
                                <span className={`font-persona text-sm leading-tight text-center relative z-10 transform skew-x-6 ${activeCat === cat ? 'scale-110' : 'scale-100'}`}>
                                    {cat.split(' ')[0]}<br />{cat.split(' ').slice(1).join(' ')}
                                </span>
                                {activeCat === cat && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Middle Content */}
                    <div className="w-full bg-black/80 backdrop-blur-sm border-2 border-white relative overflow-hidden flex flex-col p-4 shadow-[4px_4px_0_#ffe600] transform -skew-x-2 mx-2">
                        <div className={`absolute top-0 right-0 w-16 h-16 ${details.bg} opacity-20 blur-xl rounded-full`} />
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-10 pointer-events-none mix-blend-overlay" />

                        <div className="text-center mb-4 transform skew-x-2">
                            <h2 className={`text-3xl font-persona text-white text-stroke-sm drop-shadow-[2px_2px_0_#000]`}>
                                {activeCat}
                            </h2>
                            <div className="w-16 h-0.5 bg-white mx-auto mt-1" />
                        </div>

                        <div className="bg-white/10 p-2 border-l-2 border-[#ffe600] mb-4 transform skew-x-2">
                            <p className="font-mono text-[10px] text-gray-200">
                                &gt; {details.description}
                            </p>
                        </div>

                        <div className="space-y-3 mb-4 overflow-y-auto transform skew-x-2">
                            {details.stats.map((stat, idx) => (
                                <div key={idx} className="w-full">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-mono text-[10px] font-bold text-gray-400">{stat.label}</span>
                                    </div>
                                    <div className="h-2 w-full flex gap-0.5">
                                        {[...Array(10)].map((_, bulletIdx) => (
                                            <div
                                                key={bulletIdx}
                                                className={`flex-1 transform -skew-x-[20deg] border border-black ${bulletIdx < (stat.val / 10) ? details.bg : 'bg-gray-800'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-1 justify-center transform skew-x-2">
                            {details.skills.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-black border border-white text-white font-bold text-[9px] uppercase shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Buttons (Game & DevOps) */}
                    <div className="flex gap-2 h-14 shrink-0 px-2">
                        {categories.slice(2, 4).map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                className={`flex-1 border-2 border-black flex items-center justify-center relative overflow-hidden transition-all transform -skew-x-6 shadow-[2px_2px_0_rgba(0,0,0,0.5)] ${activeCat === cat
                                    ? `bg-white text-black`
                                    : 'bg-black/50 text-gray-400'
                                    }`}
                            >
                                <div className={`absolute inset-0 ${TECH_STACK[cat].bg} opacity-20 pointer-events-none`} />
                                <span className={`font-persona text-sm leading-tight text-center relative z-10 transform skew-x-6 ${activeCat === cat ? 'scale-110' : 'scale-100'}`}>
                                    {cat.replace('DEVELOPMENT', 'DEV')}
                                </span>
                                {activeCat === cat && (
                                    <div className="absolute top-0 left-0 w-full h-1 bg-black" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* DESKTOP LAYOUT (Preserved as is, wrapped in hidden md:flex) */}
                <div className="hidden md:flex w-full h-full flex-row gap-12 items-center justify-center">
                    <div className="w-1/3 flex flex-col justify-center gap-6 relative">
                        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-[#ffe600]/30 -skew-x-12" />

                        {categories.map((cat, i) => (
                            <motion.button
                                key={cat}
                                onClick={() => setActiveCat(cat)}
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className={`
                                    w-full text-left p-6 pl-12 border-l-[12px] transition-all transform skew-x-[-12deg] group relative overflow-hidden
                                    ${activeCat === cat
                                        ? `bg-white border-l-${TECH_STACK[cat].color.replace('text-', '')} shadow-[15px_15px_0_rgba(0,0,0,0.5)] translate-x-4`
                                        : 'bg-black/50 border-gray-600 hover:bg-white/10 hover:translate-x-2'}
                                `}
                            >
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity transform skew-x-12" />

                                <div className="flex items-center gap-4 transform skew-x-[12deg]">
                                    <div className={`
                                        ${activeCat === cat ? 'text-black' : 'text-gray-400 group-hover:text-white'}
                                        transition-colors scale-110 duration-300
                                     `}>
                                        {TECH_STACK[cat].icon}
                                    </div>
                                    <h3 className={`
                                        text-3xl font-persona font-bold uppercase tracking-tighter
                                        ${activeCat === cat ? 'text-black' : 'text-gray-400 group-hover:text-white'}
                                     `}>
                                        {cat}
                                    </h3>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    <div className="w-2/3 flex-1 relative perspective-1000">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCat}
                                initial={{ rotateY: 90, opacity: 0 }}
                                animate={{ rotateY: 0, opacity: 1 }}
                                exit={{ rotateY: -90, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                                className="h-full w-full relative group"
                            >
                                <div className={`absolute inset-0 bg-black border-[5px] border-white transform rotate-2 shadow-[20px_20px_0_rgba(0,0,0,0.8)] z-0`} />
                                <div className="absolute -inset-2 bg-[#ffe600] opacity-50 transform rotate-[-2] z-[-2]" />
                                <div className={`absolute -inset-4 ${details.bg} opacity-80 transform -rotate-1 z-[-1] clip-comic`} />

                                <div className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#e0e0e0] opacity-90 transform rotate-[-2deg] shadow-md z-20" />

                                <div className="relative z-10 h-full w-full p-12 flex flex-col justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-10 pointer-events-none mix-blend-overlay" />

                                    <div className="flex flex-row gap-8 items-center relative w-full">

                                        <div className="flex-shrink-0 relative hidden md:block">
                                            <div className="absolute inset-0 bg-[#ffe600] transform rotate-6 border-2 border-black scale-110" />
                                            <div className={`relative w-48 h-48 bg-black border-[4px] border-white flex items-center justify-center overflow-hidden transform rotate-[-3deg]`}>
                                                <div className={`absolute inset-0 ${details.bg} opacity-20`} />
                                                <div className={`text-${details.color.replace('text-', '')}`}>
                                                    <RadarChart color={details.color} />
                                                </div>
                                            </div>
                                            <div className={`absolute -bottom-4 -right-4 bg-black text-white px-3 py-1 font-mono text-xs font-bold border-2 border-white transform rotate-[-6deg]`}>
                                                LVL. MAX
                                            </div>
                                        </div>

                                        <div className="flex-1 w-full text-left">
                                            <h2 className={`text-6xl lg:text-7xl font-persona text-white mb-2 ${details.color} drop-shadow-[5px_5px_0_#000] text-stroke-sm relative inline-block leading-none`}>
                                                {activeCat.split('&')[0]}
                                                <span className="absolute -bottom-2 left-0 w-full h-2 bg-white transform -skew-x-12" />
                                            </h2>

                                            <div className="bg-white/10 p-4 border-l-4 border-[#ffe600] mt-4 mb-8 transform -skew-x-6 backdrop-blur-sm">
                                                <p className="font-mono text-gray-200 text-base font-bold skew-x-6">
                                                    &gt; {details.description}
                                                </p>
                                            </div>

                                            <div className="space-y-4 mb-6 w-full">
                                                {details.stats.map((stat, idx) => (
                                                    <div key={idx} className="flex items-center gap-4 w-full group/stat">
                                                        <span className="w-20 text-right font-mono text-sm font-bold text-gray-400 group-hover/stat:text-white transition-colors">{stat.label}</span>
                                                        <div className="flex-1 flex gap-1 h-6 items-center">
                                                            {[...Array(10)].map((_, bulletIdx) => (
                                                                <motion.div
                                                                    key={bulletIdx}
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: bulletIdx < (stat.val / 10) ? 1 : 0.2 }}
                                                                    transition={{ delay: 0.1 * bulletIdx }}
                                                                    className={`
                                                                        h-4 w-full transform -skew-x-[20deg] border border-black
                                                                        ${bulletIdx < (stat.val / 10) ? details.bg : 'bg-gray-800'}
                                                                    `}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                {details.skills.map((skill, sIdx) => (
                                                    <span key={skill} className={`
                                                        px-3 py-1 bg-black border-2 border-white text-white font-bold text-sm uppercase tracking-wider
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

            </div>
        </motion.div>
    );
};

export default ArsenalSection;
