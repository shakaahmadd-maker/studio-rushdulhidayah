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
      if (!banner) return;
      
      const consent = localStorage.getItem('cookie_consent');

      if (!consent) {
        banner.style.display = 'block';
      }

      function loadMetaPixel() {
        if (window.fbq) return;

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
      }

      const acceptBtn = document.getElementById('accept-cookies');
      if (acceptBtn) {
        acceptBtn.onclick = function () {
          localStorage.setItem('cookie_consent', 'accepted');
          banner.style.display = 'none';
          loadMetaPixel();
        };
      }

      const rejectBtn = document.getElementById('reject-cookies');
      if(rejectBtn) {
        rejectBtn.onclick = function () {
          localStorage.setItem('cookie_consent', 'rejected');
          banner.style.display = 'none';
        };
      }
      
      if (consent === 'accepted') {
        loadMetaPixel();
      }
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
            background: #0f2a44; /* Dark Blue */
            color: #ffffff;     /* White text */
            padding: 18px;
            border-radius: 14px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 9999;
            display: none;
            box-shadow: 0 12px 30px rgba(0,0,0,0.25);
          }

          #cookie-banner strong {
            font-size: 15px;
            color: #ffffff;
          }

          #cookie-banner button {
            margin-top: 14px;
            margin-right: 10px;
            padding: 8px 18px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
          }

          /* Accept button */
          #accept-cookies {
            background: #ffffff;
            color: #0f2a44;
          }

          /* Reject button */
          #reject-cookies {
            background: transparent;
            color: #ffffff;
            border: 1px solid #ffffff;
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
          <strong>Cookies Notice</strong><br /><br />
          We use cookies to make your visit smoother and more helpful.
          <br />
          <button id="accept-cookies">Allow Cookies</button>
          <button id="reject-cookies">No, thanks</button>
        </div>

        <Script id="cookie-consent-manager" strategy="afterInteractive">
          {cookieBannerScript}
        </Script>
      </body>
    </html>
  );
}
