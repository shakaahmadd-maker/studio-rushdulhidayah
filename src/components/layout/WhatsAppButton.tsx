'use client';

import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923319937355"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-whatsapp text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-whatsapp/90 transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-7 h-7" />
    </Link>
  );
}
