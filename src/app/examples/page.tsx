import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Clock, Zap } from "lucide-react";

export const metadata = {
  title: "Examples | Velocine",
  description: "See how Velocine turns long-form content into viral short-form clips.",
};

const examples = [
  {
    id: 1,
    title: "Podcast to TikTok Splash",
    category: "Podcasts",
    description: "Transforming a 2-hour conversational podcast into punchy, high-retention TikTok hooks.",
    metrics: "+340% Engagement",
    icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 2,
    title: "Gaming Stream Highlights",
    category: "Gaming",
    description: "Automatically detecting high-action moments and funny reactions from Twitch VODs.",
    metrics: "12 Clips in 5mins",
    icon: <Zap className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 3,
    title: "Educational Masterclass",
    category: "Education",
    description: "Condensing deep technical tutorials into easy-to-digest YouTube Shorts.",
    metrics: "90% Time Saved",
    icon: <Clock className="w-5 h-5 text-orange-500" />,
  },
  {
    id: 4,
    title: "Real Estate Walkthroughs",
    category: "Real Estate",
    description: "Extracting the best room shots and stitching them to trending audio.",
    metrics: "Ready to Post",
    icon: <Play className="w-5 h-5 text-orange-500" />,
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {examples.map((example) => (
              <div 
                key={example.id} 
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 hover:bg-black/60 transition-colors backdrop-blur-md"
              >
                {/* Video Placeholder */}
                <div className="relative w-full aspect-video bg-zinc-900 rounded-xl mb-8 overflow-hidden flex items-center justify-center border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm border border-orange-500/30">
                    <Play className="w-6 h-6 text-orange-500 ml-1" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-orange-400 tracking-wider uppercase">
                      {example.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {example.icon}
                      <span className="text-zinc-300">{example.metrics}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{example.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
