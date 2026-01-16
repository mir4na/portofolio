import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { SystemBgText, HexOverlay } from "../ui/PersonaUI";
import MumeiImg from "../../assets/mumei-cropped.png";
import RevimImg from "../../assets/revim.png";
import QuickImg from "../../assets/quickclip.png";
import CiCdImg from "../../assets/cicd.png";
import PacilExploreImg from "../../assets/pacil.png";
import EtchedImg from "../../assets/etched.png";
import MyMineTicketKuImg from "../../assets/mymineticketku.png";

const MissionsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const BASE_PROJECTS = [
        {
            name: "ETCHED.SYS", cat: "WEB3", tags: ["Next.js", "Actix", "Hardhat", "Ethers"], desc: "Etched.sys is a decentralized platform that enables institutions to issue verifiable, immutable certificates on the blockchain through a seamless hybrid Web2/Web3 architecture.",
            link: "https://etched-delta.vercel.app/", source: "https://github.com/mir4na/etched-3", img: EtchedImg, status: "DEPLOYED"
        },
        {
            name: "QUICKCLIP", cat: "SaaS + CLOUD COMPUTING", tags: ["AWS", "KUBERNETES", "AWS S3", "CLOUDFLARE"], desc: "QuickClip is a SaaS application that runs on cloud infrastructure, providing pastebin and URL shortener features built with modern web technologies and deployed on Kubernetes.",
            link: "https://quickclip.stevensetiawan.my.id/", source: "https://github.com/mir4na/quickclip.git", img: QuickImg, status: "DEPLOYED"
        },
        {
            name: "RE:VIM", cat: "GAME", tags: ["Godot", "GDScript", "Figma"], desc: "Re:Vim is a time-loop survival game where every move you make is recorded and returns as an enemy in the next round, forcing you to survive against your own past self.",
            link: "https://mir4na.itch.io/re-vim", source: "https://github.com/mir4na/revim-compfest.git", img: RevimImg, status: "DEPLOYED"
        },
        {
            name: "CI/CD PIPELINE", cat: "DEVOPS", tags: ["Docker", "SonarQube", "Github Actions", "Koyeb"], desc: "... uses GitHub Actions for CI/CD automation, SonarQube for code quality analysis, Docker for containerization, and Koyeb for cloud deployment.",
            link: "https://unfair-smelt-adpro-eshop-mirana-9288cf1f.koyeb.app/", source: "https://github.com/mir4na/eshop.git", img: CiCdImg, status: "DEPLOYED"
        },
        {
            name: "Pacil Explore", cat: "GAME", tags: ["Godot", "GDScript", "etc"], desc: "Pacil Explore is an educational game that challenges players to solve missions by writing code, using programming logic as the key to unlocking each new level.",
            link: "https://ristek-game-development.itch.io/pacil-explore", source: "https://github.com/gamedev-ristek/OH-Game", img: PacilExploreImg, status: "DEPLOYED"
        },
        {
            name: "MyMineTicketKu", cat: "WEB3", tags: ["React", "Foundry", "Node.js", "Prisma"], desc: "MyMineTicketKu is a platform that combines on-chain and off-chain systems to transparently manage and distribute funds for each investor in music events.",
            link: "https://my-mine-ticket-ku-fe.vercel.app/", source: "https://github.com/mir4na/my-mine-ticket-ku-be", img: MyMineTicketKuImg, status: "PROTOTYPE"
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

            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] text-[30vw] sm:text-[35vw] md:text-[40vw] font-persona text-black opacity-[0.05] rotate-12 select-none">
                    ★
                </div>

                <div className="absolute top-[15%] w-[120%] -left-[10%] h-2 sm:h-4 md:h-8 bg-black opacity-80 rotate-[-2deg] border-y sm:border-y md:border-y-2 border-white mix-blend-overlay" />
                <div className="absolute top-[18%] w-[120%] -left-[10%] h-0.5 sm:h-1 md:h-2 bg-white opacity-60 rotate-[-2deg]" />

                <div className="absolute bottom-[20%] w-[120%] -left-[10%] h-2 sm:h-3 md:h-6 bg-white opacity-70 rotate-[1deg] border-y sm:border-y md:border-y-2 border-black mix-blend-overlay" />

                <div className="absolute top-0 w-full h-4 sm:h-8 md:h-16 bg-black" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 90% 80%, 85% 100%, 80% 80%, 75% 100%, 70% 80%, 65% 100%, 60% 80%, 55% 100%, 50% 80%, 45% 100%, 40% 80%, 35% 100%, 30% 80%, 25% 100%, 20% 80%, 15% 100%, 10% 80%, 5% 100%, 0 80%)" }} />
                <div className="absolute bottom-0 w-full h-3 sm:h-6 md:h-12 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 20%, 95% 0%, 90% 20%, 85% 0%, 80% 20%, 75% 0%, 70% 20%, 65% 0%, 60% 20%, 55% 0%, 50% 20%, 45% 0%, 40% 20%, 35% 0%, 30% 20%, 25% 0%, 20% 20%, 15% 0%, 10% 20%, 5% 0%, 0 20%)" }} />
            </div>

            <div className="w-full h-full flex items-center overflow-hidden relative z-10 pt-10 sm:pt-12 pb-10 sm:pb-12 md:pt-0 md:pb-0">
                <div
                    className="flex gap-2 sm:gap-4 md:gap-16 px-2 sm:px-4 md:px-20 will-change-transform transform-gpu animate-marquee"
                    style={{
                        animation: 'marquee 30s linear infinite',
                    }}
                >
                    {PROJECTS.map((p, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedProject(p)}
                            className="min-w-[160px] sm:min-w-[200px] md:min-w-[500px] h-[35vh] sm:h-[45vh] md:h-[65vh] bg-white border-2 sm:border-4 md:border-[12px] border-black transform -skew-x-3 shadow-[4px_4px_0_rgba(0,0,0,0.6)] sm:shadow-[8px_8px_0_rgba(0,0,0,0.6)] md:shadow-[25px_25px_0_rgba(0,0,0,0.6)] flex flex-col p-0.5 sm:p-1 md:p-2 group hover:scale-105 transition-transform relative cursor-pointer"
                        >
                            <div className="flex-1 bg-black relative overflow-hidden border sm:border-2 md:border-4 border-black">
                                <div className="absolute inset-0 bg-[#ff0055] opacity-20 group-hover:opacity-40 transition-opacity z-10" />

                                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity grayscale contrast-125">
                                    <img src={p.img || MumeiImg} alt={p.name} className="w-full h-full object-cover" />
                                </div>

                                <span className="absolute bottom-[-5px] sm:bottom-[-10px] md:bottom-[-20px] right-[-5px] sm:right-[-10px] md:right-[-20px] text-white text-3xl sm:text-5xl md:text-[12rem] font-persona opacity-20 leading-none z-0">
                                    {(i % BASE_PROJECTS.length) + 1}
                                </span>
                                <div className="p-1.5 sm:p-2 md:p-8 relative z-20">
                                    <h3 className="text-white text-base sm:text-xl md:text-5xl font-persona leading-none text-stroke">{p.name}</h3>
                                    <p className="text-gray-400 font-mono mt-1 sm:mt-2 md:mt-4 font-bold text-[8px] sm:text-[10px] md:text-base line-clamp-3 sm:line-clamp-none">&gt; {p.desc}</p>
                                </div>
                            </div>

                            <div className="p-1 sm:p-2 md:p-6 bg-yellow-400 mt-0.5 sm:mt-1 md:mt-2 border sm:border-2 md:border-4 border-black relative">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dot-matrix.png')] opacity-10" />
                                <div className="flex flex-wrap gap-0.5 sm:gap-1 md:gap-2 font-mono text-[6px] sm:text-[8px] md:text-sm font-bold relative z-10">
                                    <span className="bg-black text-white px-0.5 sm:px-1 md:px-2 border border-white">{p.cat}</span>
                                    {p.tags.slice(0, 2).map(t => (
                                        <span key={t} className="bg-white text-black px-0.5 sm:px-1 md:px-2 border border-black">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={`absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-6 md:-left-6 ${p.status === 'DEPLOYED' ? 'bg-[#00eaff]' : 'bg-[#ffe600]'} text-black px-1.5 py-0.5 sm:px-3 sm:py-1 md:px-6 md:py-2 border-2 sm:border-[3px] md:border-[6px] border-black font-persona text-[10px] sm:text-sm md:text-2xl transform rotate-[-8deg] skew-x-[-6deg] shadow-[2px_2px_0_rgba(0,0,0,0.8)] sm:shadow-[4px_4px_0_rgba(0,0,0,0.8)] md:shadow-[6px_6px_0_rgba(0,0,0,0.8)] z-30`}>
                                {p.status}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-4">
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
                                className="relative w-full max-w-4xl transform -skew-x-2 my-8 sm:my-0"
                            >
                                <div className="absolute -top-7 sm:-top-10 md:-top-14 left-1/2 -translate-x-1/2 bg-[#ffe600] text-black px-4 sm:px-6 md:px-16 py-1 sm:py-2 md:py-3 border-2 sm:border-[3px] md:border-[5px] border-black transform -rotate-3 skew-x-6 shadow-[3px_3px_0_#000] sm:shadow-[5px_5px_0_#000] z-[100000] whitespace-nowrap">
                                    <span className="font-persona text-sm sm:text-lg md:text-4xl font-bold transform -skew-x-6 block">CONFIDENTIAL</span>
                                </div>

                                <div className="absolute -top-2 sm:-top-4 left-0 w-full h-3 sm:h-6 bg-[#111]" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 95% 60%, 90% 0, 85% 60%, 80% 0, 75% 60%, 70% 0, 65% 60%, 60% 0, 55% 60%, 50% 0, 45% 60%, 40% 0, 35% 60%, 30% 0, 25% 60%, 20% 0, 15% 60%, 10% 0, 5% 60%, 0 0)" }} />

                                <div className="bg-[#111] border-l-[4px] sm:border-l-[6px] md:border-l-[10px] border-r-[4px] sm:border-r-[6px] md:border-r-[10px] border-white p-3 sm:p-4 md:p-12 shadow-[8px_8px_0_#d90000] sm:shadow-[15px_15px_0_#d90000] md:shadow-[25px_25px_0_#d90000] relative overflow-hidden max-h-[70vh] sm:max-h-[80vh] overflow-y-auto">

                                    <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 bg-[#d90000] opacity-20 transform rotate-45 translate-x-8 sm:translate-x-12 md:translate-x-16 -translate-y-8 sm:-translate-y-12 md:-translate-y-16" />
                                    <div className="absolute bottom-0 left-0 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 bg-[#00eaff] opacity-10 transform rotate-45 -translate-x-6 sm:-translate-x-9 md:-translate-x-12 translate-y-6 sm:translate-y-9 md:translate-y-12" />



                                    <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-8 mt-2 md:mt-2">
                                        <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-3 items-end md:items-stretch">
                                            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-full md:aspect-square bg-black border-2 sm:border-[3px] md:border-[5px] border-white overflow-hidden relative group transform -rotate-1 shadow-[4px_4px_0_#000] sm:shadow-[8px_8px_0_#000] flex-shrink-0">
                                                <img src={selectedProject.img || MumeiImg} alt={selectedProject.name} className="w-full h-full object-cover transform rotate-1 scale-110" />
                                                <div className="absolute inset-0 bg-[#00eaff] opacity-20 mix-blend-overlay" />
                                                <div className="absolute bottom-0 right-0 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-[#ffe600] transform rotate-45 translate-x-2 sm:translate-x-3 md:translate-x-4 translate-y-2 sm:translate-y-3 md:translate-y-4" />
                                            </div>

                                            {/* Mobile Title & Tags */}
                                            <div className="md:hidden flex-1 pb-1">
                                                <h2 className="text-2xl sm:text-3xl font-persona text-white text-stroke-sm leading-none mb-2 transform -skew-x-3">
                                                    {selectedProject.name}
                                                </h2>
                                                <div className="flex flex-wrap gap-1">
                                                    {selectedProject.tags.slice(0, 3).map((t) => (
                                                        <span key={t} className="px-1.5 py-0.5 bg-black border border-[#00eaff] text-[#00eaff] text-[7px] font-bold uppercase">{t}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1 text-white relative flex flex-col">
                                            <div className="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-white opacity-20 transform -skew-x-12" />

                                            {/* Desktop Title */}
                                            <h2 className="hidden md:block text-xl sm:text-3xl md:text-6xl font-persona text-white text-stroke-sm mb-1 sm:mb-2 md:mb-6 leading-none transform -skew-x-3">
                                                {selectedProject.name}
                                            </h2>

                                            <div className="hidden md:block w-full h-1 sm:h-2 mb-2 sm:mb-4 relative overflow-hidden" style={{ clipPath: "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 100%, 0 100%)" }}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#d90000] via-white to-[#00eaff]" />
                                            </div>

                                            <p className="font-mono text-[10px] sm:text-xs md:text-lg text-gray-300 mb-3 sm:mb-6 font-bold leading-relaxed border-l sm:border-l-2 border-[#00eaff] pl-2 sm:pl-3">
                                                {selectedProject.desc}
                                            </p>

                                            <div className="hidden md:flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                                                {selectedProject.tags.map((t, idx) => (
                                                    <span key={t} className={`px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 bg-black text-[#00eaff] border sm:border-2 border-[#00eaff] text-[8px] sm:text-[10px] md:text-sm font-bold uppercase transform ${idx % 2 === 0 ? '-skew-x-6' : 'skew-x-6'} hover:bg-[#00eaff] hover:text-black transition-colors`}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex gap-2 sm:gap-4 mt-auto">
                                                <a
                                                    href={selectedProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-[#d90000] text-white py-1.5 sm:py-2 md:py-4 font-persona text-sm sm:text-xl md:text-2xl hover:bg-white hover:text-[#d90000] transition-all border-2 sm:border-[3px] border-white shadow-[3px_3px_0_#000] sm:shadow-[6px_6px_0_#000] transform -skew-x-6 hover:skew-x-0 text-center"
                                                >
                                                    INITIATE
                                                </a>
                                                <a
                                                    href={selectedProject.source}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 bg-black text-white py-1.5 sm:py-2 md:py-4 font-persona text-sm sm:text-xl md:text-2xl hover:bg-gray-800 transition-all border-2 sm:border-[3px] border-white shadow-[3px_3px_0_#fff] sm:shadow-[6px_6px_0_#fff] transform skew-x-6 hover:skew-x-0 text-center"
                                                >
                                                    SOURCE
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-3 sm:h-6 bg-[#111]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 95% 40%, 90% 100%, 85% 40%, 80% 100%, 75% 40%, 70% 100%, 65% 40%, 60% 100%, 55% 40%, 50% 100%, 45% 40%, 40% 100%, 35% 40%, 30% 100%, 25% 40%, 20% 100%, 15% 40%, 10% 100%, 5% 40%, 0 100%)" }} />

                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                                    className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 md:-top-10 md:-right-10 w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 bg-black text-white border-2 sm:border-[3px] md:border-[5px] border-white flex items-center justify-center hover:scale-110 transition-transform shadow-[3px_3px_0_#d90000] sm:shadow-[5px_5px_0_#d90000] z-30 transform rotate-45"
                                >
                                    <span className="text-base sm:text-xl md:text-4xl font-bold transform -rotate-45">X</span>
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
