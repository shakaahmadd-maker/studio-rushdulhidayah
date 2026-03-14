
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');

  if (!logoImage) return null;

  return (
    <Link href="/" className="flex items-center group" aria-label="Home">
      <div className="relative">
        <Image
          src={logoImage.imageUrl}
          alt="Rushd Ul Hidayah Quran Academy"
          width={200}
          height={66}
          className="object-contain transition-transform duration-300 group-hover:scale-105 h-auto w-[160px] md:w-[200px]"
          priority
          quality={80}
          data-ai-hint={logoImage.imageHint}
        />
      </div>
    </Link>
  );
}
