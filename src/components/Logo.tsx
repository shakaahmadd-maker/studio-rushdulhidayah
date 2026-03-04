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

  // Fixed container to prevent layout shift and hydration mismatches
  const containerClasses = "relative w-[200px] h-[66px] md:w-[240px] md:h-[80px]";

  if (!mounted) {
    return <div className={containerClasses} />;
  }

  return (
    <Link href="/" className="flex items-center group" suppressHydrationWarning={true}>
      {logoImage && (
        <div className={containerClasses} suppressHydrationWarning={true}>
          <Image
            src={logoImage.imageUrl}
            alt="Rushd Ul Hidayah Quran Academy"
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
            quality={90}
            data-ai-hint={logoImage.imageHint}
          />
        </div>
      )}
    </Link>
  );
}
