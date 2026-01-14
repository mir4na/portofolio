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
            className="w-full h-full bg-[#111] relative flex items-center justify-center p-4 md:p-12 overflow-hidden"
        >
            {/* BACKGROUND CHAOS LAYER */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <SystemBgText text="ARSENAL" />
                <div className="absolute inset-0 bg-stripes-white opacity-5" />
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-noise opacity-10 mix-blend-overlay" />

                {/* Giant Decorative Text - NOW YELLOW */}
                <div className="absolute -bottom-20 -left-20 text-[25vw] font-persona text-[#ffe600] opacity-[0.05] transform rotate-[-15deg] leading-none whitespace-nowrap">
                    SKILLS
                </div>

                {/* YELLOW ACCENTS (Diamond Theme) */}
                {/* YELLOW ACCENTS (Diamond Theme) - More intense */}
                <div className="absolute top-10 right-20 w-32 h-32 bg-[#ffe600] opacity-20 transform rotate-45 border-4 border-[#ffe600] mix-blend-screen" />
                <div className="absolute bottom-40 left-10 w-16 h-16 bg-[#ffe600] opacity-30 transform rotate-45 mix-blend-screen" />
                <div className="absolute inset-0 bg-[#ffe600] opacity-[0.02] mix-blend-screen pointer-events-none" />

                {/* Floating Shards (Decor) */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[10%] w-32 h-32 border-4 border-white/20 transform rotate-12"
                />
                <motion.div
                    animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[20%] right-[10%] w-48 h-12 bg-white/5 transform -rotate-12"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl h-full md:h-[70vh] flex flex-col md:flex-row gap-0 md:gap-12 items-center justify-center">

                {/* LEFT: Category Selector (Aggressive Slant) */}
                <div className="w-full md:w-1/3 flex flex-row md:flex-col justify-center gap-2 md:gap-6 relative overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
                    {/* Decorative line connecting buttons (Desktop only) - YELLOW */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-[#ffe600]/30 -skew-x-12" />

                    {categories.map((cat, i) => (
                        <motion.button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className={`
                                min-w-[200px] md:min-w-0 md:w-full text-left p-4 md:p-6 md:pl-12 border-b-4 md:border-b-0 md:border-l-[12px] transition-all transform md:skew-x-[-12deg] group relative overflow-hidden flex-shrink-0
                                ${activeCat === cat
                                    ? `bg-white md:border-l-${details.color.replace('text-', '')} border-b-${details.color.replace('text-', '')} shadow-[5px_5px_0_rgba(0,0,0,0.5)] md:shadow-[15px_15px_0_rgba(0,0,0,0.5)] md:translate-x-4`
                                    : 'bg-black/50 border-gray-600 hover:bg-white/10 md:hover:translate-x-2'}
                            `}
                        >
                            {/* Hover flash effect */}
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity transform skew-x-12" />

                            <div className="flex items-center gap-4 transform md:skew-x-[12deg]">
                                <div className={`
                                    ${activeCat === cat ? 'text-black' : 'text-gray-400 group-hover:text-white'} 
                                    transition-colors scale-90 md:scale-110 duration-300
                                 `}>
                                    {TECH_STACK[cat].icon}
                                </div>
                                <h3 className={`
                                    text-base md:text-3xl font-persona font-bold uppercase tracking-tighter
                                    ${activeCat === cat ? 'text-black' : 'text-gray-400 group-hover:text-white'}
                                 `}>
                                    {cat}
                                </h3>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* RIGHT: Detail View (Cut-out Paper Style) */}
                <div className="w-full md:w-2/3 h-full relative perspective-1000 mt-4 md:mt-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCat}
                            initial={{ rotateY: 90, opacity: 0 }}
                            animate={{ rotateY: 0, opacity: 1 }}
                            exit={{ rotateY: -90, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                            className="h-full w-full relative group"
                        >
                            {/* Background "Paper" Layers (Chaos) */}
                            <div className={`absolute inset-0 bg-black border-[5px] border-white transform rotate-2 shadow-[20px_20px_0_rgba(0,0,0,0.8)] z-0`} />
                            {/* Yellow Accent Layer behind */}
                            <div className="absolute -inset-2 bg-[#ffe600] opacity-50 transform rotate-[-2] z-[-2]" />
                            <div className={`absolute -inset-4 ${details.bg} opacity-80 transform -rotate-1 z-[-1] clip-comic`} />

                            {/* Tape Element */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-[#e0e0e0] opacity-90 transform rotate-[-2deg] shadow-md z-20" />

                            {/* Main Card Content */}
                            <div className="relative z-10 h-full w-full p-6 md:p-12 flex flex-col justify-center overflow-hidden overflow-y-auto">
                                {/* Halftone Texture Overlay */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-10 pointer-events-none mix-blend-overlay" />

                                <div className="flex flex-col md:flex-row gap-8 items-center relative w-full">

                                    {/* Radar Chart Container (Sticker Style) - WITH YELLOW ACCENT */}
                                    <div className="flex-shrink-0 relative">
                                        <div className="absolute inset-0 bg-[#ffe600] transform rotate-6 border-2 border-black scale-110" />
                                        <div className={`relative w-40 h-40 md:w-48 md:h-48 bg-black border-[4px] border-white flex items-center justify-center overflow-hidden transform rotate-[-3deg]`}>
                                            <div className={`absolute inset-0 ${details.bg} opacity-20`} />
                                            <div className={`text-${details.color.replace('text-', '')}`}>
                                                <RadarChart color={details.color} />
                                            </div>
                                        </div>
                                        <div className={`absolute -bottom-4 -right-4 bg-black text-white px-3 py-1 font-mono text-xs font-bold border-2 border-white transform rotate-[-6deg]`}>
                                            LVL. MAX
                                        </div>
                                    </div>

                                    {/* Info & Stats */}
                                    <div className="flex-1 w-full text-left">
                                        <h2 className={`text-5xl md:text-7xl font-persona text-white mb-2 ${details.color} drop-shadow-[5px_5px_0_#000] text-stroke-sm relative inline-block leading-none`}>
                                            {activeCat.split('&')[0]}
                                            {/* Decorative underlines */}
                                            <span className="absolute -bottom-2 left-0 w-full h-2 bg-white transform -skew-x-12" />
                                        </h2>

                                        <div className="bg-white/10 p-4 border-l-4 border-[#ffe600] mt-4 mb-6 md:mb-8 transform -skew-x-6 backdrop-blur-sm">
                                            <p className="font-mono text-gray-200 text-xs md:text-base font-bold skew-x-6">
                                                &gt; {details.description}
                                            </p>
                                        </div>

                                        {/* "Bullet" Skill Bars */}
                                        <div className="space-y-3 md:space-y-4 mb-6 w-full">
                                            {details.stats.map((stat, idx) => (
                                                <div key={idx} className="flex items-center gap-4 w-full group/stat">
                                                    <span className="w-16 md:w-20 text-right font-mono text-xs md:text-sm font-bold text-gray-400 group-hover/stat:text-white transition-colors">{stat.label}</span>
                                                    <div className="flex-1 flex gap-1 h-6 items-center">
                                                        {/* Rendering "Bullets" */}
                                                        {[...Array(10)].map((_, bulletIdx) => (
                                                            <motion.div
                                                                key={bulletIdx}
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: bulletIdx < (stat.val / 10) ? 1 : 0.2 }}
                                                                transition={{ delay: 0.1 * bulletIdx }}
                                                                className={`
                                                                    h-3 md:h-4 w-full transform -skew-x-[20deg] border border-black
                                                                    ${bulletIdx < (stat.val / 10) ? details.bg : 'bg-gray-800'}
                                                                `}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tags (Stamps) */}
                                        <div className="flex flex-wrap gap-2 md:gap-3">
                                            {details.skills.map((skill, sIdx) => (
                                                <span key={skill} className={`
                                                    px-2 py-1 md:px-3 bg-black border-2 border-white text-white font-bold text-[10px] md:text-sm uppercase tracking-wider
                                                    transform rotate-${sIdx % 2 === 0 ? '2' : '-2'} hover:scale-110 hover:rotate-0 transition-all cursor-default shadow-[4px_4px_0_rgba(255,255,255,0.2)]
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
