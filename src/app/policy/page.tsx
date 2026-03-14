'use client';

import { Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { BackButton } from '@/components/BackButton';

export default function PolicyPage() {
  return (
    <div className="bg-white text-slate-800">
      {/* Page Header */}
      <section className="breadcrumb-banner py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <BackButton variant="light" />
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
        <div className="prose lg:prose-lg max-w-4xl mx-auto text-justify prose-headings:text-primary prose-strong:text-slate-900 prose-li:text-slate-600 prose-p:text-slate-600">
          <h1 className="text-3xl font-black mb-2">Privacy Policy: Rushd Ul Hidayah Institute</h1>
          <p className="text-sm font-bold text-accent uppercase tracking-widest mb-12">
            Last Updated: March 2, 2026
          </p>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">1</span>
            Introduction
          </h2>
          <p>
            Welcome to Rushd Ul Hidayah Institute (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are deeply committed to protecting your privacy and ensuring that your personal information is handled in a secure and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our educational services.
          </p>
          <p>
            By accessing our site, you agree to the terms outlined in this policy. If you do not agree with these terms, please discontinue use of our services immediately.
          </p>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">2</span>
            Information We Collect
          </h2>
          <p>
            We collect information that helps us provide a personalized and high-quality learning experience. This includes:
          </p>
          <ul>
            <li><strong>Personal Identification Data:</strong> Name, email address, phone number (WhatsApp), and home address.</li>
            <li><strong>Demographic Data:</strong> Age, gender, and country of residence, which helps us assign appropriate tutors.</li>
            <li><strong>Educational Data:</strong> Information regarding your current level of Quranic proficiency or specific learning goals.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, and operating system collected automatically via cookies for site optimization.</li>
          </ul>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">3</span>
            How We Use Your Information
          </h2>
          <p>
            Your data is used strictly to enhance your experience with the Institute. Specific uses include:
          </p>
          <ul>
            <li><strong>Account Management:</strong> Creating and maintaining your student profile.</li>
            <li><strong>Communication:</strong> Sending reminders for trial classes, schedules, and administrative updates.</li>
            <li><strong>Marketing & Newsletters:</strong> Sharing updates on new courses or educational content (you may opt-out at any time).</li>
            <li><strong>Service Improvement:</strong> Analyzing website traffic to make our platform more user-friendly.</li>
            <li><strong>Support:</strong> Efficiently responding to your inquiries and technical issues.</li>
          </ul>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">4</span>
            Disclosure of Your Information
          </h2>
          <p>
            We do not sell, trade, or rent your Personal Identifiable Information to third parties. We only share information with trusted service providers (such as hosting partners or payment processors) who assist us in operating our business. These parties are legally bound to keep your information confidential and are prohibited from using your data for any other purpose.
          </p>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">5</span>
            Security of Your Information
          </h2>
          <p>
            We implement a variety of administrative, technical, and physical security measures to protect your data.
          </p>
          <ul>
            <li><strong>Encryption:</strong> We use standard encryption protocols for data transmission.</li>
            <li><strong>Access Control:</strong> Only authorized staff members involved in your education have access to your personal details.</li>
            <li><strong>Risk Acknowledgment:</strong> While we strive for 100% security, please note that no digital transmission over the internet is entirely immune to interception.</li>
          </ul>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">6</span>
            Children’s Privacy
          </h2>
          <p>
            As an institute that provides services to minors, we take children&apos;s privacy very seriously.
          </p>
          <ul>
            <li>We do not knowingly collect personal information from children under 13 without explicit parental or guardian consent.</li>
            <li>If you are a parent and believe your child has provided us with personal data without your permission, please contact us immediately so we can delete the information.</li>
          </ul>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">7</span>
            Cookie Policy & Tracking
          </h2>
          <p>
            We use cookies and tracking technologies (like the Meta Pixel) to:
          </p>
          <ul>
            <li>Analyze website traffic.</li>
            <li>Remember your preferences for future visits.</li>
            <li>Measure the effectiveness of our advertisements.</li>
          </ul>
          <p>
            Upon your first visit, a Cookie Banner will allow you to &quot;Accept&quot; or &quot;Reject&quot; non-essential cookies. You can modify these settings through your browser at any time.
          </p>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">8</span>
            Your Legal Rights
          </h2>
          <p>
            You maintain full control over your data. You have the right to:
          </p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request that we update any inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> Request that we erase your personal data from our records.</li>
            <li><strong>Withdrawal of Consent:</strong> Opt-out of marketing emails or data processing at any time.</li>
          </ul>
          <p>
            To exercise these rights, please email us at <a href="mailto:quranacademy.rushd@gmail.com" className="text-primary font-bold hover:underline">quranacademy.rushd@gmail.com</a>.
          </p>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">9</span>
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised &quot;Last Updated&quot; date. We encourage you to review this policy regularly.
          </p>

          <h2 className="text-2xl font-black mt-12 mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm">10</span>
            Contact Information
          </h2>
          <p>
            If you have any questions, concerns, or complaints regarding this Privacy Policy, please reach out to us:
          </p>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
            <p className="m-0"><strong>Email:</strong> <a href="mailto:quranacademy.rushd@gmail.com" className="text-primary hover:underline">quranacademy.rushd@gmail.com</a></p>
            <p className="m-0"><strong>Phone/WhatsApp (PK):</strong> +92 331 9937355</p>
            <p className="m-0"><strong>Phone (UK):</strong> +44 7451 298124</p>
            <p className="m-0"><strong>Website:</strong> <Link href="/" className="text-primary hover:underline font-bold">www.rushdulhidayah.com</Link></p>
          </div>
        </div>
      </section>
    </div>
  );
}
