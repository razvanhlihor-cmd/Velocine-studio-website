"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

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
    <section className="relative w-full h-[calc(100svh-64px)] min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-zinc-950/60 z-10" />
        <video 
          ref={videoRef}
          autoPlay 
          muted={isMuted}
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter text-white leading-[0.9]"
        >
          The timeline <br />
          <span className="text-orange-500">is dead.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 md:mt-8 text-xl md:text-3xl text-zinc-300 font-medium max-w-2xl"
        >
          Stop cutting. Start generating.
        </motion.p>
      </div>

      {/* Mute Toggle */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-12 right-6 md:right-12 z-30 p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white transition-all shadow-xl"
        aria-label="Toggle mute"
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>

      {/* Bottom Gradient Fade to White UI */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-50 to-transparent z-10" />
    </section>
  );
}
