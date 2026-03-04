
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <Link href="/" className="flex items-center group">
      {logoImage && (
        <div className="relative w-[180px] h-[60px] md:w-[240px] md:h-[80px]">
          <Image
            src={logoImage.imageUrl}
            alt="Rushd Ul Hidayah Quran Academy"
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
            quality={80}
            sizes="(max-width: 768px) 180px, 240px"
            data-ai-hint={logoImage.imageHint}
          />
        </div>
      )}
    </Link>
  );
}
