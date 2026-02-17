import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-primary fill-current">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-accent fill-current absolute top-1 right-1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      </div>
      <div>
        <div className="text-lg font-bold tracking-tighter flex flex-col leading-none">
          <span className="text-primary">RUSHD UL HIDAYAH</span>
          <span className="text-accent text-[10px] tracking-[0.25em] mt-0.5">INSTITUTE</span>
        </div>
      </div>
    </Link>
  );
}
