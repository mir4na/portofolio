import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skills = [
    { name: "Cyber Security", color: "from-red-500 to-orange-500", emoji: "🔐" },
    { name: "Web3 & Blockchain", color: "from-purple-500 to-blue-500", emoji: "⛓️" },
    { name: "Game Development", color: "from-green-500 to-teal-500", emoji: "🎮" },
  ];

  return (
    <section className="relative w-full min-h-screen mx-auto flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 pointer-events-none ${isDark
          ? "bg-gradient-to-b from-transparent via-primary/50 to-primary"
          : "bg-gradient-to-b from-transparent via-transparent to-background/80"
        }`} />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-32 pb-20"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 px-4 py-2 rounded-full glass-card border border-accent-purple/30"
        >
          <span className="text-secondary text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-black text-foreground leading-tight"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          Hi, I'm{" "}
          <span className="text-gradient">Muhammad Afwan Hafizh</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-secondary text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed"
        >
          Computer Science Student at{" "}
          <span className="text-foreground font-semibold">Universitas Indonesia</span>
        </motion.p>

        {/* Skill Tags */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-4 py-2 rounded-xl bg-gradient-to-r ${skill.color} ${isDark ? "bg-opacity-20" : "bg-opacity-80"
                } border border-white/10 backdrop-blur-sm cursor-default shadow-lg`}
            >
              <span className="text-white font-medium text-sm sm:text-base flex items-center gap-2">
                <span>{skill.emoji}</span>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary flex items-center gap-2"
          >
            View My Work
            <ChevronDown size={18} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-secondary flex items-center gap-2"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/mir4na", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/afwanhafizh", label: "LinkedIn" },
            { icon: Mail, href: "mailto:muhammadafizh10@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-secondary hover:text-foreground hover:border-accent-purple/50 transition-colors"
              title={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 group">
          <span className="text-secondary text-sm group-hover:text-foreground transition-colors">
            Scroll Down
          </span>
          <div className="w-[30px] h-[50px] rounded-full border-2 border-secondary group-hover:border-accent-purple flex justify-center pt-2 transition-colors">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-accent-purple"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
