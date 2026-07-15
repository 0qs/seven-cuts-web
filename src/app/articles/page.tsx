import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Short Form Video Articles & Insights | Seven Cuts Media",
  description: "Expert strategies, tips, and insights on short form video content, TikTok growth, YouTube Shorts, and viral marketing from Seven Cuts Media, the short form content agency.",
  alternates: {
    canonical: "https://www.sevencutsmedia.com/articles",
  },
};

// Mock data for articles
const ARTICLES = [
  {
    slug: "best-tiktok-hooks-2026",
    title: "10 Best TikTok Hooks to Use in 2026",
    description: "Stop the scroll with these proven hook structures that increase retention instantly.",
    date: "May 18, 2026",
    category: "Strategy"
  },
  {
    slug: "how-much-does-a-short-form-agency-cost",
    title: "How Much Does a Short Form Content Agency Cost?",
    description: "A complete breakdown of pricing models, ROI, and what you should expect to pay.",
    date: "May 10, 2026",
    category: "Business"
  },
  {
    slug: "youtube-shorts-algorithm-explained",
    title: "The YouTube Shorts Algorithm Explained",
    description: "How YouTube decides which Shorts go viral and how you can optimize your content for the feed.",
    date: "April 28, 2026",
    category: "Algorithm"
  }
];

export default function ArticlesPage() {
  return (
    <main className="relative min-h-screen bg-[#080808] pt-32 pb-24 px-6 md:px-12">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Short Form Video Articles &amp; Insights</h1>
          <p className="text-lg text-zinc-400">
            Expert strategies, tips, and insights on short form video content, TikTok growth, YouTube Shorts, and viral marketing, from Seven Cuts Media, the short form content agency.
          </p>
        </header>

        <div className="space-y-8">
          {ARTICLES.map((article) => (
            <article key={article.slug} className="group border-b border-white/10 pb-8 last:border-0">
              <Link href={`/articles/${article.slug}`} className="block">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-semibold text-orange-400 tracking-wider uppercase">{article.category}</span>
                  <span className="text-xs text-zinc-500">{article.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-purple-500 transition-all duration-300">
                  {article.title}
                </h2>
                <p className="text-zinc-400 mb-4">{article.description}</p>
                <div className="inline-flex items-center text-sm font-semibold text-white gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <p className="text-zinc-400 mb-6">Ready to grow with a short form content agency that delivers results?</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-100 transition-all"
          >
            Work With Seven Cuts Media <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
