import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Velocine Studio",
  description: "Get in touch with the Velocine support and sales team.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
      
      <div className="container relative z-10 px-4 md:px-6 max-w-6xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Get in touch</h1>
          <p className="text-xl text-muted-foreground">
            Whether you have a question about features, pricing, or just want to say hi, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Cards */}
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
             <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-xl flex flex-col gap-4 group hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                   <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Email Support</h3>
                <p className="text-muted-foreground">For general inquiries and technical help.</p>
                <a href="mailto:[INSERT EMAIL]" className="text-orange-400 font-medium hover:underline mt-2">[INSERT EMAIL]</a>
             </div>
             
             <div className="p-8 rounded-3xl bg-card border border-border/50 shadow-xl flex flex-col gap-4 group hover:border-orange-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                   <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Headquarters</h3>
                <p className="text-muted-foreground">Velocine Inc.<br/>[INSERT BUSINESS ADDRESS]<br/>[INSERT KVK NUMBER]</p>
             </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="col-span-1 lg:col-span-2 p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-md border border-white/5 shadow-2xl">
             <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">First Name</label>
                      <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400">Last Name</label>
                      <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50" placeholder="Doe" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-zinc-400">Email Address</label>
                   <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-medium text-zinc-400">Message</label>
                   <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 resize-none" placeholder="How can we help you?" />
                </div>
                <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold mt-4">
                   Send Message
                </Button>
             </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
