import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Logo() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <Link href="/" className="flex items-center">
      {logoImage ? (
        <Image
          src={logoImage.imageUrl}
          alt="Rushd Ul Hidayah Institute"
          width={384}
          height={175}
          className="h-10 w-auto"
          priority
          data-ai-hint={logoImage.imageHint}
        />
      ) : (
        <div>
            <div className="text-lg font-bold tracking-tighter flex flex-col leading-none">
              <span className="text-primary">RUSHD UL HIDAYAH</span>
              <span className="text-accent text-[10px] tracking-[0.25em] mt-0.5">INSTITUTE</span>
            </div>
        </div>
      )}
    </Link>
  );
}
