import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin, Copy, Check } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:muhammadafizh10@gmail.com",
    value: "muhammadafizh10@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/afwanhafizh",
    value: "linkedin.com/in/afwanhafizh",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/mir4na",
    value: "github.com/mir4na",
    color: "from-gray-600 to-gray-800",
  },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("muhammadafizh10@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-subtext mb-3">Get In Touch</p>
          <h2 className="section-heading">Contact</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="glass-card rounded-2xl p-8 h-full">
              <h3 className="text-white text-2xl font-bold mb-6">
                Let's work together
              </h3>
              <p className="text-secondary mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                Feel free to reach out through any of the channels below.
              </p>

              {/* Location */}
              <div className="flex items-center gap-3 mb-8 text-secondary">
                <div className="w-10 h-10 rounded-xl bg-[#915eff]/20 flex items-center justify-center">
                  <MapPin size={20} className="text-[#915eff]" />
                </div>
                <span>Jakarta, Indonesia</span>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center`}>
                      <social.icon size={22} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{social.name}</p>
                      <p className="text-secondary text-sm">{social.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Copy Email Button */}
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full py-3 px-4 rounded-xl bg-[#915eff]/20 border border-[#915eff]/30 text-secondary hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={18} className="text-green-400" />
                    <span className="text-green-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-white text-2xl font-bold mb-6">
                Send me a message
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <label className="flex flex-col gap-2">
                  <span className="text-white font-medium">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    required
                    className="py-4 px-6 bg-tertiary rounded-xl border border-transparent text-white placeholder:text-secondary/50 focus:border-[#915eff] focus:outline-none transition-colors"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-white font-medium">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    required
                    className="py-4 px-6 bg-tertiary rounded-xl border border-transparent text-white placeholder:text-secondary/50 focus:border-[#915eff] focus:outline-none transition-colors"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-white font-medium">Your Message</span>
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="py-4 px-6 bg-tertiary rounded-xl border border-transparent text-white placeholder:text-secondary/50 focus:border-[#915eff] focus:outline-none transition-colors resize-none"
                  />
                </label>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
