"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks, courses } from '@/lib/data';
import { MobileNav } from './MobileNav';
import { Mail, Phone, Video, ChevronDown } from 'lucide-react';
import { useUser } from '@/firebase/auth/use-user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const pathname = usePathname();
  const { user, loading } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm border-b border-gray-100">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground text-[11px] md:text-xs py-2 px-4">
          <div className="container mx-auto w-full flex justify-between items-center">
              <div className="flex items-center gap-4 md:gap-8">
                  <a href="mailto:rushdulhidayah@gmail.com" className="flex items-center gap-2 font-medium hover:text-accent transition-colors">
                    <Mail className="w-3.5 h-3.5 text-accent" /> 
                    rushdulhidayah@gmail.com
                  </a>
                  <a href="tel:+923392008404" className="hidden sm:flex items-center gap-2 font-medium hover:text-accent transition-colors">
                    <Phone className="w-3.5 h-3.5 text-accent" /> 
                    +92 339 2008404
                  </a>
              </div>
              <div className="flex items-center gap-4">
                  <a href="skype:quran.e.institute?chat" className="flex items-center gap-1.5 cursor-pointer hover:text-accent transition-colors uppercase font-bold tracking-tighter">
                    <Video className="w-3.5 h-3.5" /> 
                    Skype
                  </a>
                  <Link href="/contact" className="flex items-center gap-1.5 cursor-pointer hover:text-accent transition-colors uppercase font-bold tracking-tighter">Contact</Link>
                  {user && (
                     <Link href="/admin" className="flex items-center gap-1.5 cursor-pointer hover:text-accent transition-colors uppercase font-bold tracking-tighter">Admin</Link>
                  )}
              </div>
          </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => {
                if (link.href === "/courses") {
                  return (
                    <DropdownMenu key={link.href}>
                      <DropdownMenuTrigger asChild>
                        <button className={cn(
                          "nav-link hover:text-primary flex items-center gap-1",
                          pathname.startsWith('/courses') ? "text-primary" : "text-slate-600"
                        )}>
                          {link.label}
                          <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuItem asChild>
                          <Link href="/courses">All Courses</Link>
                        </DropdownMenuItem>
                        {courses.map(course => (
                          <DropdownMenuItem key={course.id} asChild>
                            <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                return (
                  <Link key={link.href} href={link.href} className={cn("nav-link hover:text-primary", pathname === link.href ? "text-primary" : "text-slate-600")}>
                      {link.label}
                  </Link>
                )
            })}
             <Button asChild className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full hover:bg-accent/90 transition-all shadow-md ml-2 h-auto">
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
