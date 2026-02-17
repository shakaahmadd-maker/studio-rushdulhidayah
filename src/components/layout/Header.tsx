"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { MobileNav } from './MobileNav';
import { Mail, Phone } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="hidden bg-[#c38f49] text-white md:block">
        <div className="container flex h-10 items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:quraneinstitute@gmail.com" className="hover:underline">
              quraneinstitute@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
             <a href="skype:quran.e.institute?chat" className="flex items-center gap-2 hover:underline">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current"><title>Skype</title><path d="M22.5 13.7c-.3-1.4-.8-2.7-1.5-3.8-.8-1.2-1.8-2.2-3-3s-2.5-1.4-4-1.6C12.3 5 10.7 5 9.2 5.3c-1.4.3-2.7.8-3.8 1.5-1.2.8-2.2 1.8-3 3S1 12.3 1 14c0 1.7 0 3.3.4 4.8.3 1.4.8 2.7 1.5 3.8 1.1 1.6 2.6 2.8 4.4 3.5 1.7.6 3.5.8 5.2.5 1.8-.3 3.4-.9 4.9-1.8 1.5-.9 2.7-2.1 3.6-3.6.8-1.4 1.2-2.9 1.4-4.5.2-1.7.2-3.4 0-5zm-5.7-4.4c.3 0 .5.2.6.5.1.4 0 .8-.3 1l-3.3 2.6c-.2.2-.5.3-.7.3h-2.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.9l3.5-2.9zM16.8 9.3c.1-.1.1-.1.1-.1.2.1.2.1.2.1.1.2.1.3 0 .4l-3.4 2.8-1.1-.9L16.8 9.3zm-5 4.8c-.3 0-.5.2-.5.5v2.8c0 .3.2.5.5.5h2.8c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-2.2v-2.2c.1-.3-.1-.6-.4-.6zm.5-1.7c.3.2.5.5.6.8.1.3 0 .7-.3 1-.2.2-.5.3-.8.3h-2.8c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.2c.1 0 .2 0 .2-.1.1 0 .1-.1.1-.1v-2.8c0-.3.2-.5.5-.5s.5.2.5.5v1.9zm-4.3 6.9c-2.3-1-4-2.8-4.9-5.1-.3-1.1-.5-2.2-.5-3.3 0-1.2.1-2.5.4-3.7.4-1.2.9-2.3 1.6-3.3s1.6-1.8 2.7-2.5c.8-.5 1.7-.9 2.6-1.2 1-.3 1.9-.4 2.9-.4 1.2 0 2.4.1 3.6.4 1.2.3 2.3.8 3.3 1.6 1 .7 1.8 1.6 2.5 2.7.5.8.9 1.7 1.2 2.6.3 1 .4 1.9.4 2.9 0 1.2-.1 2.4-.4 3.6-.3 1.2-.8 2.3-1.6 3.3-.7 1-1.6 1.8-2.7 2.5-.8.5-1.7.9-2.6 1.2-1 .3 1.9-.4 2.9-.4-1.2 0-2.4-.1-3.6-.4-1.2-.3-2.3-.8-3.3-1.5z"/></svg>
                <span>Skype</span>
            </a>
            <span className="text-gray-300">|</span>
            <a href="/contact" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        
        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* You can add a search bar here if needed */}
          </div>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
