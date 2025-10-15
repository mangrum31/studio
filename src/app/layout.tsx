import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from '@/firebase/client-provider';
import TopNav from '@/components/TopNav';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Quiz Box',
  description: 'An engaging quiz app for everyone.',
  manifest: '/manifest.json',
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
        <meta name="theme-color" content="#a855f7" />
      </head>
      <body className="font-headline antialiased">
        <FirebaseClientProvider>
          <TopNav />
          <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-background pt-24">
            {children}
          </main>
          <div className="fixed bottom-4 left-4 z-50">
            <div className="relative w-16 h-16">
              <div className="fading-q w-full h-full bg-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl shadow-lg">
                Q
              </div>
            </div>
          </div>
          <Toaster />
        </FirebaseClientProvider>
        <Script id="service-worker-registration">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js').then(registration => {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }, err => {
                  console.log('ServiceWorker registration failed: ', err);
                });
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
