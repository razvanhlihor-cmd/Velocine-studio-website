export const metadata = {
  title: "Terms of Service | Velocine",
  description: "Velocine Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen pt-24 pb-32 bg-background">
      <div className="container px-4 md:px-6 max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="space-y-6 text-zinc-300 leading-relaxed">
          <p>
            Welcome to Velocine. By accessing our website and using our AI video creation services, you agree
            to be bound by these Terms of Service. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>
            By creating an account and uploading content to Velocine, you accept and agree to these Terms.
            If you do not agree to these Terms, you may not use our service.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. User Content</h2>
          <p>
            You retain all rights and ownership to the videos you upload. We process your content solely to
            provide you with the requested short-form clips. You agree not to upload any content that violates
            copyright laws, privacy rights, or contains illegal or strictly prohibited materials.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Prohibited Activities</h2>
          <p>
            You may not access or use Velocine for any purpose other than that for which we make the platform
            available. You agree not to systematically retrieve data or circumvent our security features, including
            bypassing rate limits or sharing access credentials.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Limitation of Liability</h2>
          <p>
            In no event will Velocine or our directors, employees, or agents be liable to you or any third
            party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages
            arising from your use of the site or our AI rendering API.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the
            Service, please contact us at:
            <br />
            <strong>support@velocine.app</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
