import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";

const AchievementSection = () => (
    <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-full bg-[#2a2a2a] relative flex items-center justify-center p-4 md:p-12 overflow-y-auto"
    >
        <SystemBgText text="AWARDS" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

        {/* YELLOW ACCENT OVERLAY */}
        {/* PURPLE ACCENT OVERLAY - MATCHING MENU BUTTON */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a855f7] opacity-10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#a855f7] opacity-5 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 relative z-10 w-full max-w-6xl mt-12 md:mt-0">
            {[
                { title: "CTF WARRIOR", org: "Cyber Defense 2024", rank: "1ST PLACE", icon: "🏆", color: "text-[#ffe600]", border: "border-[#ffe600]" },
                { title: "HACKATHON", org: "Global Web3 Summit", rank: "FINALIST", icon: "🥈", color: "text-gray-300", border: "border-white" },
                { title: "BUG BOUNTY", org: "HackerOne Valid Report", rank: "RECOGNIZED", icon: "🐛", color: "text-[#ff0055]", border: "border-white" },
                { title: "CERTIFIED", org: "AWS Solutions Arch", rank: "ASSOCIATE", icon: "📜", color: "text-[#00eaff]", border: "border-white" },
            ].map((a, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`
                        bg-black border-[4px] ${a.border} p-6 flex flex-row items-center gap-4 md:gap-6 
                        transform hover:scale-105 transition-transform shadow-[10px_10px_0_rgba(0,0,0,0.5)] group relative overflow-hidden
                    `}
                >
                    {/* Yellow flash on hover */}
                    <div className="absolute inset-0 bg-[#ffe600] opacity-0 group-hover:opacity-10 transition-opacity" />

                    <div className={`text-4xl md:text-6xl ${a.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
                        {a.icon}
                    </div>
                    <div>
                        <h3 className={`text-2xl md:text-4xl font-persona text-white group-hover:${a.color} transition-colors`}>{a.title}</h3>
                        <p className="text-gray-400 font-mono font-bold mt-1 text-xs md:text-sm">&gt; {a.org}</p>
                        <div className={`inline-block mt-3 px-3 py-1 bg-white text-black text-[10px] md:text-xs font-bold transform -skew-x-12 border border-black`}>
                            {a.rank}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="absolute top-10 right-10 hidden md:block">
            <div className="text-9xl text-[#ffe600] font-persona opacity-20 rotate-12">
                WIN
            </div>
        </div>
    </motion.div>
);

export default AchievementSection;
