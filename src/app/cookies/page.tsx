import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Velocine Studio",
  description: "Learn how Velocine uses cookies to improve your experience.",
};

export default function CookiePolicyPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
          Cookie Policy
        </h1>
        <div className="prose prose-invert prose-orange max-w-none">
          <p className="text-muted-foreground mb-8">Last Updated: [CURRENT DATE]</p>

          <p className="text-lg leading-relaxed mb-6">
            This Cookie Policy explains how [BUSINESS NAME] ("Company," "we," "us," and "our") uses cookies and similar technologies to recognize you when you visit our website at velocine.ai ("Website"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">1. What are cookies?</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-6">
            Cookies set by the website owner (in this case, [BUSINESS NAME]) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">2. Why do we use cookies?</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4 text-white">3. How can I control cookies?</h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-6">
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>

          <div className="p-6 bg-zinc-900 rounded-xl border border-white/10 mt-12 space-y-4">
             <h3 className="text-xl font-bold text-white">Contact Us</h3>
             <p className="text-zinc-400">If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:[INSERT EMAIL]" className="text-orange-400 hover:underline">[INSERT EMAIL]</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
