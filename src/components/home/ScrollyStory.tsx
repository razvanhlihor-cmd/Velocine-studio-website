"use client";

import { motion } from "framer-motion";

export function ScrollyStory() {
  return (
    <section className="w-full bg-white py-32 md:py-48 flex flex-col items-center relative overflow-hidden">
        {/* Abstract glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container max-w-5xl px-4 md:px-6 relative z-10 flex flex-col gap-32 md:gap-48">
            
            {/* Story 1 */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8 }}
               className="md:w-1/2 md:pr-16 md:self-start text-center md:text-right"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
                    You spend 3 hours recording a masterclass.
                </h2>
                <p className="mt-6 text-xl md:text-2xl text-zinc-500 font-medium">
                    The ideas are brilliant. The execution is flawless.
                </p>
            </motion.div>

            {/* Story 2 */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="md:w-1/2 md:pl-16 md:self-end text-center md:text-left"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-tight">
                    Then you spend 5 hours cutting it for TikTok.
                </h2>
                <p className="mt-6 text-xl md:text-2xl text-zinc-500 font-medium">
                    Hunting for hooks. Adding captions. Re-framing faces.
                </p>
            </motion.div>

            {/* Story 3 */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1 }}
               className="pt-16 pb-16 w-full text-center bg-white relative z-20"
            >
                <h2 className="text-5xl md:text-7xl lg:text-[7rem] leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-orange-600 pb-4">
                    What if it took 4 seconds?
                </h2>
                <p className="mt-8 text-2xl md:text-3xl text-zinc-600 font-medium max-w-3xl mx-auto">
                    Velocine's AI Engine does the heavy lifting while you focus on the next big idea.
                </p>
            </motion.div>

        </div>
    </section>
  );
}
