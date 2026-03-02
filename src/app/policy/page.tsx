'use client';

import { useState, useEffect } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PolicyPage() {
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Setting date on mount to avoid hydration mismatch between server and client locales
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <div className="bg-white text-slate-800">
      {/* Page Header */}
      <section className="breadcrumb-banner py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            Privacy <span className="text-accent">Policy</span>
          </h1>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <Link href="/" className="hover:text-accent flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-4 h-4 text-accent" />
            <span className="text-accent">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-24 container mx-auto px-4">
        <div className="prose lg:prose-lg max-w-4xl mx-auto text-justify">
          <p>
            <strong>Last Updated:</strong> {lastUpdated || 'Loading...'}
          </p>

          <h2>Introduction</h2>
          <p>
            Welcome to Rushd Ul Hidayah Institute (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <h4>Personal Data</h4>
          <p>
            Personally identifiable information, such as your name, email address, phone number, and demographic information, like your age, gender, and country, that you voluntarily give to us when you register for a free trial or contact us through our contact form.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Contact you regarding your trial classes, account, or orders.</li>
            <li>Email you with newsletters or other information about our courses.</li>
            <li>Respond to your inquiries and offer support.</li>
            <li>Improve our website and service offerings.</li>
          </ul>

          <h2>Disclosure of Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2>Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>
          
          <h2>Cookie Policy</h2>
          <p>
            We use cookies to enhance your experience, for analytics, and for marketing purposes (such as the Meta Pixel). When you first visit our site, you will be prompted with a cookie banner asking for your consent. You can accept or reject the use of non-essential cookies. Your preferences are stored and can be changed at any time.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Request access to the personal data we hold about you.</li>
            <li>Request a correction of any incorrect data we have about you.</li>
            <li>Request the deletion of your personal data.</li>
            <li>Object to the processing of your personal data.</li>
          </ul>
          <p>
            To exercise these rights, please contact us at quranacademy.rushd@gmail.com.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
            <br />
            <strong>Email:</strong> quranacademy.rushd@gmail.com
            <br />
            <strong>Phone:</strong> +92 331 9937355
          </p>
        </div>
      </section>
    </div>
  );
}
