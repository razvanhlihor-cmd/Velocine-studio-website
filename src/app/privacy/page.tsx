export const metadata = {
  title: "Privacy Policy | Velocine",
  description: "Velocine Privacy Policy.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-32 bg-background">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            At Velocine, we take your privacy seriously. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website and use our AI video creation service.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us when you register on the Website,
            express an interest in obtaining information about us or our products, or otherwise contact us.
            This includes account details (name, email) and the video content you upload for processing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Use of Your Content</h2>
          <p>
            The videos you upload to Velocine are used strictly for the purpose of providing our service
            (analyzing, clipping, and rendering). We do not claim ownership of your content, and we do not
            use your personal videos to train our foundational models without explicit consent.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal
            information and your uploaded media. However, please also remember that we cannot guarantee
            that the internet itself is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            <strong>support@velocine.app</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
