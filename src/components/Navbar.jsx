import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
];

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActive("");
    };

    return (
        <nav
            className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ${scrolled ? "glass shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={scrollToTop}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#915eff] to-[#6366f1] flex items-center justify-center shadow-glow">
                        <span className="text-white font-bold text-xl">A</span>
                    </div>
                    <p className="text-white text-[18px] font-bold flex">
                        Afwan
                        <span className="sm:block hidden text-secondary ml-1 font-normal">
                            | Portfolio
                        </span>
                    </p>
                </motion.div>

                {/* Desktop Navigation */}
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${active === link.title ? "text-white" : "text-secondary"
                                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors relative group`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#915eff] to-[#00cea8] transition-all duration-300 ${active === link.title ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setToggle(!toggle)}
                        className="w-10 h-10 rounded-lg glass flex items-center justify-center"
                    >
                        {toggle ? (
                            <X size={24} className="text-white" />
                        ) : (
                            <Menu size={24} className="text-white" />
                        )}
                    </motion.button>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-20 right-6 min-w-[200px] glass-card rounded-2xl p-6 z-10"
                            >
                                <ul className="list-none flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <li
                                            key={link.id}
                                            className={`${active === link.title ? "text-white" : "text-secondary"
                                                } font-medium cursor-pointer text-[16px] hover:text-white transition-colors`}
                                            onClick={() => {
                                                setToggle(false);
                                                setActive(link.title);
                                            }}
                                        >
                                            <a href={`#${link.id}`}>{link.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
