# Siddhant Gupta — Senior Personal Developer Portfolio

> **Live Preview & Production Build:** Fully responsive, dark-mode personal developer portfolio for Siddhant Gupta — Full Stack Developer specializing in Backend Engineering, Distributed Systems, and AI-Powered Applications.

Designed with inspiration from Linear, Vercel, Raycast, and Stripe. Built from first principles to communicate technical competence, engineering maturity, creativity, and clean design hierarchy to recruiters, engineering managers, and founders.

---

## ⚡ Highlights & Key Features

- **Dark Engineering Aesthetic:** Deep charcoal (`#0B0D12`), electric lime accent (`#B8F36B`), off-white typography (`#F1F0EB`), subtle glassmorphism, and radial glowing accents.
- **Interactive Developer Workbench (Hero):**
  - **Interactive Terminal:** Functional in-browser shell supporting `help`, `whoami`, `skills`, `projects`, `contact`, and `clear` commands with instant output.
  - **Live Architecture Visualizer:** Real-time topology diagram displaying Edge Gateway, Redis rate limiter, microservices, and database layers with simulated latency telemetry.
  - **Production Code Snippet:** Clean TypeScript implementation of a Redis sorted-set sliding window rate limiter with 1-click copy.
- **Interactive Architecture & Systems (Featured Projects):**
  - **Project 01 — Multi-Agent Research & Report System:** Interactive LangGraph 3-node pipeline (Planner → Researcher → Synthesizer) with live schema inspector and execution simulation.
  - **Project 02 — Distributed API Rate Limiter & Microservices Platform:** Interactive traffic management diagram featuring API Gateway, Auth, User, Notification, Redis, PostgreSQL, and MongoDB with live "Simulate Request Burst" testing token quotas and HTTP 429 response handling.
  - **Project 03 — Conciso (AI PDF Summarizer):** Document intelligence pipeline demonstrating 50+ page PDF upload, hierarchical semantic chunking, and structured AI executive summaries.
- **Career Path (Experience Timeline):**
  - Full Stack Developer Intern at **Codec Technologies India** (Oct 2025 – Dec 2025) with all 5 verified production responsibilities.
- **Technical Skills Matrix:**
  - 7 categorized skill sets with real-time keyword search and category filtering. No arbitrary fake percentage bars.
- **Honors & Recognition:**
  - **Smart India Hackathon 2025 (National Round):** Prominent featured spotlight detailing hardware solution presented at IIT Roorkee.
  - **Hack-AI-thon (SBI Life):** UI/UX redesign & functional web application.
  - **NPTEL Certification:** Programming in Java.
- **Academic Foundation (Education):**
  - B.Tech in Computer Science and Engineering, **Technocrats Institute of Technology, Bhopal** (2023 – 2027).
- **Recruiter Experience & Direct Actions:**
  - Quick Command Palette (`⌘K` / `Ctrl+K`) for lightning-fast keyboard navigation.
  - In-browser interactive Resume viewer modal.
  - Downloadable official PDF resume (`/public/Siddhant_Gupta_Resume.pdf`).
  - Direct email dispatcher with pre-filled subject and role intent opening user's native email client.
  - 1-click email and phone copying with toast confirmations.
  - Automated dynamic OpenGraph social share card (`/opengraph-image`).

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, Turbopack)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React & Custom Brand SVGs
- **PDF Generation:** PDFKit
- **Deployment:** Vercel Ready

---

## 📂 Project Architecture

```bash
portfolio/
├── public/
│   ├── Siddhant_Gupta_Resume.pdf    # Downloadable official resume PDF
│   └── favicon.ico
├── scripts/
│   └── generate-resume.js           # Automated PDFKit script to regenerate resume
├── src/
│   ├── app/
│   │   ├── globals.css              # Custom tokens, glows, radial grid & scrollbars
│   │   ├── layout.tsx               # Root layout, Google Fonts, SEO & metadata
│   │   ├── opengraph-image.tsx      # Dynamic OpenGraph social card
│   │   └── page.tsx                 # Main application page
│   ├── components/
│   │   ├── About.tsx                # Bio, engineering philosophy & compact highlights
│   │   ├── Achievements.tsx         # SIH 2025 feature card & certifications
│   │   ├── CommandPalette.tsx       # Raycast-inspired Cmd+K command palette
│   │   ├── Contact.tsx              # Direct communication channels & email dispatcher
│   │   ├── Education.tsx            # B.Tech CSE degree & coursework breakdown
│   │   ├── Experience.tsx           # Codec Technologies India internship timeline
│   │   ├── Footer.tsx               # Status indicator, timestamp, credits & back-to-top
│   │   ├── Hero.tsx                 # Main hero section with availability badge & CTAs
│   │   ├── HeroInteractiveWorkbench.tsx # Multi-tab terminal, architecture & code workbench
│   │   ├── Navbar.tsx               # Sticky blurred navbar, scroll-spy & mobile drawer
│   │   ├── ProjectCard.tsx          # Comprehensive project presentation card
│   │   ├── Projects.tsx             # Featured projects container with category filtering
│   │   ├── ResumeModal.tsx          # In-browser CV modal with direct download button
│   │   ├── Skills.tsx               # Categorized skills matrix with instant search
│   │   ├── icons.tsx                # Clean, scalable SVG brand icons (GitHub, LinkedIn)
│   │   └── projects/
│   │       ├── AgentSystemVisual.tsx # Interactive LangGraph node visualizer
│   │       ├── ConcisoVisual.tsx     # PDF document intelligence pipeline visualizer
│   │       └── RateLimiterVisual.tsx # Redis rate limiter & microservices mesh simulator
│   └── data/
│       └── portfolio.ts             # Centralized single source of truth for portfolio data
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Regenerate Resume PDF (Optional):**
   ```bash
   node scripts/generate-resume.js
   ```

4. **Run a production build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete premium developer portfolio"
   git remote add origin https://github.com/siddhant1232/portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js — click **Deploy**. No custom environment variables or configuration required!
