"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Trigger the text reveal slightly before the very end of the video 
  // to make it feel like the text hits exactly when the video climax happens.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // The video is roughly 6 seconds long. Trigger the smash at 0.5s before the end.
      if (video.duration && video.currentTime >= video.duration - 0.5) {
        if (!showContent) setShowContent(true);
      }
    };
    
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [showContent]);

  return (
    <div className="flex flex-col items-center w-full bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="w-full relative flex flex-col items-center justify-center min-h-[95vh] border-b border-border/40" style={{ perspective: "1200px" }}>
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full bg-black z-0">
          <video 
            ref={videoRef}
            autoPlay 
            muted // Strict browser requirement for autoplay
            playsInline
            onEnded={() => setShowContent(true)}
            className={`w-full h-full object-cover filter saturate-110 contrast-105 transition-all duration-[2000ms] ${showContent ? "brightness-75" : "brightness-100"}`}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Mute Toggle Button */}
        <button 
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-30 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-black/60 transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        
        {/* Ambient Glows that appear with the text */}
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.15),_transparent_70%)] mix-blend-screen z-10 transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`} />
        <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent z-10 transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`} />

        {/* 3D Glassmorphism Reveal */}
        <AnimatePresence>
          {showContent && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 100, rotateX: 30, filter: "blur(15px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{ 
                duration: 1.4, 
                type: "spring", 
                bounce: 0.3,
                damping: 15,
                mass: 1.2
              }}
              className="relative z-20 px-8 py-16 w-full max-w-5xl flex flex-col items-center justify-center text-center mt-[10vh]
                         bg-black/30 backdrop-blur-2xl border border-white/10 rounded-[3rem] 
                         shadow-[0_30px_100px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] leading-tight mb-6">
                Turn long videos into <br className="hidden md:block"/>
                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-br from-[#facc6b] via-[#f97316] to-[#ea580c] drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] mix-blend-normal">
                  viral clips.
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="mt-6 text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto drop-shadow-[0_4px_10px_rgba(0,0,0,1)] leading-relaxed"
              >
                Velocine is your AI co-pilot for editing. Upload once, get hooks, shorts, and ready-to-post clips for every platform without touching a timeline.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12"
              >
                <Link href="https://studio.velocine.app/login">
                  <Button size="lg" className="h-16 px-12 text-xl font-bold bg-gradient-to-r from-[#facc6b] to-[#f97316] hover:opacity-90 text-black border-none shadow-[0_0_40px_rgba(249,115,22,0.5)] hover:shadow-[0_0_60px_rgba(249,115,22,0.8)] rounded-full transition-all hover:scale-105 active:scale-95">
                    Start creating free
                  </Button>
                </Link>
                <Link href="#details">
                  <Button size="lg" variant="outline" className="h-16 px-10 text-lg font-medium rounded-full backdrop-blur-xl bg-white/5 border-white/20 hover:bg-white/15 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95">
                    Scroll for details
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Trust / Proof Strip (gets the ID details for the scroll button) */}
      <section id="details" className="w-full py-16 border-b border-border/40 bg-zinc-950/50">
        <div className="container px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
            Trusted by creators who scale
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
            {/* Real logos will go here later, for now placeholders */}
            <div className="text-lg font-bold">CREATOR CO</div>
            <div className="text-lg font-bold">STUDIO X</div>
            <div className="text-lg font-bold">VIRAL LABS</div>
          </div>
        </div>
      </section>

      {/* Feature / Workflow Highlight */}
      <section className="w-full py-24">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Stop manual editing. Start generating.</h2>
            <p className="text-muted-foreground text-lg">
              Velocine's AI engine breaks down your 30-minute talking head into 15 perfect short-form hooks in seconds.
            </p>
          </div>
          <div className="mx-auto max-w-5xl bg-card border border-border/50 rounded-2xl aspect-video flex items-center justify-center overflow-hidden relative">
             {/* This is where the primary screenshot/demo will go */}
             <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center text-muted-foreground">
                [High-Res Product Screenshot / Demo GIF Placeholder]
             </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Strip */}
      <section className="w-full py-24 bg-card border-t border-border/40">
        <div className="container px-4 text-center max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Ready to scale your output?</h2>
          <p className="text-xl text-muted-foreground">
            Join the creators building their content empires on Velocine.
          </p>
           <Link href="https://studio.velocine.app/login">
            <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              Start your free trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
