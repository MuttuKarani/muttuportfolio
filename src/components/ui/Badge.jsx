const Badge = ({ children, variant = "blue", className = "" }) => {
  const variants = {
    blue: "bg-[rgba(79,142,247,0.1)] border-[rgba(79,142,247,0.25)] text-[var(--accent-blue)]",
    teal: "bg-[rgba(6,214,160,0.1)] border-[rgba(6,214,160,0.25)] text-[#06d6a0]",
    purple: "bg-[rgba(124,58,237,0.1)] border-[rgba(124,58,237,0.25)] text-[#a78bfa]",
    orange: "bg-[rgba(251,146,60,0.1)] border-[rgba(251,146,60,0.25)] text-[#fb923c]",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-xs font-mono tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
