import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <motion.h1
          variants={fadeUp} custom={0} initial="hidden" animate="visible"
          className="font-syne font-black text-[8rem] leading-none grad-text mb-4"
        >
          404
        </motion.h1>
        <motion.p
          variants={fadeUp} custom={0.1} initial="hidden" animate="visible"
          className="text-[var(--muted)] text-lg mb-8"
        >
          This page doesn&apos;t exist.
        </motion.p>
        <motion.div variants={fadeUp} custom={0.2} initial="hidden" animate="visible">
          <button className="btn-primary" onClick={() => navigate("/")}>
            Go Home
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
