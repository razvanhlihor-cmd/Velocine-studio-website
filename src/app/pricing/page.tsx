import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Pricing Hero */}
      <section className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20">
        <div className="container px-4 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Clear pricing for creators who scale.
          </h1>
          <p className="text-xl text-muted-foreground">
            No hidden fees. Just pure computing power turned into ready-to-post variants.
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="w-full pb-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Explorer Plan */}
            <div className="p-6 md:p-8 bg-black/40 border border-white/10 rounded-2xl flex flex-col backdrop-blur-md">
              <div className="flex justify-between items-start mb-6">
                 <div>
                   <h3 className="text-xl font-bold flex items-center gap-2">Explorer</h3>
                 </div>
                 <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-orange-500/30 text-orange-500 bg-orange-500/10">Current</span>
              </div>
              <div className="text-4xl font-bold mb-1">€0<span className="text-lg text-zinc-500 font-normal"> forever</span></div>
              <p className="text-zinc-400 text-sm mb-6">60-75 / mo</p>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs px-3 py-2 rounded-md mb-6">
                Velocine watermark on all exports.
              </div>

              <div className="text-sm font-medium mb-6 text-zinc-300">
                1 variant <span className="text-zinc-600 mx-2">|</span> max 15-20s
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-400">
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 60-75 AI credits / month</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 1 variant per project</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 15-20s max output length</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Velocine watermark</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 720p export</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Community support</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button variant="outline" className="w-full h-12 bg-transparent border-white/10 hover:bg-white/5 text-zinc-300">Your current plan</Button>
              </Link>
            </div>

            {/* Starter Plan */}
            <div className="p-6 md:p-8 bg-black/40 border border-white/10 rounded-2xl flex flex-col backdrop-blur-md hover:border-white/20 transition-colors">
              <div className="mb-6">
                 <h3 className="text-xl font-bold flex items-center gap-2">Starter</h3>
              </div>
              <div className="text-4xl font-bold mb-1">€24<span className="text-lg text-zinc-500 font-normal"> /mo</span></div>
              <p className="text-zinc-400 text-sm mb-6">150 / mo</p>
              
              <div className="mb-[72px]" /> {/* Spacer matching watermark box height */}

              <div className="text-sm font-medium mb-6 text-zinc-300">
                2 variants <span className="text-zinc-600 mx-2">|</span> max 60s
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-300">
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 150 AI credits / month</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 1-2 variants per project</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Up to 60s output</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> No watermark</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 1080p export</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Email support</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button variant="outline" className="w-full h-12 bg-transparent border-white/10 hover:bg-white/5 text-zinc-300">Upgrade to Starter ↗</Button>
              </Link>
            </div>

            {/* Creator Plan (Most Popular) */}
            <div className="p-6 md:p-8 bg-black border-2 border-[#ff5533] rounded-2xl flex flex-col relative shadow-[0_0_30px_rgba(255,85,51,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff5533] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg">
                Most Popular
              </div>
              <div className="mb-6">
                 <h3 className="text-xl font-bold flex items-center gap-2">Creator</h3>
              </div>
              <div className="text-4xl font-bold mb-1">€59<span className="text-lg text-zinc-500 font-normal"> /mo</span></div>
              <p className="text-zinc-400 text-sm mb-6">400 / mo</p>
              
              <div className="mb-[72px]" /> {/* Spacer matching watermark box height */}

              <div className="text-sm font-medium mb-6 text-zinc-200">
                3 variants <span className="text-zinc-600 mx-2">|</span> max 3 min
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-200">
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 400 AI credits / month</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 3 variants per project</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Up to 3 min output</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> No watermark</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 4K export</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Brand kit included</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Deep analytics</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Priority support</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button className="w-full h-12 bg-[#ff5533] hover:bg-[#ff5533]/90 text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(255,85,51,0.3)]">Upgrade to Creator ↗</Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="p-6 md:p-8 bg-black/40 border border-white/10 rounded-2xl flex flex-col backdrop-blur-md hover:border-white/20 transition-colors relative">
               <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-800 border border-white/10 text-zinc-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-lg">
                Power users
              </div>
              <div className="mb-6">
                 <h3 className="text-xl font-bold flex items-center gap-2">Pro</h3>
              </div>
              <div className="text-4xl font-bold mb-1">€149<span className="text-lg text-zinc-500 font-normal"> /mo</span></div>
              <p className="text-zinc-400 text-sm mb-6">1300 / mo</p>
              
              <div className="mb-[72px]" /> {/* Spacer matching watermark box height */}

              <div className="text-sm font-medium mb-6 text-zinc-300">
                5 variants <span className="text-zinc-600 mx-2">|</span> max Unlimited
              </div>

              <ul className="space-y-4 text-sm flex-1 text-zinc-300">
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 1300 AI credits / month</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 5 variants per project</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Unlimited output length</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> No watermark</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> 4K export</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Brand kit + motion styles</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Advanced automation</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> API access</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> Custom templates</li>
                <li className="flex gap-2 items-start"><span className="text-green-500">✓</span> SLA support</li>
              </ul>
              <Link href="https://studio.velocine.app/login" className="mt-8">
                <Button variant="outline" className="w-full h-12 bg-transparent border-white/10 hover:bg-white/5 text-zinc-300">Upgrade to Pro ↗</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
