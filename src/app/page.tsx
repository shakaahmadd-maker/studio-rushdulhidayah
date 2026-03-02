'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ChevronRight, GraduationCap, Monitor, Plus, ThumbsUp, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { newCourses, features as whyChooseUsFeatures, classTypes, sidebarItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [activeSidebarItem, setActiveSidebarItem] = useState(sidebarItems[0]);
  const logoImage = PlaceHolderImages.find(img => img.id === 'logo-main');

  const sidebarContent = {
    "Leading Online Quran Academy": {
      description: "Rushd Ul Hidayah Quran Academy brings the Quran to your fingertips, connecting students from every corner of the world. From Basic Noorani Qaida to Quran Reading and Memorization, our expert teachers guide every student with personalized care and attention.",
      subheading: "Why choose us?",
      points: [
        "Experienced, passionate teachers",
        "Students from across the globe",
        "Complete courses for beginners to advanced learners"
      ]
    },
    "Effective Quran Teaching Methodology": {
      description: "We blend traditional Quranic teachings with modern online learning to make learning meaningful and fun. Courses like Quran Translation, Asaan Namaz and Islamic Studies for Kids help students understand, memorize and apply the Quran in daily life.",
      subheading: "Why it works:",
      points: [
        "Step-by-Step learning for every level",
        "Focus on Tajweed, memorization and comprehension",
        "Interactive, engaging online classes"
      ]
    },
    "Trustworthy and Reliable Quran Academy": {
      description: "At Rushd Ul Hidayah Quran Academy, trust is our foundation. With courses like 40 Hadees and 40 Basic Du’a’in, parents can track progress transparently while knowing their children are learning in a safe, supportive environment.",
      subheading: "Our promise:",
      points: [
        "Verified student progress",
        "Secure, reliable online platform",
        "Transparent teaching & feedback"
      ]
    },
    "Internationally Acclaimed Quran Academy": {
      description: "Our academy is recognized worldwide, welcoming students from Pakistan, USA, UK, UAE and beyond. With certificate-based courses and specialized programs, students gain Quranic knowledge that is respected internationally.",
      subheading: "Global edge:",
      points: [
        "Students from multiple countries",
        "Courses designed to international standards",
        "Certificates for all major courses"
      ]
    }
  };

  const currentContent = sidebarContent[activeSidebarItem as keyof typeof sidebarContent];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <header 
          className="hero-section relative min-h-[85vh] flex items-center justify-center text-center text-white px-4 bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
            <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]"></div>
            <div className="relative max-w-4xl space-y-10 z-10">
                <div className="space-y-4 animate-fade-in">
                    <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight uppercase drop-shadow-2xl">
                        ONLINE QURAN <span className="text-accent underline decoration-accent/30 underline-offset-8">LEARNING</span><br />
                        <span className="text-white">ACADEMY</span>
                    </h1>
                </div>
                
                <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
                    <p className="arabic text-5xl md:text-7xl text-white font-medium drop-shadow-2xl text-center leading-relaxed">
                        خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                    </p>
                    <p className="text-xl md:text-2xl italic font-light text-slate-100 max-w-2xl mx-auto text-center border-y border-white/10 py-4">
                        “The best of you are those who learn the Quran and teach it”
                    </p>
                </div>

                <p className="text-base md:text-lg max-w-xl mx-auto text-slate-200 font-medium animate-fade-in [animation-delay:400ms] text-center">
                    With our Qualified teachers for 3 days of free trial classes, let&apos;s study how to understand the Holy Quran Online.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6 animate-fade-in [animation-delay:600ms]">
                    <Button asChild size="lg" className="px-10 py-6 rounded-2xl font-black transition-all shadow-2xl uppercase text-sm tracking-widest h-auto bg-primary hover:bg-primary/90 hover:scale-105 active:scale-95">
                        <Link href="/courses">START A COURSE</Link>
                    </Button>
                    <Button asChild size="lg" className="px-10 py-6 rounded-2xl font-black transition-all shadow-2xl uppercase text-sm tracking-widest h-auto bg-accent hover:bg-accent/90 text-black hover:scale-105 active:scale-95">
                        <Link href="/register">FREE 3 DAYS TRIAL</Link>
                    </Button>
                </div>
            </div>
            
            {/* Animated Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-accent to-transparent"></div>
            </div>
        </header>
        
        {/* Brand Identity Bar */}
        <section className="bg-white py-16 border-b border-slate-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Trusted Worldwide</p>
                    <div className="h-px w-16 bg-slate-200 hidden md:block"></div>
                    {logoImage && (
                        <div className="relative w-80 h-32">
                          <Image 
                              src={logoImage.imageUrl} 
                              alt="Rushd Ul Hidayah Quran Academy Logo" 
                              fill
                              className="object-contain"
                              priority
                          />
                        </div>
                    )}
                    <div className="h-px w-16 bg-slate-200 hidden md:block"></div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Since 2009</p>
                </div>
            </div>
        </section>

        {/* Enlightenment Banner */}
        <section className="bg-accent py-12">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8 text-white text-center lg:text-left">
                <div className="flex-1 space-y-2">
                    <h3 className="text-3xl md:text-4xl font-black uppercase text-primary-foreground leading-tight">Learn the Quran and Enlighten Your World</h3>
                    <p className="text-accent-foreground/90 font-bold text-lg">Join our online classes and change your way of thinking and living life to the righteous Islamic way.</p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 px-10 py-5 rounded-2xl font-black transition-all shadow-2xl text-base shrink-0 uppercase tracking-widest h-auto hover:scale-105">
                    <Link href="/register">Enroll Now Today</Link>
                </Button>
            </div>
        </section>

        {/* Courses Grid */}
        <section className="py-24 container mx-auto px-4 islamic-pattern">
            <div className="text-center mb-20 space-y-4">
                <h4 className="text-accent font-black tracking-[0.4em] text-xs uppercase">Our Expertise</h4>
                <h2 className="text-4xl md:text-6xl font-black text-primary uppercase leading-tight">Explore Our <span className="text-accent">Courses</span></h2>
                <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
                <p className="text-slate-500 max-w-2xl mx-auto font-semibold text-lg">Offering Wide Range of Online Quran Courses Since 2009 Highly Trained and Qualified Male and Female Quran Tutors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {newCourses.map(course => {
                    const courseImage = PlaceHolderImages.find(img => img.id === course.imageId);
                    return (
                        <div key={course.id} className="bg-card rounded-[40px] border border-slate-100 shadow-xl overflow-hidden flex flex-col group transition-all duration-500 ease-in-out hover:-translate-y-4 hover:shadow-2xl">
                            <div className="h-64 relative overflow-hidden">
                                {courseImage && (
                                    <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" data-ai-hint={courseImage.imageHint} />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-8">
                                    <span className="bg-accent text-accent-foreground text-[11px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg">New Batch Available</span>
                                </div>
                            </div>
                            <div className="p-10 flex flex-col flex-1 bg-white">
                                <h3 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{course.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-1">{course.shortDescription}</p>
                                <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
                                    <Link href={`/courses/${course.slug}`} className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-3 group-hover:text-accent transition-all">
                                        View Details <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Classes and Why Choose Us Section */}
        <section className="bg-slate-50 py-24 px-4 overflow-hidden border-y border-slate-100">
            <div className="container mx-auto grid lg:grid-cols-2 gap-20">
                
                {/* Start Your Classes Now (Accordion) */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h4 className="text-accent font-black tracking-[0.4em] text-xs uppercase">Get Started</h4>
                        <h2 className="text-4xl font-black text-primary uppercase tracking-tight leading-tight">Start <span className="text-accent">Your Classes</span> Now</h2>
                        <div className="w-16 h-1.5 bg-accent rounded-full"></div>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {classTypes.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-3xl border-none shadow-sm hover:shadow-md transition-all overflow-hidden">
                          <AccordionTrigger className="w-full p-6 text-left flex justify-between items-center group font-bold text-slate-700 hover:text-primary transition-colors uppercase text-sm hover:no-underline">
                              <span>{item.title}</span>
                              <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all ml-4">
                                  <Plus className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                              </div>
                          </AccordionTrigger>
                          <AccordionContent className="p-6 pt-0 text-slate-500 text-base leading-relaxed font-medium">
                            {item.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                </div>

                {/* Best Choice Sidebar/List */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h4 className="text-accent font-black tracking-[0.4em] text-xs uppercase">Our Promise</h4>
                        <h2 className="text-4xl font-black text-primary uppercase tracking-tight leading-tight">Why <span className="text-accent">The Best Choice</span> For You?</h2>
                        <div className="w-16 h-1.5 bg-accent rounded-full"></div>
                    </div>
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 border-b border-slate-50">
                        {sidebarItems.map(item => (
                            <div 
                            key={item} 
                            onClick={() => setActiveSidebarItem(item)}
                            className={`p-6 border-r border-slate-50 lg:border-r-0 lg:border-b last:border-0 flex items-center justify-between cursor-pointer transition-all ${activeSidebarItem === item ? 'bg-primary text-white scale-[1.02] z-10 shadow-lg' : 'hover:bg-slate-50 text-slate-600'}`}
                            >
                                <span className="font-bold text-xs uppercase tracking-wider">{item}</span>
                                <ChevronRight className={`w-5 h-5 hidden lg:block transition-colors ${activeSidebarItem === item ? 'text-accent' : 'text-slate-300'}`} />
                            </div>
                        ))}
                      </div>
                        
                        <div key={activeSidebarItem} className="p-10 animate-fade-in flex-1">
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium italic border-l-4 border-accent pl-6">
                                {currentContent.description}
                            </p>
                            <h4 className="font-black text-primary mb-6 uppercase tracking-widest text-sm">{currentContent.subheading}</h4>
                            <ul className="space-y-4">
                                {currentContent.points.map((point, index) => (
                                    <li key={index} className="flex items-center gap-4 text-base text-slate-500 font-bold">
                                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                            <CheckCircle className="w-4 h-4 text-accent" />
                                        </div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Us Grid (Icons) */}
        <section className="py-24 container mx-auto px-4 islamic-pattern">
            <div className="text-center mb-20 space-y-4">
                <h4 className="text-accent font-black tracking-[0.4em] text-xs uppercase">Core Values</h4>
                <h2 className="text-4xl md:text-6xl font-black text-center text-primary mb-4 uppercase">Why <span className="text-accent">Choose Us</span></h2>
                <div className="w-24 h-2 bg-accent mx-auto rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {whyChooseUsFeatures.map(feature => (
                    <div key={feature.title} className="bg-white p-10 rounded-[40px] text-center shadow-xl border border-slate-50 hover:border-accent hover:-translate-y-2 transition-all duration-500 group">
                        <div className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/20 group-hover:bg-accent group-hover:text-black transition-colors duration-500">
                            <feature.icon className="w-10 h-10" />
                        </div>
                        <h4 className="font-black text-xl mb-4 text-primary group-hover:text-accent transition-colors uppercase tracking-tight">{feature.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
      </main>
    </div>
  );
}
