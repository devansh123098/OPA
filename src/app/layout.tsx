
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google'; // Changed from Geist_Sans, Geist_Mono
import Image from 'next/image';
import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";

const fontSans = Inter({ // Changed to Inter
  subsets: ['latin'],
  variable: '--font-sans', // Set to --font-sans
});

const fontMono = Roboto_Mono({ // Changed to Roboto_Mono
  subsets: ['latin'],
  variable: '--font-mono', // Set to --font-mono
});

export const metadata: Metadata = {
  title: 'Arunachal Pradesh Pickleball Association',
  description: 'Official website of the Arunachal Pradesh Pickleball Association.',
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
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <Toaster />
        <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-50">
          <Image
            src="/pickleball ball .webp"
            alt="Floating pickleball icon"
            width={80}
            height={80}
            className="animate-float"
            priority
          />
        </div>
      </body>
    </html>
  );
}
