
'use client';

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
          width={300}
          height={100}
          className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          priority
          data-ai-hint={logoImage.imageHint}
        />
      )}
    </Link>
  );
}
