import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Taskin Studio — Simple AI Tools for Builders',
  description: 'Discover a suite of minimal AI-powered tools built to save time and boost productivity. Currency converter, content generators, and more.',
  openGraph: {
    title: 'Taskin Studio — Simple AI Tools for Builders',
    description: 'Discover a suite of minimal AI-powered tools built to save time and boost productivity. Currency converter, content generators, and more.',
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=Taskin+Studio', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'Taskin Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taskin Studio — Simple AI Tools for Builders',
    description: 'Discover a suite of minimal AI-powered tools built to save time and boost productivity. Currency converter, content generators, and more.',
    images: ['https://placehold.co/1200x630.png?text=Taskin+Studio'], // Replace with actual Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
