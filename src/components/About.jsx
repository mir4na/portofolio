import { motion } from "framer-motion";
import { Shield, Blocks, Gamepad2, Code, Database, Terminal } from "lucide-react";

const services = [
  {
    title: "Cyber Security",
    icon: Shield,
    description: "Penetration testing, vulnerability assessment, and building secure systems. CTF enthusiast.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Web3 & Blockchain",
    icon: Blocks,
    description: "Smart contract development, DeFi protocols, and decentralized application architecture.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    title: "Game Development",
    icon: Gamepad2,
    description: "Creating immersive 3D experiences with Unity, Unreal Engine, and WebGL technologies.",
    gradient: "from-green-500 to-teal-500",
  },
];

const techStack = [
  { name: "JavaScript/TypeScript", icon: Code },
  { name: "React/Next.js", icon: Terminal },
  { name: "Solidity", icon: Blocks },
  { name: "Python", icon: Terminal },
  { name: "Node.js", icon: Database },
  { name: "Three.js", icon: Gamepad2 },
];

const ServiceCard = ({ index, title, icon: Icon, description, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="w-full sm:w-[300px]"
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative group"
      >
        {/* Gradient Border */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`} />

        {/* Card Content */}
        <div className="relative glass-card rounded-2xl p-6 h-full">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-4 shadow-lg`}>
            <Icon size={28} className="text-white" />
          </div>

          {/* Title */}
          <h3 className="text-white text-xl font-bold mb-3">{title}</h3>

          {/* Description */}
          <p className="text-secondary text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtext mb-3">Introduction</p>
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-secondary text-lg leading-relaxed">
            I'm a passionate <span className="text-white font-semibold">Computer Science student</span> at
            Universitas Indonesia with a deep interest in building secure, innovative, and immersive digital experiences.
            I love exploring the intersection of <span className="text-[#915eff]">security</span>,
            <span className="text-[#00cea8]"> decentralized technology</span>, and
            <span className="text-[#bf61ff]"> interactive media</span>.
          </p>
          <p className="text-secondary text-lg leading-relaxed mt-4">
            When I'm not coding, you'll find me participating in CTF competitions,
            exploring new blockchain protocols, or building game prototypes.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="flex flex-wrap gap-8 justify-center mb-20">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-subtext mb-6">Technologies I Work With</p>
          <div className="flex flex-wrap gap-4 justify-center max-w-2xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-[#915eff]/20 hover:border-[#915eff]/50 transition-colors cursor-default"
              >
                <tech.icon size={18} className="text-[#915eff]" />
                <span className="text-secondary text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
