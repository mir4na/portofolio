import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";
import SelfImg from "../../assets/ameame.jpeg";

// Helper for horizontal stripes art
const HorizontalArt = () => (
    <div className="absolute inset-0 pointer-events-none z-0">
        {/* Speed Lines */}
        <div className="absolute top-[20%] left-0 w-full h-[2px] bg-white/20" />
        <div className="absolute top-[21%] left-0 w-[80%] h-[1px] bg-white/40" />
        <div className="absolute top-[25%] right-0 w-[60%] h-[4px] bg-black/10" />

        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-white/20" />
        <div className="absolute bottom-[22%] right-0 w-[70%] h-[3px] bg-black/10" />

        {/* Heavy Horizontal Bar */}
        <div className="absolute top-[60%] -left-10 w-[120%] h-12 bg-[#00eaff] opacity-10 transform -rotate-1 mix-blend-multiply" />
    </div>
);

const PersonaSection = () => (
    <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-full bg-[#00eaff] relative flex items-center justify-center p-2 md:p-12 overflow-hidden"
    >
        {/* BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
        <SystemBgText text="PERSONA" />

        {/* Dynamic Background Shapes */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#d90000] transform skew-x-[-20deg] translate-x-[60%] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[120%] bg-black transform rotate-12 -translate-x-[60%] opacity-10" />

        <HorizontalArt />

        {/* MAIN CONTENT - Mobile-First Responsive */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-3 md:gap-16 items-center h-full justify-center pt-16 pb-16 md:py-0 px-2 md:px-0">

            {/* LEFT: Character Portrait - COMPACT on Mobile */}
            <div className="w-32 aspect-[3/4] md:w-64 lg:w-80 relative z-20 group flex-shrink-0">
                <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 md:translate-x-4 md:translate-y-4" />
                <div className="relative w-full h-full bg-white border-2 md:border-[6px] border-black overflow-hidden flex items-center justify-center">
                    <img src={SelfImg} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" />


                    {/* TORN PAPER OVERLAY (Bottom) - Hidden on mobile */}
                    <div className="hidden md:block absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 95% 15%, 90% 0, 85% 15%, 80% 0, 75% 15%, 70% 0, 65% 15%, 60% 0, 55% 15%, 50% 0, 45% 15%, 40% 0, 35% 15%, 30% 0, 25% 15%, 20% 0, 15% 15%, 10% 0, 5% 15%, 0 0)" }} />
                </div>
                {/* Decorative tag */}
                <div className="absolute -top-1 -left-1 md:-top-4 md:-left-4 bg-[#d90000] text-white px-1.5 py-0.5 md:px-4 md:py-1 font-persona text-[10px] md:text-xl border md:border-2 border-black transform -rotate-6 shadow-[1px_1px_0_rgba(0,0,0,0.3)] md:shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                    ABOUT
                </div>
            </div>

            {/* RIGHT: Info Panel - COMPACT Layout on Mobile */}
            <div className="flex-1 w-full bg-black text-white p-3 md:p-10 border-l-2 md:border-l-[6px] border-r-2 md:border-r-[6px] border-white shadow-[5px_5px_0_#000] md:shadow-[20px_20px_0_#000] relative max-h-[55vh] md:max-h-none overflow-hidden">

                {/* Ripped Top Edge - Hidden on mobile for cleaner look */}
                <div className="hidden md:block absolute -top-4 left-0 w-full h-6 bg-black border-t-[6px] border-white" style={{ clipPath: "polygon(0 100%, 0 0, 5% 40%, 10% 0, 15% 40%, 20% 0, 25% 40%, 30% 0, 35% 40%, 40% 0, 45% 40%, 50% 0, 55% 40%, 60% 0, 65% 40%, 70% 0, 75% 40%, 80% 0, 85% 40%, 90% 0, 95% 40%, 100% 0, 100% 100%)" }} />

                {/* Ripped Bottom Edge - Hidden on mobile */}
                <div className="hidden md:block absolute -bottom-4 left-0 w-full h-6 bg-black border-b-[6px] border-white" style={{ clipPath: "polygon(0 0, 0 100%, 5% 60%, 10% 100%, 15% 60%, 20% 100%, 25% 60%, 30% 100%, 35% 60%, 40% 100%, 45% 60%, 50% 100%, 55% 60%, 60% 100%, 65% 60%, 70% 100%, 75% 60%, 80% 100%, 85% 60%, 90% 100%, 95% 60%, 100% 100%, 100% 0)" }} />

                {/* Decorative Tape - Hidden on mobile */}
                <div className="hidden md:flex absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-8 bg-[#f0f0f0] opacity-90 transform -rotate-1 shadow-md z-20 items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] opacity-20" />
                </div>

                <h2 className="text-xl md:text-5xl lg:text-6xl font-persona text-[#00eaff] text-stroke-white mb-2 md:mb-6 mt-0 md:mt-4">
                    IDENTITY
                </h2>

                <div className="space-y-2 md:space-y-6 font-mono text-xs md:text-lg relative z-10">
                    {/* Torn Paper Divider - Simplified on mobile */}
                    <div className="w-full h-0.5 md:h-1 bg-gray-800 relative mb-2 md:mb-6">
                        <div className="absolute inset-0 bg-white transform -skew-x-12 opacity-20" />
                    </div>

                    <div className="border-l-2 md:border-l-4 border-[#00eaff] pl-2 md:pl-4">
                        <span className="text-gray-400 block text-[10px] md:text-xs font-bold tracking-widest mb-0.5 md:mb-1">NAME</span>
                        <span className="text-base md:text-3xl font-bold bg-white text-black px-1 md:px-2 transform skew-x-[-5deg] inline-block shadow-[1px_1px_0_rgba(0,0,0,0.5)] md:shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                            MUHAMMAD AFWAN HAFIZH
                        </span>
                    </div>

                    <div className="border-l-2 md:border-l-4 border-[#d90000] pl-2 md:pl-4">
                        <span className="text-gray-400 block text-[10px] md:text-xs font-bold tracking-widest mb-0.5 md:mb-1">AFFILIATION</span>
                        <span className="text-sm md:text-xl">COMPUTER SCIENCE @ UNIVERSITAS INDONESIA</span>
                    </div>

                    <div className="pt-2 md:pt-4 border-t md:border-t-2 border-dashed border-gray-700">
                        <div className="grid grid-cols-2 gap-1.5 md:gap-3">
                            {["CYBER SECURITY", "WEB3", "GAME DEV", "DEVOPS"].map((t, i) => (
                                <div key={i} className="flex items-center gap-1 md:gap-2 group/tag cursor-default">
                                    <div className="relative bg-[#222] px-1.5 md:px-3 py-0.5 md:py-1 flex items-center gap-1 md:gap-2 transform group-hover/tag:translate-x-1 transition-transform border border-gray-700 w-full overflow-hidden">
                                        <div className="absolute -left-0.5 md:-left-1 top-0 bottom-0 w-1 md:w-2 bg-[#00eaff]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 80%, 0 20%)" }} />
                                        <span className="text-[10px] md:text-sm font-bold text-gray-300 group-hover/tag:text-white ml-1 md:ml-2 truncate">{t}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RANK MAX Badge - Smaller and repositioned on mobile */}
                <div className="absolute -bottom-3 -right-2 md:-bottom-10 md:-right-5 bg-[#ffe600] text-black px-2 py-0.5 md:px-6 md:py-2 font-persona text-sm md:text-2xl border-2 md:border-4 border-black transform rotate-[-5deg] z-20 shadow-[2px_2px_0_rgba(0,0,0,0.5)] md:shadow-[5px_5px_0_rgba(0,0,0,0.5)]">
                    RANK MAX
                </div>
            </div>

        </div>
    </motion.div>
);

export default PersonaSection;
