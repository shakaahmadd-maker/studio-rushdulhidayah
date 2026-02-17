import Link from 'next/link';
import { BookHeart } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <BookHeart className="h-8 w-8 text-primary" />
      <span className="font-headline text-2xl font-bold text-primary">
        QuranConnect
      </span>
    </Link>
  );
}
