
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks, courses } from '@/lib/data';
import { MobileNav } from './MobileNav';
import { Mail, Phone, Video, ChevronDown, MessageSquare, Users } from 'lucide-react';
import { useUser } from '@/firebase/auth/use-user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const pathname = usePathname();
  const { user } = useUser();
  const [coursesMenuOpen, setCoursesMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-slate-100">
      {/* Top Contact Bar - Simple Blue & Yellow Theme */}
      <div className="bg-primary text-primary-foreground text-[11px] md:text-xs py-2.5 px-4 font-bold uppercase tracking-wider">
          <div className="container mx-auto w-full flex justify-between items-center">
              <div className="flex items-center gap-6 md:gap-10">
                  <a href="mailto:quranacademy.rushd@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                    <Mail className="w-3.5 h-3.5 text-accent" /> 
                    Email Us
                  </a>
                  <a href="tel:+923319937355" className="hidden sm:flex items-center gap-2 hover:text-accent transition-colors">
                    <Phone className="w-3.5 h-3.5 text-accent" /> 
                    +92 331 9937355
                  </a>
              </div>
              <div className="flex items-center gap-5">
                  <a href="https://wa.me/923319937355" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                    <MessageSquare className="w-3.5 h-3.5 text-accent" />
                    WhatsApp
                  </a>
                  <a href="https://us05web.zoom.us/chat/invite/0c2aY4nBB7gpYp82Y_GKA" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-1.5 hover:text-accent transition-colors">
                    <Video className="w-3.5 h-3.5 text-accent" /> 
                    Zoom
                  </a>
                  <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
                  {user && (
                     <Link href="/admin" className="bg-accent text-primary px-3 py-0.5 rounded-full hover:bg-white transition-colors">Admin</Link>
                  )}
              </div>
          </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => {
                if (link.href === "/courses") {
                  return (
                    <DropdownMenu key={link.href} open={coursesMenuOpen} onOpenChange={setCoursesMenuOpen}>
                      <DropdownMenuTrigger
                        asChild
                        onMouseEnter={() => setCoursesMenuOpen(true)}
                        onMouseLeave={() => setCoursesMenuOpen(false)}
                      >
                        <Link href="/courses" className={cn(
                          "nav-link text-sm font-black tracking-widest flex items-center gap-1.5 transition-colors",
                          pathname.startsWith('/courses') ? "text-primary border-b-2 border-accent pb-1" : "text-slate-600 hover:text-primary"
                        )}>
                          {link.label}
                          <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", coursesMenuOpen && "rotate-180")} />
                        </Link>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent 
                        className="w-64 p-2 bg-white rounded-2xl shadow-2xl border-slate-100"
                        onMouseEnter={() => setCoursesMenuOpen(true)}
                        onMouseLeave={() => setCoursesMenuOpen(false)}
                      >
                        <DropdownMenuItem asChild className="rounded-xl font-bold text-xs uppercase tracking-widest focus:bg-primary focus:text-white p-3">
                          <Link href="/courses">All Course Catalog</Link>
                        </DropdownMenuItem>
                        <div className="h-px bg-slate-100 my-2 mx-2"></div>
                        {courses.map(course => (
                          <DropdownMenuItem key={course.id} asChild className="rounded-xl font-bold text-xs uppercase tracking-widest focus:bg-primary focus:text-white p-3">
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
                        "nav-link text-sm font-black tracking-widest transition-all", 
                        pathname === link.href ? "text-primary border-b-2 border-accent pb-1" : "text-slate-600 hover:text-primary"
                    )}
                  >
                      {link.label}
                  </Link>
                )
            })}
             <Button asChild className="bg-accent text-primary-foreground font-black px-8 py-3 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-xl shadow-accent/20 ml-4 h-auto uppercase text-xs tracking-widest hover:scale-105 active:scale-95">
                <Link href="/register">Book Trial</Link>
             </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
