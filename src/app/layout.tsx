
import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
// Header, Footer, and Toaster are intentionally not imported or used for the prank
// import Header from '@/components/layout/header';
// import Footer from '@/components/layout/footer';
// import { Toaster } from "@/components/ui/toaster";

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Site Status', // Changed title for the prank
  description: 'This website is currently under special maintenance.', // Changed description
};

export default function RootLayout({
  children, // children will not be rendered for the prank
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased flex flex-col min-h-screen bg-gray-900 text-gray-100 items-center justify-center text-center p-6`}>
        <div className="space-y-6 max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--destructive))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server-off mx-auto animate-pulse">
            <path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"/>
            <path d="M10 10H4.13a2 2 0 0 0-1.78 1.08l-1.1 2.2a2 2 0 0 0 .04 2.33l2.82 4.65A2 2 0 0 0 5.87 22H17a2 2 0 0 0 2-2v-3"/>
            <path d="M22 22l-5-5"/>
            <path d="M17 22l-5-5"/>
            <path d="M4 6h4"/>
            <path d="M4 12h2"/>
            <path d="M7 18h1.3"/>
          </svg>
          <h1 className="text-4xl md:text-5xl font-bold text-destructive">
            Website Deactivated
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            This website is temporarily unavailable due to unforeseen circumstances.
          </p>
          <p className="text-sm text-gray-500">
            (Not really! This is just a prank. Your friendly AI is standing by to reactivate it.)
          </p>
        </div>
      </body>
    </html>
  );
}
