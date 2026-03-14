
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useUser } from '@/firebase/auth/use-user';
import { Mail, Phone, MessageSquare, Video, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks, courses } from '@/lib/data';
import { MobileNav } from '@/components/layout/MobileNav';

export function Header() {
  const pathname = usePathname();
  const { user } = useUser();
  const [mounted, setMounted] = React.useState(false);
  const [coursesMenuOpen, setCoursesMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md lg:shadow-sm border-b border-slate-100 bg-white">
      {/* Top Info Bar - Mobile-First Responsive */}
      <div className="bg-[#1a365d] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-[9px] md:text-[10px] font-medium">
          <div className="flex gap-3 md:gap-6">
            <a href="tel:+923319937355" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <img src="https://flagcdn.com/w20/pk.png" className="w-3.5 h-2.5 object-cover rounded-[1px]" alt="PK" />
              +92 331 9937355
            </a>
            <a href="tel:+447451298124" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <img src="https://flagcdn.com/w20/gb.png" className="w-3.5 h-2.5 object-cover rounded-[1px]" alt="UK" />
              +44 7451 298124
            </a>
            <a href="mailto:quranacademy.rushd@gmail.com" className="hidden sm:flex items-center gap-1 hover:text-accent transition-colors uppercase">
              <Mail className="w-3 h-3 text-amber-400" /> EMAIL US
            </a>
          </div>
          <div className="flex gap-3 font-bold uppercase tracking-wider">
            <a href="https://wa.me/923319937355" className="flex items-center gap-1 hover:text-accent transition-colors">
              <MessageSquare className="w-3 h-3" /> <span className="hidden xs:inline">WHATSAPP</span>
            </a>
            <a href="https://us05web.zoom.us/chat/invite/0c2aY4nBB7gpYp82Y_GKA" className="hidden sm:flex items-center gap-1 hover:text-accent transition-colors">
              <Video className="w-3 h-3" /> ZOOM
            </a>
            {mounted && user && (
              <Link href="/admin" className="text-amber-400">ADMIN</Link>
            )}
            <Link href="/contact" className="hover:text-accent transition-colors">CONTACT</Link>
          </div>
        </div>
      </div>

      {/* Main Brand Header */}
      <div className="bg-white border-b border-slate-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <div className="lg:hidden">
              <MobileNav />
            </div>
            <Logo />
          </div>
          
          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => {
              if (link.href === "/courses") {
                return (
                  <DropdownMenu key={link.href} open={coursesMenuOpen} onOpenChange={setCoursesMenuOpen}>
                    <DropdownMenuTrigger asChild>
                      <Link href="/courses" className={cn(
                        "text-xs font-black uppercase tracking-widest flex items-center gap-1",
                        pathname.startsWith('/courses') ? "text-primary border-b-2 border-accent pb-1" : "text-slate-600 hover:text-primary"
                      )}>
                        {link.label}
                        <ChevronDown className={cn("w-3 h-3 transition-transform", coursesMenuOpen && "rotate-180")} />
                      </Link>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 p-2 bg-white rounded-xl shadow-2xl">
                      <DropdownMenuItem asChild className="rounded-lg p-3 focus:bg-primary focus:text-white font-bold text-[10px] uppercase tracking-widest">
                        <Link href="/courses">All Course Catalog</Link>
                      </DropdownMenuItem>
                      <div className="h-px bg-slate-100 my-2"></div>
                      {courses.map(course => (
                        <DropdownMenuItem key={course.id} asChild className="rounded-lg p-3 focus:bg-primary focus:text-white font-bold text-[10px] uppercase tracking-widest">
                          <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn(
                    "text-xs font-black uppercase tracking-widest",
                    pathname === link.href ? "text-primary border-b-2 border-accent pb-1" : "text-slate-600 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white text-[10px] font-extrabold px-4 py-2 rounded shadow-sm uppercase tracking-wide h-auto">
            <Link href="/register">BOOK TRIAL</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
