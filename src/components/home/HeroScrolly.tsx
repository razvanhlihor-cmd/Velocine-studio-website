"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

export function HeroScrolly() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100svh-64px)] bg-zinc-950 flex flex-col md:block overflow-hidden">
      
      {/* 
        Video Container:
        Mobile: Stacked on top, 9:16 aspect ratio (tall), relative positioning.
        Desktop: Full bleed background, absolute positioning.
      */}
      <div className="relative w-full aspect-[9/16] max-h-[50vh] md:max-h-none md:aspect-auto md:absolute md:inset-0 md:h-full z-0 overflow-hidden shrink-0">
        
        {/* Dark overlay for text contrast (Only needed on desktop where text overlaps) */}
        <div className="hidden md:block absolute inset-0 bg-zinc-950/60 z-10 pointer-events-none" />
        
        {/* Soft bottom fade for mobile to blend into the text section below */}
        <div className="md:hidden absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

        <video 
          ref={videoRef}
          autoPlay 
          muted={isMuted}
          loop 
          playsInline
          className="w-full h-full object-cover md:object-center object-top"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Mute Toggle (Positioned within video container so it makes sense in both layouts) */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-30 p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all shadow-xl"
          aria-label="Toggle mute"
        >
          {isMuted ? <VolumeX className="w-4 h-4 md:w-6 md:h-6" /> : <Volume2 className="w-4 h-4 md:w-6 md:h-6" />}
        </button>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-start md:justify-center text-center px-4 pt-4 pb-12 md:py-0 md:h-[calc(100svh-64px)] md:px-8 bg-zinc-950 md:bg-transparent">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter text-white leading-[0.9] -mt-4 md:mt-0"
        >
          The timeline <br />
          <span className="text-orange-500">is dead.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 md:mt-8 text-xl md:text-3xl text-zinc-300 font-medium max-w-2xl px-4 md:px-0"
        >
          Stop cutting. Start generating.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, y: [0, 10, 0] }}
           transition={{ delay: 1, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
           className="mt-12 md:absolute md:bottom-12 flex flex-col items-center text-amber-500 pointer-events-none"
        >
           <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-80">Scroll</span>
           <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
      </div>

      {/* Bottom Gradient Fade to White UI (Desktop only, mobile flows differently) */}
      <div className="hidden md:block absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-50 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
