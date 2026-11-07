'use client';

import React, { useState } from 'react';
import { Share2, Check, MessageSquare, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const getUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/blog/${slug}`;
    }
    return `https://rushdulhidayah.com/blog/${slug}`;
  };

  const handleCopy = () => {
    const url = getUrl();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: 'Link Copied!',
        description: 'Article link copied to clipboard.',
      });
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const url = getUrl();
    const text = encodeURIComponent(`Read this inspiring article on Rushd Ul Hidayah Quran Academy: "${title}"\n${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleTwitter = () => {
    const url = getUrl();
    const text = encodeURIComponent(`"${title}" - Sacred Knowledge & Quranic Insights from Rushd Ul Hidayah Quran Academy`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
  };

  const handleLinkedIn = () => {
    const url = getUrl();
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5" /> Share Article:
      </span>

      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        title="Copy article link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700">Copied</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      <button
        onClick={handleWhatsApp}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/60 transition-colors"
        title="Share on WhatsApp"
      >
        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
        <span>WhatsApp</span>
      </button>

      <button
        onClick={handleTwitter}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200/60 transition-colors"
        title="Share on X (Twitter)"
      >
        <Twitter className="w-3.5 h-3.5 text-sky-600" />
        <span>Twitter / X</span>
      </button>

      <button
        onClick={handleLinkedIn}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/60 transition-colors"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5 text-blue-600" />
        <span>LinkedIn</span>
      </button>
    </div>
  );
}
