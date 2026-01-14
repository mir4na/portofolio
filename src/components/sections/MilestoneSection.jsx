import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";

const MilestoneSection = () => {
    const EXPERIENCES = [
        { role: "SENIOR SORCERER", company: "TECH WIZARDS INC.", date: "2023 - PRESENT", desc: "Leading development of arcane web protocols." },
        { role: "CODE PHANTOM", company: "SHADOW SYSTEMS", date: "2021 - 2023", desc: "Infiltrating legacy codebases and optimizing spirits." },
        { role: "APPRENTICE", company: "ACADEMY OF GITS", date: "2020 - 2021", desc: "Learned the dark arts of full-stack summoning." },
        { role: "INTERN", company: "STARTUP SANCTUM", date: "2019 - 2020", desc: "Fetching coffee and debugging infinite loops." },
        { role: "FREELANCE MAGE", company: "SELF EMPLOYED", date: "2018 - 2019", desc: "Crafting bespoke spells for local merchants." },
        { role: "NOVICE", company: "UNIVERSITY LABS", date: "2017 - 2018", desc: "First encounter with the compiler demons." },
    ];

    const ACHIEVEMENTS = [
        { title: "CTF WARRIOR", org: "Cyber Defense 2024", rank: "1ST PLACE", icon: "🏆", color: "text-[#ffe600]" },
        { title: "HACKATHON", org: "Global Web3 Summit", rank: "FINALIST", icon: "🥈", color: "text-gray-300" },
        { title: "BUG BOUNTY", org: "HackerOne Valid", rank: "RECOGNIZED", icon: "🐛", color: "text-[#ff0055]" },
        { title: "CERTIFIED", org: "AWS Solutions", rank: "ASSOCIATE", icon: "📜", color: "text-[#00eaff]" },
        { title: "OPEN SOURCE", org: "GitHub Contributor", rank: "TOP 10%", icon: "⭐", color: "text-[#ffe600]" },
        { title: "ALGORITHM", org: "LeetCode Contest", rank: "KNIGHT", icon: "⚔️", color: "text-[#ff0055]" },
        { title: "DESIGN", org: "Dribbble Awards", rank: "FEATURED", icon: "🎨", color: "text-[#00eaff]" },
    ];

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

            {/* PURPLE ACCENT OVERLAY */}
            <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#a855f7] opacity-10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

            <div className="flex flex-col md:flex-row w-full max-w-7xl h-[85vh] gap-4 relative z-10 pt-16 md:pt-0">

                {/* LEFT COLUMN: EXPERIENCE */}
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

                {/* DIVIDER - Desktop Only */}
                <div className="w-[4px] bg-black hidden md:block relative mx-4">
                    <div className="absolute inset-0 bg-white/20 skew-y-12" />
                </div>

                {/* RIGHT COLUMN: ACHIEVEMENTS */}
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
