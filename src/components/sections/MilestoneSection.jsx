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
            <div className="w-full h-full bg-[#111] relative flex items-center justify-center overflow-hidden">
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
                    <div className="bg-[#d90000] text-black px-8 py-2 transform -skew-x-12 inline-block border-4 border-black shadow-[10px_10px_0_#fff] mb-8">
                        <h1 className="text-4xl md:text-7xl font-persona font-bold tracking-widest animate-pulse">
                            SYSTEM RECOVERY
                        </h1>
                    </div>

                    <div className="bg-black border-2 border-[#d90000] p-6 max-w-md mx-auto transform skew-x-6 relative">
                        <div className="absolute -top-3 -left-3 bg-[#ffe600] text-black text-xs font-bold px-2 py-1 border border-black transform -rotate-12">
                            WARNING
                        </div>
                        <p className="font-mono text-[#d90000] text-lg md:text-xl font-bold mb-2">
                            &gt; DATA CORRUPTION DETECTED
                        </p>
                        <p className="font-mono text-gray-400 text-sm md:text-base">
                            This cognitive palace is currently undergoing reconstruction. Please return when the psyche has stabilized.
                        </p>
                    </div>

                    {/* Loading Spinner / Icon simulation */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 md:w-24 md:h-24 border-[6px] border-[#d90000] border-t-transparent rounded-full mx-auto mt-12 opacity-80"
                    />
                </motion.div>

                {/* Random Glitch Elements */}
                <div className="absolute top-10 left-10 text-[#ffe600] font-mono text-xs opacity-50">
                    ERR_CODE: 0x5P1R1T
                </div>
                <div className="absolute bottom-10 right-10 text-[#00eaff] font-mono text-xs opacity-50">
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
            className="w-full h-full bg-[#2a2a2a] relative flex items-center justify-center p-2 md:p-8 overflow-hidden"
        >
            <SystemBgText text="MILESTONES" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#a855f7] opacity-10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

            <div className="flex flex-col md:flex-row w-full max-w-7xl h-[85vh] gap-4 relative z-10 pt-16 md:pt-0">

                <div className="flex-1 flex flex-col justify-center">
                    <div className="bg-black text-white px-4 md:px-8 py-2 w-fit transform -skew-x-12 border-l-4 border-[#a855f7] mb-4 md:mb-8 shadow-[5px_5px_0_rgba(0,0,0,0.5)]">
                        <h2 className="text-2xl md:text-5xl font-persona transform skew-x-12">EXPERIENCE</h2>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-6 pr-4 overflow-y-auto max-h-[40vh] md:max-h-[60vh] 
                        [&::-webkit-scrollbar]:w-3 
                        [&::-webkit-scrollbar-track]:bg-black/50 
                        [&::-webkit-scrollbar-thumb]:bg-[#a855f7] 
                        [&::-webkit-scrollbar-thumb]:border-2 
                        [&::-webkit-scrollbar-thumb]:border-black hover:[&::-webkit-scrollbar-thumb]:bg-white"
                    >
                        {EXPERIENCES.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border-l-4 border-white p-3 md:p-4 hover:bg-white/10 transition-colors group relative mr-2"
                            >
                                <div className="absolute top-0 right-0 bg-[#a855f7] text-black font-bold text-[8px] md:text-xs px-2 py-0.5 transform skew-x-12 origin-top-right">
                                    {exp.date}
                                </div>
                                <h3 className="text-xl md:text-3xl font-persona text-white group-hover:text-[#a855f7] transition-colors">{exp.role}</h3>
                                <p className="text-[#a855f7] font-bold text-xs md:text-sm mb-1">{exp.company}</p>
                                <p className="text-gray-400 text-[10px] md:text-sm font-mono max-w-[90%]">{exp.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="w-[4px] bg-black hidden md:block relative mx-4">
                    <div className="absolute inset-0 bg-white/20 skew-y-12" />
                </div>

                <div className="flex-1 flex flex-col justify-center md:items-end">
                    <div className="bg-black text-white px-4 md:px-8 py-2 w-fit transform skew-x-12 border-r-4 border-[#ffe600] mb-4 md:mb-8 shadow-[-5px_5px_0_rgba(0,0,0,0.5)] self-start md:self-end">
                        <h2 className="text-2xl md:text-5xl font-persona transform -skew-x-12">ACHIEVEMENTS</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full overflow-y-auto max-h-[35vh] md:max-h-[60vh]
                        [&::-webkit-scrollbar]:w-3 
                        [&::-webkit-scrollbar-track]:bg-black/50 
                        [&::-webkit-scrollbar-thumb]:bg-[#ffe600] 
                        [&::-webkit-scrollbar-thumb]:border-2 
                        [&::-webkit-scrollbar-thumb]:border-black hover:[&::-webkit-scrollbar-thumb]:bg-white pr-2"
                    >
                        {ACHIEVEMENTS.map((a, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className={`bg-black border-2 border-white p-2 md:p-4 flex items-center gap-3 transform hover:-rotate-2 transition-transform shadow-[4px_4px_0_rgba(0,0,0,0.5)] group`}
                            >
                                <div className={`text-2xl md:text-4xl ${a.color} filter drop-shadow-md`}>{a.icon}</div>
                                <div>
                                    <h4 className="text-sm md:text-xl font-persona text-white leading-tight">{a.title}</h4>
                                    <p className="text-[9px] md:text-xs text-gray-400 font-mono">{a.org}</p>
                                    <span className={`inline-block text-[8px] md:text-[10px] bg-white text-black px-1 font-bold mt-1`}>{a.rank}</span>
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
