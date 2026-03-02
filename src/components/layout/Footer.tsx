import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Mail, Phone, Clock, Video, Users } from 'lucide-react';
import { navLinks, courses } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <footer className="artistic-footer" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              
              {/* Brand Section */}
              <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                        {logoImage ? (
                             <div className='relative w-64 h-24'>
                                <Image 
                                    src={logoImage.imageUrl}
                                    alt="Rushd Ul Hidayah Quran Academy"
                                    fill
                                    className="object-contain logo-glow"
                                    data-ai-hint={logoImage.imageHint}
                                />
                             </div>
                        ) : (
                            <div>
                                <h3 className="text-white font-bold text-xl leading-tight uppercase tracking-widest">Rushd Ul Hidayah</h3>
                                <p className="text-amber-500 text-xs font-bold tracking-[0.3em]">QURAN ACADEMY</p>
                            </div>
                        )}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm font-light">
                      Helping you to read, understand, recite and memorize Quran online with excellence and Tajweed. Join our community for a transformative spiritual journey.
                  </p>
                  <div className="flex space-x-3 pt-2">
                      <a href="https://www.facebook.com/rushdulhidayahquranacademy" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all">
                          <Facebook className="text-white w-4 h-4" />
                      </a>
                      <a href="https://www.instagram.com/rushdulhidayah/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-all">
                          <Instagram className="text-white w-4 h-4" />
                      </a>
                  </div>
              </div>

              {/* Courses Section */}
              <div>
                  <div className="flex items-center space-x-3 mb-8">
                      <div className="section-accent"></div>
                      <h4 className="text-white font-bold tracking-widest uppercase text-xs">Our Courses</h4>
                  </div>
                  <ul className="space-y-4">
                      {courses.slice(0, 5).map(course => (
                          <li key={course.id}>
                              <Link href={`/courses/${course.slug}`} className="footer-link text-sm text-slate-300">{course.title}</Link>
                          </li>
                      ))}
                  </ul>
              </div>

              {/* Quick Links Section */}
              <div>
                  <div className="flex items-center space-x-3 mb-8">
                      <div className="section-accent"></div>
                      <h4 className="text-white font-bold tracking-widest uppercase text-xs">Quick Links</h4>
                  </div>
                  <ul className="grid grid-cols-2 gap-y-4 gap-x-4">
                      {navLinks.map(link => (
                          <li key={link.href}>
                              <Link href={link.href} className="footer-link text-sm text-slate-300">{link.label}</Link>
                          </li>
                      ))}
                      <li><Link href="/policy" className="footer-link text-sm text-slate-300">Policy</Link></li>
                  </ul>
              </div>

              {/* Contact Section */}
              <div>
                  <div className="flex items-center space-x-3 mb-8">
                      <div className="section-accent"></div>
                      <h4 className="text-white font-bold tracking-widest uppercase text-xs">Contact Us</h4>
                  </div>
                  <div className="space-y-3">
                      <a href="mailto:quranacademy.rushd@gmail.com" className="contact-card p-4 rounded-xl flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                              <Mail className="text-amber-500 w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Email Us</span>
                              <span className="text-xs break-all text-slate-200">quranacademy.rushd@gmail.com</span>
                          </div>
                      </a>
                      <a href="tel:+923319937355" className="contact-card p-4 rounded-xl flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                              <Phone className="text-amber-500 w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Call Support</span>
                              <span className="text-xs text-slate-200">+92 331 9937355</span>
                          </div>
                      </a>
                      <a href="https://us05web.zoom.us/chat/invite/0c2aY4nBB7gpYp82Y_GKA" target="_blank" rel="noopener noreferrer" className="contact-card p-4 rounded-xl flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                              <Video className="text-amber-500 w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Zoom</span>
                              <span className="text-xs text-slate-200">Join our Zoom chat</span>
                          </div>
                      </a>
                      <a href="https://teams.live.com/l/invite/FEAbutBuRQ0iihAVAE?v=g1" target="_blank" rel="noopener noreferrer" className="contact-card p-4 rounded-xl flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                              <Users className="text-amber-500 w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Teams</span>
                              <span className="text-xs text-slate-200">Join our Teams chat</span>
                          </div>
                      </a>
                      <div className="contact-card p-4 rounded-xl flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center flex-shrink-0">
                              <Clock className="text-amber-500 w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Availability</span>
                              <span className="text-xs text-slate-200">24/7 (All days of week)</span>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/5 bg-black/20 py-10 relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                  <p className="text-[10px] tracking-[0.3em] text-slate-400 uppercase font-bold">
                      © {new Date().getFullYear()} RUSHD UL HIDAYAH QURAN ACADEMY.
                  </p>
                  <p className="text-[9px] text-slate-500 mt-1 uppercase tracking-widest">Global Islamic Education Platform</p>
              </div>
              <div className="flex space-x-8 text-[11px] text-slate-300 uppercase tracking-widest font-medium">
                  <Link href="/policy" className="hover:text-amber-500 transition-colors">Privacy</Link>
                  <Link href="#" className="hover:text-amber-500 transition-colors">Terms</Link>
                  <Link href="#" className="hover:text-amber-500 transition-colors">Sitemap</Link>
              </div>
          </div>
      </div>
    </footer>
  );
}
