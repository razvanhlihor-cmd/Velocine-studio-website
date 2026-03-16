import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Velocine",
  description: "Terms of Service for Velocine.",
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <div className="prose prose-invert prose-orange max-w-none">
           <p className="text-muted-foreground mb-8">Last Updated: [CURRENT DATE]</p>

          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and [BUSINESS NAME] ("Company", "we", "us", or "our"), concerning your access to and use of the Velocine website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
          </p>

          <h2>2. Company Information</h2>
          <p>
            <strong>Company Name:</strong> [BUSINESS NAME]<br/>
            <strong>KVK Number:</strong> [INSERT KVK NUMBER]<br/>
            <strong>Registered Address:</strong> [INSERT BUSINESS ADDRESS]<br/>
            <strong>Contact:</strong> [INSERT CONTACT EMAIL]
          </p>

          <h2>3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.
          </p>

          <h2>4. Content and Video Uploads</h2>
          <p>
            You retain full ownership of any video content you upload to Velocine. By uploading, you grant us a temporary, non-exclusive license to process, store, and modify your content strictly for the purpose of providing the Velocine service (e.g., generating clips, transcriptions, and edits). You represent that you have the right to upload and process the videos you provide.
          </p>

           <h2>5. Subscriptions and Payments</h2>
          <p>
            Access to certain features of Velocine requires a paid subscription. All billing is handled securely via [PAYMENT PROVIDER, e.g., Stripe]. Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing cycle.
          </p>

          <h2>6. Modifications and Interruptions</h2>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site.
          </p>
        </div>
      </div>
    </div>
  );
}
