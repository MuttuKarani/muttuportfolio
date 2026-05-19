import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/animations";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../utils/data";

const ProjectsSection = () => (
  <Section id="projects">
    <SectionHeader label="What I've built" title="Featured Projects" />

    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {projects.map((p) => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </motion.div>
  </Section>
);

export default ProjectsSection;
