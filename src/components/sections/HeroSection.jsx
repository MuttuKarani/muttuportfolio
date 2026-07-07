import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";
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
  const containerRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const animate = () => {
      angle += 0.005;
      const size = containerRef.current?.offsetWidth || 200;
      const r = size * 0.48;
      const cx = size / 2;
      const cy = size / 2;

      if (ringRef.current) ringRef.current.style.transform = `rotate(${angle}rad)`;

      const setDot = (ref, a) => {
        if (ref.current) {
          ref.current.style.left = cx + r * Math.cos(a) + "px";
          ref.current.style.top = cy + r * Math.sin(a) + "px";
        }
      };
      setDot(dot1Ref, angle);
      setDot(dot2Ref, angle + 2.09);
      setDot(dot3Ref, angle + 4.19);

      const t = Date.now();
      if (badge1Ref.current)
        badge1Ref.current.style.transform = `translateY(${Math.sin(t / 1200) * 5}px)`;
      if (badge2Ref.current)
        badge2Ref.current.style.transform = `translateY(${Math.sin(t / 1200 + Math.PI) * 5}px)`;

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
      className="relative z-10 min-h-screen flex items-center"
      style={{ paddingTop: "72px", paddingBottom: "48px" }}
    >
      {/* Glow orbs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 350, height: 350, background: "rgba(79,142,247,0.07)", filter: "blur(80px)", top: 0, right: 0 }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 200, height: 200, background: "rgba(124,58,237,0.07)", filter: "blur(60px)", bottom: 0, left: 0 }}
      />

      <div className="w-full max-w-6xl mx-auto px-5">
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 md:gap-14 md:items-center">

          {/* AVATAR — top on mobile, right on desktop */}
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" animate="visible"
            className="flex justify-center items-center md:order-2 w-full"
          >
            <div
              ref={containerRef}
              className="relative"
              style={{ width: "clamp(160px, 52vw, 300px)", height: "clamp(160px, 52vw, 300px)" }}
            >
              {/* Rotating ring */}
              <div
                ref={ringRef}
                className="absolute rounded-full"
                style={{ inset: "-14px", border: "1px dashed rgba(79,142,247,0.35)" }}
              />
              <div
                className="absolute rounded-full"
                style={{ inset: "-26px", border: "1px dashed rgba(124,58,237,0.15)" }}
              />

              {/* Avatar circle */}
              <div
                className="w-full h-full rounded-full flex items-center justify-center overflow-hidden relative"
                style={{
                  background: "linear-gradient(135deg,rgba(79,142,247,0.25),rgba(124,58,237,0.25))",
                  border: "2px solid rgba(79,142,247,0.4)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(circle at 30% 30%,rgba(79,142,247,0.2),transparent 60%)" }}
                />
                <span
                  className="font-syne font-black grad-text relative z-10 select-none"
                  style={{ fontSize: "clamp(2.5rem, 13vw, 5.5rem)" }}
                >
                  MK
                </span>
              </div>

              {/* Orbiting dots */}
              {[
                { ref: dot1Ref, color: "#4f8ef7", size: 8 },
                { ref: dot2Ref, color: "#7c3aed", size: 7 },
                { ref: dot3Ref, color: "#06d6a0", size: 5 },
              ].map(({ ref, color, size }) => (
                <div
                  key={color}
                  ref={ref}
                  className="absolute rounded-full"
                  style={{
                    width: size, height: size,
                    background: color,
                    boxShadow: `0 0 ${size + 4}px ${color}`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}

              {/* Floating badges — visible sm and up */}
              <div
                ref={badge1Ref}
                className="glass-card absolute hidden sm:flex items-center gap-1.5 px-3 py-2"
                style={{ top: -12, right: -16 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#61dafb] shrink-0" />
                <span className="font-syne font-semibold text-[0.68rem] whitespace-nowrap">React.js</span>
              </div>
              <div
                ref={badge2Ref}
                className="glass-card absolute hidden sm:flex items-center gap-1.5 px-3 py-2"
                style={{ bottom: -8, left: -16 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#f0db4f] shrink-0" />
                <span className="font-syne font-semibold text-[0.68rem] whitespace-nowrap">TypeScript</span>
              </div>
            </div>
          </motion.div>

          {/* TEXT — bottom on mobile, left on desktop */}
          <div className="md:order-1 w-full flex flex-col items-center md:items-start text-center md:text-left">

            {/* Available badge */}
            <motion.div
              variants={fadeUp} custom={0.05} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 border rounded-full px-3 py-1.5 mb-5"
              style={{ background: "rgba(79,142,247,0.1)", borderColor: "rgba(79,142,247,0.3)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#06d6a0", boxShadow: "0 0 6px #06d6a0" }}
              />
              <span className="font-mono text-[0.68rem] text-[var(--accent-blue)] whitespace-nowrap">
                Available for opportunities
              </span>
            </motion.div>

            {/* Hello */}
            <motion.p
              variants={fadeUp} custom={0.1} initial="hidden" animate="visible"
              className="font-mono text-xs text-[var(--muted)] mb-2"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp} custom={0.15} initial="hidden" animate="visible"
              className="font-syne font-black leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2rem, 8.5vw, 4.2rem)" }}
            >
              {personalInfo.name.split(" ")[0]}
              <br />
              <span className="grad-text">{personalInfo.name.split(" ")[1]}</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={fadeUp} custom={0.2} initial="hidden" animate="visible"
              className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mb-4"
            >
              <span className="font-syne font-semibold text-sm md:text-lg text-[var(--muted)]">
                {personalInfo.title}
              </span>
              <span className="text-[var(--accent-blue)]">&amp;</span>
              <span className="font-syne font-semibold text-sm md:text-lg text-[var(--muted)]">
                {personalInfo.subtitle}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp} custom={0.25} initial="hidden" animate="visible"
              className="text-[var(--muted)] leading-relaxed text-sm max-w-xs md:max-w-md mb-7"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} custom={0.3} initial="hidden" animate="visible"
              className="flex flex-wrap gap-3 justify-center md:justify-start mb-8 w-full"
            >
              <button className="btn-primary !text-sm !px-5 !py-2.5" onClick={() => scrollTo("projects")}>
                View My Work <FiArrowRight />
              </button>
              <button className="btn-outline !text-sm !px-5 !py-2.5" onClick={() => scrollTo("contact")}>
                Let&apos;s Talk
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp} custom={0.35} initial="hidden" animate="visible"
              className="flex items-center justify-center md:justify-start gap-4 w-full"
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div>
                    <p className="font-syne font-black text-2xl md:text-3xl leading-none grad-text-blue">
                      {s.value}
                    </p>
                    <p className="font-mono text-[0.58rem] text-[var(--muted)] tracking-widest mt-1 uppercase">
                      {s.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      className="w-px h-7 self-center shrink-0"
                      style={{ background: "rgba(79,142,247,0.2)" }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint — desktop only */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[0.6rem] tracking-[0.15em]">SCROLL</span>
        <div className="w-px h-7" style={{ background: "linear-gradient(to bottom, var(--accent-blue), transparent)" }} />
      </div>
    </section>
  );
};

export default HeroSection;