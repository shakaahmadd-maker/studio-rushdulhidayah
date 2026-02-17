'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  Home,
  ChevronRight,
  CheckCircle2,
  HeartHandshake,
  UserPlus,
  CalendarCheck,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Quote,
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const aboutImage1 = PlaceHolderImages.find(img => img.id === 'new-course-3');

export default function AboutPage() {
  const visionItems = ['Our Motivation', 'Global Reach', 'Curriculum Focus', 'Future Goals'];
  const [activeVision, setActiveVision] = useState(visionItems[0]);

  const visionDetails = {
    'Our Motivation': {
      title: 'Empowering the Next Generation',
      number: '01',
      content: [
        'Muslims are present all across the globe. In western countries, it is often difficult to find reliable, effective, and trustworthy sources of Islamic teachings.',
        'Realizing this profound need, we started offering online Quran teaching services for students living in all parts of the world. Our vision was to help parents and individuals find the best online Quran academy no matter which part of the world they reside in.',
        'By bringing together a team of professional Quran teachers we help Muslims overcome the stresses of providing quality Islamic education to their children and family members.',
      ],
      imageId: 'new-course-1',
      imageTitle: 'Serving the Global Ummah',
    },
    'Global Reach': {
      title: 'Connecting Muslims Worldwide',
      number: '02',
      content: [
        'Our digital platform transcends geographical boundaries, allowing us to connect with students from the USA, UK, Canada, Australia, UAE, and beyond.',
        'We believe that knowledge should be accessible to everyone, regardless of their location. Our flexible scheduling and diverse team of tutors from various backgrounds ensure that we can cater to a global audience.',
        'Through technology, we are building a global community of learners united by their love for the Quran and Islamic knowledge.',
      ],
      imageId: 'new-course-9',
      imageTitle: 'A Global Classroom',
    },
    'Curriculum Focus': {
      title: 'Comprehensive and Tailored Learning',
      number: '03',
      content: [
        'Our curriculum is designed to be comprehensive, covering everything from the basic Noorani Qaida for beginners to advanced courses in Tajweed, Memorization, and Translation.',
        'We understand that each student learns differently. That\'s why we offer personalized one-on-one sessions, allowing our tutors to tailor their teaching methods to the individual needs and pace of the student.',
        'Our goal is not just to teach recitation, but to foster a deep understanding and love for the Quranic message through courses like Tafseer and Islamic Studies.',
      ],
      imageId: 'new-course-4',
      imageTitle: 'Structured Knowledge',
    },
    'Future Goals': {
      title: 'Innovating for Islamic Education',
      number: '04',
      content: [
        'We are constantly looking for ways to innovate and improve the online learning experience. Our future goals include developing an interactive mobile app for learning on the go.',
        'We also plan to expand our course offerings to include more specialized subjects in Islamic sciences, and to create a resource hub with articles, videos, and lectures from renowned scholars.',
        'Our ultimate aim is to be a beacon of authentic Islamic knowledge in the digital age, continuously adapting to meet the evolving needs of the Ummah.',
      ],
      imageId: 'hero-1',
      imageTitle: 'The Path Forward',
    },
  };
  
  const currentVision = visionDetails[activeVision as keyof typeof visionDetails];
  const visionImage = PlaceHolderImages.find(img => img.id === currentVision.imageId);


  return (
    <div className="bg-white text-slate-800 overflow-x-hidden">
      {/* Page Header / Breadcrumbs */}
      <section className="breadcrumb-banner py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            About <span className="text-accent">Our Institute</span>
          </h1>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <Link href="/" className="hover:text-accent flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-4 h-4 text-accent" />
            <span className="text-accent">Who We Are</span>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 container mx-auto px-4 islamic-pattern">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 border-2 border-accent/20 rounded-[40px] translate-x-4 translate-y-4"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              {aboutImage1 && (
                <Image
                  src={aboutImage1.imageUrl}
                  alt="Student Reading Quran"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  data-ai-hint={aboutImage1.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-accent p-8 rounded-3xl shadow-2xl text-accent-foreground border-4 border-white hidden md:block">
              <p className="text-5xl font-black leading-none">15+</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Years of Excellence</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h4 className="text-accent font-black tracking-[0.3em] text-xs uppercase">Welcome to Rushd Ul Hidayah</h4>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Pioneering <span className="text-primary">Online Quran</span> Education Since 2009
              </h2>
              <div className="w-24 h-2 bg-accent rounded-full"></div>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p className="italic font-medium text-foreground border-l-4 border-accent pl-6 py-2">
                &quot;Our mission is to bridge the gap between traditional Islamic knowledge and modern digital convenience, making the Holy Quran accessible to every household globally.&quot;
              </p>
              <p>
                <strong className="text-primary">Rushd Ul Hidayah Institute</strong> was established as a comprehensive platform for premium online Quran classes. We specialize in providing carefully designed and effectively executed online Quran learning classes for Muslim men, women, and children of all ages.
              </p>
              <p>
                Suitable for the entire family, we are affordable on your pocket and expert in what we do. Our highly qualified and professional team of Quran teachers is always ready to go the extra mile to help students master Tajweed and Hifz, regardless of their starting level.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-primary/5 border border-primary/10 px-5 py-3 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-tight text-primary">Certified Methodology</span>
                </div>
                <div className="bg-primary/5 border border-primary/10 px-5 py-3 rounded-2xl flex items-center gap-3">
                  <CheckCircle2 className="text-accent w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-tight text-primary">Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support/Values Section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M5 0 L10 5 L5 10 L0 5 Z" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">Why <span className="text-accent">Choose Our</span> Services</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">Providing a supportive environment for your spiritual growth.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent transition-all group">
              <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:-translate-y-1 transition-transform">
                <HeartHandshake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Affordable for All</h3>
              <p className="text-xs text-slate-400 leading-relaxed">We offer free registration and trial classes. Nominal fees ensure quality Islamic education remains accessible to every Muslim family.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent transition-all group">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1 transition-transform">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">1-on-1 Attention</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Dedicated personal tutors provide exclusive attention, ensuring your child focuses effectively on Tajweed and memorization.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent transition-all group">
              <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:-translate-y-1 transition-transform">
                <CalendarCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Flexible Schedule</h3>
              <p className="text-xs text-slate-400 leading-relaxed">On-demand classes scheduled according to your comfort. Learn from the convenience of your home at any time that suits you.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-accent transition-all group">
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:-translate-y-1 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Tutors</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Our team consists of internationally acclaimed, certified male and female tutors with extensive teaching experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 container mx-auto px-4 islamic-pattern">
        <h2 className="text-3xl md:text-5xl font-black text-primary mb-16 uppercase text-center lg:text-left">
          The Vision <span className="text-accent">Behind Our Academy</span>
        </h2>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              {visionItems.map((item) => (
                <div
                  key={item}
                  onClick={() => setActiveVision(item)}
                  className={`vision-sidebar-item ${activeVision === item ? 'active' : ''}`}
                >
                  {item}
                  <ArrowRight className={`w-4 h-4 transition-colors ${activeVision === item ? 'text-accent' : ''}`} />
                </div>
              ))}
            </div>
            <div className="mt-8 bg-accent p-6 rounded-3xl text-accent-foreground relative overflow-hidden group">
              <BookOpen className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20 group-hover:rotate-12 transition-transform" />
              <p className="text-sm font-bold uppercase tracking-widest mb-2">Need Help?</p>
              <p className="text-xs mb-4 opacity-90">Book your free 3-day trial classes today.</p>
              <Button asChild variant="secondary" className="bg-white text-primary rounded-full font-bold text-xs uppercase hover:bg-primary hover:text-white transition-all">
                <Link href="/register">Register Now</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="relative rounded-[40px] overflow-hidden mb-8 shadow-xl h-64">
              {visionImage && (
                  <Image
                    key={visionImage.id}
                    src={visionImage.imageUrl}
                    alt={currentVision.imageTitle}
                    fill
                    className="w-full h-full object-cover animate-fade-in"
                    data-ai-hint={visionImage.imageHint}
                  />
              )}
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                <h3 key={activeVision + '-title'} className="text-white text-3xl font-black uppercase tracking-widest text-center px-4 animate-fade-in">{currentVision.imageTitle}</h3>
              </div>
            </div>
            <div key={activeVision} className="p-8 md:p-12 bg-white rounded-[40px] border border-slate-100 shadow-sm relative animate-fade-in">
              <div className="space-y-6">
                <p className="text-xl font-extrabold text-primary flex items-center gap-3">
                  <span className="w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs">{currentVision.number}</span>
                  {currentVision.title}
                </p>
                {currentVision.content.map((p, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {p}
                    </p>
                ))}
                <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg">
                      <Quote />
                    </div>
                    <p className="text-xs font-bold text-slate-400 italic">&quot;Changing lives through the <br/>magnificent word of Allah.&quot;</p>
                  </div>
                  <Button asChild size="lg" className="px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] h-auto shadow-xl shadow-blue-900/20">
                     <Link href="/register">JOIN OUR MISSION <ChevronRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
