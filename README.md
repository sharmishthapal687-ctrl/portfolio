# ⚡ Personal Developer & Designer Portfolio

> **Dark Mode Tech Portfolio with Bento Grid Layout & Interactive Case Studies**

Built for **Sharmishtha Pal** — Designer & Developer / Student & Campus Builder. Focused on UI/UX design, modern frontend engineering, graphic design, and AI-driven solutions.

---

## ✨ Features & Architecture

- **🎨 Dark Mode Tech Aesthetic**: High-contrast, minimal, and futuristic design system built with Tailwind CSS v4, custom blueprint grids, and subtle ambient glows.
- **🍱 Interactive Bento Grid**: Modular dashboard highlighting creative philosophy, live simulated ESP32 IoT telemetry, hackathon accolades, and leadership.
- **📂 Filterable Project Showcase**: Switch seamlessly between Web & AI apps, UI/UX & Graphic Design, and IoT Hardware.
- **🔍 Rich Case Study Modal**: Deep-dive into problem statements, architectural decisions, metrics, and source links with keyboard accessibility (`Esc` to close).
- **🛠️ Categorized Skills Matrix**: Visual breakdown of Frontend Engineering, UI/UX & Graphic Design, Embedded & IoT Hardware, and AI Tools.
- **⏱️ Campus Leadership & Journey**: Timeline tracing Creatrix Club Graphic Design, Robotics Community involvement, and tech event emceeing.
- **📬 Interactive Contact Hub**: Direct email copy button with instant feedback, contact form, and social links (GitHub, LinkedIn, Figma, X).
- **🕒 Real-Time Clock**: Live Indian Standard Time (IST) clock and status indicator.

---

## 🚀 Quick Start (Running Locally)

### 1. Open Terminal & Navigate to the Portfolio Directory
```bash
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Vite Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port Vite outputs) to preview your portfolio live.

---

## ✏️ How to Customize Your Details

All profile information, project details, skills, experiences, and social handles are centralized in a single file:
👉 **`src/data/portfolioData.ts`**

You can easily update:
- Your name, email, bio, and social links in `personalInfo`
- Your projects in `projectsData` (add new ones, update links, change tags)
- Your skills in `skillCategories`
- Your experience and club roles in `experiencesData`
- Your hackathon wins and awards in `achievementsData`
- Your education details in `educationData`

---

## 🌐 Deploying Online to GitHub Pages or Vercel

### Option A: Deploy with Vercel (Recommended — 2 minutes)
1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com) with GitHub.
3. Import your repository, select the `portfolio` root directory, and click **Deploy**.
4. You get a live `https://your-portfolio.vercel.app` URL with automatic updates on every git push!

### Option B: Deploy to GitHub Pages
1. In `vite.config.ts`, add the `base` property:
   ```ts
   export default defineConfig({
     base: '/<your-repo-name>/',
     plugins: [react(), tailwindcss()],
   })
   ```
2. Build the production bundle:
   ```bash
   npm run build
   ```
3. Deploy the resulting `dist/` directory to GitHub Pages using the `gh-pages` npm package or GitHub Actions.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
