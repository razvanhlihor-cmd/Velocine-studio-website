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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="p-8 bg-card border border-border/50 rounded-2xl space-y-8 flex flex-col">
              <div>
                <h3 className="text-xl font-bold">Starter</h3>
                <p className="text-muted-foreground mt-2">For independent creators</p>
              </div>
              <div className="text-4xl font-bold">$19<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
              <ul className="space-y-4 text-sm flex-1">
                <li>✓ 20 AI Analysis Credits</li>
                <li>✓ 4K Exports</li>
                <li>✓ Basic Captions</li>
              </ul>
              <Link href="https://studio.velocine.app/login">
                <Button variant="outline" className="w-full h-12">Start Free</Button>
              </Link>
            </div>

            {/* Pro Plan (Recommended) */}
            <div className="p-8 bg-card border-2 border-primary rounded-2xl relative space-y-8 flex flex-col shadow-2xl shadow-primary/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                RECOMMENDED
              </div>
              <div>
                <h3 className="text-xl font-bold">Pro</h3>
                <p className="text-muted-foreground mt-2">For serious workflows</p>
              </div>
              <div className="text-4xl font-bold">$49<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
              <ul className="space-y-4 text-sm flex-1">
                <li>✓ 100 AI Analysis Credits</li>
                <li>✓ Custom Brand Kits</li>
                <li>✓ Smart B-roll Engine</li>
                <li>✓ Priority Queue</li>
              </ul>
              <Link href="https://studio.velocine.app/login">
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground">Upgrade to Pro</Button>
              </Link>
            </div>

            {/* Business Plan */}
            <div className="p-8 bg-card border border-border/50 rounded-2xl space-y-8 flex flex-col">
              <div>
                <h3 className="text-xl font-bold">Studio</h3>
                <p className="text-muted-foreground mt-2">For teams and agencies</p>
              </div>
              <div className="text-4xl font-bold">$149<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
              <ul className="space-y-4 text-sm flex-1">
                <li>✓ Unlimited Analysis</li>
                <li>✓ Team Collaboration</li>
                <li>✓ API Access</li>
                <li>✓ Dedicated Manager</li>
              </ul>
              <Link href="/contact">
                <Button variant="outline" className="w-full h-12">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
