import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Product Hero */}
      <section className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20 border-b border-border/40">
        <div className="container px-4 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Engine Behind Viral Video
          </h1>
          <p className="text-xl text-muted-foreground">
            Velocine doesn't just crop videos. It understands context, identifies hooks, and generates variants designed to capture attention.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="w-full py-20 bg-card/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card border border-border/50 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">1. Deep Analysis</h3>
              <p className="text-muted-foreground">
                Our AI scans hours of footage in minutes, finding the highest-retention moments and sorting them by potential impact.
              </p>
            </div>
            <div className="p-6 bg-card border border-border/50 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">2. Smart Generation</h3>
              <p className="text-muted-foreground">
                Automatically generate dozens of variants with different hooks, captions, and b-roll to test what works best.
              </p>
            </div>
            <div className="p-6 bg-card border border-border/50 rounded-xl space-y-4">
              <h3 className="text-xl font-semibold">3. Seamless Export</h3>
              <p className="text-muted-foreground">
                Push directly to your social scheduler or download high-fidelity 4K renders instantly. No timeline required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Platform Feature */}
      <section className="w-full py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
               <h2 className="text-3xl font-bold">Built for scale. Designed for speed.</h2>
               <p className="text-lg text-muted-foreground">
                 Stop spending hours jumping between Premiere Pro, Descript, and CapCut. Velocine brings the entire short-form pipeline into one premium, unified studio.
               </p>
               <ul className="space-y-3 text-muted-foreground">
                 <li className="flex items-center gap-3">✓ Multi-speaker detection</li>
                 <li className="flex items-center gap-3">✓ Dynamic caption styles</li>
                 <li className="flex items-center gap-3">✓ Automated b-roll insertion</li>
               </ul>
             </div>
             <div className="aspect-square bg-secondary/50 rounded-2xl border border-border/50 flex items-center justify-center text-muted-foreground">
               [Product UI Breakdown Image]
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="w-full py-24 bg-card border-t border-border/40">
        <div className="container px-4 text-center max-w-3xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Experience the workflow</h2>
          <Link href="https://studio.velocine.app/login">
            <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
              Try Velocine Studio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
