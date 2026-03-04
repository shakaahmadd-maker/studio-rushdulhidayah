'use client';

import { useState, useEffect } from 'react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Delay visibility to not interfere with initial render metrics
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }

    if (consent === 'accepted') {
      loadMetaPixel();
    }
  }, []);

  const loadMetaPixel = () => {
    if (typeof window === 'undefined' || (window as any).fbq) return;

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
    <div id="cookie-banner" className="fixed bottom-5 left-5 right-5 max-w-[420px] bg-[#0f2a44] text-white p-5 rounded-2xl font-sans text-sm z-[9999] shadow-2xl border border-white/10 animate-fade-in">
      <strong className="text-base">Cookies Notice</strong>
      <p className="mt-2 text-slate-200">
        We use cookies to make your visit smoother and more helpful.
      </p>
      <div className="mt-4 flex gap-3">
        <button 
          onClick={handleAccept}
          className="bg-white text-[#0f2a44] py-2 px-5 rounded-lg cursor-pointer font-bold hover:bg-white/90 transition-colors"
        >
          Allow Cookies
        </button>
        <button 
          onClick={handleReject}
          className="bg-transparent text-white border border-white py-2 px-5 rounded-lg cursor-pointer font-bold hover:bg-white/10 transition-colors"
        >
          No, thanks
        </button>
      </div>
    </div>
  );
}
