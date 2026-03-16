import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero */}
      <section className="w-full relative overflow-hidden flex flex-col items-center justify-center py-20 border-b border-border/40">
        <div className="container px-4 text-center max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            How Velocine Works
          </h1>
          <p className="text-xl text-muted-foreground">
            A radical departure from the traditional timeline. See how we turn a 60-minute podcast into 20 viral clips.
          </p>
        </div>
      </section>

      {/* Steps Rails */}
      <section className="w-full py-24">
        <div className="container px-4 max-w-5xl">
          <div className="space-y-24">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="text-primary font-bold text-lg">Step 1</div>
                <h3 className="text-3xl font-bold">Upload Source Material</h3>
                <p className="text-lg text-muted-foreground">
                  Drop your raw podcast, webinar, or talking head video directly into Studio. No pre-cutting required. We handle files up to 10GB.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-card border border-border/50 rounded-2xl flex items-center justify-center text-muted-foreground">
                [Upload UI Screenshot]
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="text-primary font-bold text-lg">Step 2</div>
                <h3 className="text-3xl font-bold">AI Deep Analysis</h3>
                <p className="text-lg text-muted-foreground">
                  Our system transcribes the audio, detects speakers, and identifies the high-retention "hooks" and educational points that perform best on TikTok and Reels.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-card border border-border/50 rounded-2xl flex items-center justify-center text-muted-foreground">
                [Analysis Engine Screenshot]
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="text-primary font-bold text-lg">Step 3</div>
                <h3 className="text-3xl font-bold">Generate Variants</h3>
                <p className="text-lg text-muted-foreground">
                  Velocine automatically cuts the clips, applies your Brand Kit captions, reframes the ratio, and inserts appropriate b-roll where the speaker is less energetic.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-card border border-border/50 rounded-2xl flex items-center justify-center text-muted-foreground">
                [Variants Grid Screenshot]
              </div>
            </div>

             {/* Step 4 */}
             <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="w-full md:w-1/2 space-y-6">
                <div className="text-primary font-bold text-lg">Step 4</div>
                <h3 className="text-3xl font-bold">Review & Publish</h3>
                <p className="text-lg text-muted-foreground">
                  Make micro-adjustments in our text-based editor, hit export, and download your month of content in crystal-clear 4K.
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-card border border-border/50 rounded-2xl flex items-center justify-center text-muted-foreground">
                [Export UI Screenshot]
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="w-full py-24 bg-card border-t border-border/40 text-center space-y-8">
        <h2 className="text-3xl font-bold">Skip the timeline.</h2>
        <Link href="https://studio.velocine.app/login">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Try the Workflow</Button>
        </Link>
      </section>

    </div>
  );
}
