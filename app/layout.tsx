import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";

const jost = Comic_Neue({
  variable: "--font-patric",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chin",
  description: "Chin's very personal website",
  metadataBase: new URL("https://chin4.com"),
  openGraph: {
    title: "Chin",
    description: "Chin's very personal website",
    url: "https://chin4.com",
    siteName: "Chin4",
    images: [
      {
        url: "/chin-og.png",
        width: 1200,
        height: 630,
        alt: "chin image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chin",
    description: "Chin's very personal website",
    site: "@chin_flags",
    creator: "@chin_flags",
    images: [
      {
        url: "/chin-og.png",
        alt: "chin image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} bg-[url(/images/nnnoise.svg)] font-jost antialiased relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
