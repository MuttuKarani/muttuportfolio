import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ResumePage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative z-10 flex flex-col" style={{ height: "100vh" }}>
      {/* Top bar */}
      <div
        className="flex items-center gap-4 px-6 py-3 shrink-0"
        style={{
          background: "rgba(2,9,23,0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(79,142,247,0.15)",
        }}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm font-syne font-semibold text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          <FiArrowLeft /> Back to Portfolio
        </button>
        <span className="text-[var(--muted)] opacity-30">|</span>
        <span className="font-mono text-xs text-[var(--muted)]">Muttu_Karani_Resume.pdf</span>
      </div>

      {/* PDF embed */}
      <iframe
        // src="/Muttu_Karani_Resume.pdf"
        src="/Muttu_Karani_Frontend_Developer_Resume.pdf"
        title="Resume"
        className="flex-1 w-full border-0"
      />
    </div>
  );
};

export default ResumePage;
