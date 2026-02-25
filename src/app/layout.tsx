import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import FirebaseClientProvider from '@/firebase/client-provider';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Rushd Ul Hidayah Institute | Online Quran & Islamic Learning',
  description: 'Rushd-e-Institute help you to read, understand, recite and memorize Quran online with excellence and Tajweed.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieBannerScript = `
    (function () {
      const banner = document.getElementById('cookie-banner');
      const acceptBtn = document.getElementById('accept-cookies');
      const rejectBtn = document.getElementById('reject-cookies');

      if (!banner || !acceptBtn || !rejectBtn) {
        return;
      }

      function initMetaPixel() {
        if(window.fbq) return;
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '925486433274757');
        fbq('track', 'PageView');
        
        const noscript = document.createElement('noscript');
        const img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.style.display = 'none';
        img.src = "https://www.facebook.com/tr?id=925486433274757&ev=PageView&noscript=1";
        noscript.appendChild(img);
        document.body.appendChild(noscript);
      }

      const consent = localStorage.getItem('cookie_consent');

      if (consent === 'granted') {
        initMetaPixel();
      } else if (consent !== 'denied') {
        banner.style.display = 'block';
      }

      acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'granted');
        banner.style.display = 'none';
        initMetaPixel();
      });

      rejectBtn.addEventListener('click', function() {
        localStorage.setItem('cookie_consent', 'denied');
        banner.style.display = 'none';
      });
    })();
  `;
  return (
    <html lang="en" className="light" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Amiri&display=swap"
          rel="stylesheet"
        />
         <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          #cookie-banner {
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            max-width: 420px;
            background: #1f2937;
            color: #fff;
            padding: 16px;
            border-radius: 8px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 9999;
            display: none;
          }
          #cookie-banner button {
            margin-top: 10px;
            margin-right: 8px;
            padding: 6px 14px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          #accept-cookies {
            background: #22c55e;
            color: #000;
          }
          #reject-cookies {
            background: #9ca3af;
            color: #000;
          }
        `}} />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
        suppressHydrationWarning={true}
      >
        <FirebaseClientProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <WhatsAppButton />
        </FirebaseClientProvider>
        
        <div id="cookie-banner">
          <strong>Cookies Notice</strong><br />
          We use cookies for analytics and marketing (Meta Pixel).
          <br />
          <button id="accept-cookies">Accept</button>
          <button id="reject-cookies">Reject</button>
        </div>

        <Script id="cookie-consent-manager" strategy="afterInteractive">
          {cookieBannerScript}
        </Script>
      </body>
    </html>
  );
}
