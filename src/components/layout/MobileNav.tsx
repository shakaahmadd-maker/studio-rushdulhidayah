"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { navLinks } from '@/lib/data';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 w-[300px]">
        <div className="flex items-center justify-between">
           <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
           </Link>
           <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
             <X className="h-6 w-6" />
             <span className="sr-only">Close</span>
           </Button>
        </div>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
             <Link
                href="/about"
                className="text-muted-foreground hover:text-primary"
              >
                About Us
              </Link>
          </div>
          <div className="mt-8">
            <Button asChild className="w-full">
              <Link href="/register">Register</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
