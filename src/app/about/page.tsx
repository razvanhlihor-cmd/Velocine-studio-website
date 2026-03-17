import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Velocine",
  description: "Learn about the mission and team behind Velocine Studio.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-white relative overflow-hidden border-b border-zinc-200/50">
        <div className="container px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
            Decoupling Time from <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Growth</span>
          </h1>
          <p className="text-xl text-zinc-600">
            We are building an engine that turns your deepest expertise into an endless stream of viral surface area.
          </p>
        </div>
      </section>

      {/* The Mission */}
      <section className="w-full py-24 bg-zinc-50 border-b border-zinc-200/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-zinc-900">The Modern Creator Problem</h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Expertise takes focus. But modern social platforms demand volume. 
                <br/><br/>
                Founders, educators, and creators are spending hours clipping podcasts, adding hook captions, and trying to appease algorithms. This is entirely backwards. You should be spending time originating powerful ideas, not searching a timeline for split points.
                <br/><br/>
                Velocine was built to bridge this gap. You feed it your deep, hour-long intellectual output. It automatically detects the hooks, applies premium brand mechanics, and generates 20 ready-to-publish assets.
              </p>
            </div>
            {/* Asset 6 Slot */}
            <div className="aspect-[4/3] bg-white rounded-2xl border border-zinc-200 shadow-sm flex items-center justify-center p-8 overflow-hidden relative">
               <div className="text-center space-y-4">
                  <div className="text-zinc-400 font-medium">[Founder / Team Photo Placeholder]</div>
                  <div className="text-sm text-zinc-500 max-w-xs mx-auto">This space is reserved for Asset 6. A high-quality photo of the team working or a professional founder headshot.</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-white text-center">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">Join the movement.</h2>
          <Link href="https://studio.velocine.app/login">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all rounded-full hover:scale-105 active:scale-95">
              Start Creating
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
