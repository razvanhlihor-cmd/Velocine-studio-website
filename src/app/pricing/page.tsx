"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PricingPage() {
  // Shared hover animation for all cards
  const cardHover = {
    rest: { scale: 1, y: 0, boxShadow: "0px 10px 30px rgba(0,0,0,0.02)" },
    hover: { 
      scale: 1.02, 
      y: -12, 
      boxShadow: "0px 30px 60px rgba(0,0,0,0.12)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Pricing Hero */}
      <section className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20 md:py-32 bg-white">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.15),transparent)] pointer-events-none" />
        
        <div className="container px-4 text-center max-w-4xl space-y-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900"
          >
            Clear pricing for creators who scale.
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
      <section className="w-full pb-32">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-center">
            
            {/* Explorer Plan */}
            <motion.div 
              initial="rest" whileHover="hover" animate="rest" variants={cardHover}
              className="p-8 bg-white border border-zinc-200 rounded-[2rem] flex flex-col relative z-0 h-full"
            >
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-xl font-bold flex items-center gap-2 text-zinc-900">Explorer</h3>
                 </div>
                 <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-zinc-200 text-zinc-600 bg-zinc-50">Current</span>
              </div>
              <div className="text-4xl font-bold mb-1 text-zinc-900">€0<span className="text-lg text-zinc-500 font-normal"> forever</span></div>
              <p className="text-zinc-500 text-sm mb-6">60-75 / mo</p>
              
              <div className="bg-amber-50 text-amber-700 font-medium text-xs px-4 py-3 rounded-xl mb-6">
                Velocine watermark on all exports.
              </div>

              <div className="text-sm font-bold mb-6 text-zinc-800">
                1 variant <span className="text-zinc-300 mx-2">|</span> max 15-20s
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-600 font-medium">
                <li className="flex gap-3 items-start"><span className="text-green-500">✓</span> 60-75 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-green-500">✓</span> 1 variant per project</li>
                <li className="flex gap-3 items-start"><span className="text-green-500">✓</span> 15-20s max output length</li>
                <li className="flex gap-3 items-start"><span className="text-green-500">✓</span> Velocine watermark</li>
                <li className="flex gap-3 items-start"><span className="text-green-500">✓</span> 720p export</li>
                <li className="flex gap-3 items-start"><span className="text-green-500">✓</span> Community support</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button variant="outline" className="w-full h-14 rounded-xl bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-semibold shadow-sm text-base">Your current plan</Button>
              </Link>
            </motion.div>

            {/* Starter Plan */}
            <motion.div 
              initial="rest" whileHover="hover" animate="rest" variants={cardHover}
              className="p-8 bg-zinc-50 border border-zinc-200 rounded-[2rem] flex flex-col relative z-0 h-full"
            >
              <div className="mb-6">
                 <h3 className="text-xl font-bold flex items-center gap-2 text-zinc-900">Starter</h3>
              </div>
              <div className="text-4xl font-bold mb-1 text-zinc-900">€24<span className="text-lg text-zinc-500 font-normal"> /mo</span></div>
              <p className="text-zinc-500 text-sm mb-6">150 / mo</p>
              
              <div className="mb-[68px]" /> {/* Spacer matching watermark box height */}

              <div className="text-sm font-bold mb-6 text-zinc-800">
                2 variants <span className="text-zinc-300 mx-2">|</span> max 60s
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-600 font-medium">
                <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> 150 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> 1-2 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> Up to 60s output</li>
                <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> No watermark</li>
                <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> 1080p export</li>
                <li className="flex gap-3 items-start"><span className="text-blue-500">✓</span> Email support</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button variant="outline" className="w-full h-14 rounded-xl bg-white border-zinc-200 hover:bg-zinc-50 text-zinc-900 font-semibold shadow-sm text-base">Upgrade to Starter ↗</Button>
              </Link>
            </motion.div>

            {/* Creator Plan (Most Popular) */}
            <motion.div 
              initial={{ scale: 1.05, y: 0, boxShadow: "0px 20px 40px rgba(249,115,22,0.25)" }} 
              whileHover={{ scale: 1.08, y: -10, boxShadow: "0px 30px 60px rgba(249,115,22,0.4)" }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 bg-gradient-to-br from-orange-500 via-rose-500 to-orange-600 border-none rounded-[2rem] flex flex-col relative z-20 text-white shadow-2xl overflow-hidden scale-105"
            >
              {/* Internal glow for extra premium feel */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-white/20 blur-[50px] rounded-full pointer-events-none" />

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-orange-600 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-xl uppercase">
                Most Popular
              </div>
              <div className="mb-6 relative z-10">
                 <h3 className="text-xl font-bold flex items-center gap-2">Creator</h3>
              </div>
              <div className="text-4xl font-bold mb-1 relative z-10">€59<span className="text-lg text-white/70 font-normal"> /mo</span></div>
              <p className="text-white/70 text-sm mb-6 relative z-10">400 / mo</p>
              
              <div className="mb-[68px]" /> {/* Spacer matching watermark box height */}

              <div className="text-sm font-bold mb-6 text-white relative z-10">
                3 variants <span className="text-white/30 mx-2">|</span> max 3 min
              </div>

              <ul className="space-y-4 text-sm flex-1 text-white/90 font-medium relative z-10">
                <li className="flex gap-3 items-start"><span className="text-white font-bold">✓</span> 400 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-white font-bold">✓</span> 3 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-white font-bold">✓</span> Up to 3 min output</li>
                <li className="flex gap-3 items-start"><span className="text-white font-bold">✓</span> No watermark</li>
                <li className="flex gap-3 items-start"><span className="text-white font-bold">✓</span> 4K export</li>
                <li className="flex gap-3 items-start"><span className="text-white font-bold">✓</span> Brand kit included</li>
                <li className="flex gap-3 items-start"><span className="text-white font-bold">✓</span> Deep analytics</li>
                <li className="flex gap-3 items-start"><span className="text-white font-bold">✓</span> Priority support</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8 relative z-10">
                <Button className="w-full h-14 bg-white hover:bg-zinc-100 text-orange-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-base border-0">Upgrade to Creator ↗</Button>
              </Link>
            </motion.div>

            {/* Pro Plan */}
            <motion.div 
              initial="rest" whileHover="hover" animate="rest" variants={cardHover}
              className="p-8 bg-zinc-950 border border-zinc-800 rounded-[2rem] flex flex-col relative z-0 h-full text-white shadow-xl"
            >
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Power users
              </div>
              <div className="mb-6">
                 <h3 className="text-xl font-bold flex items-center gap-2">Pro</h3>
              </div>
              <div className="text-4xl font-bold mb-1">€149<span className="text-lg text-zinc-500 font-normal"> /mo</span></div>
              <p className="text-zinc-500 text-sm mb-6">1300 / mo</p>
              
              <div className="mb-[68px]" /> {/* Spacer matching watermark box height */}

              <div className="text-sm font-bold mb-6 text-zinc-300">
                5 variants <span className="text-zinc-700 mx-2">|</span> max Unlimited
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-400 font-medium">
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> 1300 AI credits / month</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> 5 variants per project</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> Unlimited output length</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> No watermark</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> 4K export</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> Brand kit + motion styles</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> Advanced automation</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> API access</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> Custom templates</li>
                <li className="flex gap-3 items-start"><span className="text-purple-500 font-bold">✓</span> SLA support</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button className="w-full h-14 bg-zinc-800 hover:bg-zinc-700 border-0 text-white font-bold rounded-xl shadow-md transition-all text-base">Upgrade to Pro ↗</Button>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
