import { motion } from "framer-motion";
import { SystemBgText as UIText } from "../ui/PersonaUI";
import { SOCIALS as DATA_SOCIALS } from "../../constants";

const CallingCardSection = () => (
    <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-full bg-[#111] relative flex items-center justify-center px-2 py-6 sm:px-3 sm:py-10 md:px-4 md:py-20 overflow-hidden"
    >
        <div className="absolute inset-0 z-0">
            <UIText text="CONTACT" className="text-white opacity-10" />
        </div>

        <div className="absolute inset-0 z-[1] bg-[#d90000] overflow-hidden" style={{ clipPath: "polygon(0 0, 75% 0, 55% 100%, 0 100%)" }}>
            <UIText text="CONTACT" className="text-black opacity-20" />
        </div>

        <div className="relative z-10 max-w-4xl w-full mx-2 md:mx-4 transform rotate-1 md:rotate-2">

            <div className="absolute -top-5 sm:-top-6 md:-top-10 left-1/2 -translate-x-1/2 bg-[#d90000] text-white font-persona text-base sm:text-xl md:text-6xl px-3 sm:px-4 md:px-12 py-0.5 sm:py-1 md:py-4 border sm:border-2 md:border-[6px] border-black transform -rotate-3 shadow-[2px_2px_0_#fff] sm:shadow-[3px_3px_0_#fff] md:shadow-[10px_10px_0_#fff] whitespace-nowrap z-50">
                CALLING CARD
            </div>

            <div className="bg-white border-2 sm:border-4 md:border-[16px] border-black p-3 sm:p-4 md:p-16 shadow-[0_0_25px_rgba(217,0,0,0.5)] sm:shadow-[0_0_50px_rgba(217,0,0,0.5)] md:shadow-[0_0_100px_rgba(217,0,0,0.5)] clip-comic text-center relative">

                <div className="mt-4 sm:mt-6 md:mt-12 space-y-1.5 sm:space-y-2 md:space-y-6 relative z-10">
                    <p className="text-xs sm:text-sm md:text-2xl font-mono font-bold leading-relaxed break-words text-black">
                        Sir/Madam,<br />
                        Let's secure the future or build a better world with cutting-edge technologies.
                    </p>
                    <div className="h-0.5 md:h-1 w-full bg-black my-2 sm:my-3 md:my-8" />
                    <p className="text-[10px] sm:text-xs md:text-xl text-gray-600 font-bold">
                        OPEN FOR COLLABORATION
                    </p>
                </div>

                <div className="mt-3 sm:mt-4 md:mt-12 flex flex-col sm:flex-row justify-center gap-1.5 sm:gap-2 md:gap-6 relative z-10">
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA_SOCIALS.email}`} target="_blank" rel="noreferrer" className="bg-black text-white font-persona text-sm sm:text-lg md:text-4xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-10 md:py-6 hover:bg-[#d90000] hover:scale-105 transition-all border sm:border-2 md:border-[6px] border-white shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] md:shadow-[10px_10px_0_#000]">
                        SEND EMAIL
                    </a>
                    <a href={DATA_SOCIALS.linkedin} target="_blank" rel="noreferrer" className="bg-[#0077b5] text-white font-persona text-sm sm:text-lg md:text-4xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-10 md:py-6 hover:brightness-110 hover:scale-105 transition-all border sm:border-2 md:border-[6px] border-black shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] md:shadow-[10px_10px_0_#000]">
                        LINKEDIN
                    </a>
                    <a href={`https://${DATA_SOCIALS.github}`} target="_blank" rel="noreferrer" className="bg-[#171515] text-white font-persona text-sm sm:text-lg md:text-4xl px-3 py-1.5 sm:px-4 sm:py-2 md:px-10 md:py-6 hover:bg-gray-800 hover:scale-105 transition-all border sm:border-2 md:border-[6px] border-black shadow-[2px_2px_0_#000] sm:shadow-[3px_3px_0_#000] md:shadow-[10px_10px_0_#000]">
                        GITHUB
                    </a>
                </div>

                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 md:-bottom-10 md:-left-10 text-3xl sm:text-5xl md:text-[10rem] text-[#d90000] font-persona pointer-events-none opacity-50 rotate-12 z-0">
                    !
                </div>
            </div>
        </div>
    </motion.div>
);

export default CallingCardSection;
