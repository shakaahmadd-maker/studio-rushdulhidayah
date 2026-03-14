
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { newCourses } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ClassTypesAccordion } from '@/components/home/ClassTypesAccordion';
import { ChoiceSidebar } from '@/components/home/ChoiceSidebar';

export default function Home() {
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-main');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <header className="hero-section relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center text-white px-4 overflow-hidden">
            {heroImage && (
              <Image 
                src={heroImage.imageUrl} 
                alt="Academy Hero Background" 
                fill 
                className="object-cover z-0" 
                priority 
                fetchPriority="high"
                loading="eager"
                quality={85}
                sizes="100vw"
                data-ai-hint={heroImage.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px] z-10"></div>
            <div className="relative max-w-4xl space-y-8 z-20 pt-10">
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-7xl font-black tracking-tight leading-tight uppercase drop-shadow-2xl">
                        ONLINE QURAN <span className="text-accent underline decoration-accent/30 underline-offset-8">LEARNING</span><br />
                        <span className="text-white">ACADEMY</span>
                    </h1>
                </div>
                
                <div className="space-y-4">
                    <p className="arabic text-5xl md:text-7xl text-white font-medium drop-shadow-2xl text-center leading-relaxed">
                        خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                    </p>
                    <p className="text-lg md:text-2xl italic font-light text-slate-100 max-w-2xl mx-auto text-center border-y border-white/10 py-3">
                        “The best of you are those who learn the Quran and teach it”
                    </p>
                </div>

                <p className="text-sm md:text-lg max-w-xl mx-auto text-slate-200 font-medium text-center px-4">
                    With our Qualified teachers for 3 days of free trial classes, let's study how to understand the Holy Quran Online.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-6">
                    <Button asChild size="lg" className="px-8 py-5 rounded-2xl font-black transition-all shadow-xl uppercase text-xs tracking-widest h-auto bg-primary hover:bg-primary/90 hover:scale-105">
                        <Link href="/courses">START A COURSE</Link>
                    </Button>
                    <Button asChild size="lg" className="px-8 py-5 rounded-2xl font-black transition-all shadow-xl uppercase text-xs tracking-widest h-auto bg-accent hover:bg-accent/90 text-black hover:scale-105">
                        <Link href="/register">FREE 3 DAYS TRIAL</Link>
                    </Button>
                </div>
            </div>
        </header>
        
        {/* Brand Identity Bar */}
        <section className="bg-white py-8 border-b border-slate-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Trusted Worldwide</p>
                    <div className="h-px w-12 bg-slate-200 hidden md:block"></div>
                    {logoImage && (
                        <div className="relative w-[160px] h-[54px] md:w-[200px] md:h-[66px]">
                          <Image 
                              src={logoImage.imageUrl} 
                              alt="Rushd Ul Hidayah Quran Academy Logo" 
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 160px, 200px"
                              quality={70}
                          />
                        </div>
                    )}
                    <div className="h-px w-12 bg-slate-200 hidden md:block"></div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Since 2009</p>
                </div>
            </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 container mx-auto px-4 islamic-pattern">
            <div className="text-center mb-16 space-y-4">
                <h4 className="text-accent font-black tracking-[0.4em] text-xs uppercase">Our Expertise</h4>
                <h2 className="text-3xl md:text-6xl font-black text-primary uppercase leading-tight">Explore Our <span className="text-accent">Courses</span></h2>
                <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {newCourses.map(course => {
                    const courseImage = PlaceHolderImages.find(img => img.id === course.imageId);
                    return (
                        <div key={course.id} className="bg-card rounded-[32px] border border-slate-100 shadow-lg overflow-hidden flex flex-col group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="h-56 md:h-64 relative overflow-hidden">
                                {courseImage && (
                                    <Image 
                                      src={courseImage.imageUrl} 
                                      alt={course.title} 
                                      fill 
                                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      quality={75}
                                      data-ai-hint={courseImage.imageHint} 
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                                    <span className="bg-accent text-accent-foreground text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">New Batch</span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1 bg-white">
                                <h3 className="text-xl font-black text-primary mb-3 leading-tight group-hover:text-accent transition-colors">{course.title}</h3>
                                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8 flex-1 text-justify">{course.shortDescription}</p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                                    <Link href={`/courses/${course.slug}`} className="text-primary font-black text-[10px] uppercase tracking-widest flex items-center gap-2 group-hover:text-accent transition-all">
                                        View Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Gift of Knowledge CTA Section */}
        <section className="py-20 px-4">
            <div className="container mx-auto bg-primary rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                
                <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-6xl font-black uppercase leading-tight">
                            Give Your Child the <br/><span className="text-accent">Gift of Knowledge</span>
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>
                    
                    <p className="text-slate-200 text-lg md:text-2xl max-w-3xl mx-auto font-medium">
                        Book a Free 3 Days Trial for our Islamic Studies course and see how much your child enjoys learning.
                    </p>
                    
                    <div className="pt-4">
                        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-10 md:px-16 py-6 md:py-8 rounded-2xl text-lg md:text-xl uppercase tracking-widest h-auto shadow-2xl transition-all hover:scale-105 active:scale-95 border-b-4 border-black/20">
                            <Link href="/register">Register for Free Trial</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/* Interactive Sections */}
        <section className="bg-slate-50 py-20 px-4 overflow-hidden border-y border-slate-100">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 md:gap-20">
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h4 className="text-accent font-black tracking-[0.4em] text-xs uppercase">Get Started</h4>
                        <h2 className="text-3xl font-black text-primary uppercase leading-tight">Start <span className="text-accent">Your Classes</span> Now</h2>
                        <div className="w-14 h-1.5 bg-accent rounded-full"></div>
                    </div>
                    <ClassTypesAccordion />
                </div>

                <div className="space-y-8">
                    <div className="space-y-3">
                        <h4 className="text-accent font-black tracking-[0.4em] text-xs uppercase">Our Promise</h4>
                        <h2 className="text-3xl font-black text-primary uppercase leading-tight">Why <span className="text-accent">The Best Choice</span>?</h2>
                        <div className="w-14 h-1.5 bg-accent rounded-full"></div>
                    </div>
                    <ChoiceSidebar />
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
