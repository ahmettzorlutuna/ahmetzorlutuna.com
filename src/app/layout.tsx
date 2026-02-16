import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahmet Zorlutuna — Developer",
    template: "%s | Ahmet Zorlutuna",
  },
  description:
    "Full-stack developer & 42 student. Building software with C, Swift, and TypeScript. Explore my projects, skills, and journey.",
  keywords: [
    "developer",
    "portfolio",
    "42 school",
    "full-stack",
    "Swift",
    "C",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Ahmet Zorlutuna" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ahmet Zorlutuna",
    title: "Ahmet Zorlutuna — Developer",
    description:
      "Full-stack developer & 42 student. Building software with C, Swift, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-dvh flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
