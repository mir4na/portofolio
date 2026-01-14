import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { SystemBgText, HexOverlay } from "../ui/PersonaUI";
import MumeiImg from "../../assets/mumei-cropped.png";
import RevimImg from "../../assets/revim.png";
import QuickImg from "../../assets/quickclip.png";
import CiCdImg from "../../assets/cicd.png";

const MissionsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const BASE_PROJECTS = [
        {
            name: "DeFi EXCHANGE", cat: "WEB3", tags: ["Solidity", "React", "Ethers"], desc: "Decentralized trading protocol.",
            link: "#", source: "#"
        },
        {
            name: "QUICKCLIP", cat: "CLOUD COMPUTING", tags: ["AWS", "KUBERNETES", "AWS S3", "CLOUDFLARE"], desc: "QuickClip is a SaaS application that runs on cloud infrastructure, providing pastebin and URL shortener features built with modern web technologies and deployed on Kubernetes.",
            link: "https://quickclip.stevensetiawan.my.id/", source: "https://github.com/mir4na/quickclip.git", img: QuickImg
        },
        {
            name: "RE:VIM", cat: "GAME", tags: ["Godot", "GDScript", "Figma"], desc: "Re:Vim is a time-loop survival game where every move you make is recorded and returns as an enemy in the next round, forcing you to survive against your own past self.",
           link: "https://mir4na.itch.io/re-vim", source: "https://github.com/mir4na/revim-compfest.git", img: RevimImg
        },
        {
            name: "CI/CD PIPELINE", cat: "DEVOPS", tags: ["Docker", "SonarQube", "Github Actions", "Koyeb"], desc: "... uses GitHub Actions for CI/CD automation, SonarQube for code quality analysis, Docker for containerization, and Koyeb for cloud deployment.",
            link: "https://unfair-smelt-adpro-eshop-mirana-9288cf1f.koyeb.app/", source: "https://github.com/mir4na/eshop.git", img: CiCdImg
        },
    ];

    const PROJECTS = [...BASE_PROJECTS, ...BASE_PROJECTS];

    return (
        <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full h-full bg-[#ff0055] relative flex items-center overflow-hidden"
        >
            <SystemBgText text="MISSIONS" />
            <HexOverlay />

            {/* BACKGROUND CHAOS LAYER */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Giant Background Star */}
                <div className="absolute top-[-10%] right-[-10%] text-[40vw] font-persona text-black opacity-[0.05] rotate-12 select-none">
                    ★
                </div>

                {/* Horizontal Lines */}
                <div className="absolute top-[15%] w-[120%] -left-[10%] h-4 md:h-8 bg-black opacity-80 rotate-[-2deg] border-y md:border-y-2 border-white mix-blend-overlay" />
                <div className="absolute top-[18%] w-[120%] -left-[10%] h-1 md:h-2 bg-white opacity-60 rotate-[-2deg]" />

                <div className="absolute bottom-[20%] w-[120%] -left-[10%] h-3 md:h-6 bg-white opacity-70 rotate-[1deg] border-y md:border-y-2 border-black mix-blend-overlay" />

                {/* Jagged Edges */}
                <div className="absolute top-0 w-full h-8 md:h-16 bg-black" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 90% 80%, 85% 100%, 80% 80%, 75% 100%, 70% 80%, 65% 100%, 60% 80%, 55% 100%, 50% 80%, 45% 100%, 40% 80%, 35% 100%, 30% 80%, 25% 100%, 20% 80%, 15% 100%, 10% 80%, 5% 100%, 0 80%)" }} />
                <div className="absolute bottom-0 w-full h-6 md:h-12 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 95% 0%, 90% 20%, 85% 0%, 80% 20%, 75% 0%, 70% 20%, 65% 0%, 60% 20%, 55% 0%, 50% 20%, 45% 0%, 40% 20%, 35% 0%, 30% 20%, 25% 0%, 20% 20%, 15% 0%, 10% 20%, 5% 0%, 0 20%)" }} />
            </div>

            {/* MARQUEE CONTAINER */}
            <div className="w-full h-full flex items-center overflow-hidden relative z-10 pt-12 pb-12 md:pt-0 md:pb-0">
                <div
                    className="flex gap-4 md:gap-16 px-2 md:px-20 will-change-transform transform-gpu animate-marquee"
                    style={{
                        animation: 'marquee 30s linear infinite',
                    }}
                >
                    {PROJECTS.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedProject(p)}
                            className="min-w-[200px] md:min-w-[500px] h-[45vh] md:h-[65vh] bg-white border-4 md:border-[12px] border-black transform -skew-x-3 shadow-[8px_8px_0_rgba(0,0,0,0.6)] md:shadow-[25px_25px_0_rgba(0,0,0,0.6)] flex flex-col p-1 md:p-2 group hover:scale-105 transition-transform relative cursor-pointer"
                        >
                            {/* Card Content */}
                            <div className="flex-1 bg-black relative overflow-hidden border-2 md:border-4 border-black">
                                <div className="absolute inset-0 bg-[#ff0055] opacity-20 group-hover:opacity-40 transition-opacity z-10" />

                                {/* PROJECT IMAGE */}
                                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity grayscale contrast-125">
                                    <img src={p.img || MumeiImg} alt={p.name} className="w-full h-full object-cover" />
                                </div>

                                <span className="absolute bottom-[-10px] md:bottom-[-20px] right-[-10px] md:right-[-20px] text-white text-5xl md:text-[12rem] font-persona opacity-20 leading-none z-0">
                                    {(i % BASE_PROJECTS.length) + 1}
                                </span>
                                <div className="p-2 md:p-8 relative z-20">
                                    <h3 className="text-white text-xl md:text-5xl font-persona leading-none text-stroke">{p.name}</h3>
                                    <p className="text-gray-400 font-mono mt-2 md:mt-4 font-bold text-[10px] md:text-base">&gt; {p.desc}</p>
                                </div>
                            </div>

                            {/* Yellow Footer */}
                            <div className="p-2 md:p-6 bg-yellow-400 mt-1 md:mt-2 border-2 md:border-4 border-black relative">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dot-matrix.png')] opacity-10" />
                                <div className="flex flex-wrap gap-1 md:gap-2 font-mono text-[8px] md:text-sm font-bold relative z-10">
                                    <span className="bg-black text-white px-1 md:px-2 border border-white">{p.cat}</span>
                                    {p.tags.slice(0, 2).map(t => (
                                        <span key={t} className="bg-white text-black px-1 md:px-2 border border-black">{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Deployed Badge */}
                            <div className="absolute -top-2 -left-2 md:-top-6 md:-left-6 bg-[#00eaff] px-2 py-0.5 md:px-6 md:py-2 border-2 md:border-[6px] border-black text-xs md:text-2xl font-persona transform rotate-[-10deg] shadow-md md:shadow-lg z-30">
                                DEPLOYED
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* PROJECT DETAIL MODAL */}
            {createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ scale: 0.8, rotate: 5, opacity: 0 }}
                                animate={{ scale: 1, rotate: -1, opacity: 1 }}
                                exit={{ scale: 0.8, rotate: -5, opacity: 0 }}
                                className="relative w-full max-w-4xl transform -skew-x-2"
                            >
                                {/* CONFIDENTIAL Header - Outside overflow container */}
                                <div className="absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2 bg-[#ffe600] text-black px-6 md:px-16 py-2 md:py-3 border-[3px] md:border-[5px] border-black transform -rotate-3 skew-x-6 shadow-[5px_5px_0_#000] z-[100000] whitespace-nowrap">
                                    <span className="font-persona text-lg md:text-4xl font-bold transform -skew-x-6 block">CONFIDENTIAL</span>
                                </div>

                                {/* TORN TOP EDGE */}
                                <div className="absolute -top-4 left-0 w-full h-6 bg-[#111]" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 95% 60%, 90% 0, 85% 60%, 80% 0, 75% 60%, 70% 0, 65% 60%, 60% 0, 55% 60%, 50% 0, 45% 60%, 40% 0, 35% 60%, 30% 0, 25% 60%, 20% 0, 15% 60%, 10% 0, 5% 60%, 0 0)" }} />

                                {/* MAIN MODAL BODY */}
                                <div className="bg-[#111] border-l-[6px] md:border-l-[10px] border-r-[6px] md:border-r-[10px] border-white p-4 md:p-12 shadow-[15px_15px_0_#d90000] md:shadow-[25px_25px_0_#d90000] relative overflow-hidden">

                                    {/* Diagonal Accent Lines */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d90000] opacity-20 transform rotate-45 translate-x-16 -translate-y-16" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00eaff] opacity-10 transform rotate-45 -translate-x-12 translate-y-12" />



                                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 md:mt-2">
                                        {/* Left: Image/Stats - Skewed Frame */}
                                        <div className="w-full md:w-1/3">
                                            <div className="aspect-square bg-black border-[3px] md:border-[5px] border-white overflow-hidden relative group transform -rotate-1 shadow-[8px_8px_0_#000]">
                                                <img src={selectedProject.img || MumeiImg} alt={selectedProject.name} className="w-full h-full object-cover transform rotate-1 scale-110" />
                                                <div className="absolute inset-0 bg-[#00eaff] opacity-20 mix-blend-overlay" />
                                                {/* Corner Cut */}
                                                <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#ffe600] transform rotate-45 translate-x-4 translate-y-4" />
                                            </div>
                                        </div>

                                        {/* Right: Info */}
                                        <div className="flex-1 text-white relative">
                                            {/* Decorative slash */}
                                            <div className="absolute -left-4 top-0 w-1 h-full bg-white opacity-20 transform -skew-x-12" />

                                            <h2 className="text-3xl md:text-6xl font-persona text-white text-stroke-sm mb-2 md:mb-6 leading-none transform -skew-x-3">
                                                {selectedProject.name}
                                            </h2>

                                            {/* Zigzag divider */}
                                            <div className="w-full h-2 mb-4 relative overflow-hidden" style={{ clipPath: "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 100%, 0 100%)" }}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#d90000] via-white to-[#00eaff]" />
                                            </div>

                                            <p className="font-mono text-xs md:text-lg text-gray-300 mb-6 font-bold leading-relaxed border-l-2 border-[#00eaff] pl-3">
                                                {selectedProject.desc}
                                                {/* <br /><br />
                                                A high-stakes mission executing critical logic in the {selectedProject.cat} sector.
                                                Objectives completed with precision. */}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                                                {selectedProject.tags.map((t, idx) => (
                                                    <span key={t} className={`px-2 md:px-4 py-1 bg-black text-[#00eaff] border-2 border-[#00eaff] text-[10px] md:text-sm font-bold uppercase transform ${idx % 2 === 0 ? '-skew-x-6' : 'skew-x-6'} hover:bg-[#00eaff] hover:text-black transition-colors`}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-4">
                                                <a
                                                    href={selectedProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-[#d90000] text-white py-2 md:py-4 font-persona text-xl md:text-2xl hover:bg-white hover:text-[#d90000] transition-all border-[3px] border-white shadow-[6px_6px_0_#000] transform -skew-x-6 hover:skew-x-0 text-center"
                                                >
                                                    INITIATE
                                                </a>
                                                <a
                                                    href={selectedProject.source}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-black text-white py-2 md:py-4 font-persona text-xl md:text-2xl hover:bg-gray-800 transition-all border-[3px] border-white shadow-[6px_6px_0_#fff] transform skew-x-6 hover:skew-x-0 text-center"
                                                >
                                                    SOURCE
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TORN BOTTOM EDGE */}
                                <div className="absolute -bottom-4 left-0 w-full h-6 bg-[#111]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 95% 40%, 90% 100%, 85% 40%, 80% 100%, 75% 40%, 70% 100%, 65% 40%, 60% 100%, 55% 40%, 50% 100%, 45% 40%, 40% 100%, 35% 40%, 30% 100%, 25% 40%, 20% 100%, 15% 40%, 10% 100%, 5% 40%, 0 100%)" }} />

                                {/* Close Button - Diamond Shape */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                    className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-12 h-12 md:w-20 md:h-20 bg-black text-white border-[3px] md:border-[5px] border-white flex items-center justify-center hover:scale-110 transition-transform shadow-[5px_5px_0_#d90000] z-30 transform rotate-45"
                                >
                                    <span className="text-xl md:text-4xl font-bold transform -rotate-45">X</span>
                                </button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </motion.div>
    );
};

export default MissionsSection;
