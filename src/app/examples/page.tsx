import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Examples | Velocine",
  description: "See how Velocine turns long-form content into viral short-form clips.",
};

import { ExamplesGallery } from "@/components/site/ExamplesGallery";

export default function ExamplesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-background to-background pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            See Velocine in <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">Action</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            From two-hour podcasts to viral 15-second hooks. Explore what our AI can build for you.
          </p>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="w-full py-16 bg-card/30 border-y border-border/40">
        <div className="container px-4 md:px-6">
          <ExamplesGallery />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full py-24 bg-background text-center">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to scale your output?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join the creators who are decoupling their time from their growth.
          </p>
          <Link href="https://studio.velocine.app/login">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] transition-all">
              Try Velocine for Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
