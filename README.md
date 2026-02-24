# Compound Clone

A pixel-perfect clone of the [Compound](https://compound.so) landing page, built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**.

---

## 📸 Preview

> Live demo: [Demo Video](https://drive.google.com/file/d/1yD1rywM-TPwg4f2ptreq2KipYRCn7TjB/view?usp=sharing)

---

## ✨ Features

- **Responsive Design** — Fully responsive layout optimized for desktop, tablet, and mobile viewports.
- **Smooth Animations** — Scroll-based and interaction-driven animations powered by Framer Motion.
- **Pixel-Perfect UI** — Carefully crafted components that closely replicate the original Compound design.
- **Modern Stack** — Built on Next.js 16 App Router, React 19, and Tailwind CSS 4 for a cutting-edge developer experience.

---

## 🧩 Components

| Component        | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `Navbar`         | Top navigation bar with logo and menu links                      |
| `Hero`           | Hero section with headline, subtext, and CTA                     |
| `Features`       | Feature cards showcasing key product capabilities                |
| `UseCases`       | Tabbed use-case section with detailed statistics and visuals     |
| `Pricing`        | Monthly / Annual pricing toggle with 3D flip card animation      |
| `Testimonial`    | Customer testimonial carousel with tilted cards and fade edges   |
| `CTA`            | Call-to-action banner with embedded video                        |
| `FAQS`           | Accordion-style FAQ section with video background                |
| `Footer`         | Footer with links, social icons, and attribution                 |

---

## 🛠️ Tech Stack

| Technology       | Version  |
| ---------------- | -------- |
| Next.js          | 16.1.6   |
| React            | 19.2.3   |
| TypeScript       | 5.x      |
| Tailwind CSS     | 4.x      |
| Framer Motion    | 12.x     |
| Lucide React     | 0.575.x  |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/Pranjal6955/compound-clone.git
cd compound-clone

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 📁 Project Structure

```
compound-clone/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── useCases.tsx
│   ├── Pricing.tsx
│   ├── Testimonial.tsx
│   ├── CTA.tsx
│   ├── FAQS.tsx
│   └── Footer.tsx
├── public/                # Static assets (images, SVGs, videos)
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 📄 License

This project is for educational / assignment purposes only. All design credit goes to [Compound](https://compound.so).
