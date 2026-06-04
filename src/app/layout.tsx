import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Short Form Video Agency | Seven Cuts Media",
  description: "Seven Cuts Media is a premier short form video agency helping creators and brands achieve explosive organic growth through high-retention video content. Based in Indonesia, serving clients worldwide.",
  keywords: ["short form video agency", "short form video", "seven cuts", "seven cuts media", "sevencuts", "sevencuts media", "tiktok agency", "reels agency", "content creation", "viral videos"],
  openGraph: {
    title: "Short Form Video Agency | Seven Cuts Media",
    description: "Seven Cuts Media is a premier short form video agency helping creators and brands achieve explosive organic growth through high-retention short form video content.",
    url: "https://sevencutsmedia.com",
    siteName: "Seven Cuts Media",
    images: [
      {
        url: "https://sevencutsmedia.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Seven Cuts Media, Short Form Video Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Short Form Video Agency | Seven Cuts Media",
    description: "The premier short form video agency driving organic growth and viral success for creators and brands worldwide.",
    images: ["https://sevencutsmedia.com/logo.png"],
  },
  alternates: {
    canonical: "https://sevencutsmedia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Seven Cuts Media",
      "alternateName": ["SevenCuts Media", "7 Cuts Media", "Sevencuts", "Sevencuts Media"],
      "description": "The premier short form video agency driving organic growth and viral success for creators and brands worldwide.",
      "serviceType": "Short Form Video Agency",
      "url": "https://sevencutsmedia.com",
      "logo": "https://sevencutsmedia.com/logo.png",
      "foundingLocation": {
        "@type": "Place",
        "name": "Indonesia"
      },
      "sameAs": [
        "https://www.linkedin.com/company/sevencutsmedia/",
        "https://www.instagram.com/sevencutsmedia/"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Short Form Video Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Retention Video Editing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Ideation & Planning" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Short Form Video Strategy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Content Distribution (TikTok, Reels, Shorts)" } }
        ]
      },
      "knowsAbout": [
        "Short Form Video Content",
        "Short Form Video Agency",
        "TikTok Marketing",
        "Instagram Reels Strategy",
        "YouTube Shorts",
        "Viral Video Editing"
      ],
      "areaServed": "Worldwide",
      "priceRange": "$$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a short form video agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A short form video agency is a specialist creative partner that handles strategy, editing, and distribution of short-form video content, typically under 60 seconds, for TikTok, Instagram Reels, and YouTube Shorts. Seven Cuts Media is a short form video agency that covers everything from content ideation to publishing and performance optimization."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a short form video agency cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing for a short form video agency varies based on output volume, platform count, and editing complexity. Most agencies charge between $1,000 and $10,000+ per month. Seven Cuts Media offers flexible packages, contact us for a custom quote tailored to your goals."
          }
        },
        {
          "@type": "Question",
          "name": "Why hire Seven Cuts Media as your short form video agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seven Cuts Media brings proven expertise in high-retention short form video editing, trend-driven content strategy, and multi-platform distribution. Our team has managed numerous creators and brands, consistently delivering organic growth results across TikTok, Instagram Reels, and YouTube Shorts."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms does Seven Cuts Media cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As a full-service short form video agency, Seven Cuts Media creates and distributes content for TikTok, Instagram Reels, YouTube Shorts, and other short-form platforms, scheduling posts at optimal times for maximum organic reach."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with Seven Cuts Media?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is simple. Contact Seven Cuts Media through our website at sevencutsmedia.com. We'll schedule a briefing call to understand your brand, audience, and goals, then build a custom short form video strategy for you."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Briefing & Strategy"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Content Planning"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Creative Direction"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Editing & Post-Production"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Publishing"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Optimization"
        }
      ]
    }
  ];

  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
