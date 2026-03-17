"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import Spline to prevent SSR hydration errors
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  )
});

/**
 * Insane 3D Tilt Card Component for Pricing
 */
function TiltCard({ children, popular = false, dark = false }: { children: React.ReactNode, popular?: boolean, dark?: boolean }) {
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
      className={`relative h-full transition-shadow duration-300 w-full rounded-[2rem] 
        ${popular ? "z-20 scale-100 md:scale-105" : "z-10"} 
        ${dark ? "shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : "shadow-[0_20px_40px_rgba(0,0,0,0.05)]"}
      `}
    >
      {/* Animated Glowing Aura Behind Popular Card */}
      {popular && (
        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 rounded-[2.5rem] blur-xl opacity-60 animate-[pulse_3s_ease-in-out_infinite]" />
      )}
      
      {/* Core Card Background */}
      <div 
        className={`relative h-full w-full rounded-[2rem] p-8 flex flex-col border overflow-hidden
          ${popular 
            ? "bg-gradient-to-b from-orange-400 via-rose-500 to-purple-600 border-none text-white" 
            : dark 
              ? "bg-zinc-950 border-zinc-800 text-white"
              : "bg-white border-zinc-200 text-zinc-900"}
        `}
      >
        {/* Subtle internal shine for dark/popular cards */}
        {(popular || dark) && (
           <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        )}

        {/* Floating Content Layer (Pops out via translateZ) */}
        <div 
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
          className="flex flex-col h-full relative z-10"
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * 21st.dev Premium 3D Spline Scene
 */
function SplineSceneHero() {
  return (
    <div className="w-full mt-32 max-w-7xl mx-auto px-4">
      <div className="w-full h-[600px] bg-black relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row">
        
        {/* Simulated Spotlight */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none z-0" />
        
        {/* Left content */}
        <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-black/40 backdrop-blur-sm">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-xs mb-4">The Engine</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
            Interactive 3D <br/>Intelligence.
          </h2>
          <p className="mt-6 text-lg text-neutral-400 max-w-lg leading-relaxed font-medium">
            Bring your campaigns to life. Velocine's AI doesn't just cut video—it understands spatial context, isolating objects into full 3D environments that capture attention.
          </p>
          <div className="mt-8 flex gap-4">
             <Button className="bg-white text-black hover:bg-zinc-200 font-bold rounded-full px-6">Watch Demo</Button>
          </div>
        </div>

        {/* Right content - The Spline Scene */}
        <div className="flex-1 relative min-h-[400px] bg-black/50">
          <Suspense fallback={<div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading 3D Engine...</div>}>
            <Spline 
              scene="https://prod.spline.design/kZDDjO6HUC96JUM2/scene.splinecode"
              className="w-full h-full object-cover"
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-hidden bg-zinc-50 pb-32">
      {/* Pricing Hero */}
      <section className="w-full relative overflow-hidden flex flex-col items-center justify-center py-24 md:py-32">
        <div className="container px-4 text-center max-w-4xl space-y-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900"
          >
            Clear pricing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">creators</span> who scale.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-zinc-500 font-medium"
          >
            No hidden fees. Just pure computing power turned into ready-to-post variants.
          </motion.p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="w-full relative z-20">
        <div className="container px-4 perspective-1000">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-[1400px] mx-auto items-center">
            
            {/* Explorer Plan */}
            <TiltCard>
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-xl font-bold flex items-center gap-2">Explorer</h3>
                 </div>
                 <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-zinc-200 text-zinc-600 bg-zinc-50">Current</span>
              </div>
              <div className="text-4xl font-black mb-1">€0<span className="text-lg text-zinc-400 font-normal"> forever</span></div>
              <p className="text-zinc-500 text-sm mb-6">60-75 / mo</p>
              
              <div className="bg-amber-50 text-amber-700 font-medium text-xs px-4 py-3 rounded-xl mb-6 border border-amber-200/50">
                Velocine watermark on all exports.
              </div>

              <div className="text-sm font-bold mb-6 text-zinc-800">
                1 variant <span className="text-zinc-300 mx-2">|</span> max 15-20s
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-600 font-medium">
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> 60-75 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> 1 variant per project</li>
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> 15-20s max output length</li>
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> Velocine watermark</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button className="w-full h-14 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold shadow-sm text-base">Your current plan</Button>
              </Link>
            </TiltCard>

            {/* Starter Plan */}
            <TiltCard>
              <div className="mb-6">
                 <h3 className="text-xl font-bold flex items-center gap-2">Starter</h3>
              </div>
              <div className="text-4xl font-black mb-1">€24<span className="text-lg text-zinc-400 font-normal"> /mo</span></div>
              <p className="text-zinc-500 text-sm mb-6">150 / mo</p>
              
              <div className="mb-[68px]" /> {/* Spacer */}

              <div className="text-sm font-bold mb-6 text-zinc-800">
                2 variants <span className="text-zinc-300 mx-2">|</span> max 60s
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-600 font-medium">
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> 150 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> 1-2 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> Up to 60s output</li>
                <li className="flex gap-3 items-start"><span className="text-orange-500">✓</span> No watermark</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button className="w-full h-14 rounded-xl bg-zinc-900 border-zinc-200 hover:bg-zinc-800 text-white font-bold shadow-sm text-base">Upgrade to Starter ↗</Button>
              </Link>
            </TiltCard>

            {/* Creator Plan (Most Popular) */}
            <TiltCard popular>
              <div className="flex flex-col items-start gap-3 mb-4">
                <div className="bg-white text-orange-600 px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest shadow-xl uppercase ring-4 ring-orange-500/20">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold flex items-center gap-2">Creator</h3>
              </div>
              <div className="text-5xl font-black mb-1 flex items-baseline gap-1">€59<span className="text-lg text-white/70 font-bold"> /mo</span></div>
              <p className="text-white/80 text-sm mb-6 font-medium">400 / mo</p>
              
              <div className="mb-[68px]" /> {/* Spacer */}

              <div className="text-sm font-bold mb-6 text-white bg-white/10 py-2 px-4 rounded-lg inline-block text-center border border-white/20 hover:bg-white/20 transition-colors">
                3 variants <span className="text-white/30 mx-2">|</span> max 3 min
              </div>

              <ul className="space-y-4 text-sm flex-1 text-white/95 font-bold">
                <li className="flex gap-3 items-start"><span className="text-white">✓</span> 400 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-white">✓</span> 3 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-white">✓</span> Up to 3 min output</li>
                <li className="flex gap-3 items-start"><span className="text-white">✓</span> No watermark</li>
                <li className="flex gap-3 items-start"><span className="text-white">✓</span> 4K Ultra HD export</li>
                <li className="flex gap-3 items-start"><span className="text-white">✓</span> Brand kit included</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button className="w-full h-14 bg-white hover:bg-zinc-100 text-orange-600 font-extrabold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all text-base border-0 hover:scale-[1.02]">
                  Upgrade to Creator ↗
                </Button>
              </Link>
            </TiltCard>

            {/* Pro Plan */}
            <TiltCard dark>
              <div className="flex flex-col items-start gap-3 mb-5">
                 <div className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm">
                  Power users
                </div>
                 <h3 className="text-xl font-bold flex items-center gap-2">Pro</h3>
              </div>
              <div className="text-4xl font-black mb-1">€149<span className="text-lg text-zinc-500 font-normal"> /mo</span></div>
              <p className="text-zinc-400 text-sm mb-6">1300 / mo</p>
              
              <div className="mb-[68px]" /> {/* Spacer */}

              <div className="text-sm font-bold mb-6 text-zinc-300">
                5 variants <span className="text-zinc-700 mx-2">|</span> max Unlimited
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-400 font-medium">
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> 1300 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> 5 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> Unlimited output length</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> No watermark</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> API access & webhooks</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button className="w-full h-14 bg-zinc-800 hover:bg-zinc-700 border-0 text-white font-bold rounded-xl shadow-md transition-all text-base">Upgrade to Pro ↗</Button>
              </Link>
            </TiltCard>

          </div>
        </div>
      </section>

      {/* Embedded Spline Component below Pricing */}
      <SplineSceneHero />

    </div>
  );
}
