"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <Link href="/" className="flex items-center group">
      {logoImage && (
        <Image
          src={logoImage.imageUrl}
          alt="Rushd Ul Hidayah Quran Academy"
          width={240}
          height={80}
          className="object-contain transition-transform duration-300 group-hover:scale-105 h-auto w-[200px] md:w-[240px]"
          priority
          quality={90}
          data-ai-hint={logoImage.imageHint}
        />
      )}
    </Link>
  );
}
