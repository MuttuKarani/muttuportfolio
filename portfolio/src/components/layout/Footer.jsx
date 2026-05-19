import { personalInfo } from "../../utils/data";

const Footer = () => (
  <footer
    className="relative z-10 text-center py-10 px-6"
    style={{ borderTop: "1px solid rgba(79,142,247,0.12)" }}
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-2.5 mb-3">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#4f8ef7,#7c3aed)" }}
        >
          <span className="font-syne font-black text-xs text-white">
            {personalInfo.initials}
          </span>
        </div>
        <span className="font-syne font-bold text-[var(--text)]">
          {personalInfo.name}
        </span>
      </div>
      <p className="text-[var(--muted)] text-sm mb-3">
        Designed &amp; built by Muttu · © {new Date().getFullYear()}
      </p>
      <div className="flex justify-center gap-3 text-[var(--muted)] text-xs font-mono">
        <span>React.js</span>
        <span className="opacity-30">·</span>
        <span>Vite</span>
        <span className="opacity-30">·</span>
        <span>Tailwind CSS</span>
        <span className="opacity-30">·</span>
        <span>Framer Motion</span>
      </div>
    </div>
  </footer>
);

export default Footer;
