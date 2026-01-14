import { Shield, Coins, Gamepad2, Server } from 'lucide-react';

export const SYSTEM_DATA = {
    hp: { current: 999, max: 999 },
    sp: { current: 400, max: 400 },
    date: "01/14",
    day: "WED",
    weather: "CLOUDY"
};

export const SOCIALS = {
    email: "mirananightfall228@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhammad-afwan-hafizh-2537a9235/",
    github: "github.com/mir4na"
};

export const TECH_STACK = {
    "CYBER SECURITY": {
        icon: <Shield size={48} strokeWidth={1.5} />,
        color: "text-[#ff0055]",
        bg: "bg-[#ff0055]",
        description: "VULNERABILITY ASSESSMENT & PENETRATION TESTING",
        stats: [
            { label: "NET SEC", val: 90 },
            { label: "OSINT", val: 85 },
            { label: "CRYPTO", val: 75 },
        ],
        skills: ["Wireshark", "Burp Suite", "Metasploit", "Nmap", "Python", "Bash"]
    },
    "WEB3 & BLOCKCHAIN": {
        icon: <Coins size={48} strokeWidth={1.5} />,
        color: "text-[#ffe600]",
        bg: "bg-[#ffe600]",
        description: "DECENTRALIZED FINANCE & SMART CONTRACTS",
        stats: [
            { label: "SOLIDITY", val: 95 },
            { label: "AUDIT", val: 70 },
            { label: "ARCH", val: 80 },
        ],
        skills: ["Solidity", "Hardhat", "Ethers.js", "Foundry", "IPFS", "OpenZeppelin"]
    },
    "GAME DEV": {
        icon: <Gamepad2 size={48} strokeWidth={1.5} />,
        color: "text-[#00eaff]",
        bg: "bg-[#00eaff]",
        description: "INTERACTIVE EXPERIENCES & GAME MECHANICS",
        stats: [
            { label: "UNITY", val: 85 },
            { label: "C#", val: 90 },
            { label: "DESIGN", val: 75 },
        ],
        skills: ["Unity 3D", "C#", "Blender", "Shader Graph", "Photon", "Aseprite"]
    },
    "DEVOPS": {
        icon: <Server size={48} strokeWidth={1.5} />,
        color: "text-[#a855f7]",
        bg: "bg-[#a855f7]",
        description: "INFRASTRUCTURE AS CODE & AUTOMATION",
        stats: [
            { label: "DOCKER", val: 90 },
            { label: "CLOUD", val: 75 },
            { label: "CI/CD", val: 85 },
        ],
        skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform", "Linux"]
    }
};
