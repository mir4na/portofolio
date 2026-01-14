import { motion } from "framer-motion";
import { SystemBgText as UIText } from "../ui/PersonaUI";
import { SOCIALS as DATA_SOCIALS } from "../../constants";

const CallingCardSection = () => (
    <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-full bg-[#111] relative flex items-center justify-center p-2 md:p-4 overflow-hidden"
    >
        {/* Layer 1: Base Background (Black) + White Text */}
        <div className="absolute inset-0 z-0">
            <UIText text="CONTACT" className="text-white opacity-10" />
        </div>

        {/* Layer 2: Red Shape Overlay (Clipped) + Black Text */}
        <div className="absolute inset-0 z-[1] bg-[#d90000] overflow-hidden" style={{ clipPath: "polygon(0 0, 75% 0, 55% 100%, 0 100%)" }}>
            <UIText text="CONTACT" className="text-black opacity-20" />
        </div>

        {/* Main Card - Responsive sizing */}
        <div className="relative z-10 bg-white border-4 md:border-[16px] border-black p-4 md:p-16 transform rotate-1 md:rotate-2 shadow-[0_0_50px_rgba(217,0,0,0.5)] md:shadow-[0_0_100px_rgba(217,0,0,0.5)] max-w-4xl text-center clip-comic w-full mx-2 md:mx-4">

            {/* Header Badge */}
            <div className="absolute -top-4 md:-top-8 left-1/2 -translate-x-1/2 bg-[#d90000] text-white font-persona text-xl md:text-6xl px-4 md:px-12 py-1 md:py-4 border-2 md:border-[6px] border-black transform -rotate-3 shadow-[3px_3px_0_#fff] md:shadow-[10px_10px_0_#fff] whitespace-nowrap">
                CALLING CARD
            </div>

            {/* Content */}
            <div className="mt-6 md:mt-12 space-y-2 md:space-y-6">
                <p className="text-sm md:text-2xl font-mono font-bold leading-relaxed break-words text-black">
                    Sir/Madam,<br />
                    Let's secure the future or build a better world with cutting-edge technologies.
                </p>
                <div className="h-0.5 md:h-1 w-full bg-black my-3 md:my-8" />
                <p className="text-xs md:text-xl text-gray-600 font-bold">
                    OPEN FOR COLLABORATION
                </p>
            </div>

            {/* Social Links - Stack on mobile */}
            <div className="mt-4 md:mt-12 flex flex-col md:flex-row justify-center gap-2 md:gap-6">
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA_SOCIALS.email}`} target="_blank" rel="noreferrer" className="bg-black text-white font-persona text-lg md:text-4xl px-4 py-2 md:px-10 md:py-6 hover:bg-[#d90000] hover:scale-105 transition-all border-2 md:border-[6px] border-white shadow-[3px_3px_0_#000] md:shadow-[10px_10px_0_#000]">
                    SEND EMAIL
                </a>
                <a href={DATA_SOCIALS.linkedin} target="_blank" rel="noreferrer" className="bg-[#0077b5] text-white font-persona text-lg md:text-4xl px-4 py-2 md:px-10 md:py-6 hover:brightness-110 hover:scale-105 transition-all border-2 md:border-[6px] border-black shadow-[3px_3px_0_#000] md:shadow-[10px_10px_0_#000]">
                    LINKEDIN
                </a>
                <a href={`https://${DATA_SOCIALS.github}`} target="_blank" rel="noreferrer" className="bg-[#171515] text-white font-persona text-lg md:text-4xl px-4 py-2 md:px-10 md:py-6 hover:bg-gray-800 hover:scale-105 transition-all border-2 md:border-[6px] border-black shadow-[3px_3px_0_#000] md:shadow-[10px_10px_0_#000]">
                    GITHUB
                </a>
            </div>

            {/* Decorative Exclamation */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-10 md:-left-10 text-5xl md:text-[10rem] text-[#d90000] font-persona pointer-events-none opacity-50 rotate-12">
                !
            </div>
        </div>
    </motion.div>
);

export default CallingCardSection;
