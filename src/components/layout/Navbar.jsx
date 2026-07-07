import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { navLinks, personalInfo } from "../../utils/data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy([
    "home", "about", "skills", "experience", "projects", "contact",
  ]);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        background: "rgba(2,9,23,0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(79,142,247,0.15)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-14 md:h-16">

        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2 cursor-pointer shrink-0"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#4f8ef7,#7c3aed)" }}
          >
            <span className="font-syne font-black text-sm text-white leading-none">
              {personalInfo.initials}
            </span>
          </div>
          {/* Hide full name on very small screens */}
          <span className="font-syne font-bold text-[var(--text)] text-sm md:text-base hidden xs:block sm:block">
            {personalInfo.name}
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="relative font-syne font-medium text-sm tracking-wide transition-colors duration-300 cursor-pointer py-1"
                style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ background: "var(--accent-blue)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          <button
            className="btn-primary !py-2 !px-5 !text-xs"
            onClick={() => handleNav("#contact")}
          >
            Hire Me
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-[var(--text)] text-xl transition-colors"
          style={{ background: menuOpen ? "rgba(79,142,247,0.15)" : "transparent" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu — full dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid rgba(79,142,247,0.1)" }}
          >
            <div className="flex flex-col px-5 py-3 gap-0.5">
              {navLinks.map(({ label, href }, i) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.button
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => handleNav(href)}
                    className="flex items-center justify-between py-3.5 font-syne font-medium text-sm transition-colors"
                    style={{
                      color: isActive ? "var(--text)" : "var(--muted)",
                      borderBottom: "1px solid rgba(79,142,247,0.07)",
                    }}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--accent-blue)" }}
                      />
                    )}
                  </motion.button>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                className="pt-3 pb-1"
              >
                <button
                  className="btn-primary w-full justify-center"
                  onClick={() => handleNav("#contact")}
                >
                  Hire Me
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;