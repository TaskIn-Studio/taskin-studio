"use client";

import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  FadeIn,
  FadeUp,
  ScaleOnHover,
  StaggerContainer,
  StaggerItem,
  PulseAnimation,
} from "@/components/ui/animated-components";

// Tools data
const tools = [
  {
    id: "currency-converter",
    name: "Currency Converter",
    description:
      "Real-time currency conversion with AI-powered rate predictions.",
    url: "https://converter.taskin.studio",
    status: "live",
    icon: "💰",
  },
  {
    id: "social-generator",
    name: "Social Media Post Generator",
    description:
      "Create engaging posts for multiple platforms from a single prompt.",
    url: "https://creator.taskin.studio",
    status: "live",
    icon: "📱",
  },
  {
    id: "document-formatter",
    name: "Universal Document Formatter",
    description: "Format any document type perfectly with one click.",
    url: "#",
    status: "coming-soon",
    icon: "📄",
  },
  {
    id: "prompt-builder",
    name: "No-code Prompt Builder",
    description: "Build and test powerful prompts without writing code.",
    url: "#",
    status: "coming-soon",
    icon: "🤖",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp delay={0.1} duration={0.7}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Tools that do one thing.{" "}
                <span className="text-primary">Exceptionally well.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2} duration={0.7}>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Taskin Studio builds simple AI tools to save time, automate
                work, and unlock creativity.
              </p>
            </FadeUp>

            <FadeUp delay={0.3} duration={0.7}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ScaleOnHover>
                  <Link href="#tools">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto relative overflow-hidden group"
                    >
                      <span className="relative z-10">Explore Tools</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </Link>
                </ScaleOnHover>
                <ScaleOnHover>
                  <Link href="#community">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      Join Community
                    </Button>
                  </Link>
                </ScaleOnHover>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About Taskin Studio
              </h2>
            </FadeIn>

            <FadeUp delay={0.1}>
              <p className="text-lg mb-8">
                We believe in the power of focused tools that solve one problem
                exceptionally well, rather than bloated software that tries to
                do everything. Each Taskin tool is designed with simplicity and
                effectiveness in mind, powered by AI to make your workflow
                smoother.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex items-center justify-center">
                <PulseAnimation>
                  <p className="text-lg font-medium text-primary px-6 py-3 rounded-full bg-primary/5 inline-block">
                    We're on a mission to empower 100,000 makers with
                    delightful, single-purpose utilities.
                  </p>
                </PulseAnimation>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our Tools
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
              Each tool is built to solve a specific problem. No bloat, no
              complexity.
            </p>
          </FadeIn>

          <StaggerContainer staggerChildren={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {tools.map((tool) => (
                <StaggerItem key={tool.id}>
                  <ScaleOnHover scale={1.02}>
                    <Card className="h-full bg-card hover:shadow-soft-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="bg-primary/10 text-primary rounded-xl w-12 h-12 flex items-center justify-center text-2xl">
                            {tool.icon}
                          </div>
                          {tool.status === "coming-soon" && (
                            <Badge variant="secondary">Coming Soon</Badge>
                          )}
                          {tool.status === "live" && (
                            <Badge variant="success">Live</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl font-semibold">
                          {tool.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-2 flex-grow">
                          {tool.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        {tool.status === "live" ? (
                          <Link
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline flex items-center"
                          >
                            Visit Tool
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </Link>
                        ) : (
                          <button className="text-muted-foreground cursor-not-allowed opacity-70">
                            Available Soon
                          </button>
                        )}
                      </CardFooter>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Community Section */}
      <section
        id="community"
        className="py-16 md:py-24 bg-primary/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Community
              </h2>
            </FadeIn>

            <FadeUp delay={0.1}>
              <p className="text-lg mb-8">
                Be the first to access upcoming tools, get updates, and connect
                with other makers.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Card className="shadow-soft rounded-2xl max-w-md mx-auto bg-card/80 backdrop-blur-sm border-primary/10">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors bg-card"
                        placeholder="Enter your email"
                      />
                    </div>
                    <ScaleOnHover>
                      <Button type="submit" className="w-full">
                        Join Waitlist
                      </Button>
                    </ScaleOnHover>
                  </form>
                  <div className="mt-6 text-sm text-muted-foreground">
                    Join our{" "}
                    <a
                      href="https://t.me/taskinstudio"
                      className="text-primary hover:underline font-medium"
                    >
                      Telegram
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://discord.gg/taskinstudio"
                      className="text-primary hover:underline font-medium"
                    >
                      Discord
                    </a>{" "}
                    community
                  </div>
                </CardContent>
              </Card>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Taskin Studio</h3>
              <p className="text-muted-foreground">
                Simple AI tools to save time and boost creativity.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#tools"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#community"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>Crafted by builders, for builders. © Taskin Studio 2025</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
