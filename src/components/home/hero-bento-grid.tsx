"use client";

import React from "react";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";

export function HeroBentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto p-4 lg:p-8">
      {/* Large Featured Block */}
      <SpotlightCard className="md:col-span-2 md:row-span-2 min-h-[400px] lg:min-h-[500px] p-8 lg:p-12 flex flex-col justify-end">
        <div className="absolute top-0 right-0 w-full h-[50%] bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tighter"
        >
          The Velocity Engine
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 font-medium text-lg lg:text-xl max-w-md"
        >
          Generate a month's worth of viral video assets in less than three minutes. Fully decoupled from linear time.
        </motion.p>
      </SpotlightCard>

      {/* Standard Blocks */}
      <SpotlightCard className="min-h-[200px] lg:min-h-[240px] p-6 lg:p-8 flex flex-col justify-end group">
         <motion.h3 
           initial={{ opacity: 0, x: -10 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="text-2xl font-bold text-white mb-2"
         >
           Neural Hooks
         </motion.h3>
         <p className="text-sm lg:text-base text-zinc-400 font-medium">Auto-generated, data-driven scripts designed to hack retention curves.</p>
      </SpotlightCard>

      <SpotlightCard className="min-h-[200px] lg:min-h-[240px] p-6 lg:p-8 flex flex-col justify-end group">
         <motion.h3 
           initial={{ opacity: 0, x: -10 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="text-2xl font-bold text-white mb-2"
         >
           Smart Framing
         </motion.h3>
         <p className="text-sm lg:text-base text-zinc-400 font-medium">Vision AI that perfectly centers faces and action into vertical 9:16 aspect ratios automatically.</p>
      </SpotlightCard>
      
      <SpotlightCard className="md:col-span-3 min-h-[160px] p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between text-left">
         <div className="max-w-3xl">
           <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight">Deploy to scale.</h3>
           <p className="text-zinc-400 font-medium">Export seamlessly in pristine 4K directly to your content pipeline without massive render bottlenecks.</p>
         </div>
      </SpotlightCard>

    </div>
  );
}
