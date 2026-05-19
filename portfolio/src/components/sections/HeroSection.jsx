import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideRight, viewportConfig } from "../../utils/animations";
import { personalInfo, stats } from "../../utils/data";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const ringRef = useRef(null);
  const dot1Ref = useRef(null);
  const dot2Ref = useRef(null);
  const dot3Ref = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.005;
      const r = 170;
      const cx = 160, cy = 160;
      if (ringRef.current) ringRef.current.style.transform = `rotate(${angle}rad)`;
      if (dot1Ref.current) {
        dot1Ref.current.style.left = cx + r * Math.cos(angle) + "px";
        dot1Ref.current.style.top = cy + r * Math.sin(angle) + "px";
      }
      if (dot2Ref.current) {
        dot2Ref.current.style.left = cx + r * Math.cos(angle + 2.09) + "px";
        dot2Ref.current.style.top = cy + r * Math.sin(angle + 2.09) + "px";
      }
      if (dot3Ref.current) {
        dot3Ref.current.style.left = cx + r * Math.cos(angle + 4.19) + "px";
        dot3Ref.current.style.top = cy + r * Math.sin(angle + 4.19) + "px";
      }
      const t = Date.now();
      if (badge1Ref.current)
        badge1Ref.current.style.transform = `translateY(${Math.sin(t / 1200) * 6}px)`;
      if (badge2Ref.current)
        badge2Ref.current.style.transform = `translateY(${Math.sin(t / 1200 + Math.PI) * 6}px)`;
      animRef.current = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Glow orbs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 500, height: 500,
            background: "rgba(79,142,247,0.07)",
            filter: "blur(80px)",
            top: -100, right: -100,
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 300, height: 300,
            background: "rgba(124,58,237,0.07)",
            filter: "blur(80px)",
            bottom: 0, left: -50,
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT — text */}
          <div>
            <motion.div
              variants={fadeUp} custom={0} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-7"
              style={{
                background: "rgba(79,142,247,0.1)",
                borderColor: "rgba(79,142,247,0.25)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#06d6a0",
                  boxShadow: "0 0 8px #06d6a0",
                }}
              />
              <span className="font-mono text-xs text-[var(--accent-blue)]">
                Available for opportunities
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp} custom={0.05} initial="hidden" animate="visible"
              className="font-mono text-sm text-[var(--muted)] mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp} custom={0.1} initial="hidden" animate="visible"
              className="font-syne font-black leading-[1.05] mb-5"
              style={{ fontSize: "clamp(3rem,5vw,4.5rem)" }}
            >
              {personalInfo.name.split(" ")[0]}
              <br />
              <span className="grad-text">{personalInfo.name.split(" ")[1]}</span>
            </motion.h1>

            <motion.div
              variants={fadeUp} custom={0.15} initial="hidden" animate="visible"
              className="flex flex-wrap items-center gap-2 mb-5"
            >
              <span className="font-syne font-semibold text-xl text-[var(--muted)]">
                {personalInfo.title}
              </span>
              <span className="text-[var(--accent-blue)]">&amp;</span>
              <span className="font-syne font-semibold text-xl text-[var(--muted)]">
                {personalInfo.subtitle}
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp} custom={0.2} initial="hidden" animate="visible"
              className="text-[var(--muted)] leading-relaxed max-w-md mb-9"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp} custom={0.25} initial="hidden" animate="visible"
              className="flex flex-wrap gap-4"
            >
              <button className="btn-primary" onClick={() => scrollTo("projects")}>
                View My Work <FiArrowRight />
              </button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>
                Let&apos;s Talk
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp} custom={0.3} initial="hidden" animate="visible"
              className="flex items-center gap-8 mt-12"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  <div>
                    <p
                      className="font-syne font-black text-4xl leading-none grad-text-blue"
                    >
                      {s.value}
                    </p>
                    <p className="font-mono text-[0.7rem] text-[var(--muted)] tracking-widest mt-1.5 uppercase">
                      {s.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      className="w-px h-10 self-center"
                      style={{ background: "rgba(79,142,247,0.2)" }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — animated avatar */}
          <motion.div
            variants={slideRight} custom={0.2} initial="hidden" animate="visible"
            className="flex justify-center items-center"
          >
            <div className="relative" style={{ width: 320, height: 320 }}>
              {/* Rotating dashed ring */}
              <div
                ref={ringRef}
                className="absolute rounded-full"
                style={{
                  inset: -20,
                  border: "1px dashed rgba(79,142,247,0.3)",
                }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  inset: -40,
                  border: "1px dashed rgba(124,58,237,0.12)",
                }}
              />

              {/* Avatar circle */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center overflow-hidden relative"
                style={{
                  background: "linear-gradient(135deg,rgba(79,142,247,0.2),rgba(124,58,237,0.2))",
                  border: "2px solid rgba(79,142,247,0.3)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%,rgba(79,142,247,0.15),transparent 60%)",
                  }}
                />
                <span
                  className="font-syne font-black grad-text relative z-10"
                  style={{ fontSize: "6rem" }}
                >
                  MK
                </span>
              </div>

              {/* Orbiting dots */}
              {[
                { ref: dot1Ref, color: "#4f8ef7", size: 10 },
                { ref: dot2Ref, color: "#7c3aed", size: 8 },
                { ref: dot3Ref, color: "#06d6a0", size: 6 },
              ].map(({ ref, color, size }) => (
                <div
                  key={color}
                  ref={ref}
                  className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: size,
                    height: size,
                    background: color,
                    boxShadow: `0 0 ${size + 4}px ${color}`,
                  }}
                />
              ))}

              {/* Floating tech badges */}
              <div
                ref={badge1Ref}
                className="glass-card absolute flex items-center gap-2 px-4 py-2.5"
                style={{ top: -24, right: -32 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#61dafb]" />
                <span className="font-syne font-semibold text-xs">React.js</span>
              </div>
              <div
                ref={badge2Ref}
                className="glass-card absolute flex items-center gap-2 px-4 py-2.5"
                style={{ bottom: -12, left: -36 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#f0db4f]" />
                <span className="font-syne font-semibold text-xs">TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-mono text-[0.65rem] tracking-[0.15em]">SCROLL</span>
          <div
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, var(--accent-blue), transparent)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
