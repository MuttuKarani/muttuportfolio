import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { navLinks, personalInfo } from "../../utils/data";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(["home", "about", "skills", "experience", "projects", "contact"]);

  const handleNav = (href) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(2,9,23,0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(79,142,247,0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#4f8ef7,#7c3aed)" }}
          >
            <span className="font-syne font-black text-sm text-white">
              {personalInfo.initials}
            </span>
          </div>
          <span className="font-syne font-bold text-[var(--text)]">
            {personalInfo.name}
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="relative font-syne font-medium text-sm tracking-wide transition-colors duration-300 cursor-pointer"
                style={{ color: isActive ? "var(--text)" : "var(--muted)" }}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "var(--accent-blue)" }}
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
          className="md:hidden text-[var(--text)] text-2xl"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: "1px solid rgba(79,142,247,0.1)" }}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className="text-left py-3 font-syne font-medium text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors border-b border-[rgba(79,142,247,0.08)]"
                >
                  {label}
                </button>
              ))}
              <button
                className="btn-primary mt-3 justify-center"
                onClick={() => handleNav("#contact")}
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
