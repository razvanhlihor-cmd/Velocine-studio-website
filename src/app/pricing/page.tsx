"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import React, { Suspense, Component } from "react";
import { MousePointer2, ChevronDown } from "lucide-react";

// Robust Error Boundary to catch 403s or bad data from Spline
class SplineErrorBoundary extends Component<{children: React.ReactNode, fallback: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode, fallback: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.warn("Spline loading error (likely 403 CORS or invalid URL):", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// Dynamically import Spline to prevent SSR hydration errors
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-zinc-950">
      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  )
});

/**
 * Insane 3D Tilt Card Component for Pricing
 */
function TiltCard({ children, popular = false }: { children: React.ReactNode, popular?: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
     x.set(0);
     y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-full transition-shadow duration-300 w-full rounded-[2rem] z-10 
        ${popular ? "shadow-[0_0_40px_rgba(249,115,22,0.15)] md:scale-105 z-20" : "shadow-[0_20px_40px_rgba(0,0,0,0.4)]"}
      `}
    >
      {/* Animated Glowing Aura Behind Popular Card */}
      {popular && (
        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-[2.5rem] blur-xl opacity-40 animate-[pulse_3s_ease-in-out_infinite]" />
      )}
      
      {/* Background Layer with Overflow Hidden for the shine */}
      <div 
        className={`absolute inset-0 rounded-[2rem] border overflow-hidden
          ${popular 
            ? "bg-gradient-to-b from-orange-500 via-rose-600 to-purple-700 border-none" 
            : "bg-black border-white/10"}
        `}
      >
        {/* Subtle internal shine */}
        <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Floating Content Layer (Pops out via translateZ without overflow-hidden blocking it) */}
      <div 
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="relative flex flex-col h-full p-8 z-10 text-white"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <div className="flex flex-col xl:flex-row w-full min-h-screen bg-zinc-950 text-white overflow-hidden relative selection:bg-orange-500/30">
      
      {/* 
        ========================================================
        MOBILE HERO SCENE (Hidden on lg desktops)
        ========================================================
      */}
      <div className="block xl:hidden relative w-full h-[60svh] bg-black shrink-0 border-b border-white/10 overflow-hidden">
        
        {/* Gradient Fade to blend with content */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
        
        <SplineErrorBoundary fallback={
          <div className="w-full h-full flex flex-col items-center justify-center p-8">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
               <div className="w-8 h-8 rounded-full bg-orange-500 animate-pulse" />
            </div>
            <p className="text-white font-medium">3D Engine Preview</p>
          </div>
        }>
          <Suspense fallback={<div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading 3D Engine...</div>}>
            <Spline 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full object-cover"
            />
          </Suspense>
        </SplineErrorBoundary>

        {/* Mobile Interaction Prompts */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute inset-0 pointer-events-none z-20 flex flex-col items-center justify-between py-12"
        >
          <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-sm text-zinc-300">
            <MousePointer2 className="w-4 h-4 text-orange-400 animate-pulse" /> Drag to look around
          </div>

          <motion.div
             animate={{ y: [0, 8, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="text-orange-500 flex flex-col items-center"
          >
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Pricing</span>
             <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* 
        ========================================================
        LEFT PANE: CONTENT & PRICING
        Mobile: Flows naturally below 3D scene
        Desktop: Takes up left 50-60% of viewport, scrolls independently
        ========================================================
      */}
      <div className="w-full xl:w-[55%] xl:h-screen xl:overflow-y-auto custom-scrollbar relative z-30 pb-32">
        <div className="px-4 md:px-12 py-16 md:py-24 max-w-3xl mx-auto xl:ml-auto xl:mr-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4 block">The Engine</span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white leading-[0.9] mb-6">
              Clear pricing for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">creators</span> who scale.
            </h1>
            <p className="text-xl text-zinc-400 font-medium max-w-lg">
              No hidden fees. Just pure computing power turned into ready-to-post variants.
            </p>
          </motion.div>

          <div className="flex flex-col gap-8 [perspective:1400px]">
            
            {/* Starter Plan */}
            <TiltCard>
              <div className="flex flex-col items-start gap-4 mb-4">
                 <h3 className="text-2xl font-bold flex items-center gap-2">Starter</h3>
              </div>
              <div className="text-5xl font-black mb-1">€24<span className="text-lg text-zinc-400 font-normal"> /mo</span></div>
              <p className="text-zinc-500 text-sm mb-6">150 / mo</p>
              
              <div className="text-sm font-bold mb-6 text-zinc-300">
                2 variants <span className="text-zinc-700 mx-2">|</span> max 60s
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-400 font-medium pb-8 border-b border-white/10 mb-8">
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> 150 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> 1-2 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> Up to 60s output length</li>
                <li className="flex gap-3 items-start"><span className="text-zinc-700">✓</span> No watermark</li>
              </ul>
              <Link href="https://studio.velocine.app/login">
                <Button className="w-full h-14 rounded-xl bg-white text-black hover:bg-zinc-200 font-bold shadow-sm text-base">Upgrade to Starter ↗</Button>
              </Link>
            </TiltCard>

            {/* Creator Plan (Most Popular) */}
            <TiltCard popular>
              <div className="flex flex-col items-start gap-3 mb-4">
                <div className="bg-white text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest shadow-xl uppercase ring-4 ring-orange-500/20">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold flex items-center gap-2 text-white">Creator</h3>
              </div>
              <div className="text-6xl font-black mb-1 flex items-baseline gap-1">€59<span className="text-xl text-white/70 font-bold"> /mo</span></div>
              <p className="text-white/80 text-sm mb-6 font-medium">400 / mo</p>
              
              <div className="text-sm font-bold mb-6 text-white bg-white/10 py-2 px-4 rounded-lg inline-block text-center border border-white/20">
                3 variants <span className="text-white/30 mx-2">|</span> max 3 min
              </div>

              <ul className="space-y-4 text-sm flex-1 text-white/95 font-bold pb-8 border-b border-white/20 mb-8">
                <li className="flex gap-3 items-start"><span className="text-white drop-shadow-md">✓</span> 400 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-white drop-shadow-md">✓</span> 3 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-white drop-shadow-md">✓</span> Up to 3 min output length</li>
                <li className="flex gap-3 items-start"><span className="text-white drop-shadow-md">✓</span> No watermark</li>
                <li className="flex gap-3 items-start"><span className="text-white drop-shadow-md">✓</span> 4K Ultra HD export</li>
                <li className="flex gap-3 items-start"><span className="text-white drop-shadow-md">✓</span> Brand kit included</li>
              </ul>
              <Link href="https://studio.velocine.app/login">
                <Button className="w-full h-14 bg-white hover:bg-zinc-100 text-orange-600 font-extrabold rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all text-base border-0 hover:scale-[1.02]">
                  Upgrade to Creator ↗
                </Button>
              </Link>
            </TiltCard>

            {/* Pro Plan */}
            <TiltCard>
              <div className="flex flex-col items-start gap-3 mb-5">
                 <div className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm">
                  Power users
                </div>
                 <h3 className="text-2xl font-bold flex items-center gap-2">Pro</h3>
              </div>
              <div className="text-5xl font-black mb-1">€149<span className="text-lg text-zinc-500 font-normal"> /mo</span></div>
              <p className="text-zinc-400 text-sm mb-6">1300 / mo</p>
              
              <div className="text-sm font-bold mb-6 text-zinc-300">
                5 variants <span className="text-zinc-700 mx-2">|</span> max Unlimited
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-400 font-medium pb-8 border-b border-white/10 mb-8">
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> 1300 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> 5 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> Unlimited output length</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> API access & webhooks</li>
              </ul>
              <Link href="https://studio.velocine.app/login">
                <Button className="w-full h-14 bg-zinc-800 hover:bg-zinc-700 border-0 text-white font-bold rounded-xl shadow-md transition-all text-base">Upgrade to Pro ↗</Button>
              </Link>
            </TiltCard>

          </div>
        </div>
      </div>

      {/* 
        ========================================================
        RIGHT PANE: DESKTOP SPLINE SCENE
        Hidden on mobile. Fixed to right side on desktop.
        ========================================================
      */}
      <div className="hidden xl:block absolute right-0 top-0 w-[45%] h-screen bg-black overflow-hidden border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-20">
        
        {/* Cinematic Lighting Overlays */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
        
        {/* Interaction Prompt (Fades out on hover) */}
        <div className="absolute top-8 right-8 z-20 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-sm text-zinc-300 pointer-events-none group-hover:opacity-0 transition-opacity">
           <MousePointer2 className="w-4 h-4 text-orange-400 animate-bounce" /> Click & Drag Robot
        </div>

        <SplineErrorBoundary fallback={
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-orange-500/20 flex items-center justify-center mb-6">
               <div className="w-12 h-12 rounded-full bg-orange-500 animate-pulse" />
            </div>
            <p className="text-white text-2xl font-bold tracking-tight">Interactive Engine</p>
            <p className="text-zinc-500 mt-2">Active render engine running in background.</p>
          </div>
        }>
          <Suspense fallback={<div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium tracking-widest uppercase text-sm">Initializing Neural Engine...</div>}>
            <Spline 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full object-cover cursor-grab active:cursor-grabbing"
            />
          </Suspense>
        </SplineErrorBoundary>
      </div>

    </div>
  );
}
