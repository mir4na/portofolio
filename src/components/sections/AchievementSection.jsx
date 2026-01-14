import { motion } from "framer-motion";
import { SystemBgText } from "../ui/PersonaUI";

const AchievementSection = () => (
    <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-full h-full bg-[#2a2a2a] relative flex items-center justify-center p-2 md:p-12 overflow-hidden"
    >
        <SystemBgText text="AWARDS" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

        {/* PURPLE ACCENT OVERLAY */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#a855f7] opacity-10 rounded-full blur-3xl pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#a855f7] opacity-5 rounded-full blur-3xl pointer-events-none mix-blend-screen" />

        {/* Achievement Cards - 2x2 Grid */}
        <div className="grid grid-cols-2 gap-2 md:gap-8 relative z-10 w-full max-w-6xl pt-14 pb-16 md:pt-0 md:pb-0">
            {[
                { title: "CTF WARRIOR", org: "Cyber Defense 2024", rank: "1ST PLACE", icon: "🏆", color: "text-[#ffe600]", border: "border-[#ffe600]" },
                { title: "HACKATHON", org: "Global Web3 Summit", rank: "FINALIST", icon: "🥈", color: "text-gray-300", border: "border-white" },
                { title: "BUG BOUNTY", org: "HackerOne Valid", rank: "RECOGNIZED", icon: "🐛", color: "text-[#ff0055]", border: "border-white" },
                { title: "CERTIFIED", org: "AWS Solutions", rank: "ASSOCIATE", icon: "📜", color: "text-[#00eaff]", border: "border-white" },
            ].map((a, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`
                        bg-black border-2 md:border-[4px] ${a.border} p-2 md:p-6 flex flex-col md:flex-row items-center gap-2 md:gap-6 
                        transform hover:scale-105 transition-transform shadow-[5px_5px_0_rgba(0,0,0,0.5)] md:shadow-[10px_10px_0_rgba(0,0,0,0.5)] group relative overflow-hidden
                    `}
                >
                    {/* Flash on hover */}
                    <div className="absolute inset-0 bg-[#ffe600] opacity-0 group-hover:opacity-10 transition-opacity" />

                    <div className={`text-2xl md:text-6xl ${a.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
                        {a.icon}
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className={`text-sm md:text-4xl font-persona text-white group-hover:${a.color} transition-colors leading-tight`}>{a.title}</h3>
                        <p className="text-gray-400 font-mono font-bold mt-0.5 md:mt-1 text-[8px] md:text-sm">&gt; {a.org}</p>
                        <div className={`inline-block mt-1 md:mt-3 px-1.5 md:px-3 py-0.5 md:py-1 bg-white text-black text-[8px] md:text-xs font-bold transform -skew-x-12 border border-black`}>
                            {a.rank}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Decorative WIN text - Desktop only */}
        <div className="absolute top-10 right-10 hidden md:block">
            <div className="text-9xl text-[#ffe600] font-persona opacity-20 rotate-12">
                WIN
            </div>
        </div>
    </motion.div>
);

export default AchievementSection;
