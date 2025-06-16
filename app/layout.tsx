import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { ConsoleGreeting } from "@/components/console-greeting";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "800"],
});

export const metadata: Metadata = {
  title: "Chin4",
  description: "Chin4 personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} bg-background font-jost antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConsoleGreeting />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
