import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next"
//import { ConsoleGreeting } from "@/components/console-greeting";
import { Footer } from "@/components/Footer";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "Chin4",
  description: "Chin's personal website",
  metadataBase: new URL("https://chin4.com"), // Important for absolute URLs
  openGraph: {
    title: "Chin4",
    description: "Chin's personal website",
    url: "https://chin4.com",
    siteName: "Chin4",
    images: [
      {
        url: "/chin-og.png",
        width: 1200,
        height: 630,
        alt: "My Awesome App Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} bg-background font-jost antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <ConsoleGreeting /> */}
          <Header />
          {children}
          <Analytics/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
