import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  viewportConfig,
} from "../../utils/animations";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { personalInfo } from "../../utils/data";
import { FiDownload } from "react-icons/fi";

const CodeBlock = () => (
  <motion.div
    variants={slideLeft}
    custom={0}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className="glass-card p-7 font-mono text-[0.82rem] leading-[1.85] overflow-hidden"
  >
    <div className="flex gap-2 mb-5">
      {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
        <div
          key={c}
          className="w-3 h-3 rounded-full"
          style={{ background: c }}
        />
      ))}
    </div>
    <div>
      <span style={{ color: "#7c3aed" }}>const</span>{" "}
      <span style={{ color: "#4f8ef7" }}>developer</span>{" "}
      <span style={{ color: "var(--muted)" }}>=</span>{" "}
      <span style={{ color: "#facc15" }}>{"{"}</span>
    </div>
    {[
      { key: "name", val: `"${personalInfo.name}"`, valColor: "#fb923c" },
      { key: "role", val: `"${personalInfo.title}"`, valColor: "#fb923c" },
      { key: "experience", val: '"2+ years"', valColor: "#a78bfa" },
    ].map(({ key, val, valColor }) => (
      <div key={key} style={{ paddingLeft: 20 }}>
        <span style={{ color: "#06d6a0" }}>{key}</span>
        <span style={{ color: "var(--muted)" }}>: </span>
        <span style={{ color: valColor }}>{val}</span>
        <span style={{ color: "var(--muted)" }}>,</span>
      </div>
    ))}
    <div style={{ paddingLeft: 20 }}>
      <span style={{ color: "#06d6a0" }}>skills</span>
      <span style={{ color: "var(--muted)" }}>: </span>
      <span style={{ color: "#facc15" }}>[</span>
    </div>
    {["React.js", "TypeScript", "Node.js", "MongoDB"].map((s, i, arr) => (
      <div key={s} style={{ paddingLeft: 40 }}>
        <span style={{ color: "#fb923c" }}>&quot;{s}&quot;</span>
        {i < arr.length - 1 && <span style={{ color: "var(--muted)" }}>,</span>}
      </div>
    ))}
    <div style={{ paddingLeft: 20 }}>
      <span style={{ color: "#facc15" }}>]</span>
      <span style={{ color: "var(--muted)" }}>,</span>
    </div>
    <div style={{ paddingLeft: 20 }}>
      <span style={{ color: "#06d6a0" }}>passion</span>
      <span style={{ color: "var(--muted)" }}>: </span>
      <span style={{ color: "#fb923c" }}>
        &quot;Crafting beautiful UIs&quot;
      </span>
    </div>
    <div>
      <span style={{ color: "#facc15" }}>{"}"}</span>
    </div>
    <div className="mt-4">
      <span style={{ color: "var(--muted)" }}>{"// Currently at "}</span>
    </div>
    <div>
      <span style={{ color: "#7c3aed" }}>const</span>{" "}
      <span style={{ color: "#4f8ef7" }}>company</span>{" "}
      <span style={{ color: "var(--muted)" }}>= </span>
      <span style={{ color: "#fb923c" }}>
        &quot;Springevening Pvt Ltd&quot;
      </span>
    </div>
  </motion.div>
);

const AboutSection = () => (
  <Section id="about">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <CodeBlock />

      <motion.div
        variants={slideRight}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <SectionHeader
          label="Who I am"
          title={
            <>
              Crafting Digital
              <br />
              Experiences
            </>
          }
          center={false}
        />

        <motion.p
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-[var(--muted)] leading-[1.8] mb-5"
        >
          Software Developer with{" "}
          <strong className="text-[var(--text)]">2+ years</strong> of experience
          building responsive, high-performance web applications. Proficient in
          React.js, TypeScript, JavaScript, and modern UI development.
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-[var(--muted)] leading-[1.8] mb-8"
        >
          Experienced in integrating REST APIs and working with backend tools
          like Node.js, Express.js, and MongoDB. Focused on clean code,
          performance optimization, and continuous learning.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <a href={personalInfo.resumeUrl} download>
            <button className="btn-primary text-sm !py-2.5 !px-6">
              Download CV <FiDownload />
            </button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </Section>
);

export default AboutSection;
