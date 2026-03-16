import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Velocine Studio",
  description: "Learn about the team behind Velocine, the premium AI co-pilot for fast, high-quality video editing.",
  openGraph: {
    title: "About Us | Velocine Studio",
    description: "Learn about the team behind Velocine, the premium AI co-pilot for video editing.",
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/10 via-background to-background pointer-events-none" />
      
      <div className="container relative z-10 px-4 md:px-6 max-w-5xl mx-auto space-y-24">
        
        {/* Hero Section */}
        <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            We are building the <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">future</span> of editing.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Content creation shouldn't mean being chained to a timeline. We started Velocine to decouple a creator's time from their growth.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              We believe the best creators spend their time ideating and recording, not cutting out silences and finding b-roll. 
              Our mission is to build the ultimate AI co-pilot that acts as a world-class editor in your pocket. 
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Whether you are a podcaster, a streamer, or a daily vlogger, Velocine understands pacing, retention, and 
              storytelling to deliver clips that actually perform on modern platforms.
            </p>
          </div>
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 shadow-2xl flex items-center justify-center p-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.15),_transparent_70%)] mix-blend-screen" />
             <div className="text-center space-y-4 relative z-10">
                <div className="w-24 h-24 bg-orange-500/20 rounded-full mx-auto flex items-center justify-center border border-orange-500/30">
                   <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Velocine Inc.</h3>
                <p className="text-zinc-400 font-mono text-sm">[INSERT BUSINESS ADDRESS]<br/>[INSERT KVK NUMBER]</p>
             </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-12 text-center space-y-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold">Join the movement</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to stop editing and start scaling? Join thousands of creators who have already made the switch to AI-powered workflows.
          </p>
          <Link href="https://studio.velocine.app/login">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 text-white shadow-[0_0_30px_rgba(249,115,22,0.4)]">
              Get Started for Free
            </Button>
          </Link>
        </section>

      </div>
    </div>
  );
}
