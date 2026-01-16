import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";
import SelfImg from "../../assets/ameame.jpeg";

const HorizontalArt = () => (
    <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-0 w-full h-[2px] bg-white/20" />
        <div className="absolute top-[21%] left-0 w-[80%] h-[1px] bg-white/40" />
        <div className="absolute top-[25%] right-0 w-[60%] h-[4px] bg-black/10" />

        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-white/20" />
        <div className="absolute bottom-[22%] right-0 w-[70%] h-[3px] bg-black/10" />

        <div className="absolute top-[60%] -left-10 w-[120%] h-12 bg-[#00eaff] opacity-10 transform -rotate-1 mix-blend-multiply" />
    </div>
);

const PersonaSection = () => (
    <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-full bg-[#00eaff] relative flex items-center justify-center p-2 sm:p-4 md:p-12 overflow-hidden"
    >

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
        <SystemBgText text="PERSONA" />

        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#d90000] transform skew-x-[-20deg] translate-x-[60%] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[120%] bg-black transform rotate-12 -translate-x-[60%] opacity-10" />

        <HorizontalArt />

        <div className="relative z-10 w-full max-w-6xl mx-auto h-full px-2 md:px-0">
            {/* MOBILE LAYOUT */}
            <div className="md:hidden w-full h-full flex flex-col items-center justify-center gap-6 pt-12 pb-24">
                <div className="flex items-center justify-center w-full mb-2">
                    <h2 className="text-4xl font-persona text-[#00eaff] text-stroke-white drop-shadow-[0_0_10px_rgba(0,234,255,0.5)]">
                        IDENTITY
                    </h2>
                </div>

                <div className="w-full bg-black/80 backdrop-blur-sm border-2 border-white p-4 transform -skew-x-3 shadow-[4px_4px_0_#00eaff] relative">
                    <div className="absolute top-0 right-0 w-8 h-8 bg-[#00eaff] clip-corner-tr" />

                    <div className="flex gap-4 items-start">
                        <div className="w-24 h-32 flex-shrink-0 bg-white border-2 border-[#00eaff] relative overflow-hidden shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                            <img src={SelfImg} className="w-full h-full object-cover grayscale contrast-125" />
                        </div>

                        <div className="flex-1 space-y-2">
                            <div className="border-l-2 border-[#00eaff] pl-2">
                                <span className="text-[10px] text-gray-400 font-bold tracking-widest block mb-0.5">NAME</span>
                                <span className="text-sm font-bold bg-white text-black px-1 inline-block transform -skew-x-6">
                                    MUHAMMAD AFWAN HAFIZH
                                </span>
                            </div>

                            <div className="border-l-2 border-[#d90000] pl-2">
                                <span className="text-[10px] text-gray-400 font-bold tracking-widest block mb-0.5">AFFILIATION</span>
                                <span className="text-[10px] text-white leading-tight block">
                                    COMPUTER SCIENCE @ UNIVERSITAS INDONESIA
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-dashed border-gray-700">
                        <p className="text-[10px] font-mono font-bold text-gray-300 leading-relaxed">
                            A passionate developer who loves competing in <span className="text-[#ffe600]">CTFs</span>, <span className="text-[#00eaff]">Hackathons</span>, <span className="text-[#ff0055]">Game Jams</span>, and various tech competitions.
                        </p>
                    </div>

                    <div className="absolute -bottom-3 -right-2 bg-[#ffe600] text-black px-2 py-0.5 border-2 border-black font-persona text-xs transform rotate-[-3deg] shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                        RANK MAX
                    </div>
                </div>
            </div>

            {/* DESKTOP LAYOUT */}
            <div className="hidden md:flex h-full items-center justify-center pt-14 sm:pt-16 pb-14 sm:pb-16 md:py-0">
                <div className="flex flex-row gap-16 items-stretch relative z-10 w-full max-w-6xl">
                    <div className="w-64 lg:w-80 relative z-20 group flex-shrink-0">
                        <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
                        <div className="absolute inset-0 bg-white border-[6px] border-black overflow-hidden flex items-center justify-center">
                            <img src={SelfImg} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" />
                            <div className="hidden md:block absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 95% 15%, 90% 0, 85% 15%, 80% 0, 75% 15%, 70% 0, 65% 15%, 60% 0, 55% 15%, 50% 0, 45% 15%, 40% 0, 35% 15%, 30% 0, 25% 15%, 20% 0, 15% 15%, 10% 0, 5% 15%, 0 0)" }} />
                        </div>
                        <div className="absolute -top-4 -left-4 bg-[#d90000] text-white px-4 py-1 font-persona text-xl border-2 border-black transform -rotate-6 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                            ABOUT
                        </div>
                    </div>

                    <div className="flex-1 w-full bg-black text-white p-10 border-l-[6px] border-r-[6px] border-white shadow-[20px_20px_0_#000] relative overflow-visible flex flex-col justify-center">
                        <div className="hidden md:block absolute -top-4 left-0 w-full h-6 bg-black border-t-[6px] border-white" style={{ clipPath: "polygon(0 100%, 0 0, 5% 40%, 10% 0, 15% 40%, 20% 0, 25% 40%, 30% 0, 35% 40%, 40% 0, 45% 40%, 50% 0, 55% 40%, 60% 0, 65% 40%, 70% 0, 75% 40%, 80% 0, 85% 40%, 90% 0, 95% 40%, 100% 0, 100% 100%)" }} />
                        <div className="hidden md:block absolute -bottom-4 left-0 w-full h-6 bg-black border-b-[6px] border-white" style={{ clipPath: "polygon(0 0, 0 100%, 5% 60%, 10% 100%, 15% 60%, 20% 100%, 25% 60%, 30% 100%, 35% 60%, 40% 100%, 45% 60%, 50% 100%, 55% 60%, 60% 100%, 65% 60%, 70% 100%, 75% 60%, 80% 100%, 85% 60%, 90% 100%, 95% 60%, 100% 100%, 100% 0)" }} />

                        <div className="flex items-center justify-between mb-6 mt-4">
                            <h2 className="text-5xl lg:text-6xl font-persona text-[#00eaff] text-stroke-white">
                                IDENTITY
                            </h2>
                        </div>

                        <div className="space-y-6 font-mono text-lg relative z-10">
                            <div className="w-full h-1 bg-gray-800 relative mb-6">
                                <div className="absolute inset-0 bg-white transform -skew-x-12 opacity-20" />
                            </div>

                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="flex-1 space-y-6">
                                    <div className="border-l-4 border-[#00eaff] pl-4">
                                        <span className="text-gray-400 block text-xs font-bold tracking-widest mb-1">NAME</span>
                                        <span className="text-3xl font-bold bg-white text-black px-2 transform skew-x-[-5deg] inline-block shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                                            MUHAMMAD AFWAN HAFIZH
                                        </span>
                                    </div>

                                    <div className="border-l-4 border-[#d90000] pl-4">
                                        <span className="text-gray-400 block text-xs font-bold tracking-widest mb-1">AFFILIATION</span>
                                        <span className="text-xl">COMPUTER SCIENCE @ UNIVERSITAS INDONESIA</span>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t-2 border-dashed border-gray-700">
                                <p className="text-xl font-bold text-gray-300 leading-relaxed">
                                    A passionate developer who loves competing in <span className="text-[#ffe600]">CTFs</span>, <span className="text-[#00eaff]">Hackathons</span>, <span className="text-[#ff0055]">Game Jams</span>, and various tech competitions.
                                </p>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -right-8 bg-[#ffe600] text-black px-6 py-2 font-persona text-2xl border-4 border-black transform rotate-[-5deg] z-30 shadow-[5px_5px_0_rgba(0,0,0,0.5)]">
                            RANK MAX
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </motion.div>
);

export default PersonaSection;
