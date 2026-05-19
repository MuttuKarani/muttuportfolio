import { motion } from "framer-motion";
import { staggerItem } from "../../utils/animations";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ name, desc, link, tags, icon, accentColor }) => (
  <motion.div variants={staggerItem} className="proj-card group">
    <div className="flex items-start justify-between mb-5">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ background: `${accentColor}1a` }}
      >
        {icon}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--muted)] hover:text-[var(--accent-blue)] transition-colors duration-200 opacity-0 group-hover:opacity-100"
      >
        <FiExternalLink size={20} />
      </a>
    </div>

    <h3 className="font-syne font-bold text-[1.05rem] mb-2 text-[var(--text)]">{name}</h3>
    <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">{desc}</p>

    <div className="flex gap-2 flex-wrap">
      {tags.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>

    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 text-xs font-mono tracking-wider transition-colors duration-200"
      style={{ color: accentColor }}
    >
      View Project <FiExternalLink size={12} />
    </a>
  </motion.div>
);

export default ProjectCard;
