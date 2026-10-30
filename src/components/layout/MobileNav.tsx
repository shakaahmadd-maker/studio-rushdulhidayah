"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const categories = [
    { label: 'All Courses', href: '/courses' },
    { label: 'For Kids', href: '/courses/islamic-studies-for-kids' },
    { label: 'Tajweed', href: '/courses/quran-reading' },
    { label: 'Hifz', href: '/courses/quran-memorization' },
  ];

  const mainLinks = [
    { label: 'Courses', href: '/courses' },
    { label: 'About', href: '/about' },
    { label: 'Register', href: '/register' },
    { label: 'FAQ', href: '/faq' },
  ];

  React.useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="p-2 text-slate-800"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 w-[300px] border-r-0 bg-white">
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        <SheetDescription className="sr-only">
            Navigation links for Rushd Ul Hidayah Quran Academy.
        </SheetDescription>
        
        <div className="flex items-center justify-between pl-6 pr-4 border-b border-slate-50 pb-4">
           <Logo />
        </div>

        <div className="my-6 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-y-auto">
          {/* Group 1: Course Categories */}
          <div className="mb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-2">Course Categories</p>
            <div className="flex flex-col space-y-1">
              {categories.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between py-3 px-3 rounded-xl transition-all font-bold text-sm",
                    pathname === item.href 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {item.label}
                  <ChevronRight className={cn("w-4 h-4", pathname === item.href ? "text-accent" : "text-slate-300")} />
                </Link>
              ))}
            </div>
          </div>

          {/* Group 2: Quick Links */}
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-2">Quick Links</p>
            <div className="flex flex-col space-y-1 pr-4">
              {mainLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "py-3 px-3 rounded-xl font-bold text-sm transition-colors",
                    pathname === item.href ? "text-primary bg-primary/5" : "text-slate-600 hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 pr-6">
            <Button asChild size="lg" className="w-full bg-accent hover:bg-amber-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-amber-500/20 py-6 h-auto">
              <Link href="/register">Book Trial</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
