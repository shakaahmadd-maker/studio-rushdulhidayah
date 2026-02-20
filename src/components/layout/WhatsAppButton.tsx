'use client';

import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/923319937355"
      target="_blank"
      rel="noopener noreferrer"
      className="chat-bubble"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="w-8 h-8" />
    </Link>
  );
}
