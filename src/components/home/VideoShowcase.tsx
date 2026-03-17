"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export function VideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="w-full py-32 bg-[#09090b] text-white overflow-hidden relative border-t border-white/5">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* Feature 1: The Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Hook Engine</h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
              Drop in your massive Premiere Pro export. Velocine's temporal analysis engine scans the waveform and transcript simultaneously to extract the 15 most retention-heavy hooks.
            </p>
            <ul className="space-y-4">
               <li className="flex items-center gap-3 text-zinc-300">
                 <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold">1</div>
                 Auto-detects high-emotion spikes
               </li>
               <li className="flex items-center gap-3 text-zinc-300">
                 <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold">2</div>
                 Crops active speaker with face-tracking
               </li>
               <li className="flex items-center gap-3 text-zinc-300">
                 <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold">3</div>
                 Applies your custom B-Roll rules
               </li>
            </ul>
          </div>
          <motion.div suppressHydrationWarning style={{ y: y1 }} className="order-1 lg:order-2 w-full aspect-video rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl relative group">
            {/* USER ASSET 2 REQUIRED HERE: Product UI Video */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-zinc-800 to-black">
              <Play className="w-12 h-12 text-orange-500 mb-4 opacity-50 shadow-lg" />
              <p className="text-sm font-bold text-zinc-500 tracking-widest uppercase mb-2">Asset 2 Required</p>
              <p className="text-xs text-zinc-600 max-w-xs">Please provide a hyper-clean screen recording of the Analysis Engine detecting hooks.</p>
            </div>
            {/* Example Video Tag structure ready for the user asset: */}
            {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover"><source src="/videos/engine-ui.mp4" type="video/mp4" /></video> */}
          </motion.div>
        </div>

        {/* Feature 2: High Fidelity Output */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div suppressHydrationWarning style={{ y: y2 }} className="w-full aspect-[4/5] md:aspect-video lg:aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl relative group">
            {/* USER ASSET 3 REQUIRED HERE: Output Examples */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-tr from-zinc-800 to-black">
              <Play className="w-12 h-12 text-orange-500 mb-4 opacity-50 shadow-lg" />
              <p className="text-sm font-bold text-zinc-500 tracking-widest uppercase mb-2">Asset 3 & 4 Required</p>
              <p className="text-xs text-zinc-600 max-w-xs">Please provide a screen recording of the generated Variants list, or a looping reel of the final TikTok output.</p>
            </div>
          </motion.div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Zero-Friction Publishing</h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
              Review your 15 ready-to-post variants in a high-fidelity mobile preview matrix. Approve the winners, tweak the burned-in captions, and export directly to your social scheduler.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
