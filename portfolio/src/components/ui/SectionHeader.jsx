import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "../../utils/animations";

const SectionHeader = ({ label, title, subtitle, center = true }) => (
  <div className={`mb-14 ${center ? "text-center" : ""}`}>
    <motion.span
      className="section-label"
      variants={fadeUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {label}
    </motion.span>
    <motion.h2
      className="section-title"
      variants={fadeUp}
      custom={0.1}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        className="mt-4 text-[var(--muted)] max-w-xl mx-auto"
        variants={fadeUp}
        custom={0.2}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;
