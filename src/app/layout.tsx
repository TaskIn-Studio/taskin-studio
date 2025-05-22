import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taskin.studio"),
  title: {
    default: "TaskIn Studio - AI-Powered Productivity Tools",
    template: "%s | TaskIn Studio",
  },
  description:
    "Discover our suite of AI-powered tools designed to boost your productivity and streamline your workflow.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskin.studio",
    siteName: "TaskIn Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TaskIn Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TaskIn Studio",
    creator: "@TaskIn Studio",
  },
  alternates: {
    canonical: "https://taskin.studio",
    types: {
      "application/rss+xml": "https://taskin.studio/feed.xml",
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
      <head>
        {/* seo */}
        <title>TaskIn Studio — Simple AI Tools for Builders</title>
        <meta
          name="description"
          content="Discover a suite of minimal AI-powered tools built to save time and boost productivity. Currency converter, content generators, and more."
        />
        {/* keywords */}
        <meta
          name="keywords"
          content="AI, tools, productivity, currency converter, content generators"
        />
        {/* open graph */}
        <meta
          property="og:title"
          content="TaskIn Studio — Simple AI Tools for Builders"
        />
        <meta
          property="og:description"
          content="Discover a suite of minimal AI-powered tools built to save time and boost productivity. Currency converter, content generators, and more."
        />
        <meta property="og:image" content="/taskin-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="TaskIn Studio" />
        <meta
          name="google-adsense-account"
          content="ca-pub-2234156203417980"
        ></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TaskIn Studio",
              url: "https://taskin.studio",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://taskin.studio/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieConsent />
          <Toaster />
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
