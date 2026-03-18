import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Magnetic } from "@/components/ui/magnetic";
import { TextReveal } from "@/components/ui/text-reveal";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Product Hero */}
      <section className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20 border-b border-zinc-200/50 bg-white">
        <div className="container px-4 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 flex justify-center">
            <TextReveal text="The Engine Behind Viral Video" delay={0.1} />
          </h1>
          <p className="text-xl text-zinc-600">
            Velocine doesn't just crop videos. It understands context, identifies hooks, and generates variants designed to capture attention.
          </p>
        </div>
      </section>

      {/* Core Pillars - Spotlight Bento Parity */}
      <section className="w-full py-20 bg-zinc-950 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SpotlightCard className="p-8 flex flex-col justify-end space-y-4 shadow-lg min-h-[280px]">
              <h3 className="text-2xl font-bold text-white">1. Deep Analysis</h3>
              <p className="text-zinc-400 font-medium">
                Our AI scans hours of footage in minutes, finding the highest-retention moments and sorting them by potential impact.
              </p>
            </SpotlightCard>
            <SpotlightCard className="p-8 flex flex-col justify-end space-y-4 shadow-lg min-h-[280px]">
              <h3 className="text-2xl font-bold text-white">2. Smart Generation</h3>
              <p className="text-zinc-400 font-medium">
                Automatically generate dozens of variants with different hooks, captions, and b-roll to test what works best.
              </p>
            </SpotlightCard>
            <SpotlightCard className="p-8 flex flex-col justify-end space-y-4 shadow-lg min-h-[280px]">
              <h3 className="text-2xl font-bold text-white">3. Seamless Export</h3>
              <p className="text-zinc-400 font-medium">
                Push directly to your social scheduler or download high-fidelity 4K renders instantly. No timeline required.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Detailed Platform Feature */}
      <section className="w-full py-24 bg-white">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
               <h2 className="text-3xl font-bold text-zinc-900">Built for scale. Designed for speed.</h2>
               <p className="text-lg text-zinc-600">
                 Stop spending hours jumping between Premiere Pro, Descript, and CapCut. Velocine brings the entire short-form pipeline into one premium, unified studio.
               </p>
               <ul className="space-y-3 text-zinc-600">
                 <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">✓</span> Multi-speaker detection</li>
                 <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">✓</span> Dynamic caption styles</li>
                 <li className="flex items-center gap-3"><span className="text-orange-500 font-bold">✓</span> Automated b-roll insertion</li>
               </ul>
             </div>
             <div className="aspect-square bg-zinc-50 rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-400 font-medium overflow-hidden relative">
               [Product UI Breakdown Image Placeholder - Asset 3/4]
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="w-full py-24 bg-zinc-50 border-t border-zinc-200/50">
        <div className="container px-4 text-center max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Experience the workflow</h2>
          <Magnetic intensity={0.15}>
            <Link href="https://studio.velocine.app/login">
              <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all rounded-full hover:scale-105 active:scale-95">
                Try Velocine Studio
              </Button>
            </Link>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
