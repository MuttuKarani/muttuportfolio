# 🚀 Muttu Karani — Developer Portfolio

A modern, animated personal portfolio website built with **React.js**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Features a dark futuristic aesthetic with glass morphism, particle canvas, scroll animations, and a fully responsive layout.

---

## ✨ Features

- ⚡ **Vite** — lightning-fast dev server and build tool
- ⚛️ **React.js** — component-based architecture with reusable UI
- 🎨 **Tailwind CSS** — utility-first styling with custom design tokens
- 🎞 **Framer Motion** — smooth scroll-triggered animations
- 🌌 **Particle Canvas** — animated network background
- 📱 **Fully Responsive** — mobile-first design
- 🧭 **Active Nav Spy** — highlights current section on scroll
- 📊 **Animated Skill Bars** — triggered on scroll into view
- 🗂 **Single Data File** — update all content from `src/utils/data.js`
- 🔀 **React Router** — Home, Resume, and 404 pages

---

## 🛠️ Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/MuttuKarani/muttuportfolio.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## ✏️ Updating Content

All portfolio content lives in a **single file**:

```
src/utils/data.js
```

| Export            | What it controls                    |
| ----------------- | ----------------------------------- |
| `personalInfo`    | Name, title, email, location, links |
| `stats`           | Hero section stat numbers           |
| `skillCategories` | Skill category cards with chips     |
| `skillBars`       | Animated progress bars              |
| `experiences`     | Work experience timeline            |
| `projects`        | Project cards grid                  |
| `navLinks`        | Navbar links                        |

> ✅ No need to touch any component files — just edit `data.js`.

---

## 🧰 Tech Stack

| Tech             | Purpose                 |
| ---------------- | ----------------------- |
| React.js 18      | UI framework            |
| Vite 5           | Build tool & dev server |
| Tailwind CSS 3   | Styling                 |
| Framer Motion 11 | Animations              |
| React Router 6   | Client-side routing     |
| React Icons      | Icon library            |

---

## 📦 Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start dev server at localhost:3000 |
| `npm run build`   | Build for production               |
| `npm run preview` | Preview production build locally   |

---

## 🚀 Deployment

This project can be deployed to **Netlify**, **Vercel**, or any static host.

### Netlify (recommended)

```bash
# Build command
npm run build

# Publish directory
dist
```

Add a `_redirects` file inside `public/` for client-side routing:

```
/*  /index.html  200
```

---

## 📬 Contact

**Muttu Karani**

- 📧 muttukarani86@gmail.com
- 🌐 [linkedin.com/in/muttukarani](https://linkedin.com/in/muttukarani)
- 💻 [github.com/muttukarani](https://github.com/muttukarani)

---

> Built by Muttu Karani
