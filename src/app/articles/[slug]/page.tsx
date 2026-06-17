import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

// Mock data (in a real app, this would be fetched from a CMS or markdown files)
const ARTICLES = {
  "best-tiktok-hooks-2026": {
    title: "10 Best TikTok Hooks to Use in 2026",
    description: "Stop the scroll with these proven hook structures that increase retention instantly.",
    content: `
      <h2>Why Hooks Are the Most Important Part of Short Form Video</h2>
      <p>The first three seconds of any short form video determine whether a viewer keeps watching or swipes away. On TikTok, Instagram Reels, and YouTube Shorts, the algorithm measures your "swipe-away rate" and rewards content that holds attention. A strong hook is the single most impactful element a short form content agency can optimise for a client.</p>

      <h2>The 10 Best TikTok Hook Frameworks in 2026</h2>
      <ul>
        <li><strong>The Controversial Opinion Hook:</strong> "Unpopular opinion: most short form video agencies are wasting your budget." Controversy triggers emotional engagement immediately.</li>
        <li><strong>The Curiosity Gap Hook:</strong> Start mid-sentence, "…and that's exactly why your retention rate is below 30%." Viewers rewind to catch what they missed.</li>
        <li><strong>The Direct Address Hook:</strong> "If you run a brand account, stop what you're doing." Direct commands create a sense of urgency.</li>
        <li><strong>The Story Promise Hook:</strong> "Here's how we took a client from 0 to 2 million views in 90 days using short form video." Story + specific number = credibility.</li>
        <li><strong>The Pattern Interrupt Hook:</strong> Open with an unexpected visual or sound that breaks the scroll habit before a single word is spoken.</li>
        <li><strong>The Before/After Tease:</strong> Show the end result first, then promise to explain how you got there.</li>
        <li><strong>The Question Hook:</strong> "Why do some short form videos go viral while others get 200 views?" Questions activate curiosity loops.</li>
        <li><strong>The Listicle Hook:</strong> "5 reasons your TikTok strategy is failing (and how to fix each one)." Numbered lists set clear expectations.</li>
        <li><strong>The Authority Hook:</strong> "We've edited over 1,000 short form videos, here's what actually works." Social proof up front builds trust instantly.</li>
        <li><strong>The Fear-of-Missing-Out Hook:</strong> "Every day you're not posting short form video, a competitor is stealing your audience." Urgency drives watch-through rates.</li>
      </ul>

      <h2>How to Test Your Hooks</h2>
      <p>At Seven Cuts Media, our short form video team A/B tests hook variations for every client before rolling out a content calendar. We track watch time at the 3-second, 10-second, and 50% completion marks. The data rarely lies, a 0.5-second visual change in the opening frame can double your retention rate.</p>

      <h2>Putting It All Together</h2>
      <p>The best hook is one that is native to the platform, relevant to your audience, and honest about the value you deliver. Combine a strong hook with high-retention editing and a clear call-to-action, and you have the foundation of a successful short form video strategy. That's exactly what Seven Cuts Media builds for every client.</p>
    `,
    date: "2026-05-18",
    author: "Seven Cuts Team"
  },
  "how-much-does-a-short-form-agency-cost": {
    title: "How Much Does a Short Form Content Agency Cost?",
    description: "A complete breakdown of pricing models, ROI, and what you should expect to pay.",
    content: `
      <h2>Why Brands Hire a Short Form Content Agency</h2>
      <p>Organic short form video is one of the highest-ROI marketing channels available today. TikTok, Instagram Reels, and YouTube Shorts together deliver billions of impressions daily, at zero media spend. But producing consistently high-quality short form video requires creative strategy, professional editing, trend awareness, and platform-specific expertise. That's why brands and creators partner with a short form content agency like Seven Cuts Media.</p>

      <h2>Short Form Content Agency Pricing Models</h2>
      <ul>
        <li><strong>Retainer (most common):</strong> A monthly fee covering a fixed volume of videos, strategy, and distribution. Typical range: $1,500–$8,000/month depending on output and platforms.</li>
        <li><strong>Per-video pricing:</strong> Clients pay per edited video, usually $150–$600 per piece. Good for one-off campaigns or testing an agency before committing to a retainer.</li>
        <li><strong>Performance-based:</strong> Some short form video agencies tie fees to reach or follower growth milestones. Rarer, but increasingly popular for creator partnerships.</li>
        <li><strong>Full-service packages:</strong> Include strategy, scripting, editing, captioning, scheduling, and analytics reporting. These are priced at $3,000–$15,000+/month for enterprise clients.</li>
      </ul>

      <h2>What Affects the Price?</h2>
      <p>Several factors determine what a short form content agency charges. Output volume (how many videos per month), platform count (TikTok only vs. TikTok + Reels + Shorts), creative complexity (user-generated style vs. studio-produced), and whether strategy and analytics are included all move the needle on price.</p>

      <h2>How to Calculate ROI</h2>
      <p>A well-run short form video strategy typically pays for itself through organic reach and lead generation within 90 days. Compare the cost of paid social ads to reach the same audience, short form video almost always wins on a cost-per-view and cost-per-lead basis. Seven Cuts Media clients regularly see 10x organic reach versus their previous paid spend.</p>

      <h2>What Does Seven Cuts Media Charge?</h2>
      <p>Seven Cuts Media offers flexible short form video packages tailored to your brand size and goals. Contact us directly for a custom quote, we'll build a plan around your specific needs, not a one-size-fits-all template.</p>
    `,
    date: "2026-05-10",
    author: "Seven Cuts Team"
  },
  "youtube-shorts-algorithm-explained": {
    title: "The YouTube Shorts Algorithm Explained",
    description: "How YouTube decides which Shorts go viral and how you can optimize your content for the feed.",
    content: `
      <h2>How the YouTube Shorts Algorithm Works</h2>
      <p>YouTube Shorts operates on a fundamentally different algorithm to long-form YouTube content. Where long-form rewards watch time in minutes, Shorts rewards percentage completion and the ratio of "viewed" to "swiped away." Understanding this distinction is critical for any short form video strategy, and it's the first thing we explain to new Seven Cuts Media clients.</p>

      <h2>The Key Metrics YouTube Shorts Measures</h2>
      <ul>
        <li><strong>Average Percentage Viewed (APV):</strong> The single most important metric. YouTube wants to see viewers watching 80–100% of your Short before swiping. This signals content quality.</li>
        <li><strong>Likes, Comments, and Shares:</strong> Engagement signals amplify distribution. A Short that generates comments within the first hour gets pushed to wider audiences.</li>
        <li><strong>Swipe-Away Rate:</strong> If viewers swipe immediately, the algorithm suppresses the video. A strong hook in the first two seconds is non-negotiable.</li>
        <li><strong>Re-watch Rate:</strong> YouTube rewards content people watch more than once. Loopable Shorts, where the end connects naturally back to the beginning, tend to outperform.</li>
        <li><strong>Subscriber Conversion:</strong> Shorts that convert viewers into subscribers signal high-value content and receive sustained algorithmic support.</li>
      </ul>

      <h2>How to Optimise Your Short Form Video for YouTube Shorts</h2>
      <p>The most effective YouTube Shorts are between 30 and 55 seconds long, long enough to deliver value, short enough to hold attention. Front-load your most compelling moment in the first two seconds. Use text overlays and captions (YouTube indexes on-screen text). Post consistently, the algorithm favours channels that publish at least three Shorts per week.</p>

      <h2>The Role of Trends and Audio</h2>
      <p>Trending audio tracks receive a significant algorithmic boost on YouTube Shorts, similar to TikTok sounds. Pairing timely, searchable topics with trending audio is a proven tactic our short form video team uses to launch new client channels into viral reach quickly.</p>

      <h2>Seven Cuts Media's YouTube Shorts Approach</h2>
      <p>At Seven Cuts Media, we treat YouTube Shorts as its own channel, not just a repurposing destination. We tailor hook structures, edit pacing, and caption strategies specifically for the Shorts feed. Combined with our data-driven posting schedules, this approach consistently outperforms clients' previous organic reach benchmarks within the first 60 days.</p>
    `,
    date: "2026-04-28",
    author: "Seven Cuts Team"
  }
};

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = ARTICLES[resolvedParams.slug as keyof typeof ARTICLES];

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Seven Cuts Media`,
    description: article.description,
    alternates: {
      canonical: `https://sevencutsmedia.com/articles/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${article.title} | Seven Cuts Media`,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      authors: ["Seven Cuts Media"],
      url: `https://sevencutsmedia.com/articles/${resolvedParams.slug}`,
      siteName: "Seven Cuts Media",
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Seven Cuts Media`,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = ARTICLES[resolvedParams.slug as keyof typeof ARTICLES];

  if (!article) {
    notFound();
  }

  // JSON-LD structured data for the article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: [{
      "@type": "Organization",
      name: "Seven Cuts Media",
      url: "https://sevencutsmedia.com"
    }],
    publisher: {
      "@type": "Organization",
      name: "Seven Cuts Media",
      url: "https://sevencutsmedia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://sevencutsmedia.com/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sevencutsmedia.com/articles/${resolvedParams.slug}`
    }
  };

  return (
    <main className="relative min-h-screen bg-[#080808] pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto">
        <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-zinc-500 text-sm mb-6">
            <time dateTime={article.date}>{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
            <span>•</span>
            <span>{article.author}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            {article.description}
          </p>
        </header>

        <div
          className="max-w-none text-zinc-300 text-lg leading-relaxed
            [&_p]:text-justify [&_p]:leading-relaxed [&_p]:mb-7
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-5
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-7 [&_ul]:space-y-3
            [&_li]:text-justify [&_li]:leading-relaxed
            [&_strong]:text-white [&_strong]:font-semibold"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-zinc-400 mb-6">Want results like this for your brand? Seven Cuts Media is a short form content agency ready to help you grow.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-all"
          >
            Work With Seven Cuts Media <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    </main>
  );
}
