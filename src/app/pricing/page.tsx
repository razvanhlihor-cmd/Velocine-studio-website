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
 * Insane 3D Tilt Card Component for Pricing - Floating Glassmorphism Edition
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
      className={`relative h-max w-full max-w-[340px] xl:max-w-none xl:w-[260px] 2xl:w-[280px] transition-all duration-300 rounded-[2rem] z-10 pointer-events-auto
        ${popular ? "md:scale-105 z-20" : ""}
      `}
    >
      {/* Animated Glowing Aura Behind Popular Card */}
      {popular && (
        <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 rounded-[2.5rem] blur-2xl opacity-40 animate-[pulse_3s_ease-in-out_infinite] -z-10" />
      )}
      
      {/* Glassmorphism Background Layer with Overflow Hidden for the shine */}
      <div 
        className={`absolute inset-0 rounded-[2rem] border overflow-hidden backdrop-blur-2xl
          ${popular 
            ? "bg-black/80 border-orange-500/50 shadow-[0_0_50px_rgba(249,115,22,0.2)]" 
            : "bg-black/60 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]"}
        `}
      >
        {/* Subtle internal shine */}
        <div className={`absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b ${popular ? "from-orange-500/20" : "from-white/5"} to-transparent pointer-events-none`} />
      </div>

      {/* Floating Content Layer (Pops out via translateZ without overflow-hidden blocking it) */}
      <div 
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="relative flex flex-col h-full p-5 lg:p-6 z-10 text-white"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-zinc-950 text-white overflow-hidden relative selection:bg-orange-500/30">
      
      {/* 
        ========================================================
        MOBILE LAYOUT (Stacked)
        ========================================================
      */}
      <div className="xl:hidden flex flex-col w-full">
        {/* Mobile Bot */}
        <div className="relative w-full h-[50svh] min-h-[400px] max-h-[500px] bg-black shrink-0 border-b border-white/10 overflow-hidden">
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />
          
          <SplineErrorBoundary fallback={
            <div className="w-full h-full flex flex-col items-center justify-center p-8">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                 <div className="w-8 h-8 rounded-full bg-orange-500 animate-pulse" />
              </div>
              <p className="text-white font-medium text-sm">3D Engine Preview</p>
            </div>
          }>
            <Suspense fallback={<div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">Loading 3D Engine...</div>}>
              <Spline 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full object-cover"
              />
            </Suspense>
          </SplineErrorBoundary>

          {/* Subtle Mobile Drag Prompt (Top Right instead of covering the robot) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-6 right-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-300 pointer-events-auto shadow-xl"
          >
            <MousePointer2 className="w-3 h-3 text-orange-400 animate-pulse" /> Inspect
          </motion.div>
        </div>

        {/* Mobile Pricing Section Stack */}
        <div className="w-full px-4 py-12 flex flex-col items-center bg-zinc-950 relative z-30">
           {/* Mobile Title properly stacked above cards */}
           <div className="text-center mb-10 max-w-sm mx-auto">
             <span className="text-orange-500 font-bold tracking-widest uppercase text-[9px] mb-2 block">The Engine</span>
             <h1 className="text-4xl font-black tracking-tighter text-white drop-shadow-lg mb-4">
               Pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">creators</span>.
             </h1>
             <p className="text-zinc-400 text-sm font-medium">Clear pricing that scales with your ambitions.</p>
           </div>

           <div className="flex flex-col gap-8 w-full items-center [perspective:1200px]">
             <MobileCards />
           </div>
        </div>
      </div>

      {/* 
        ========================================================
        DESKTOP IMMERSIVE LAYOUT
        ========================================================
      */}
      <div className="hidden xl:flex absolute inset-0 w-full h-screen overflow-hidden bg-black items-center justify-center">
        
        {/* Background Ambient Lights */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Center Title */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-[9px] mb-1.5 block">The Engine</span>
            <h1 className="text-4xl 2xl:text-5xl font-black tracking-tighter text-white drop-shadow-2xl">
              Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">creators</span> scale.
            </h1>
        </div>

        {/* Central 3D Scene - Full width so arms aren't cut, origin bottom so legs stay visible */}
        <div className="absolute inset-0 z-0 w-full flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="w-full h-[120%] lg:h-[110%] 2xl:h-full lg:scale-95 2xl:scale-100 pointer-events-auto relative lg:mt-24 2xl:mt-0 origin-bottom">
            <SplineErrorBoundary fallback={
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-zinc-950">
                <div className="w-24 h-24 rounded-full bg-orange-500/20 flex items-center justify-center mb-6">
                   <div className="w-12 h-12 rounded-full bg-orange-500 animate-pulse" />
                </div>
                <p className="text-white text-2xl font-bold tracking-tight">Interactive Engine</p>
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

        {/* Floating Cards Wrapper - Moved inwards, compacted paddings */}
        <div className="absolute inset-0 z-20 pointer-events-none [perspective:2000px] max-w-[1400px] mx-auto">
          
          {/* Top Left: Explorer */}
          <div className="absolute top-[14vh] left-[4vw] 2xl:left-[6vw] pointer-events-auto transition-all duration-300 hover:z-50 hover:scale-[1.05] z-10 origin-top-left scale-90 2xl:scale-100">
             <TiltCard>
              <div className="flex justify-between items-start mb-3">
                 <h3 className="text-lg font-bold flex items-center gap-2">Explorer</h3>
                 <span className="text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-white/20 text-white/60 bg-white/5">Current</span>
              </div>
              <div className="text-3xl font-black mb-1">€0<span className="text-xs text-zinc-400 font-normal"> forever</span></div>
              <p className="text-zinc-500 text-[10px] mb-3">60-75 / mo</p>
              
              <div className="bg-amber-500/10 text-amber-400 font-medium text-[10px] px-2.5 py-1.5 rounded-lg mb-3 border border-amber-500/20">
                Velocine watermark applies.
              </div>

              <div className="text-[11px] font-bold mb-3 text-zinc-300">
                1 variant <span className="text-zinc-600 mx-2">|</span> max 15s
              </div>

              <ul className="space-y-2 text-[11px] flex-1 text-zinc-400 font-medium">
                <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 60-75 AI credits / month</li>
                <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 1 variant per project</li>
                <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 15-20s output length</li>
              </ul>
              <div className="mt-4">
                <Link href="/login">
                  <Button className="w-full h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs backdrop-blur-md">Your plan</Button>
                </Link>
              </div>
             </TiltCard>
          </div>

          {/* Bottom Left: Starter */}
          <div className="absolute bottom-[8vh] left-[12vw] 2xl:left-[16vw] pointer-events-auto transition-all duration-300 hover:z-50 hover:scale-[1.05] z-10 origin-bottom-left scale-90 2xl:scale-100">
            <TiltCard>
              <div className="mb-3">
                 <h3 className="text-lg font-bold flex items-center gap-2">Starter</h3>
              </div>
              <div className="text-3xl font-black mb-1">€24<span className="text-xs text-zinc-400 font-normal"> /mo</span></div>
              <p className="text-zinc-500 text-[10px] mb-3">150 / mo</p>

              <div className="text-[11px] font-bold mb-3 text-zinc-300">
                2 variants <span className="text-zinc-600 mx-2">|</span> max 60s
              </div>

              <ul className="space-y-2 text-[11px] flex-1 text-zinc-400 font-medium pb-3 border-b border-white/10 mb-3">
                <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 150 AI credits / month</li>
                <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 1-2 variants per project</li>
                <li className="flex gap-2 items-start"><span className="text-white">✓</span> No watermark</li>
              </ul>
              <div className="mt-2">
                <Link href="/login">
                  <Button className="w-full h-9 rounded-xl bg-white text-black hover:bg-zinc-200 text-xs font-bold">Upgrade ↗</Button>
                </Link>
              </div>
            </TiltCard>
          </div>

          {/* Top Right: Creator (Popular) */}
          <div className="absolute top-[12vh] right-[10vw] 2xl:right-[14vw] pointer-events-auto transition-all duration-300 hover:z-50 hover:scale-[1.05] z-20 origin-top-right scale-90 2xl:scale-100">
            <TiltCard popular>
              <div className="flex flex-col items-start gap-1.5 mb-2">
                <div className="bg-white/20 text-white backdrop-blur-md border border-white/40 px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest shadow-xl uppercase">
                  Most Popular
                </div>
                <h3 className="text-xl font-bold flex items-center gap-2 text-white">Creator</h3>
              </div>
              <div className="text-4xl font-black mb-1 flex items-baseline gap-1">€59<span className="text-xs text-white/70 font-bold"> /mo</span></div>
              <p className="text-white/80 text-[10px] mb-3 font-medium">400 / mo</p>
              
              <div className="text-[11px] font-bold mb-3 text-white bg-white/10 py-1.5 px-2.5 rounded-lg border border-white/20 inline-block">
                3 variants <span className="text-white/30 mx-2">|</span> max 3 min
              </div>

              <ul className="space-y-2 text-[11px] flex-1 text-white/95 font-bold pb-3 border-b border-white/20 mb-3">
                <li className="flex gap-2 items-start"><span className="text-white drop-shadow-md">✓</span> 400 AI credits / month</li>
                <li className="flex gap-2 items-start"><span className="text-white drop-shadow-md">✓</span> Up to 3 min output length</li>
                <li className="flex gap-2 items-start"><span className="text-white drop-shadow-md">✓</span> No watermark</li>
                <li className="flex gap-2 items-start"><span className="text-white drop-shadow-md">✓</span> 4K Ultra HD export</li>
              </ul>
              <div className="mt-2">
                <Link href="/login">
                  <Button className="w-full h-9 bg-white hover:bg-zinc-100 text-orange-600 font-extrabold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.4)] border-0 text-xs text-center flex items-center justify-center">
                    Get Creator ↗
                  </Button>
                </Link>
              </div>
            </TiltCard>
          </div>

          {/* Bottom Right: Pro */}
          <div className="absolute bottom-[6vh] right-[4vw] 2xl:right-[8vw] pointer-events-auto transition-all duration-300 hover:z-50 hover:scale-[1.05] z-10 origin-bottom-right scale-90 2xl:scale-100">
            <TiltCard>
              <div className="flex flex-col items-start gap-1.5 mb-3">
                 <div className="bg-zinc-800 border border-white/20 text-zinc-300 px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest uppercase shadow-sm">
                  Power users
                </div>
                 <h3 className="text-lg font-bold flex items-center gap-2">Pro</h3>
              </div>
              <div className="text-3xl font-black mb-1">€149<span className="text-xs text-zinc-500 font-normal"> /mo</span></div>
              <p className="text-zinc-400 text-[10px] mb-3">1300 / mo</p>
              
              <div className="text-[11px] font-bold mb-3 text-zinc-300">
                5 variants <span className="text-zinc-600 mx-2">|</span> max Unlimited
              </div>

              <ul className="space-y-2 text-[11px] flex-1 text-zinc-400 font-medium pb-3 border-b border-white/10 mb-3">
                <li className="flex gap-2 items-start"><span className="text-purple-400 font-bold">✓</span> 1300 AI credits / month</li>
                <li className="flex gap-2 items-start"><span className="text-purple-400 font-bold">✓</span> Unlimited output length</li>
                <li className="flex gap-2 items-start"><span className="text-purple-400 font-bold">✓</span> API access & webhooks</li>
              </ul>
              <div className="mt-2">
                <Link href="/login">
                  <Button className="w-full h-9 bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white font-bold rounded-xl transition-all text-xs">Upgrade ↗</Button>
                </Link>
              </div>
            </TiltCard>
          </div>

        </div>

        {/* Interaction Prompt Bottom Center */}
        <div className="absolute bottom-[6vh] left-1/2 -translate-x-1/2 z-30 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-2 text-[11px] tracking-wider uppercase font-bold text-zinc-200 pointer-events-none fade-out shadow-2xl scale-90 2xl:scale-100">
           <MousePointer2 className="w-3 h-3 text-orange-400 animate-bounce" /> Click & Drag to inspect
        </div>

      </div>

    </div>
  );
}

// Mobile specific layout abstraction with COMPACT SIZING
function MobileCards() {
  return (
    <>
      <TiltCard>
        <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2">Explorer</h3>
            </div>
            <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-zinc-200 text-zinc-600 bg-zinc-50 backdrop-blur-md">Current</span>
        </div>
        <div className="text-3xl font-black mb-1">€0<span className="text-sm text-zinc-400 font-normal"> forever</span></div>
        <p className="text-zinc-500 text-xs mb-3">60-75 / mo</p>
        
        <div className="bg-amber-500/10 text-amber-500 border-amber-500/20 font-medium text-[11px] px-3 py-1.5 rounded-xl mb-3 border">
          Velocine watermark applies.
        </div>

        <div className="text-[11px] font-bold mb-3 text-zinc-300">
          1 variant <span className="text-zinc-600 mx-2">|</span> max 15s
        </div>

        <ul className="space-y-2 text-[11px] flex-1 text-zinc-400 font-medium mb-3">
          <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 60-75 AI credits / month</li>
          <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 1 variant per project</li>
          <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 15-20s output max</li>
        </ul>
        <Link href="/login" className="mt-auto block">
          <Button className="w-full h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold shadow-sm text-xs">Your current plan</Button>
        </Link>
      </TiltCard>

      <TiltCard>
        <div className="mb-3">
            <h3 className="text-lg font-bold flex items-center gap-2">Starter</h3>
        </div>
        <div className="text-3xl font-black mb-1">€24<span className="text-sm text-zinc-400 font-normal"> /mo</span></div>
        <p className="text-zinc-500 text-xs mb-3">150 / mo</p>

        <div className="text-[11px] font-bold mb-3 text-zinc-300">
          2 variants <span className="text-zinc-600 mx-2">|</span> max 60s
        </div>

        <ul className="space-y-2 text-[11px] flex-1 text-zinc-400 font-medium mb-3">
          <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 150 AI credits / month</li>
          <li className="flex gap-2 items-start"><span className="text-orange-500">✓</span> 1-2 variants per project</li>
          <li className="flex gap-2 items-start"><span className="text-white">✓</span> No watermark</li>
        </ul>
        <Link href="/login" className="mt-auto block">
          <Button className="w-full h-10 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold shadow-sm text-xs">Upgrade to Starter ↗</Button>
        </Link>
      </TiltCard>

      <TiltCard popular>
        <div className="flex flex-col items-start gap-1.5 mb-2">
          <div className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-2 py-0.5 rounded-full text-[9px] font-black tracking-widest shadow-xl uppercase">
            Most Popular
          </div>
          <h3 className="text-xl font-bold flex items-center gap-2">Creator</h3>
        </div>
        <div className="text-4xl font-black mb-1 flex items-baseline gap-1">€59<span className="text-sm text-white/70 font-bold"> /mo</span></div>
        <p className="text-white/80 text-xs mb-3 font-medium">400 / mo</p>
        
        <div className="text-[11px] font-bold mb-3 text-white bg-white/10 py-1.5 px-3 rounded-lg inline-block text-center border border-white/20">
          3 variants <span className="text-white/30 mx-2">|</span> max 3 min
        </div>

        <ul className="space-y-2 text-[11px] flex-1 text-white/95 font-bold mb-3">
          <li className="flex gap-2 items-start"><span className="text-white">✓</span> 400 AI credits / month</li>
          <li className="flex gap-2 items-start"><span className="text-white">✓</span> 3 variants per project</li>
          <li className="flex gap-2 items-start"><span className="text-white">✓</span> Up to 3 min output</li>
          <li className="flex gap-2 items-start"><span className="text-white">✓</span> 4K Ultra HD export</li>
          <li className="flex gap-2 items-start"><span className="text-white">✓</span> Brand kit included</li>
        </ul>
        <Link href="/login" className="mt-auto block">
          <Button className="w-full h-10 bg-white hover:bg-zinc-100 text-orange-600 font-extrabold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all text-xs border-0">
            Get Creator ↗
          </Button>
        </Link>
      </TiltCard>

      <TiltCard>
        <div className="flex flex-col items-start gap-1.5 mb-3">
            <div className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-2 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm">
            Power users
          </div>
            <h3 className="text-lg font-bold flex items-center gap-2">Pro</h3>
        </div>
        <div className="text-3xl font-black mb-1">€149<span className="text-sm text-zinc-500 font-normal"> /mo</span></div>
        <p className="text-zinc-400 text-xs mb-3">1300 / mo</p>

        <div className="text-[11px] font-bold mb-3 text-zinc-300">
          5 variants <span className="text-zinc-700 mx-2">|</span> max Unlimited
        </div>

        <ul className="space-y-2 text-[11px] flex-1 text-zinc-400 font-medium mb-3">
          <li className="flex gap-2 items-start"><span className="text-purple-400 font-bold">✓</span> 1300 AI credits / month</li>
          <li className="flex gap-2 items-start"><span className="text-purple-400 font-bold">✓</span> Unlimited output length</li>
          <li className="flex gap-2 items-start"><span className="text-purple-400 font-bold">✓</span> API access & webhooks</li>
        </ul>
        <Link href="/login" className="mt-auto block">
          <Button className="w-full h-10 bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-white font-bold rounded-xl shadow-md transition-all text-xs">Upgrade ↗</Button>
        </Link>
      </TiltCard>
    </>
  )
}
