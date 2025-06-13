
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Odisha Pickleball Association',
    template: '%s | Odisha Pickleball Association',
  },
  description: 'The official website for the Odisha Pickleball Association. Discover events, news, coaching, rankings, and join the pickleball community in Odisha.',
  // You can add more metadata like openGraph, icons etc. as needed
  // For example:
  // openGraph: {
  //   title: 'Odisha Pickleball Association',
  //   description: 'The official hub for pickleball in Odisha.',
  //   url: 'YOUR_WEBSITE_URL_HERE', // Replace with your actual URL
  //   siteName: 'Odisha Pickleball Association',
  //   images: [
  //     {
  //       url: '/og-image.png', // Replace with your OG image path
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: 'en_US',
  //   type: 'website',
  // },
  // icons: {
  //   icon: '/favicon.ico', // or your preferred favicon path
  //   // apple: '/apple-touch-icon.png',
  // },
  // keywords: ['pickleball', 'Odisha', 'sports association', 'tournaments', 'coaching'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
