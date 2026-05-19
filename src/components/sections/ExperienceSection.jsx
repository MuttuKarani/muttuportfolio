import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "../../utils/animations";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { experiences } from "../../utils/data";

const ExperienceSection = () => (
  <Section id="experience">
    <SectionHeader label="My journey" title="Work Experience" />

    <div className="max-w-2xl mx-auto">
      {experiences.map((exp) => (
        <div key={exp.id} className="relative pl-12">
          {/* Timeline line */}
          <div className="timeline-line" />

          {/* Timeline dot */}
          <div className="timeline-dot" />

          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="glass-card p-7 mb-8"
          >
            {/* Header */}
            <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
              <div>
                <h3 className="font-syne font-bold text-lg mb-1">{exp.role}</h3>
                <p className="text-[var(--accent-blue)] font-medium text-sm">{exp.company}</p>
              </div>
              <span
                className="text-xs font-mono px-4 py-1.5 rounded-full border"
                style={{
                  background: "rgba(6,214,160,0.1)",
                  borderColor: "rgba(6,214,160,0.25)",
                  color: "#06d6a0",
                }}
              >
                {exp.period}
              </span>
            </div>

            {/* Bullet highlights */}
            <ul className="flex flex-col gap-3 mb-5">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                    style={{ background: exp.bulletColors[i % exp.bulletColors.length] }}
                  />
                  <span className="text-[var(--muted)] text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: h.replace("25%", "<strong style='color:var(--text)'>25%</strong>") }}
                  />
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </Section>
);

export default ExperienceSection;
