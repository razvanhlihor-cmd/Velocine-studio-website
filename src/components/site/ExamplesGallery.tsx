"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, TrendingUp, Clock, Zap, X } from "lucide-react";
import Image from "next/image";

const examples = [
  {
    id: 1,
    title: "Podcast to TikTok Splash",
    category: "Podcasts",
    description: "Transforming a 2-hour conversational podcast into punchy, high-retention TikTok hooks.",
    metrics: "+340% Engagement",
    icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
    image: "/showcase/img1.png"
  },
  {
    id: 2,
    title: "Gaming Stream Highlights",
    category: "Gaming",
    description: "Automatically detecting high-action moments and funny reactions from Twitch VODs.",
    metrics: "12 Clips in 5mins",
    icon: <Zap className="w-5 h-5 text-orange-500" />,
    image: "/showcase/img2.png"
  },
  {
    id: 3,
    title: "Educational Masterclass",
    category: "Education",
    description: "Condensing deep technical tutorials into easy-to-digest YouTube Shorts.",
    metrics: "90% Time Saved",
    icon: <Clock className="w-5 h-5 text-orange-500" />,
    image: "/showcase/img3.png"
  },
  {
    id: 4,
    title: "Real Estate Walkthroughs",
    category: "Real Estate",
    description: "Extracting the best room shots and stitching them to trending audio.",
    metrics: "Ready to Post",
    icon: <Play className="w-5 h-5 text-orange-500" />,
    image: "/showcase/img4.png"
  },
];

export function ExamplesGallery() {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {examples.map((example) => (
          <div 
            key={example.id} 
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-6 md:p-8 hover:bg-black/60 transition-colors backdrop-blur-md"
          >
            {/* Video Placeholder / Image */}
            <div 
              className="relative w-full aspect-video bg-zinc-900 rounded-xl mb-6 md:mb-8 overflow-hidden flex items-center justify-center border border-white/5 cursor-pointer"
              onClick={() => setZoomedImg(example.image)}
            >
              <Image 
                src={example.image} 
                alt={example.title} 
                fill 
                className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border border-white/10 flex items-center gap-2 shadow-xl">
                    <Play className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                    Click to zoom
                 </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs md:text-sm font-semibold text-orange-400 tracking-wider uppercase">
                  {example.category}
                </span>
                <div className="flex items-center gap-2 text-xs md:text-sm font-medium bg-white/5 px-2 py-1 md:px-3 rounded-full border border-white/10">
                  {example.icon}
                  <span className="text-zinc-300">{example.metrics}</span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{example.title}</h3>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                {example.description}
              </p>
            </div>
          </div>
        ))}
      </div>

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
              <button 
                className="absolute top-2 right-2 md:top-4 md:right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/10 backdrop-blur-sm transition-colors"
                onClick={() => setZoomedImg(null)}
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <Image 
                src={zoomedImg} 
                alt="Velocine Studio Zoomed Example" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
