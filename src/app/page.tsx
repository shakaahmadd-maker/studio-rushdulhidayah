'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, ChevronRight, GraduationCap, Monitor, Plus, ThumbsUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { newCourses, features as whyChooseUsFeatures, classTypes, sidebarItems } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const [activeSidebarItem, setActiveSidebarItem] = useState(sidebarItems[0]);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <header className="relative min-h-[85vh] flex items-center justify-center text-center text-white px-4">
            <div className="absolute inset-0">
                <Image 
                    src="/hero.png" 
                    alt="Quran learning"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/70"></div>
            </div>
            <div className="relative max-w-4xl space-y-8">
                <h1 className="text-3xl md:text-6xl font-black tracking-tight leading-tight uppercase">
                    ONLINE QURAN <span className="text-accent">LEARNING</span> INSTITUTE
                </h1>
                
                <div className="space-y-4">
                    <p className="arabic text-4xl md:text-6xl text-white/95 font-medium drop-shadow-xl">
                        خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                    </p>
                    <p className="text-lg md:text-xl italic font-light text-slate-100">
                        “The best of you are those who learn the Quran and teach it”
                    </p>
                </div>

                <p className="text-sm md:text-md max-w-xl mx-auto text-slate-200 font-medium">
                    With our Qualified teachers for 3 days of free trial classes, let&apos;s study how to understand the Holy Quran Online.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button asChild size="lg" className="px-8 py-4 rounded-xl font-bold transition-all shadow-xl uppercase text-sm tracking-wider h-auto bg-primary hover:bg-primary/90">
                        <Link href="/courses">START A COURSE</Link>
                    </Button>
                    <Button asChild size="lg" className="px-8 py-4 rounded-xl font-bold transition-all shadow-xl uppercase text-sm tracking-wider h-auto bg-accent hover:bg-accent/90 text-black">
                        <Link href="/register">FREE 3 DAYS TRIAL</Link>
                    </Button>
                </div>
            </div>
        </header>
        
        {/* Enlightenment Banner */}
        <section className="bg-accent py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-white text-center md:text-left">
                <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-black uppercase mb-2 text-primary-foreground">Learn the Quran and Enlighten Your World</h3>
                    <p className="text-accent-foreground/90 font-medium">Join our online classes and change your way of thinking and living life to the righteous Islamic way.</p>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-full font-bold transition-all shadow-lg text-sm shrink-0 uppercase tracking-widest h-auto">
                    <Link href="/register">Enroll Now</Link>
                </Button>
            </div>
        </section>

        {/* Courses Grid */}
        <section className="py-24 container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-primary uppercase">Explore Our <span className="text-accent">Courses</span></h2>
                <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
                <p className="text-slate-500 max-w-xl mx-auto font-medium">Offering Wide Range of Online Quran Courses Since 2009 Highly Trained and Qualified Male and Female Quran Tutors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {newCourses.map(course => {
                    const courseImage = PlaceHolderImages.find(img => img.id === course.imageId);
                    return (
                        <div key={course.id} className="bg-card rounded-3xl border border-slate-100 shadow-lg overflow-hidden flex flex-col group transition-all duration-400 ease-in-out hover:-translate-y-3 hover:shadow-2xl">
                            <div className="h-56 relative overflow-hidden">
                                {courseImage && (
                                    <Image src={courseImage.imageUrl} alt={course.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" data-ai-hint={courseImage.imageHint} />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                                    <span className="bg-accent text-accent-foreground text-[10px] font-black uppercase px-3 py-1 rounded-full">New Batch Available</span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-xl font-black text-primary mb-4 leading-tight">{course.title}</h3>
                                <p className="text-slate-500 text-[13px] leading-relaxed mb-8 flex-1">{course.shortDescription}</p>
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                                    <Link href={`/courses/${course.slug}`} className="text-accent font-black text-[11px] uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Course Details <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>

        {/* Classes and Why Choose Us Section */}
        <section className="bg-secondary py-24 px-4 overflow-hidden">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16">
                
                {/* Start Your Classes Now (Accordion) */}
                <div>
                    <h2 className="text-3xl font-black text-primary mb-8 uppercase tracking-tight">Start <span className="text-accent">Your Classes</span> Now</h2>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {classTypes.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-2xl border border-border hover:border-primary transition-colors">
                          <AccordionTrigger className="w-full p-5 text-left flex justify-between items-center group font-bold text-slate-700 hover:text-primary transition-colors uppercase text-sm hover:no-underline">
                              <span>{item.title}</span>
                              <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all ml-4">
                                  <Plus className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
                              </div>
                          </AccordionTrigger>
                          <AccordionContent className="p-5 pt-0 text-slate-500 text-sm leading-relaxed">
                            {item.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                </div>

                {/* Best Choice Sidebar/List */}
                <div>
                    <h2 className="text-3xl font-black text-primary mb-8 uppercase tracking-tight">Why <span className="text-accent">The Best Choice</span> For You?</h2>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                      {sidebarItems.map(item => (
                        <div 
                          key={item} 
                          onClick={() => setActiveSidebarItem(item)}
                          className={`p-4 border-b border-secondary flex items-center justify-between cursor-pointer transition-colors ${activeSidebarItem === item ? 'bg-primary text-white' : 'hover:bg-secondary'}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className="font-bold">{item}</span>
                            </div>
                            <ChevronRight className={`w-5 h-5 transition-colors ${activeSidebarItem === item ? 'text-accent' : ''}`} />
                        </div>
                      ))}
                        
                        <div className="p-8">
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                Offering our expertise and services for more than a decade, we take pride in being one of the pioneers in establishing an online Quran learning academy in the world. With extensive experience in the Quran teaching services, we offer specialized courses designed to meet the specific learning needs of beginners, children, male and female adults.
                            </p>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We are among the top 10 best online Quran academies of the world and have been offering our services to students in the USA, UK, Australia, Canada, and the Middle East for almost 12 years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Why Choose Us Grid (Icons) */}
        <section className="py-24 container mx-auto px-4">
            <h2 className="text-3xl font-black text-center text-primary mb-16 uppercase">Why <span className="text-accent">Choose Us</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {whyChooseUsFeatures.map(feature => (
                    <div key={feature.title} className="bg-white p-8 rounded-2xl text-center shadow-md border border-slate-100 hover:border-accent transition-all">
                        <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                            <feature.icon className="w-8 h-8" />
                        </div>
                        <h4 className="font-bold text-lg mb-3">{feature.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
      </main>
    </div>
  );
}
