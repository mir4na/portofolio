import { useState } from "react";
import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";
import MumeiImg from "../../assets/mumei-cropped.png";

// Placeholder images (using mumei-cropped.png as dummy)
const CHARACTERS = [
    { id: 1, img: MumeiImg, color: "bg-[#ffe600]", name: "JOKER" },
    { id: 2, img: MumeiImg, color: "bg-[#00eaff]", name: "FOX" },
    { id: 3, img: MumeiImg, color: "bg-[#ff0055]", name: "PANTHER" },
    { id: 4, img: MumeiImg, color: "bg-[#a855f7]", name: "SKULL" },
];

const HomeSection = () => {
    const [hoveredPanel, setHoveredPanel] = useState(null);

    return (
        <div className="w-full h-full relative overflow-hidden bg-black">
            {/* BACKGROUND TEXT */}
            <SystemBgText text="PHANTOM" />

            {/* SLANTED PANELS CONTAINER */}
            <div className="absolute inset-0 w-[120%] -left-[10%] h-full flex transform -skew-x-12 bg-black">
                {CHARACTERS.map((char) => (
                    <motion.div
                        key={char.id}
                        onHoverStart={() => setHoveredPanel(char.id)}
                        onHoverEnd={() => setHoveredPanel(null)}
                        className={`
                            relative h-full transition-all duration-500 ease-out border-r-[4px] md:border-r-[8px] border-black overflow-hidden group
                            ${hoveredPanel === char.id ? 'flex-[2]' : 'flex-1'}
                            ${hoveredPanel !== null && hoveredPanel !== char.id ? 'grayscale brightness-50' : 'grayscale-0'}
                        `}
                    >
                        {/* UN-SKEW IMAGE CONTAINER */}
                        <div className="absolute inset-0 transform skew-x-12 scale-125 origin-center">
                            <div className="w-full h-full relative">
                                <img
                                    src={char.img}
                                    alt={char.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Halftone Overlay */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-20 mixed-blend-overlay" />

                                {/* Inner Shadow Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                                {/* Character Name Tag (Vertical) */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 md:bottom-20 z-10 transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
                                    <span className={`
                                        block text-2xl md:text-5xl font-persona font-bold text-white text-stroke-sm
                                        transform md:-rotate-90 origin-bottom-left whitespace-nowrap drop-shadow-[5px_5px_0_#000]
                                    `}>
                                        <span className={`bg-black px-2 ${char.color} text-black mr-2`}>CODE:</span>
                                        {char.name}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Flash Color Overlay on Hover */}
                        <div className={`absolute inset-0 ${char.color} mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />
                    </motion.div>
                ))}
            </div>

            {/* OVERLAY CONTENT (Restored User Text) */}
            <div className="absolute bottom-44 right-4 md:bottom-60 md:right-10 z-20 pointer-events-none text-right">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 text-right transform rotate-[-2deg]">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-black text-white px-2 py-1 md:px-8 md:py-4 text-xs md:text-3xl font-bold inline-block border md:border-4 border-white transform -skew-x-12 mt-2 md:mt-6 shadow-[3px_3px_0_#d90000] md:shadow-[10px_10px_0_#d90000]">
                        CS STUDENT @ UI
                    </motion.div>
                
                    <h1 className="text-[10vw] md:text-[10rem] lg:text-[12rem] font-persona text-white leading-[0.8] drop-shadow-[3px_3px_0_#000] md:drop-shadow-[15px_15px_0_#000] text-stroke-sm relative">
                        {/* <span className="absolute -top-4 -left-1 md:-top-10 md:-left-20 text-[3vw] md:text-4xl bg-[#ffe600] text-black px-1.5 py-0.5 md:px-4 md:py-1 transform -rotate-12 border md:border-4 border-black shadow-[2px_2px_0_#fff] md:shadow-[5px_5px_0_#fff] whitespace-nowrap">
                            WANTED
                        </span> */}
                        MUHAMMAD<br /><span className="text-[#d90000] text-stroke-white">AFWAN HAFIZH</span>
                    </h1>

                    
                </motion.div>
            </div>
        </div>
    );
};

export default HomeSection;
