import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";

const HomeSection = () => (
    <div className="w-full h-full flex flex-col justify-end pb-20 pr-4 md:pr-20 items-end relative overflow-hidden">
        <SystemBgText text="PHANTOM" />

        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative z-10 text-right transform rotate-[-2deg]"
        >
            <h1 className="text-[15vw] md:text-[10rem] lg:text-[12rem] font-persona text-white leading-[0.8] drop-shadow-[15px_15px_0_#000] text-stroke-sm relative">
                <span className="absolute -top-6 -left-4 md:-top-10 md:-left-20 text-xl md:text-4xl bg-[#ffe600] text-black px-4 py-1 transform -rotate-12 border-4 border-black shadow-[5px_5px_0_#fff] whitespace-nowrap">
                    WANTED
                </span>
                MUHAMMAD<br /><span className="text-[#d90000] text-stroke-white">AFWAN HAFIZH</span>
            </h1>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-black text-white px-4 py-2 md:px-8 md:py-4 text-xl md:text-3xl font-bold inline-block border-4 border-white transform -skew-x-12 mt-4 md:mt-6 shadow-[10px_10px_0_#d90000]"
            >
                CS STUDENT @ UI
            </motion.div>
        </motion.div>
    </div>
);

export default HomeSection;
