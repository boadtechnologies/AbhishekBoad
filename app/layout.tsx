import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishekboad.vercel.app"),
  title: {
    default: "Abhishek Boad - Official Website",
    template: "%s | Abhishek Boad",
  },
  description:
    "Official website of Abhishek Boad . Connect with Abhishek across all social media platforms. Learn. Build. Share. Grow. 🎯",
  keywords: [
    "Abhishek Boad",
    "abhishekboad",
    "Abhishek Boad official website",
    "Abhishek Boad developer",
    "Abhishek Boad portfolio",
    "Abhishek Boad social media",
    "Abhishek Boad contact",
    "developer",
    "tech enthusiast",
    "creator",
    "programmer",
    "software developer",
    "web developer",
    "learn build share grow",
    "abhishek boad github",
    "abhishek boad linkedin",
    "abhishek boad twitter",
    "abhishek boad instagram",
    "abhishek boad youtube",
  ],
  authors: [{ name: "Abhishek Boad", url: "https://abhishekboad.vercel.app" }],
  creator: "Abhishek Boad",
  publisher: "Abhishek Boad",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Abhishek Boad",
    startupImage: "/icon-512.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekboad.vercel.app",
    title: "Abhishek Boad - Official Website | Developer & Tech Enthusiast",
    description:
      "Official website of Abhishek Boad - Developer, Creator, and Tech Enthusiast. Connect with Abhishek across all social media platforms.",
    siteName: "Abhishek Boad Official Website",
    images: [
      {
        url: "/profile-picture.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Boad - Developer & Tech Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Boad - Official Website | Developer & Tech Enthusiast",
    description:
      "Official website of Abhishek Boad - Developer, Creator, and Tech Enthusiast. Connect with Abhishek across all social media platforms.",
    creator: "@AbhishekBoad",
    images: ["/profile-picture.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://abhishekboad.vercel.app",
  },
  generator: "abhishekboad",


  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", 
  },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://abhishekboad.vercel.app" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Abhishek Boad" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhishek Boad",
              url: "https://abhishekboad.vercel.app",
              image: "https://abhishekboad.vercel.app/profile-picture.png",
              sameAs: [
                "https://x.com/AbhishekBoad",
                "https://github.com/abhishekboad",
                "https://linkedin.com/company/abhishekboad",
                "https://instagram.com/abhishekboad",
                "https://youtube.com/@abhishekboad",
                "https://t.me/abhishekboad",
              ],
              jobTitle: "Developer & Tech Enthusiast",
              description:
                "Developer, Creator, and Tech Enthusiast passionate about learning, building, sharing, and growing in the tech community.",
              email: "abhishekboad.work@gmail.com",
              knowsAbout: ["Web Development", "Software Development", "Technology", "Programming"],
              alumniOf: {
                "@type": "Organization",
                name: "Tech Community",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
