import { Cloud, Coins, Gamepad2, Server } from 'lucide-react';

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
    "CLOUD COMPUTING": {
        icon: <Cloud size={48} strokeWidth={1.5} />,
        color: "text-[#ff0055]",
        bg: "bg-[#ff0055]",
        description: "CLOUD INFRASTRUCTURE & CONTAINERIZATION",
        stats: [
            { label: "AWS", val: 80 },
            { label: "K8S", val: 70 },
            { label: "DEVOPS", val: 75 },
        ],
        skills: ["AWS", "Kubernetes", "Docker", "GCP", "CloudFlare"]
    },
    "WEB DEVELOPMENT": {
        icon: <Coins size={48} strokeWidth={1.5} />,
        color: "text-[#ffe600]",
        bg: "bg-[#ffe600]",
        description: "WEB 2 & WEB 3 DEVELOPMENT",
        stats: [
            { label: "FULLSTACK DEVELOPMENT", val: 85 },
            { label: "SMART CONTRACT", val: 70 },
            { label: "BLOCKCHAIN ARCHITECTURE", val: 70},
        ],
        skills: ["Next.js", "Node.js", "Express.js", "Spring Boot", "Actix", "Hardhat", "Ethers.js", "Foundry"]
    },
    "GAME DEV": {
        icon: <Gamepad2 size={48} strokeWidth={1.5} />,
        color: "text-[#00eaff]",
        bg: "bg-[#00eaff]",
        description: "INTERACTIVE EXPERIENCES & GAME MECHANICS",
        stats: [
            { label: "CODING", val: 75 },
            { label: "ASSETS", val: 35 },
            { label: "GAME DESIGN", val: 70 },
        ],
        skills: ["Godot", "Unity", "Blender", "Aseprite", "Photon"]
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
        skills: ["Docker", "SonarQube", "GitHub Actions", "Jenkins", "Terraform", "Linux"]
    }
};
