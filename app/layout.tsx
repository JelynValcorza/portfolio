import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/components/providers/ThemeProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jelyn Valcorza | Software & Frontend Developer",
    template: "%s | Jelyn Valcorza",
  },
  description:
    "Jelyn Valcorza — Software Developer & Frontend Developer based in the Philippines. Specializing in React, Next.js, and TypeScript. Available for freelance and full-time opportunities.",
  keywords: [
    "Jelyn Valcorza",
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Philippines",
    "Web Developer",
    "Full Stack",
  ],
  authors: [{ name: "Jelyn Valcorza", url: "https://jelynvalcorza.dev" }],
  creator: "Jelyn Valcorza",
  metadataBase: new URL("https://jelynvalcorza.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jelynvalcorza.dev",
    siteName: "Jelyn Valcorza Portfolio",
    title: "Jelyn Valcorza | Software & Frontend Developer",
    description:
      "Software Developer & Frontend Developer specializing in React, Next.js, and TypeScript. Building modern, performant web applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelyn Valcorza | Software & Frontend Developer",
    description:
      "Software Developer & Frontend Developer specializing in React, Next.js, and TypeScript.",
    creator: "@jelynvalcorza",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
