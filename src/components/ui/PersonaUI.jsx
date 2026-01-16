import React from 'react';
import { SYSTEM_DATA } from '../../constants';

export const NoiseOverlay = () => (
    <div className="absolute inset-0 z-[100] pointer-events-none opacity-[0.08] bg-noise mix-blend-overlay" />
);

export const SystemBgText = ({ text, className = "text-white opacity-[0.03]" }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <h1 className={`text-[20vw] font-persona select-none uppercase leading-none break-all whitespace-nowrap transform -rotate-12 translate-y-20 scale-150 ${className}`}>
            {text} {text}
        </h1>
    </div>
);

export const HexOverlay = () => (
    <div className="absolute inset-0 pointer-events-none opacity-10 z-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]" />
);

export const RadarChart = ({ color }) => (
    <div className="relative w-32 h-32 flex items-center justify-center opacity-80">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full stroke-white/20 fill-none stroke-[0.5]">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" />
            <polygon points="50,25 75,37 75,62 50,75 25,62 25,37" />
            <line x1="50" y1="50" x2="50" y2="10" />
            <line x1="50" y1="50" x2="90" y2="30" />
            <line x1="50" y1="50" x2="90" y2="70" />
            <line x1="50" y1="50" x2="50" y2="90" />
            <line x1="50" y1="50" x2="10" y2="70" />
            <line x1="50" y1="50" x2="10" y2="30" />
        </svg>
        <svg viewBox="0 0 100 100" className={`absolute inset-0 w-full h-full fill-${color.replace("text-", "")}/50 stroke-${color.replace("text-", "")} stroke-2`}>
            <polygon points="50,15 85,35 75,75 50,85 20,65 15,35" className="animate-pulse-slow" />
        </svg>
    </div>
);

import { motion } from "framer-motion";

export const HUD = () => {
    const [timeData, setTimeData] = React.useState({ date: "01/01", day: "MON", time: "00:00" });

    React.useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = { timeZone: 'Asia/Jakarta' };
            const dateStr = now.toLocaleDateString('en-US', { ...options, month: '2-digit', day: '2-digit' });
            const dayStr = now.toLocaleDateString('en-US', { ...options, weekday: 'short' }).toUpperCase();
            const timeStr = now.toLocaleTimeString('en-US', { ...options, hour: '2-digit', minute: '2-digit', hour12: false });
            setTimeData({ date: dateStr, day: dayStr, time: timeStr });
        };
        updateTime();
        const timer = setInterval(updateTime, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[60]">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 flex flex-col items-end"
            >
                <div className="bg-white border-[1.5px] sm:border-2 md:border-4 border-black px-2 sm:px-3 md:px-6 py-0.5 sm:py-1 md:py-2 transform skew-x-12 shadow-[2px_2px_0_#d90000] sm:shadow-[3px_3px_0_#d90000] md:shadow-[5px_5px_0_#d90000] flex gap-1 sm:gap-2 items-center">
                    <span className="text-sm sm:text-lg md:text-3xl font-persona text-black">{timeData.time}</span>
                    <span className="text-[6px] sm:text-[8px] md:text-xs font-bold text-gray-500">GMT+7</span>
                    <div className="w-[1px] sm:w-[2px] h-3 sm:h-4 md:h-6 bg-black opacity-20" />
                    <span className="text-[10px] sm:text-sm md:text-xl font-persona text-black opacity-60">{timeData.date}</span>
                    <span className="text-[7px] sm:text-[10px] md:text-sm font-bold bg-black text-white px-0.5 sm:px-1">{timeData.day}</span>
                </div>
                <div className="bg-black text-[#ffe600] px-1.5 sm:px-2 md:px-3 py-0.5 md:py-1 mt-0.5 sm:mt-1 text-[7px] sm:text-[10px] md:text-xs font-bold transform skew-x-12 border-[1.5px] sm:border-2 border-white">
                    WEATHER: {SYSTEM_DATA.weather}
                </div>
            </motion.div>

            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.4 }}
                className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-8 md:left-10 flex flex-col items-start gap-1 sm:gap-2 md:gap-4"
            >
                <div className="flex items-center gap-1 sm:gap-2 transform skew-x-12 group">
                    <span className="font-persona text-lg sm:text-2xl md:text-3xl text-white text-stroke drop-shadow-md animate-pulse-slow">HP</span>
                    <div className="relative w-32 h-6 sm:w-44 sm:h-8 md:w-64 md:h-10">
                        <svg viewBox="0 0 300 40" className="w-full h-full drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] sm:drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)] md:drop-shadow-[5px_5px_0_rgba(0,0,0,0.5)]">
                            <path d="M0,0 L280,0 L300,20 L280,40 L0,40 L20,20 Z" fill="rgba(0,0,0,0.8)" stroke="white" strokeWidth="2" />
                        </svg>

                        <div className="absolute inset-0 top-[2px] left-[2px] bottom-[2px] right-[2px] overflow-hidden"
                            style={{ clipPath: "polygon(0 0, 93% 0, 100% 50%, 93% 100%, 0 100%, 7% 50%)" }}>
                            <div className="w-full h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 relative">
                                <motion.div
                                    className="absolute inset-0 bg-white opacity-20"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30" />
                            </div>
                        </div>

                        <span className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 text-[8px] sm:text-xs md:text-sm font-mono font-bold text-white drop-shadow-md z-10">
                            {SYSTEM_DATA.hp.current} / {SYSTEM_DATA.hp.max}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 transform skew-x-12 ml-2 sm:ml-3 md:ml-4">
                    <span className="font-persona text-lg sm:text-2xl md:text-3xl text-white text-stroke drop-shadow-md animate-pulse-slow">SP</span>
                    <div className="relative w-24 h-5 sm:w-36 sm:h-6 md:w-48 md:h-8">
                        <svg viewBox="0 0 200 30" className="w-full h-full drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] sm:drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)] md:drop-shadow-[5px_5px_0_rgba(0,0,0,0.5)]">
                            <path d="M0,0 L180,0 L200,15 L180,30 L0,30 L15,15 Z" fill="rgba(0,0,0,0.8)" stroke="white" strokeWidth="2" />
                        </svg>

                        <div className="absolute inset-0 top-[2px] left-[2px] bottom-[2px] right-[2px] overflow-hidden"
                            style={{ clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 8% 50%)" }}>
                            <div className="w-full h-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 relative">
                                <motion.div
                                    className="absolute inset-0 bg-white opacity-20"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                        </div>

                        <span className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 text-[7px] sm:text-[10px] md:text-xs font-mono font-bold text-white drop-shadow-md z-10">
                            {SYSTEM_DATA.sp.current} / {SYSTEM_DATA.sp.max}
                        </span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
