
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');

  if (!logoImage) return null;

  return (
    <Link href="/" className="flex items-center group" aria-label="Home">
      <div className="relative w-[160px] h-[54px] md:w-[200px] md:h-[66px]">
        <Image
          src={logoImage.imageUrl}
          alt="Rushd Ul Hidayah Quran Academy"
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 160px, 200px"
          quality={85}
          data-ai-hint={logoImage.imageHint}
        />
      </div>
    </Link>
  );
}
