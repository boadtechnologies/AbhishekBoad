"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Globe,
  Mail,
  ExternalLink,
  Download,
  X,
  Sparkles,
  Code,
  Heart,
  Zap,
} from "lucide-react";

const socialLinks = [
  {
    name: "X (Twitter)",
    url: "https://x.com/AbhishekBoad",
    username: "@AbhishekBoad",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color:
      "hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-black/20",
    gradient: "from-black to-gray-800",
  },
  {
    name: "Telegram",
    url: "https://t.me/abhishekboad",
    username: "@abhishekboad",
    icon: <MessageCircle className="w-5 h-5" />,
    color:
      "hover:bg-blue-500 hover:text-white hover:shadow-2xl hover:shadow-blue-500/20",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Website",
    url: "https://abhishekboad.vercel.app",
    username: "abhishekboad.vercel.app",
    icon: <Globe className="w-5 h-5" />,
    color:
      "hover:bg-green-600 hover:text-white hover:shadow-2xl hover:shadow-green-600/20",
    gradient: "from-green-600 to-green-700",
  },
  {
    name: "GitHub",
    url: "https://github.com/abhishekboad",
    username: "@abhishekboad",
    icon: <Github className="w-5 h-5" />,
    color:
      "hover:bg-gray-800 hover:text-white hover:shadow-2xl hover:shadow-gray-800/20",
    gradient: "from-gray-800 to-gray-900",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/abhishekboad",
    username: "@abhishekboad",
    icon: <Instagram className="w-5 h-5" />,
    color:
      "hover:bg-pink-500 hover:text-white hover:shadow-2xl hover:shadow-pink-500/20",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/abhishekboad",
    username: "abhishekboad",
    icon: <Linkedin className="w-5 h-5" />,
    color:
      "hover:bg-blue-600 hover:text-white hover:shadow-2xl hover:shadow-blue-600/20",
    gradient: "from-blue-600 to-blue-700",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@abhishekboad",
    username: "@abhishekboad",
    icon: <Youtube className="w-5 h-5" />,
    color:
      "hover:bg-red-600 hover:text-white hover:shadow-2xl hover:shadow-red-600/20",
    gradient: "from-red-600 to-red-700",
  },
  {
    name: "WhatsApp",
    url: "https://whatsapp.com/channel/0029Vb6ek1tHgZWbD0s2nX3X",
    username: "Channel",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
      </svg>
    ),
    color:
      "hover:bg-green-500 hover:text-white hover:shadow-2xl hover:shadow-green-500/20",
    gradient: "from-green-500 to-green-600",
  },
  {
    name: "Email",
    url: "mailto:abhishekboad.work@gmail.com",
    username: "abhishekboad.work@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    color:
      "hover:bg-orange-500 hover:text-white hover:shadow-2xl hover:shadow-orange-500/20",
    gradient: "from-orange-500 to-red-500",
  },
];

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("mousemove", handleMouseMove);

    // Register service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("SW registered: ", registration);
        })
        .catch((registrationError) => {
          console.log("SW registration failed: ", registrationError);
        });
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const dismissInstallPrompt = () => {
    setShowInstallPrompt(false);
  };

  return (
    <>
      {/* SEO Content */}
      <div className="sr-only">
        <h1>Abhishek Boad - Official Website</h1>
        <h2>Developer, Creator, and Tech Enthusiast</h2>
        <p>
          Welcome to the official website of Abhishek Boad. I am a passionate
          developer and tech enthusiast who believes in learning, building,
          sharing, and growing together with the tech community.
        </p>
        <p>
          Connect with Abhishek Boad on social media platforms including
          Twitter, GitHub, LinkedIn, Instagram, YouTube, Telegram, and WhatsApp.
          Follow my journey in software development, web development, and
          technology.
        </p>
        <p>
          Abhishek Boad portfolio, Abhishek Boad developer, Abhishek Boad social
          media, Abhishek Boad contact information, Abhishek Boad projects,
          Abhishek Boad tech enthusiast.
        </p>
      </div>

      <div
        className="min-h-screen bg-white text-black overflow-x-hidden relative"
        ref={containerRef}
      >
        {/* Animated Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gray-200 rounded-full animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Gradient Orbs */}
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 animate-pulse-slow"
            style={{
              left: `${mousePosition.x * 0.02}px`,
              top: `${mousePosition.y * 0.02}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute w-64 h-64 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-full opacity-15 animate-pulse-slow"
            style={{
              right: `${mousePosition.x * 0.01}px`,
              bottom: `${mousePosition.y * 0.01}px`,
              animationDelay: "2s",
            }}
          />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* PWA Install Banner */}
        {showInstallPrompt && (
          <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-black to-gray-800 text-white p-4 z-50 animate-slide-down shadow-2xl">
            <div className="container mx-auto flex items-center justify-between max-w-4xl">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-full animate-pulse">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-medium block">
                    Install Abhishek Boad App
                  </span>
                  <span className="text-xs opacity-80">
                    Get the best experience!
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white text-black hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  onClick={handleInstallClick}
                >
                  <Download className="w-4 h-4 mr-1" />
                  Install
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10 transition-all duration-300"
                  onClick={dismissInstallPrompt}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        <main
          className={`container mx-auto px-4 py-8 sm:py-16 max-w-4xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } ${showInstallPrompt ? "pt-24" : ""}`}
        >
          {/* Hero Section */}
          <header className="text-center mb-12 sm:mb-20 relative">
            {/* Floating Icons */}
            <div className="absolute inset-0 pointer-events-none">
              <Code className="absolute top-10 left-10 w-6 h-6 text-gray-300 animate-float opacity-60" />
              <Sparkles className="absolute top-20 right-16 w-5 h-5 text-gray-400 animate-float opacity-50" />
              <Zap className="absolute bottom-10 left-20 w-4 h-4 text-gray-300 animate-float opacity-40" />
              <Heart className="absolute bottom-16 right-10 w-5 h-5 text-gray-400 animate-float opacity-60" />
            </div>

            <div className="relative w-32 h-32 sm:w-56 sm:h-56 mx-auto mb-8 sm:mb-12 group">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black via-gray-600 to-black animate-spin-slow opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Profile Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/profile-picture.png"
                  alt="Abhishek Boad - Developer & Tech Enthusiast"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                  sizes="(max-width: 640px) 128px, 224px"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight animate-fade-in-up">
                <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent animate-gradient">
                  Abhishek Boad
                </span>
              </h1>

              <div className="flex items-center justify-center space-x-2 animate-fade-in-up animation-delay-300">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 animate-pulse" />
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
                  Learn. Build. Share. Grow.
                </p>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 animate-pulse" />
              </div>
            </div>
          </header>

          {/* Social Links Grid */}
          <section className="mb-16 sm:mb-20" aria-label="Social Media Links">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 animate-fade-in-up animation-delay-700">
              Connect With Me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {socialLinks.map((link, index) => (
                <Card
                  key={index}
                  className={`border-2 border-black ${link.color} transition-all duration-500 group animate-fade-in-up hover:scale-105 hover:-translate-y-2 active:scale-95 relative overflow-hidden`}
                  style={{
                    animationDelay: `${(index + 8) * 100}ms`,
                  }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <CardContent className="p-4 sm:p-6 relative z-10">
                    <Button
                      variant="ghost"
                      className="w-full h-auto p-0 hover:bg-transparent group-hover:text-white touch-manipulation"
                      asChild
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between min-h-[48px] group"
                        aria-label={`Connect with Abhishek Boad on ${link.name}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 p-2 rounded-full group-hover:bg-white/20">
                            {link.icon}
                          </div>
                          <div className="text-left">
                            <span className="font-semibold text-sm sm:text-base block">
                              {link.name}
                            </span>
                            <span className="text-xs opacity-70 group-hover:opacity-90 transition-opacity">
                              {link.username}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                      </a>
                    </Button>
                  </CardContent>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </Card>
              ))}
            </div>
          </section>

          {/* Enhanced Footer */}
          <footer className="text-center border-t-2 border-black pt-8 sm:pt-12 animate-fade-in-up animation-delay-1200">
            <div className="space-y-4">
              <div className="flex justify-center items-center space-x-6 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>
                    Design and developed by{" "}
                    <a
                      href="https://www.boadtechnologies.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Boad Technologies
                    </a>
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                © {new Date().getFullYear()} Abhishek Boad. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
