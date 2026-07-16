import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",  
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://getuntap.com";
const SITE_NAME = "Untap";
const TITLE =
  "Untap — Screen Time Control App to Stop Doomscrolling & Break Phone Addiction";
const DESCRIPTION =
  "Untap is the #1 screen time control app for iPhone and Android. Stop doomscrolling, break phone addiction with intentional friction, app delays, focus locks, and mindful usage reports. Free to start.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Untap — Screen Time Control App",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "MBP Softwares", url: "https://getuntap.com" }],
  creator: "MBP Softwares",
  publisher: "MBP Softwares",
  category: "Productivity",
  classification: "Digital Wellbeing, Productivity, Screen Time Control",
  keywords: [
    "untap",
    "untap app",
    "getuntap",
    "screen time control app",
    "screen time control",
    "screen time app",
    "screen time tracker",
    "screen time limit app",
    "screen time iOS",
    "screen time Android",
    "stop doomscrolling",
    "doomscrolling app",
    "phone addiction app",
    "break phone addiction",
    "reduce screen time",
    "app blocker",
    "app blocker iOS",
    "app blocker Android",
    "focus app",
    "focus mode",
    "digital wellbeing",
    "digital detox app",
    "mindful phone usage",
    "intentional phone use",
    "stop scrolling instagram",
    "stop scrolling tiktok",
    "block social media apps",
    "best screen time app 2026",
    "alternative to one sec",
    "alternative to opal",
    "alternative to apple screen time",
    "FamilyControls",
    "ManagedSettings",
    "DeviceActivity",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Untap — Screen Time Control App for iOS and Android",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/us/app/untap-screen-time-control/id6759078648",
      app_store_id: "6759078648",
    },
    android: {
      package: "com.unrotapp.screencontrol",
      url: "https://play.google.com/store/apps/details?id=com.unrotapp.screencontrol",
    },
    web: {
      url: SITE_URL,
      should_fallback: true,
    },
  },
  itunes: {
    appId: "6759078648",
    appArgument: SITE_URL,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0eb" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
      <meta
        name="google-site-verification"
        content="tv-p3MaVuhhHOw0wkDEwdN7Mv7Anjzb3XZ4gTyQiLKU"
      />
    </head>
     <GoogleTagManager gtmId="GTM-PDNG6VFT" />
      <body className="min-h-screen">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
