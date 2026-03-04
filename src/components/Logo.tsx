"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');
  const containerClasses = "relative w-[200px] h-[66px] md:w-[240px] md:h-[80px]";

  return (
    <Link href="/" className="flex items-center group">
      {logoImage && (
        <div className={containerClasses}>
          <Image
            src={logoImage.imageUrl}
            alt="Rushd Ul Hidayah Quran Academy"
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
            quality={90}
            sizes="(max-width: 768px) 200px, 240px"
            data-ai-hint={logoImage.imageHint}
          />
        </div>
      )}
    </Link>
  );
}
