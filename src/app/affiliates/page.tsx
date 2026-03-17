import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Partner Program | Velocine",
  description: "Join the Velocine affiliate program and earn recurring revenue.",
};

export default function AffiliatesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20 bg-white">
      
      {/* Hero */}
      <section className="w-full py-20 lg:py-32 bg-white relative overflow-hidden border-b border-zinc-200/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/80 via-white to-white pointer-events-none" />
        <div className="container px-4 text-center max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-semibold mb-4 shadow-sm">
            <TrendingUp className="w-4 h-4" /> Partner Program Live
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
            Grow with <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Velocine</span>
          </h1>
          <p className="text-xl text-zinc-600">
            Earn 30% recurring commission for powerful introductions. If your audience creates video, they need this tool.
          </p>
          <div className="pt-8">
             <Link href="https://studio.velocine.app/login">
               <Button size="lg" className="h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all rounded-full hover:scale-105 active:scale-95">
                 Become a Partner
               </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Mechanics Grid */}
      <section className="w-full py-24 bg-zinc-50 border-b border-zinc-200/50">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">How the program works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm text-center space-y-4">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">1. Share your link</h3>
              <p className="text-zinc-600">Drop your custom affiliate link in your YouTube descriptions, newsletters, or agency networks.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm text-center space-y-4 relative">
               <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-zinc-300 hidden md:block">
                 <ArrowRight className="w-8 h-8" />
               </div>
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">2. 60-Day Cookie</h3>
              <p className="text-zinc-600">When someone clicks your link, you get credit if they upgrade to a paid plan within 60 days.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm text-center space-y-4 relative">
               <div className="absolute top-1/2 -left-6 -translate-y-1/2 text-zinc-300 hidden md:block">
                 <ArrowRight className="w-8 h-8" />
               </div>
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">3. Earn 30% Recurring</h3>
              <p className="text-zinc-600">You continue to earn 30% of their subscription every single month for as long as they stay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Closing */}
      <section className="w-full py-24 bg-white text-center">
        <div className="container px-4 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-zinc-900">Ready to build your revenue stream?</h2>
          <p className="text-lg text-zinc-600 mb-8">Payouts are processed automatically every month via PayPal or Stripe.</p>
          <Link href="https://studio.velocine.app/login">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
