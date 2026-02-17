import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Globe, Linkedin, Mail, Phone, Clock } from 'lucide-react';
import { navLinks, courses } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
            <div className="space-y-6">
                <Logo />
                <p className="text-sm leading-relaxed">
                    Rushd-e-Institute help you to read, understand, recite and memorize Quran online with excellence and Tajweed.
                </p>
                <div className="flex gap-4">
                    <Button asChild variant="ghost" size="icon" className="bg-slate-800 rounded-lg hover:bg-accent text-white">
                        <Link href="#"><Facebook className="w-5 h-5" /></Link>
                    </Button>
                     <Button asChild variant="ghost" size="icon" className="bg-slate-800 rounded-lg hover:bg-accent text-white">
                        <Link href="#"><Globe className="w-5 h-5" /></Link>
                    </Button>
                     <Button asChild variant="ghost" size="icon" className="bg-slate-800 rounded-lg hover:bg-accent text-white">
                        <Link href="#"><Instagram className="w-5 h-5" /></Link>
                    </Button>
                </div>
            </div>

            <div>
                <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest border-l-4 border-accent pl-4">Our Courses</h4>
                <ul className="space-y-4 text-sm">
                    {courses.slice(0, 5).map(course => (
                         <li key={course.id}>
                            <Link href={`/courses/${course.slug}`} className="hover:text-accent transition-colors">{course.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest border-l-4 border-accent pl-4">Quick Links</h4>
                <ul className="space-y-4 text-sm">
                     {navLinks.map(link => (
                         <li key={link.href}>
                            <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
                        </li>
                     ))}
                     <li>
                        <Link href="/policy" className="hover:text-accent transition-colors">Policy</Link>
                     </li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-bold mb-8 uppercase text-sm tracking-widest border-l-4 border-accent pl-4">Contact Us</h4>
                <ul className="space-y-6 text-sm">
                    <li className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-accent/20 text-accent rounded flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4" />
                        </div>
                        <span>rushdulhidayah@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-accent/20 text-accent rounded flex items-center justify-center shrink-0">
                            <Phone className="w-4 h-4" />
                        </div>
                        <span>+92 339 2008404</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-accent/20 text-accent rounded flex items-center justify-center shrink-0">
                            <Clock className="w-4 h-4" />
                        </div>
                        <span>Mon - Sun: 8am to 10pm</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto pt-10 text-center text-[10px] font-bold tracking-[0.3em] text-slate-600 uppercase">
            &copy; {new Date().getFullYear()} RUSHD UL HIDAYAH INSTITUTE. ALL RIGHTS RESERVED.
        </div>
    </footer>
  );
}
