'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useEffect } from 'react';

export function Logo() {
  const [mounted, setMounted] = useState(false);
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a fixed aspect ratio container to prevent layout shift and mismatches
  const containerClasses = "relative w-[180px] h-[60px] md:w-[220px] md:h-[74px]";

  if (!mounted) {
    return <div className={containerClasses} />;
  }

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
            data-ai-hint={logoImage.imageHint}
          />
        </div>
      )}
    </Link>
  );
}
