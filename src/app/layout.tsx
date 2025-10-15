import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase/client-provider';
import TopNav from '@/components/TopNav';

export const metadata: Metadata = {
  title: 'Bangladesh Kids Quiz',
  description: 'An engaging quiz app for Bangladeshi children.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-headline antialiased">
        <FirebaseClientProvider>
          <TopNav />
          <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-background pt-24">
            {children}
          </main>
          <div className="fixed bottom-8 left-8 z-50">
            <div className="shining-star w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
              Quiz
            </div>
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
