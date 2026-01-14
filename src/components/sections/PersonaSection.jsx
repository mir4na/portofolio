import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";

// Helper for horizontal stripes art
const HorizontalArt = () => (
    <div className="absolute inset-0 pointer-events-none z-0">
        {/* Speed Lines */}
        <div className="absolute top-[20%] left-0 w-full h-[2px] bg-white/20" />
        <div className="absolute top-[21%] left-0 w-[80%] h-[1px] bg-white/40" />
        <div className="absolute top-[25%] right-0 w-[60%] h-[4px] bg-black/10" />

        <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-white/20" />
        <div className="absolute bottom-[22%] right-0 w-[70%] h-[3px] bg-black/10" />

        {/* Decorative Text Strip */}
        <div className="absolute top-[12%] left-0 w-full h-8 bg-black/5 flex items-center overflow-hidden whitespace-nowrap">
            {[...Array(20)].map((_, i) => (
                <span key={i} className="text-xs font-bold text-black/20 mx-4 font-mono">
                    PERSONA // RANK MAX //
                </span>
            ))}
        </div>

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
        className="w-full h-full bg-[#00eaff] relative flex items-center justify-center p-4 md:p-12 overflow-hidden"
    >
        {/* BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
        <SystemBgText text="PERSONA" />

        {/* Dynamic Background Shapes */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#d90000] transform skew-x-[-20deg] translate-x-[60%] opacity-20" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[120%] bg-black transform rotate-12 -translate-x-[60%] opacity-10" />

        <HorizontalArt />

        {/* Floating Elements */}
        <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[10%] w-24 h-24 border-4 border-white opacity-20 transform rotate-45"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center">

            {/* LEFT: Character Portrait (Ripped Poster Style) */}
            <div className="w-full md:w-1/3 aspect-[3/4] relative z-20 group">
                <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" /> {/* Shadow block */}
                <div className="relative w-full h-full bg-white border-[6px] border-black overflow-hidden flex items-center justify-center">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Joker" className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" />

                    {/* TORN PAPER OVERLAY (Bottom) */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 95% 15%, 90% 0, 85% 15%, 80% 0, 75% 15%, 70% 0, 65% 15%, 60% 0, 55% 15%, 50% 0, 45% 15%, 40% 0, 35% 15%, 30% 0, 25% 15%, 20% 0, 15% 15%, 10% 0, 5% 15%, 0 0)" }} />
                </div>
                {/* Simple decorative tag */}
                <div className="absolute -top-4 -left-4 bg-[#d90000] text-white px-4 py-1 font-persona text-xl border-2 border-black transform -rotate-6 shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                    THE FOOL
                </div>
            </div>

            {/* RIGHT: Info Panel (Ripped Edge Container) */}
            <div className="flex-1 w-full bg-black text-white p-6 md:p-12 border-l-[6px] border-r-[6px] border-white shadow-[20px_20px_0_#000000] relative">
                {/* Ripped Top Edge */}
                <div className="absolute -top-4 left-0 w-full h-6 bg-black border-t-[6px] border-white" style={{ clipPath: "polygon(0 100%, 0 0, 5% 40%, 10% 0, 15% 40%, 20% 0, 25% 40%, 30% 0, 35% 40%, 40% 0, 45% 40%, 50% 0, 55% 40%, 60% 0, 65% 40%, 70% 0, 75% 40%, 80% 0, 85% 40%, 90% 0, 95% 40%, 100% 0, 100% 100%)" }} />

                {/* Ripped Bottom Edge */}
                <div className="absolute -bottom-4 left-0 w-full h-6 bg-black border-b-[6px] border-white" style={{ clipPath: "polygon(0 0, 0 100%, 5% 60%, 10% 100%, 15% 60%, 20% 100%, 25% 60%, 30% 100%, 35% 60%, 40% 100%, 45% 60%, 50% 100%, 55% 60%, 60% 100%, 65% 60%, 70% 100%, 75% 60%, 80% 100%, 85% 60%, 90% 100%, 95% 60%, 100% 100%, 100% 0)" }} />

                {/* Decorative Corner Tape (Masking Tape Style) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-40 h-8 bg-[#f0f0f0] opacity-90 transform -rotate-1 shadow-md z-20 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] opacity-20" />
                </div>

                <h2 className="text-4xl md:text-6xl font-persona text-[#00eaff] text-stroke-white mb-6 mt-4">
                    IDENTITY REVEALED
                </h2>

                <div className="space-y-6 font-mono text-base md:text-lg relative z-10">
                    {/* Torn Paper Divider */}
                    <div className="w-full h-1 bg-gray-800 relative mb-6 overflow-visible">
                        <div className="absolute inset-0 bg-white transform -skew-x-12 opacity-20" />
                        <div className="absolute -left-2 top-[-5px] w-[105%] h-[10px] bg-black" style={{ clipPath: "polygon(0 40%, 100% 40%, 100% 60%, 0 60%, 0 40%, 5% 0, 10% 100%, 15% 0, 20% 100%, 25% 0, 30% 100%, 35% 0, 40% 100%, 45% 0, 50% 100%, 55% 0, 60% 100%, 65% 0, 70% 100%, 75% 0, 80% 100%, 85% 0, 90% 100%, 95% 0, 100% 100%)" }} />
                    </div>

                    <div className="border-l-4 border-[#00eaff] pl-4">
                        <span className="text-gray-400 block text-xs font-bold tracking-widest mb-1">NAME</span>
                        <span className="text-xl md:text-3xl font-bold bg-white text-black px-2 transform skew-x-[-5deg] inline-block shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
                            MUHAMMAD AFWAN HAFIZH
                        </span>
                    </div>

                    <div className="border-l-4 border-[#d90000] pl-4">
                        <span className="text-gray-400 block text-xs font-bold tracking-widest mb-1">AFFILIATION</span>
                        <span className="text-lg md:text-xl">COMPUTER SCIENCE @ UNIVERSITAS INDONESIA</span>
                    </div>

                    <div className="pt-4 border-t-2 border-dashed border-gray-700">
                        <div className="grid grid-cols-2 gap-3">
                            {["CYBER SECURITY", "WEB3", "GAME DEV", "DEVOPS"].map((t, i) => (
                                <div key={i} className="flex items-center gap-2 group/tag cursor-default">
                                    {/* Torn Tag Style */}
                                    <div className="relative bg-[#222] px-3 py-1 flex items-center gap-2 transform group-hover/tag:translate-x-1 transition-transform border border-gray-700 w-full overflow-hidden">
                                        <div className="absolute -left-1 top-0 bottom-0 w-2 bg-[#00eaff]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 80%, 0 20%)" }} />
                                        <span className="text-xs md:text-sm font-bold text-gray-300 group-hover/tag:text-white ml-2 truncate">{t}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-10 -right-5 bg-[#ffe600] text-black px-6 py-2 font-persona text-xl md:text-2xl border-4 border-black transform rotate-[-5deg] z-20 shadow-[5px_5px_0_rgba(0,0,0,0.5)]">
                    RANK MAX
                </div>
            </div>

        </div>
    </motion.div>
);

export default PersonaSection;
