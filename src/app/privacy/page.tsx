import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Velocine",
  description: "Privacy Policy for Velocine.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-invert prose-orange max-w-none">
          <p className="text-muted-foreground mb-8">Last Updated: [CURRENT DATE]</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to [BUSINESS NAME] ("Velocine", "we", "our", "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2>2. Important Information and Who We Are</h2>
          <p>
            <strong>Controller:</strong><br/>
            [BUSINESS NAME] is the controller and responsible for your personal data.<br/>
            <strong>KVK Number:</strong> [INSERT KVK NUMBER]<br/>
            <strong>Address:</strong> [INSERT BUSINESS ADDRESS]<br/>
            <strong>Email:</strong> [INSERT CONTACT EMAIL]
          </p>

          <h2>3. The Data We Collect About You</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes bank account and payment card details (managed via Stripe).</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2>4. How Your Personal Data is Collected</h2>
          <p>
            We use different methods to collect data from and about you including through direct interactions (e.g., filling in forms or corresponding with us by post, phone, email or otherwise) and automated technologies or interactions (e.g., cookies and server logs).
          </p>

          <h2>5. Video Processing Data</h2>
          <p>
            When you upload videos to Velocine, we process the media to generate clips, hooks, and transcripts. We do not use your source videos to train our fundamental AI models without explicit permission. Videos are processed securely and deleted from immediate processing storage in accordance with your account's retention settings.
          </p>
        </div>
      </div>
    </div>
  );
}
