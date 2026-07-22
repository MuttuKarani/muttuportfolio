
// PORTFOLIO DATA 

export const personalInfo = {
  name: "Muttu Karani",
  initials: "MK",
  title: "Software Developer",
  subtitle: "Frontend Engineer",
  tagline:
    "Building scalable, production-grade web applications with React.js, TypeScript & modern UI engineering.",
  description:
    "Frontend Developer with 2.5+ years of experience building scalable, production-grade web applications, including a multitenant SaaS ERP system handling inventory, orders, invoices, and payments. Strong in end-to-end ownership, performance optimization, and building complex business workflows in fast-paced environments.",
  email: "muttukarani86@gmail.com",
  phone: "+91 9353293609",
  location: "Bagalkot, Karnataka, India",
  linkedin: "linkedin.com/in/muttukarani",
  github: "github.com/muttukarani",
  // resumeUrl: "/Muttu_Karani_Resume.pdf",
   resumeUrl:"/Muttu_Karani_Frontend_Developer_Resume.pdf",
  available: true,
};

export const stats = [
  { value: "2.5+", label: "Years Exp" },
  { value: "25%", label: "Perf Gain" },
  { value: "SaaS", label: "ERP Built" },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "monitor",
    color: "#4f8ef7",
    skills: [
      "⚛ React.js",
      "🔷 TypeScript",
      "🟡 JavaScript (ES6+)",
      "⬛ Next.js",
      "📦 Redux",
      "🔃 React Query",
      "🎨 SCSS / CSS3",
      "📐 Responsive Design",
    ],
  },
  {
    id: "backend",
    title: "APIs & Backend",
    icon: "server",
    color: "#06d6a0",
    skills: [
      "🟢 Node.js",
      "⚡ Express.js",
      "🍃 MongoDB",
      "🔑 JWT Auth",
      "🔗 RESTful APIs",
      "☁️ AWS S3",
      "🏢 Multi-tenant Architecture",
      "📦 Payload CMS",
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: "tool",
    color: "#7c3aed",
    skills: [
      "🔧 Git & GitHub",
      "🚀 Netlify",
      "🔁 GitLab CI/CD",
      "📊 Figma",
      "🔍 Postman",
      "📦 Webpack",
      "🧪 Jest & RTL",
      "📈 Lighthouse / Web Vitals",
    ],
  },
];

export const skillBars = [
  { name: "React.js", pct: 94, color: "#61dafb" },
  { name: "TypeScript", pct: 82, color: "#3178c6" },
  { name: "JavaScript (ES6+)", pct: 90, color: "#f0db4f" },
  { name: "Next.js", pct: 78, color: "#ffffff" },
  { name: "Redux / React Query", pct: 84, color: "#764abc" },
  { name: "Node.js / Express", pct: 72, color: "#22c55e" },
  { name: "MongoDB", pct: 68, color: "#47a248" },
  { name: "Figma / UI Design", pct: 80, color: "#a259ff" },
];

export const experiences = [
  {
    id: 1,
    role: "Mid Level Software Developer",
    company: "Springevening Private Limited",
    period: "Dec 2023 – Present",
    current: true,
    highlights: [
      "Developed scalable, reusable component architecture using React.js, Next.js & Redux, focusing on maintainable code and best practices.",
      "Delivered pixel-perfect UI screens from Figma designs, ensuring strict design accuracy and cross-browser compatibility.",
      "Built mobile-first responsive interfaces with strong attention to accessibility (WCAG), ADA compliance, performance, and UX.",
      "Improved frontend performance by 25% using lazy loading, code splitting, caching strategies, and Lighthouse-based auditing.",
      "Optimized build and bundle size using Webpack enhancements, tree-shaking, and code-splitting, improving load speeds.",
      "Led feature development and guided junior developers/interns to ensure code quality and delivery timelines.",
      "Utilized Jest and React Testing Library for unit and integration testing, improving code reliability.",
      "Deployed applications using Netlify & GitLab CI/CD pipelines for smooth, automated builds and delivery cycles.",
      "Contributed to building business-critical workflows including inventory management, order processing, and payment flows.",
    ],
    tags: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux",
      "Node.js",
      "MongoDB",
      "Jest",
      "CI/CD",
    ],
    bulletColors: [
      "#4f8ef7",
      "#7c3aed",
      "#06d6a0",
      "#fb923c",
      "#4f8ef7",
      "#7c3aed",
      "#06d6a0",
      "#fb923c",
      "#4f8ef7",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Operion Dashboard",
    desc: "Full-featured client & project management dashboard with Kanban boards, task tracking, team collaboration, and project overviews — built for real-world workflow management.",
    link: "https://operion-app.netlify.app/login",
    tags: ["React", "Kanban", "Dashboard", "Netlify"],
    icon: "📋",
    accentColor: "#06d6a0",
  },
  {
    id: 2,
    name: "SaaS ERP System",
    desc: "Production-grade multi-tenant SaaS ERP system with end-to-end ownership — managing inventory, products, orders, invoices, payments, customers and vendors with Razorpay integration.",
    link: "https://sellora-app.netlify.app/login",
    tags: ["React.js", "Node.js", "MongoDB", "React Query", "JWT", "Razorpay"],
    icon: "🏗️",
    accentColor: "#4f8ef7",
  },
  {
    id: 3,
    name: "WiSE",
    desc: "Platform empowering women in semiconductor careers with mentorship, community building, industry insights, and career growth opportunities across engineering, research, and leadership.",
    link: "https://www.wise-semicon.com/",
    tags: ["React", "Payload CMS", "SMTP", "Razorpay SDK"],
    icon: "💡",
    accentColor: "#a855f7",
  },
  {
    id: 4,
    name: "B2B Commerce App",
    desc: "Business-to-business e-commerce application with complex workflows, role-based access control and multi-tenant architecture.",
    link: "https://demo.soochiway.com",
    tags: ["React", "REST API", "JWT", "RBAC"],
    icon: "🏢",
    accentColor: "#06d6a0",
  },
  {
    id: 5,
    name: "Happynenapu",
    desc: "Full-stack platform with real-time features, responsive design and optimized performance built for production.",
    link: "https://happynenapu.com",
    tags: ["React", "Node.js", "MongoDB"],
    icon: "🌟",
    accentColor: "#7c3aed",
  },

  {
    id: 6,
    name: "EV Dashboard",
    desc: "Interactive electric vehicle analytics dashboard with real-time charts, D3.js visualizations and data reporting.",
    link: "https://mkevdashboard.netlify.app",
    tags: ["React", "D3.js", "Charts", "Netlify"],
    icon: "⚡",
    accentColor: "#fb923c",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
