'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }

    if (consent === 'accepted') {
      loadMetaPixel();
    }
  }, []);

  const loadMetaPixel = () => {
    if (typeof window === 'undefined' || (window as any).fbq) return;

    // Use standard non-blocking loading pattern
    (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    (window as any).fbq('init', '925486433274757');
    (window as any).fbq('track', 'PageView');
  };

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
    loadMetaPixel();
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div id="cookie-banner" className="fixed bottom-5 left-5 right-5 max-w-[420px] bg-[#0f2a44] text-white p-[18px] rounded-[14px] font-sans text-sm z-[9999] shadow-[0_12px_30px_rgba(0,0,0,0.25)] block" suppressHydrationWarning>
      <strong className="text-[15px]">Cookies Notice</strong>
      <br /><br />
      We use cookies to make your visit smoother and more helpful.
      <br />
      <div className="mt-3.5 flex gap-2.5">
        <button 
          onClick={handleAccept}
          className="bg-white text-[#0f2a44] py-2 px-[18px] rounded-lg cursor-pointer font-semibold hover:bg-white/90 transition-colors"
        >
          Allow Cookies
        </button>
        <button 
          onClick={handleReject}
          className="bg-transparent text-white border border-white py-2 px-[18px] rounded-lg cursor-pointer font-semibold hover:bg-white/10 transition-colors"
        >
          No, thanks
        </button>
      </div>
    </div>
  );
}
