import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeUp, viewportConfig } from "../../utils/animations";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import SkillBar from "../ui/SkillBar";
import { skillCategories, skillBars } from "../../utils/data";
import { FiMonitor, FiServer, FiTool } from "react-icons/fi";

const iconMap = { monitor: FiMonitor, server: FiServer, tool: FiTool };

const SkillsSection = () => (
  <Section id="skills">
    <SectionHeader label="What I work with" title="Technical Arsenal" />

    {/* Category cards */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      {skillCategories.map(({ id, title, icon, color, skills }) => {
        const Icon = iconMap[icon];
        return (
          <motion.div key={id} variants={staggerItem} className="glass-card p-7">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${color}1a` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <h3 className="font-syne font-bold">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="skill-chip">{s}</span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.div>

    {/* Skill bars */}
    <motion.div
      className="glass-card p-8"
      variants={fadeUp}
      custom={0.2}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {skillBars.slice(0, 4).map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
        {skillBars.slice(4).map((s) => (
          <SkillBar key={s.name} {...s} />
        ))}
      </div>
    </motion.div>
  </Section>
);

export default SkillsSection;
