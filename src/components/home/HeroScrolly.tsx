"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ChevronDown } from "lucide-react";

export function HeroScrolly() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync React state with the actual video DOM element's muted state robustly
  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      
      // Some browsers aggressively pause video if unmute happens after load. Force play if unmuted.
      if (!newMutedState && videoRef.current.paused) {
        videoRef.current.play().catch(e => console.log("Autoplay blocked on unmute", e));
      }
    }
  };

  // Ensure initial mute state is strictly enforced at DOM level to avoid React prop race conditions
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Pause video when scrolled out of view to save battery and performance
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch(e => console.log("Autoplay prevented:", e));
          } else {
            videoElement.pause();
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% is visible
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  return (
    <section className="relative w-full bg-zinc-950 flex flex-col overflow-hidden">
      
      {/* 
        Video Container:
        Always physically on top of the text now. 
        Mobile: 9:16 aspect ratio so it fills the screen perfectly in portrait without chopping.
        Desktop: 16:9 aspect ratio or fixed max-height to ensure a cinematic widescreen look.
      */}
      <div className="relative w-full aspect-[9/16] md:aspect-[21/9] bg-black shrink-0 overflow-hidden">
        
        {/* Soft bottom fade to blend the video smoothly into the text section below */}
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

        <video 
          ref={videoRef}
          autoPlay 
          muted={isMuted}
          loop 
          playsInline
          className="w-full h-full object-cover object-top md:object-center"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Mute Toggle */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-6 right-6 md:bottom-8 md:right-12 z-20 p-3 md:p-4 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all shadow-xl"
          aria-label="Toggle mute"
        >
          {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6" />}
        </button>
      </div>

      {/* 
        Hero Content Container 
        Explicitly sits below the video in normal document flow. No overlapping absolute positioning.
      */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 pt-12 pb-24 md:py-24 bg-zinc-950">
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
          className="mt-6 md:mt-8 text-xl md:text-3xl text-zinc-300 font-medium max-w-2xl px-4"
        >
          Stop cutting. Start generating.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1, y: [0, 10, 0] }}
           transition={{ delay: 1, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
           className="mt-16 flex flex-col items-center text-amber-500 pointer-events-none"
        >
           <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 opacity-80">Discover</span>
           <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </motion.div>
      </div>

    </section>
  );
}
