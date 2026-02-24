"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/Logo';
import { navLinks, courses } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    if (open) {
      setOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <SheetContent side="left" className="pr-0 w-[300px]">
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        <SheetDescription className="sr-only">
            A list of navigation links for the site.
        </SheetDescription>
        <div className="flex items-center justify-between pl-6 pr-4">
           <Logo />
        </div>
        <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-y-auto">
          <div className="flex flex-col space-y-2 pr-4">
            {navLinks.map((link) => {
              if (link.href === '/courses') {
                return (
                  <Accordion type="single" collapsible key={link.href} className="w-full">
                    <AccordionItem value="courses" className="border-b-0">
                      <AccordionTrigger className={cn("py-2 text-base font-medium text-muted-foreground hover:text-primary hover:no-underline [&[data-state=open]]:text-primary", {
                        'text-primary': pathname.startsWith('/courses')
                      })}>
                        {link.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-3 pl-7 pt-2 border-l border-border ml-2">
                          <Link href="/courses" className={cn("text-muted-foreground hover:text-primary", { 'text-primary font-medium': pathname === '/courses'})}>All Courses</Link>
                          {courses.map((course) => (
                            <Link
                              key={course.id}
                              href={`/courses/${course.slug}`}
                              className={cn("text-muted-foreground hover:text-primary", { 'text-primary font-medium': pathname === `/courses/${course.slug}`})}
                            >
                              {course.title}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              }
              return (
              <Link
                key={link.href}
                href={link.href}
                className={cn("py-2 text-base font-medium text-muted-foreground hover:text-primary", {
                  "text-primary": pathname === link.href
                })}
              >
                {link.label}
              </Link>
            )})}
          </div>
          <div className="mt-8 pr-4">
            <Button asChild className="w-full bg-accent text-accent-foreground">
              <Link href="/register">Book Trial</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
