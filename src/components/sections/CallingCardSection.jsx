import { motion } from "framer-motion";
import { SystemBgText as UIText } from "../ui/PersonaUI";
import { SOCIALS as DATA_SOCIALS } from "../../constants";

const CallingCardSection = () => (
    <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-full bg-[#111] relative flex items-center justify-center p-4 overflow-hidden"
    >
        {/* Layer 1: Base Background (Black) + White Text */}
        <div className="absolute inset-0 z-0">
            <UIText text="CONTACT" className="text-white opacity-10" />
        </div>

        {/* Layer 2: Red Shape Overlay (Clipped) + Black Text */}
        {/* Using clip-path to create the slanted shape without distorting inner content */}
        <div className="absolute inset-0 z-[1] bg-[#d90000] overflow-hidden" style={{ clipPath: "polygon(0 0, 75% 0, 55% 100%, 0 100%)" }}>
            <UIText text="CONTACT" className="text-black opacity-20" />
        </div>

        <div className="relative z-10 bg-white border-[8px] md:border-[16px] border-black p-8 md:p-16 transform rotate-2 shadow-[0_0_100px_rgba(217,0,0,0.5)] max-w-4xl text-center clip-comic w-full mx-4">

            <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-[#d90000] text-white font-persona text-3xl md:text-6xl px-8 md:px-12 py-2 md:py-4 border-[4px] md:border-[6px] border-black transform -rotate-3 shadow-[5px_5px_0_#fff] md:shadow-[10px_10px_0_#fff] whitespace-nowrap">
                CALLING CARD
            </div>

            <div className="mt-8 md:mt-12 space-y-4 md:space-y-6">
                <p className="text-lg md:text-2xl font-mono font-bold leading-relaxed break-words text-black">
                    Sir/Madam,<br />
                    Let's secure the future or build a better world with cutting-edge technologies.
                </p>
                <div className="h-1 w-full bg-black my-6 md:my-8" />
                <p className="text-lg md:text-xl text-gray-600 font-bold">
                    OPEN FOR COLLABORATION
                </p>
            </div>

            <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-center gap-4 md:gap-6">
                <a href={`mailto:${DATA_SOCIALS.email}`} className="bg-black text-white font-persona text-2xl md:text-4xl px-8 py-4 md:px-10 md:py-6 hover:bg-[#d90000] hover:scale-105 transition-all border-[4px] md:border-[6px] border-white shadow-[5px_5px_0_#000] md:shadow-[10px_10px_0_#000]">
                    SEND EMAIL
                </a>
                <a href={`https://${DATA_SOCIALS.linkedin}`} target="_blank" rel="noreferrer" className="bg-[#0077b5] text-white font-persona text-2xl md:text-4xl px-8 py-4 md:px-10 md:py-6 hover:brightness-110 hover:scale-105 transition-all border-[4px] md:border-[6px] border-black shadow-[5px_5px_0_#000] md:shadow-[10px_10px_0_#000]">
                    LINKEDIN
                </a>
                <a href={`https://${DATA_SOCIALS.github}`} target="_blank" rel="noreferrer" className="bg-[#171515] text-white font-persona text-2xl md:text-4xl px-8 py-4 md:px-10 md:py-6 hover:bg-gray-800 hover:scale-105 transition-all border-[4px] md:border-[6px] border-black shadow-[5px_5px_0_#000] md:shadow-[10px_10px_0_#000]">
                    GITHUB
                </a>
            </div>

            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 text-[6rem] md:text-[10rem] text-[#d90000] font-persona pointer-events-none opacity-50 rotate-12">
                !
            </div>
        </div>
    </motion.div>
);

export default CallingCardSection;
