import { useState } from "react";
import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";
import FirstImg from "../../assets/first.png";
import SecondImg from "../../assets/second.png";
import ThirdImg from "../../assets/third.png";
import FourthImg from "../../assets/fourth.png";

const CHARACTERS = [
    { id: 1, img: FirstImg, color: "bg-[#ffe600]", name: "FIRST" },
    { id: 2, img: SecondImg, color: "bg-[#00eaff]", name: "SECOND" },
    { id: 3, img: ThirdImg, color: "bg-[#ff0055]", name: "THIRD" },
    { id: 4, img: FourthImg, color: "bg-[#a855f7]", name: "FOURTH" },
];

const HomeSection = () => {
    const [hoveredPanel, setHoveredPanel] = useState(null);

    return (
        <div className="w-full h-full relative overflow-hidden bg-black">
            <SystemBgText text="PHANTOM" />

            <div className="absolute inset-0 w-[120%] -left-[10%] h-full flex transform -skew-x-12 bg-black">
                {CHARACTERS.map((char) => (
                    <motion.div
                        key={char.id}
                        onHoverStart={() => setHoveredPanel(char.id)}
                        onHoverEnd={() => setHoveredPanel(null)}
                        onClick={() => setHoveredPanel(hoveredPanel === char.id ? null : char.id)}
                        className={`
                            relative h-full transition-all duration-500 ease-out border-r-[2px] sm:border-r-[4px] md:border-r-[8px] border-black overflow-hidden group cursor-pointer
                            ${hoveredPanel === char.id ? 'flex-[2] grayscale-0' : 'flex-1 grayscale'}
                            ${hoveredPanel !== null && hoveredPanel !== char.id ? 'brightness-50' : ''}
                        `}
                    >
                        <div className="absolute inset-0 transform skew-x-12 scale-125 origin-center">
                            <div className="w-full h-full relative">
                                <img
                                    src={char.img}
                                    alt={char.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-20 mixed-blend-overlay" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

                                <div className={`absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 md:bottom-20 z-10 transition-opacity duration-300 ${hoveredPanel === char.id ? 'opacity-100' : 'opacity-100 md:opacity-0'} group-hover:opacity-100`}>
                                    <span className={`
                                        block text-base sm:text-2xl md:text-5xl font-persona font-bold text-white text-stroke-sm
                                        transform md:-rotate-90 origin-bottom-left whitespace-nowrap drop-shadow-[3px_3px_0_#000] sm:drop-shadow-[5px_5px_0_#000]
                                    `}>
                                        <span className={`bg-black px-1 sm:px-2 ${char.color} text-black mr-1 sm:mr-2`}>CODE:</span>
                                        {char.name}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={`absolute inset-0 ${char.color} mix-blend-multiply opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-28 sm:bottom-36 md:bottom-60 right-2 sm:right-4 md:right-10 z-20 pointer-events-none text-right max-w-[95vw] sm:max-w-none">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 text-right transform rotate-[-2deg]">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-black text-white px-2 py-0.5 sm:px-4 sm:py-2 md:px-8 md:py-4 text-[10px] sm:text-lg md:text-3xl font-bold inline-block border sm:border-2 md:border-4 border-white transform -skew-x-12 mt-1 sm:mt-2 md:mt-6 shadow-[2px_2px_0_#d90000] sm:shadow-[5px_5px_0_#d90000] md:shadow-[10px_10px_0_#d90000]">
                        CS STUDENT @ UI
                    </motion.div>

                    <h1 className="text-[8vw] sm:text-[7vw] md:text-[10rem] lg:text-[12rem] font-persona text-white leading-[0.8] drop-shadow-[2px_2px_0_#000] sm:drop-shadow-[5px_5px_0_#000] md:drop-shadow-[15px_15px_0_#000] text-stroke-sm relative">
                        MUHAMMAD<br /><span className="text-[#d90000] text-stroke-white">AFWAN HAFIZH</span>
                    </h1>


                </motion.div>
            </div>
        </div>
    );
};

export default HomeSection;
