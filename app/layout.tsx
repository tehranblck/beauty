import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Nurcan Beauty Salon - Profesyonel Güzellik Hizmetleri",
  description: "Modern ve profesyonel güzellik salonu hizmetleri. Saç bakımı, cilt bakımı, makyaj ve daha fazlası için salonumuza bekleriz.",
  keywords: "güzellik salonu, saç bakımı, cilt bakımı, makyaj, protez tırnak, istanbul güzellik merkezi",
  authors: [{ name: "Nurcan Beauty Salon" }],
  creator: "Nurcan Beauty Salon",
  publisher: "Nurcan Beauty Salon",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.nurcanbeautysalon.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.nurcanbeautysalon.com",
    title: "Nurcan Beauty Salon - Profesyonel Güzellik Hizmetleri",
    description: "Modern ve profesyonel güzellik salonu hizmetleri. Saç bakımı, cilt bakımı, makyaj ve daha fazlası için salonumuza bekleriz.",
    siteName: "Nurcan Beauty Salon",
    images: [
      {
        url: "/about.jpg",
        width: 1200,
        height: 630,
        alt: "Nurcan Beauty Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurcan Beauty Salon - Profesyonel Güzellik Hizmetleri",
    description: "Modern ve profesyonel güzellik salonu hizmetleri. Saç bakımı, cilt bakımı, makyaj ve daha fazlası için salonumuza bekleriz.",
    images: ["/about.jpg"],
    creator: "@nurcanbeauty",
    site: "@nurcanbeauty",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#D4AF37",
  category: "beauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
