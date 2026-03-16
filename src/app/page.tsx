"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to Pause/Play video based on visibility (Mobile Battery Saver)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Ignore play errors (e.g. if user hasn't interacted yet)
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 } // Pause if less than 10% visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Fallback: forcefully show content after 3s in case mobile autoPlay is entirely blocked
  useEffect(() => {
    const fallbackTimer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(fallbackTimer);
  }, []);
  // Trigger the text reveal slightly before the very end of the video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // The video is roughly 6 seconds long. Trigger the smash at 0.5s before the end.
      if (video.duration && video.currentTime >= video.duration - 0.5) {
        if (!showContent) {
          setShowContent(true);
          // Auto-scroll on desktop to the newly revealed content
          if (window.innerWidth >= 768 && contentRef.current) {
            setTimeout(() => {
              contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
          }
        }
      }
    };
    
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [showContent]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="flex flex-col items-center w-full bg-background overflow-hidden relative">
      {/* Cinematic Theater Hero (Video Only on Desktop) */}
      <section className="w-full relative flex flex-col min-h-auto md:min-h-[100svh] bg-black">
        {/* Background Video (Sticky on mobile to stack, absolute fill on desktop) */}
        <div className="relative w-full aspect-video md:absolute md:inset-0 md:h-[100svh] bg-black z-0 overflow-hidden shrink-0">
          <video 
            ref={videoRef}
            autoPlay 
            muted // Strict browser requirement for autoplay
            loop
            playsInline
            className={`w-full h-full object-cover filter saturate-110 contrast-105 transition-all duration-[2000ms] ${showContent ? "brightness-100 md:brightness-75" : "brightness-100"}`}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* Mute Toggle Button pinned directly to the video */}
          <button 
            onClick={toggleMute}
            className="absolute bottom-3 right-3 md:bottom-8 md:right-8 z-50 p-2 md:p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-xl hover:scale-110 active:scale-95 flex items-center justify-center transition-all cursor-pointer group pointer-events-auto"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="w-5 h-5 md:w-6 md:h-6 group-hover:text-orange-400 transition-colors" /> : <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />}
          </button>
        </div>
      </section>

      {/* The Pitch (Text content that appears below the video on Desktop, stacked on Mobile) */}
      <div 
        ref={contentRef}
        className="w-full relative flex flex-col items-center justify-start md:justify-center min-h-[50vh] md:min-h-[85vh] py-8 md:py-24 border-b border-border/40 bg-zinc-950 px-4 z-20"
      >

        {/* 3D Glassmorphism Reveal */}
        <AnimatePresence>
          {showContent && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              transition={{ 
                duration: 1.2, 
                type: "spring", 
                bounce: 0.3,
                damping: 15,
                mass: 1.2
              }}
              className="relative z-20 px-4 py-6 md:px-8 md:py-16 w-[96%] md:w-full max-w-5xl flex flex-col items-center justify-center text-center my-auto md:my-0 md:mt-[10vh]
                         bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-[3rem] shrink-0
                         shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.2)]"
            >
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] leading-tight mb-2 md:mb-6">
              Turn long videos into <br className="hidden md:block"/>
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-br from-[#facc6b] via-[#f97316] to-[#ea580c] drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] mix-blend-normal">
                viral clips.
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="mt-2 md:mt-6 text-sm sm:text-base md:text-2xl font-medium text-zinc-100 max-w-3xl mx-auto drop-shadow-[0_4px_10px_rgba(0,0,0,1)] leading-snug md:leading-relaxed"
            >
              Velocine is your AI co-pilot for editing. Upload once, get hooks, shorts, and ready-to-post clips for every platform without touching a timeline.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 md:pt-12 w-full"
            >
              <Link href="https://studio.velocine.app/login" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-12 md:h-16 px-6 md:px-12 text-base md:text-lg font-bold bg-gradient-to-r from-[#facc6b] to-[#f97316] hover:opacity-90 text-black border-none shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] rounded-full transition-all hover:scale-105 active:scale-95">
                  Start creating free
                </Button>
              </Link>
              <Link href="#details" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 md:h-16 px-6 md:px-10 text-base md:text-lg font-medium rounded-full backdrop-blur-xl bg-white/5 border-white/20 hover:bg-white/15 text-white shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95">
                  Scroll for details
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
      </div>

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
      <section className="w-full py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Stop manual editing. <br className="md:hidden" />Start generating.</h2>
            <p className="text-zinc-300 text-lg md:text-xl max-w-xl mx-auto">
              Velocine's AI engine breaks down your 30-minute talking head into 15 perfect short-form hooks in seconds.
            </p>
          </div>
          <div 
            className="mx-auto max-w-5xl bg-black border border-border/50 rounded-2xl aspect-video flex items-center justify-center overflow-hidden relative shadow-2xl cursor-pointer group"
            onClick={() => setZoomedImg("/showcase/img4.png")}
          >
              <Image 
                src="/showcase/img4.png" 
                alt="Velocine Studio AI Video Creation Platform" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/10">
                    Click to zoom
                 </div>
              </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Strip */}
      <section className="w-full py-16 md:py-24 bg-card border-t border-border/40">
        <div className="container px-4 text-center max-w-3xl space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to scale your output?</h2>
          <p className="text-lg md:text-2xl text-zinc-300">
            Join the creators building their content empires on Velocine.
          </p>
           <Link href="https://studio.velocine.app/login">
            <Button size="lg" className="h-14 md:h-16 px-8 md:px-12 mt-4 md:mt-2 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(249,115,22,0.3)] rounded-full hover:scale-105 active:scale-95 transition-transform">
              Start your free trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Full-screen Lightbox Modal */}
      <AnimatePresence>
        {zoomedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImg(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-2 md:p-12 cursor-zoom-out"
          >
            <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-7xl aspect-[9/16] md:aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-2 right-2 md:top-4 md:right-4 z-50 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 backdrop-blur-sm"
                onClick={() => setZoomedImg(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              <Image 
                src={zoomedImg} 
                alt="Velocine Studio Zoomed" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
