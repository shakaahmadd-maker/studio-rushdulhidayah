import type { Metadata } from 'next';
import { Poppins, Amiri } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import FirebaseClientProvider from '@/firebase/client-provider';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { CookieBanner } from '@/components/layout/CookieBanner';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const amiri = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rushd Ul Hidayah Quran Academy | Online Quran & Islamic Learning',
  description: 'Rushd Ul Hidayah Quran Academy helps you to read, understand, recite and memorize Quran online with excellence and Tajweed.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://studio-6106608140-351dd.firebaseapp.com" />
        <link rel="dns-prefetch" href="https://firebasestorage.googleapis.com" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          poppins.variable,
          amiri.variable
        )}
        suppressHydrationWarning
      >
        <FirebaseClientProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <WhatsAppButton />
          <CookieBanner />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
