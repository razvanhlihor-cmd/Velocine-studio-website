import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact & Enterprise | Velocine",
  description: "Get in touch with the Velocine team or request enterprise API access.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20 bg-zinc-50">
      
      {/* Header */}
      <section className="w-full py-16 md:py-24 bg-white border-b border-zinc-200/50">
        <div className="container px-4 text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
            Talk to Sales
          </h1>
          <p className="text-xl text-zinc-600">
            Automate your post-production at scale. Let's discuss custom models, API access, and enterprise SLAs.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="w-full py-16 md:py-24 flex-1">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Form */}
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
              <h2 className="text-2xl font-bold text-zinc-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">First Name</label>
                    <input type="text" className="w-full h-12 bg-zinc-50 border border-zinc-200 rounded-lg px-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all" placeholder="Jane" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-zinc-700">Last Name</label>
                    <input type="text" className="w-full h-12 bg-zinc-50 border border-zinc-200 rounded-lg px-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Work Email</label>
                  <input type="email" className="w-full h-12 bg-zinc-50 border border-zinc-200 rounded-lg px-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all" placeholder="jane@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Company Size</label>
                  <select className="w-full h-12 bg-zinc-50 border border-zinc-200 rounded-lg px-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all appearance-none cursor-pointer">
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201+ employees</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">How can we help?</label>
                  <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all resize-none" placeholder="Tell us about your volume and workflow needs..."></textarea>
                </div>
                <Button type="button" className="w-full h-12 text-lg font-bold bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg transition-all">
                  Submit Request
                </Button>
                <p className="text-xs text-zinc-500 text-center">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            </div>

            {/* Right: Social Proof & Details */}
            <div className="space-y-12 lg:pt-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900">Why Enterprise?</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <span className="text-orange-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Custom Brand Mapping</h4>
                      <p className="text-zinc-600 text-sm mt-1">We train our motion engine on your exact Premiere Pro timelines so outputs match your in-house style 1:1.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <span className="text-orange-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Dedicated Compute</h4>
                      <p className="text-zinc-600 text-sm mt-1">Bypass the public queue. Your renders process instantly on private GPU clusters.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <span className="text-orange-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">API Access</h4>
                      <p className="text-zinc-600 text-sm mt-1">Integrate our cropping and captioning engine directly into your CMS or app.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Asset 5 Box */}
              <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
                <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-4 text-center">Platform Impact</div>
                <div className="aspect-video bg-zinc-50 rounded-lg border border-zinc-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-4">
                     <span className="text-zinc-400 font-medium">[Viral Output Analytics Placeholder]</span>
                     <p className="text-xs text-zinc-500 mt-2">Space for Asset 5 (e.g., millions of views graph)</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}
