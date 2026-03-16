# Velocine Studio Website

The official, high-performance landing page and marketing site for Velocine Studio. Built to deliver a premium cinematic experience while instantly hooking users on the AI video generation pipeline.

## 🚀 Tech Stack
- **Framework:** Next.js 15 (App Router, `standalone` output)
- **Language:** TypeScript
- **Styling:** Tailwind CSS V4 + CSS Variables (Dark mode default)
- **Components:** `shadcn/ui` (Buttons, Sheets, Accordions)
- **Animations:** `framer-motion`
- **Analytics:** Google Analytics 4 & Microsoft Clarity

## ✨ Key Features
- **Cinematic Sequential Hero**: The desktop homepage features a mathematically perfect `100svh - 64px` video hook. At the climax of the video (5.5s), the browser executes a buttery-smooth, hardware-accelerated auto-scroll down to the Pitch component.
- **Smart Mobile Battery Saver**: The mobile experience falls back to a perfect 'Single-Screen' layout. An internal `IntersectionObserver` mathematically pauses the heavy hero video loop whenever the user scrolls it out of view, aggressively saving phone battery and GPU resources.
- **3D Glassmorphism**: High-fidelity frosted glass cards and gradient typography throughout the site.
- **Unified Economy**: The `/pricing` page natively mirrors the internal Velocine Studio Euro-based credit schema (Explorer, Starter, Creator, Pro).

## 🛠️ Local Development

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Configure Environment
Rename `.env.example` to `.env` and fill in the necessary tracking IDs if testing analytics:
```env
# Optional tracking IDs
NEXT_PUBLIC_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_CLARITY_PROJECT_ID="xxxxxxxxxx"
```

### 3. Run the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Production Deployment

This project is configured to build as an isolated Docker container for the Velocine tunnel architecture.

```bash
docker compose up -d --build velocine-website
```

The `Dockerfile` employs Next.js `standalone` mode and explicitly binds `HOSTNAME "0.0.0.0"` to perfectly integrate into the Cloudflared zero-trust network without relying on Nginx proxies.
