"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";

const HeroScrolly = dynamic(() => import("@/components/home/HeroScrolly").then(mod => mod.HeroScrolly), { ssr: false });
const ScrollyStory = dynamic(() => import("@/components/home/ScrollyStory").then(mod => mod.ScrollyStory), { ssr: false });
const HeroBentoGrid = dynamic(() => import("@/components/home/hero-bento-grid").then(mod => mod.HeroBentoGrid), { ssr: false });
const VideoShowcase = dynamic(() => import("@/components/home/VideoShowcase").then(mod => mod.VideoShowcase), { ssr: false });
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-zinc-50 overflow-hidden relative selection:bg-orange-500/30">
      
      {/* 1. The 3D Cinematic Hero */}
      <HeroScrolly />

      {/* 2. The Storytelling Narrative (Problem & Solution) */}
      <ScrollyStory />

      {/* 2.5 The Bento Grid (Phase 10) */}
      <section className="w-full bg-zinc-950 py-24 md:py-32 relative border-y border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <HeroBentoGrid />
      </section>

      {/* 3. The Video-Driven Product Modules */}
      <VideoShowcase />

      {/* 4. The Final Call to Action Strip (Apple Style) */}
      <section className="w-full py-40 bg-white text-center border-t border-zinc-200">
        <div className="container px-4 max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-zinc-900 flex justify-center">
            <TextReveal text="Scale your empire." delay={0.2} />
          </h2>
          <p className="text-2xl text-zinc-500 font-medium">
            Join the creators and founders who are decoupling time from output.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Magnetic intensity={0.15}>
              <Link href="https://studio.velocine.app/login">
                <Button size="lg" className="h-16 px-12 text-xl font-bold bg-zinc-900 hover:bg-zinc-800 text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95">
                  Start your engine
                </Button>
              </Link>
            </Magnetic>
            <Magnetic intensity={0.1}>
              <Link href="/pricing">
                <Button variant="ghost" size="lg" className="h-16 px-8 text-xl font-bold text-zinc-600 hover:text-zinc-900 rounded-full group cursor-pointer">
                  View Pricing <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>

    </div>
  );
}
