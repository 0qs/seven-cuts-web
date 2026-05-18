import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Seven Cuts Media | Top Short Form Video Agency",
  description: "Seven Cuts Media is a premier short form video agency helping creators and brands achieve explosive organic growth through high-retention video content.",
  keywords: ["short form video agency", "tiktok agency", "reels agency", "content creation", "viral videos"],
  openGraph: {
    title: "Seven Cuts Media | Top Short Form Video Agency",
    description: "Seven Cuts Media is a premier short form video agency helping creators and brands achieve explosive organic growth.",
    url: "https://sevencutsmedia.com",
    siteName: "Seven Cuts Media",
    images: [
      {
        url: "https://sevencutsmedia.com/logo.png", // Assuming you'll have an OG image
        width: 1200,
        height: 630,
        alt: "Seven Cuts Media",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Seven Cuts Media",
    "description": "The premier short form video agency driving organic growth and viral success.",
    "url": "https://sevencutsmedia.com",
    "logo": "https://sevencutsmedia.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/sevencutsmedia/",
      "https://www.instagram.com/sevencutsmedia/"
    ]
  };

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
