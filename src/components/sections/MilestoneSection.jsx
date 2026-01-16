import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";
import { Flag, Laptop, Award, Trophy } from "lucide-react";

const MilestoneSection = () => {
    const EXPERIENCES = [
        { role: "Member of Game Dev Division", company: "RISTEK FASILKOM UI", date: "2025 - PRESENT", desc: "Leading development of arcane web protocols." },
        { role: "FREELANCE", company: "Self Employed", date: "2025 - Present", desc: "Infiltrating legacy codebases and optimizing spirits." },
        // { role: "APPRENTICE", company: "ACADEMY OF GITS", date: "2020 - 2021", desc: "Learned the dark arts of full-stack summoning." },
        // { role: "INTERN", company: "STARTUP SANCTUM", date: "2019 - 2020", desc: "Fetching coffee and debugging infinite loops." },
        // { role: "FREELANCE MAGE", company: "SELF EMPLOYED", date: "2018 - 2019", desc: "Crafting bespoke spells for local merchants." },
        // { role: "NOVICE", company: "UNIVERSITY LABS", date: "2017 - 2018", desc: "First encounter with the compiler demons." },
    ];

    const ACHIEVEMENTS = [
        { title: "PEKAN RISTEK CTF 2023", org: "held by RISTEK FASILKOM UI", rank: "1ST PLACE", icon: <Flag size={32} strokeWidth={2.5} />, color: "text-[#ffe600]" },
        { title: "INFINITY HACKATHON 2025", org: "held by OJK and EKRAF", rank: "FINALIST", icon: <Laptop size={32} strokeWidth={2.5} />, color: "text-gray-300" },
        { title: "INFENTRA CTF 2025", org: "held by Telkom University Purwokerto", rank: "2ND PLACE", icon: <Flag size={32} strokeWidth={2.5} />, color: "text-[#ff0055]" },
        { title: "Best Growth 2025", org: "of Game Development Division RISTEK FASILKOM UI", rank: "APPRECIATION", icon: <Award size={32} strokeWidth={2.5} />, color: "text-[#00eaff]" },
        // { title: "OPEN SOURCE", org: "GitHub Contributor", rank: "TOP 10%", icon: "⭐", color: "text-[#ffe600]" },
        // { title: "ALGORITHM", org: "LeetCode Contest", rank: "KNIGHT", icon: "⚔️", color: "text-[#ff0055]" },
        // { title: "DESIGN", org: "Dribbble Awards", rank: "FEATURED", icon: "🎨", color: "text-[#00eaff]" },
    ];

    // TEMPORARY: Recovery Mode Flag
    const IS_RECOVERY = true;

    if (IS_RECOVERY) {
        return (
            <div className="w-full h-full bg-[#111] relative flex items-center justify-center overflow-hidden p-4">
                <SystemBgText text="ERROR" />

                {/* Background Warning Stripes */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "repeating-linear-gradient(45deg, #d90000 0, #d90000 20px, transparent 20px, transparent 40px)" }}
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="relative z-10 text-center"
                >
                    <div className="bg-[#d90000] text-black px-4 sm:px-8 py-1.5 sm:py-2 transform -skew-x-12 inline-block border-2 sm:border-4 border-black shadow-[5px_5px_0_#fff] sm:shadow-[10px_10px_0_#fff] mb-4 sm:mb-8">
                        <h1 className="text-2xl sm:text-4xl md:text-7xl font-persona font-bold tracking-widest animate-pulse">
                            SYSTEM RECOVERY
                        </h1>
                    </div>

                    <div className="bg-black border sm:border-2 border-[#d90000] p-4 sm:p-6 max-w-md mx-auto transform skew-x-6 relative">
                        <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 bg-[#ffe600] text-black text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 border border-black transform -rotate-12">
                            WARNING
                        </div>
                        <p className="font-mono text-[#d90000] text-sm sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">
                            &gt; DATA CORRUPTION DETECTED
                        </p>
                        <p className="font-mono text-gray-400 text-xs sm:text-sm md:text-base">
                            This cognitive palace is currently undergoing reconstruction. Please return when the psyche has stabilized.
                        </p>
                    </div>

                    {/* Loading Spinner / Icon simulation */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 border-4 sm:border-[6px] border-[#d90000] border-t-transparent rounded-full mx-auto mt-8 sm:mt-12 opacity-80"
                    />
                </motion.div>

                {/* Random Glitch Elements */}
                <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-[#ffe600] font-mono text-[10px] sm:text-xs opacity-50">
                    ERR_CODE: 0x5P1R1T
                </div>
                <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 text-[#00eaff] font-mono text-[10px] sm:text-xs opacity-50">
                    MEM_LEAK_DETECTED
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full h-full bg-[#2a2a2a] relative flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden"
        >
            <SystemBgText text="MILESTONES" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] md:w-[800px] h-[250px] sm:h-[400px] md:h-[800px] bg-[#a855f7] opacity-10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

            <div className="flex flex-col md:flex-row w-full max-w-7xl h-[85vh] gap-3 sm:gap-4 relative z-10 pt-12 sm:pt-16 md:pt-0">

                <div className="flex-1 flex flex-col justify-center">
                    <div className="bg-black text-white px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 w-fit transform -skew-x-12 border-l-2 sm:border-l-4 border-[#a855f7] mb-3 sm:mb-4 md:mb-8 shadow-[3px_3px_0_rgba(0,0,0,0.5)] sm:shadow-[5px_5px_0_rgba(0,0,0,0.5)]">
                        <h2 className="text-xl sm:text-2xl md:text-5xl font-persona transform skew-x-12">EXPERIENCE</h2>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 pr-2 sm:pr-4 overflow-y-auto max-h-[30vh] sm:max-h-[40vh] md:max-h-[60vh]
                        [&::-webkit-scrollbar]:w-2 sm:[&::-webkit-scrollbar]:w-3
                        [&::-webkit-scrollbar-track]:bg-black/50
                        [&::-webkit-scrollbar-thumb]:bg-[#a855f7]
                        [&::-webkit-scrollbar-thumb]:border sm:[&::-webkit-scrollbar-thumb]:border-2
                        [&::-webkit-scrollbar-thumb]:border-black hover:[&::-webkit-scrollbar-thumb]:bg-white"
                    >
                        {EXPERIENCES.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border-l-2 sm:border-l-4 border-white p-2 sm:p-3 md:p-4 hover:bg-white/10 transition-colors group relative mr-1 sm:mr-2"
                            >
                                <div className="absolute top-0 right-0 bg-[#a855f7] text-black font-bold text-[7px] sm:text-[8px] md:text-xs px-1.5 sm:px-2 py-0.5 transform skew-x-12 origin-top-right">
                                    {exp.date}
                                </div>
                                <h3 className="text-base sm:text-xl md:text-3xl font-persona text-white group-hover:text-[#a855f7] transition-colors">{exp.role}</h3>
                                <p className="text-[#a855f7] font-bold text-[10px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">{exp.company}</p>
                                <p className="text-gray-400 text-[9px] sm:text-[10px] md:text-sm font-mono max-w-[90%]">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="w-[2px] sm:w-[4px] bg-black hidden md:block relative mx-2 sm:mx-4">
                    <div className="absolute inset-0 bg-white/20 skew-y-12" />
                </div>

                <div className="flex-1 flex flex-col justify-center md:items-end">
                    <div className="bg-black text-white px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 w-fit transform skew-x-12 border-r-2 sm:border-r-4 border-[#ffe600] mb-3 sm:mb-4 md:mb-8 shadow-[-3px_3px_0_rgba(0,0,0,0.5)] sm:shadow-[-5px_5px_0_rgba(0,0,0,0.5)] self-start md:self-end">
                        <h2 className="text-xl sm:text-2xl md:text-5xl font-persona transform -skew-x-12">ACHIEVEMENTS</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 w-full overflow-y-auto max-h-[30vh] sm:max-h-[35vh] md:max-h-[60vh]
                        [&::-webkit-scrollbar]:w-2 sm:[&::-webkit-scrollbar]:w-3
                        [&::-webkit-scrollbar-track]:bg-black/50
                        [&::-webkit-scrollbar-thumb]:bg-[#ffe600]
                        [&::-webkit-scrollbar-thumb]:border sm:[&::-webkit-scrollbar-thumb]:border-2
                        [&::-webkit-scrollbar-thumb]:border-black hover:[&::-webkit-scrollbar-thumb]:bg-white pr-1 sm:pr-2"
                    >
                        {ACHIEVEMENTS.map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className={`bg-black border sm:border-2 border-white p-1.5 sm:p-2 md:p-4 flex items-center gap-2 sm:gap-3 transform hover:-rotate-2 transition-transform shadow-[2px_2px_0_rgba(0,0,0,0.5)] sm:shadow-[4px_4px_0_rgba(0,0,0,0.5)] group`}
                            >
                                <div className={`text-xl sm:text-2xl md:text-4xl ${a.color} filter drop-shadow-md flex-shrink-0`}>{a.icon}</div>
                                <div className="min-w-0">
                                    <h4 className="text-xs sm:text-sm md:text-xl font-persona text-white leading-tight truncate">{a.title}</h4>
                                    <p className="text-[8px] sm:text-[9px] md:text-xs text-gray-400 font-mono truncate">{a.org}</p>
                                    <span className={`inline-block text-[7px] sm:text-[8px] md:text-[10px] bg-white text-black px-0.5 sm:px-1 font-bold mt-0.5 sm:mt-1`}>{a.rank}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default MilestoneSection;
