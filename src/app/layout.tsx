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

const BASE_URL = "https://ahmetzorlutuna.com";

export const metadata: Metadata = {
  title: {
    default: "Ahmet Zorlutuna | Full Stack Developer & IT Consultant",
    template: "%s | Ahmet Zorlutuna",
  },
  description:
    "Portfolio of Ahmet Zorlutuna, a Full Stack Developer, 42 School Cadet, and IT Infrastructure Consultant. Creator of the AI-powered Tuna Health app and builder of scalable systems.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "React",
    "C",
    "C++",
    "42 School",
    "IT Consultant",
    "AI Integration",
    "Product Builder",
  ],
  authors: [{ name: "Ahmet Zorlutuna", url: BASE_URL }],
  creator: "Ahmet Zorlutuna",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Ahmet Zorlutuna",
    title: "Ahmet Zorlutuna | Full Stack Developer & IT Consultant",
    description:
      "Full Stack Developer, 42 School Cadet, and IT Consultant. Building scalable systems with TypeScript, C/C++, and modern web technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmet Zorlutuna — Full Stack Developer & IT Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmet Zorlutuna | Full Stack Developer & IT Consultant",
    description:
      "Full Stack Developer, 42 School Cadet, and IT Consultant. Creator of Tuna Health.",
    creator: "@AhmetZorlutuna",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          <div className="flex min-h-dvh flex-col relative">
            {/* Global Ambient Background */}
            <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
