const Section = ({ id, children, className = "" }) => (
  <section
    id={id}
    className={`relative z-10 py-24 ${className}`}
  >
    <div className="max-w-6xl mx-auto px-6">
      {children}
    </div>
  </section>
);

export default Section;
