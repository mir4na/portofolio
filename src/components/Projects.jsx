import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronRight, X } from "lucide-react";

const projects = [
  {
    name: "DeFi Exchange Platform",
    description:
      "A decentralized exchange platform enabling token swaps, liquidity pools, and yield farming. Built with smart contracts on Ethereum with a modern React frontend.",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "Solidity", color: "text-purple-400" },
      { name: "Hardhat", color: "text-yellow-400" },
      { name: "ethers.js", color: "text-cyan-400" },
    ],
    gradient: "from-purple-600 via-blue-600 to-cyan-600",
    category: "web3",
    github: "https://github.com/mir4na",
    demo: "#",
  },
  {
    name: "Network Security Scanner",
    description:
      "A comprehensive CLI tool for network reconnaissance, vulnerability scanning, and security assessment. Supports multiple protocols and generates detailed reports.",
    tags: [
      { name: "Python", color: "text-yellow-400" },
      { name: "Scapy", color: "text-green-400" },
      { name: "Nmap", color: "text-red-400" },
      { name: "Linux", color: "text-orange-400" },
    ],
    gradient: "from-red-600 via-orange-600 to-yellow-600",
    category: "security",
    github: "https://github.com/mir4na",
    demo: null,
  },
  {
    name: "Space Shooter 3D",
    description:
      "A WebGL-based 3D space shooter game featuring particle effects, dynamic lighting, custom physics engine, and procedural level generation.",
    tags: [
      { name: "Three.js", color: "text-white" },
      { name: "WebGL", color: "text-green-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "GLSL", color: "text-pink-400" },
    ],
    gradient: "from-green-600 via-teal-600 to-blue-600",
    category: "gamedev",
    github: "https://github.com/mir4na",
    demo: "#",
  },
  {
    name: "Smart Contract Auditing Tool",
    description:
      "Automated static analysis tool for Solidity smart contracts. Detects common vulnerabilities like reentrancy, overflow, and access control issues.",
    tags: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Solidity", color: "text-purple-400" },
      { name: "AST", color: "text-green-400" },
    ],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    category: "security",
    github: "https://github.com/mir4na",
    demo: null,
  },
  {
    name: "NFT Marketplace",
    description:
      "Full-stack NFT marketplace with minting, buying, selling, and auction capabilities. Integrated with IPFS for decentralized storage.",
    tags: [
      { name: "Next.js", color: "text-white" },
      { name: "Solidity", color: "text-purple-400" },
      { name: "IPFS", color: "text-cyan-400" },
      { name: "thirdweb", color: "text-pink-400" },
    ],
    gradient: "from-pink-600 via-red-600 to-orange-600",
    category: "web3",
    github: "https://github.com/mir4na",
    demo: "#",
  },
  {
    name: "Multiplayer RPG Prototype",
    description:
      "Real-time multiplayer RPG game prototype with inventory system, combat mechanics, and procedural dungeon generation.",
    tags: [
      { name: "Unity", color: "text-white" },
      { name: "C#", color: "text-purple-400" },
      { name: "Netcode", color: "text-green-400" },
      { name: "Blender", color: "text-orange-400" },
    ],
    gradient: "from-cyan-600 via-blue-600 to-purple-600",
    category: "gamedev",
    github: "https://github.com/mir4na",
    demo: "#",
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web3", name: "Web3" },
  { id: "security", name: "Security" },
  { id: "gamedev", name: "Game Dev" },
];

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative overflow-hidden rounded-2xl glass-card"
      >
        {/* Project Image/Gradient */}
        <div className="relative h-[200px] overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Overlay Icons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <Github size={20} className="text-white" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ExternalLink size={20} className="text-white" />
              </a>
            )}
          </div>

          {/* View More Indicator */}
          <div className="absolute bottom-4 left-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm">
            <span>View Details</span>
            <ChevronRight size={16} />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#915eff] transition-colors">
            {project.name}
          </h3>
          <p className="text-secondary text-sm line-clamp-2 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-xs font-medium ${tag.color} bg-white/5 px-2 py-1 rounded-md`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass-card rounded-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Header Gradient */}
        <div className={`h-[150px] bg-gradient-to-br ${project.gradient}`} />

        {/* Content */}
        <div className="p-8">
          <h3 className="text-white font-bold text-2xl mb-4">{project.name}</h3>
          <p className="text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className={`text-sm font-medium ${tag.color} bg-white/5 px-3 py-1.5 rounded-lg`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="section-subtext mb-3">My Work</p>
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-secondary text-lg text-center max-w-2xl mx-auto mb-12"
        >
          Here are some of my recent projects showcasing my skills in security,
          blockchain development, and game creation.
        </motion.p>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${activeCategory === category.id
                  ? "bg-gradient-to-r from-[#915eff] to-[#6366f1] text-white shadow-glow"
                  : "glass-card text-secondary hover:text-white"
                }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
