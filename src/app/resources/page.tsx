import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Resources & Blog | Velocine",
  description: "Learn how to master short-form content with Velocine.",
};

const blogs = [
  {
    title: "How to find the perfect hook in a 3-hour podcast",
    category: "Workflow",
    date: "Mar 12, 2026",
    readingTime: "5 min read",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80"
  },
  {
    title: "The B-Roll Revolution: Why face-to-camera is dying",
    category: "Strategy",
    date: "Mar 10, 2026",
    readingTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
  },
  {
    title: "TikTok Analytics 101: What the algorithm actually rewards",
    category: "Growth",
    date: "Mar 05, 2026",
    readingTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
  },
  {
    title: "Case Study: Scaling a tech channel from 0 to 1M views in 30 days",
    category: "Case Study",
    date: "Mar 01, 2026",
    readingTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    title: "Customizing your Brand Kit for maximum retention",
    category: "Product Guide",
    date: "Feb 28, 2026",
    readingTime: "4 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
  },
  {
    title: "The end of the timeline editor",
    category: "Industry Opinion",
    date: "Feb 20, 2026",
    readingTime: "7 min read",
    image: "https://images.unsplash.com/photo-1574717024453-354056fadfd0?w=800&q=80"
  }
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-20 bg-white">
      {/* Header */}
      <section className="w-full py-20 border-b border-zinc-200/50 bg-zinc-50 relative overflow-hidden">
        <div className="container px-4 text-center max-w-2xl mx-auto space-y-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
            Learn and Scale
          </h1>
          <p className="text-xl text-zinc-600">
            Insights, strategies, and deep-dives into the mechanics of viral video creation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-24">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <Link href="#" key={i} className="group flex flex-col space-y-4">
                <div className="aspect-[4/3] w-full bg-zinc-100 rounded-2xl border border-zinc-200 overflow-hidden relative shadow-sm">
                   {/* Unsplash Placeholder using native img for demo stability without next/image domains config */}
                   <img src={blog.image} alt={blog.title} className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm border border-zinc-200">
                     {blog.category}
                   </div>
                </div>
                <div className="space-y-2 px-1">
                  <div className="flex items-center gap-3 text-sm text-zinc-500 font-medium">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                    <span>{blog.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 leading-snug group-hover:text-orange-600 transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-24 bg-zinc-50 border-t border-zinc-200/50 text-center">
         <div className="container px-4 max-w-2xl mx-auto space-y-8">
           <h2 className="text-3xl font-bold text-zinc-900">Get the best growth strategies in your inbox.</h2>
           <p className="text-lg text-zinc-600">Join 10,000+ creators reading the Velocine digest.</p>
           <form className="flex w-full max-w-md mx-auto items-center gap-2">
             <input type="email" placeholder="Your work email" className="h-12 flex-1 rounded-lg border border-zinc-300 px-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-500/50" />
             <Button type="button" className="h-12 px-6 font-bold bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg">Subscribe</Button>
           </form>
         </div>
      </section>

    </div>
  );
}
