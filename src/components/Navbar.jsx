import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
    { id: "about", title: "About", emoji: "👨‍💻" },
    { id: "projects", title: "Projects", emoji: "🚀" },
    { id: "contact", title: "Contact", emoji: "💬" },
];

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActive("");
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "py-3"
                    : "py-5"
                }`}
        >
            {/* Floating Navbar Container */}
            <div className={`mx-auto max-w-6xl px-4 transition-all duration-500 ${scrolled ? "px-4" : "px-6"
                }`}>
                <div className={`relative flex items-center justify-between rounded-2xl transition-all duration-500 ${scrolled
                        ? "nav-glass px-6 py-3 shadow-2xl"
                        : "px-2 py-2"
                    }`}>

                    {/* Logo - Creative Animated */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                        className="cursor-pointer flex items-center gap-3 group"
                    >
                        {/* Animated Logo Icon */}
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-purple via-accent-pink to-accent-cyan p-[2px]"
                            >
                                <div className="w-full h-full rounded-xl bg-primary dark:bg-primary light:bg-white flex items-center justify-center relative overflow-hidden">
                                    <span className="text-transparent bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text font-black text-xl">
                                        A
                                    </span>
                                    {/* Shimmer effect */}
                                    <motion.div
                                        animate={{ x: [-40, 40] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                    />
                                </div>
                            </motion.div>

                            {/* Floating sparkle */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1"
                            >
                                <Sparkles size={12} className="text-accent-cyan" />
                            </motion.div>
                        </div>

                        {/* Name with gradient */}
                        <div className="hidden sm:block">
                            <motion.span
                                className="font-bold text-lg text-gradient"
                            >
                                Afwan
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                className="font-normal text-secondary ml-2"
                            >
                                .dev
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation - Creative Pills */}
                    <div className="hidden md:flex items-center gap-2">
                        {/* Nav Links as Pills */}
                        <div className="flex items-center gap-1 p-1.5 rounded-xl nav-pills-container">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onMouseEnter={() => setHoveredLink(link.id)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onClick={() => setActive(link.title)}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${active === link.title
                                            ? "text-white"
                                            : "text-secondary hover:text-foreground"
                                        }`}
                                >
                                    {/* Active/Hover Background */}
                                    {(active === link.title || hoveredLink === link.id) && (
                                        <motion.div
                                            layoutId="navPill"
                                            className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-purple/80 to-accent-cyan/80"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}

                                    <span className="relative z-10 flex items-center gap-1.5">
                                        <span className="text-xs">{link.emoji}</span>
                                        {link.title}
                                    </span>
                                </motion.a>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-px h-6 bg-border mx-2" />

                        {/* Theme Toggle - Creative */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="relative w-10 h-10 rounded-xl overflow-hidden group"
                        >
                            {/* Background */}
                            <div className={`absolute inset-0 transition-all duration-500 ${isDark
                                    ? "bg-gradient-to-br from-indigo-900 to-purple-900"
                                    : "bg-gradient-to-br from-orange-300 to-yellow-300"
                                }`} />

                            {/* Icons */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    {isDark ? (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Moon size={18} className="text-yellow-300" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Sun size={18} className="text-orange-600" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Stars for dark mode */}
                            {isDark && (
                                <>
                                    <motion.div
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute top-1.5 right-2 w-1 h-1 bg-white rounded-full"
                                    />
                                    <motion.div
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                        className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white rounded-full"
                                    />
                                </>
                            )}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button + Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Mobile Theme Toggle */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isDark
                                    ? "bg-indigo-900/50 text-yellow-300"
                                    : "bg-orange-200 text-orange-600"
                                }`}
                        >
                            {isDark ? <Moon size={16} /> : <Sun size={16} />}
                        </motion.button>

                        {/* Hamburger */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setToggle(!toggle)}
                            className="w-9 h-9 rounded-lg nav-glass flex items-center justify-center"
                        >
                            <AnimatePresence mode="wait">
                                {toggle ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                    >
                                        <X size={18} className="text-foreground" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                    >
                                        <Menu size={18} className="text-foreground" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-2 mx-2 p-4 rounded-2xl nav-glass shadow-2xl"
                            >
                                <div className="flex flex-col gap-1">
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.id}
                                            href={`#${link.id}`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            onClick={() => {
                                                setToggle(false);
                                                setActive(link.title);
                                            }}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active === link.title
                                                    ? "bg-gradient-to-r from-accent-purple/20 to-accent-cyan/20 text-foreground"
                                                    : "text-secondary hover:bg-white/5 hover:text-foreground"
                                                }`}
                                        >
                                            <span className="text-lg">{link.emoji}</span>
                                            <span className="font-medium">{link.title}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
