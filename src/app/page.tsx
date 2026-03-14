import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { newCourses, features } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { GiftOfKnowledgeCTA } from '@/components/GiftOfKnowledgeCTA';
import { ChoiceSidebar } from '@/components/home/ChoiceSidebar';
import { ClassTypesAccordion } from '@/components/home/ClassTypesAccordion';
import { cn } from '@/lib/utils';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-main');

  const categories = [
    { label: 'All Courses', href: '/courses', active: true },
    { label: 'For Kids', href: '/courses/islamic-studies-for-kids', active: false },
    { label: 'Tajweed', href: '/courses/quran-reading', active: false },
    { label: 'Hifz', href: '/courses/quran-memorization', active: false },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Precise alignment to reference image */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center text-center text-white px-4 py-16 overflow-hidden">
        {heroImage && (
          <Image 
            src={heroImage.imageUrl} 
            alt="Academy Hero Background" 
            fill 
            className="object-cover z-0" 
            priority 
            fetchPriority="high"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/95 z-10"></div>
        
        <div className="relative z-20 max-w-4xl mx-auto w-full">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black leading-[1.1] tracking-tight uppercase mb-8">
            ONLINE QURAN <span className="text-accent inline-block relative">LEARNING<span className="absolute bottom-1 left-0 w-full h-[3px] md:h-2 bg-accent"></span></span>
            <br />
            ACADEMY
          </h1>
          
          {/* Arabic Text & Translation */}
          <div className="mb-8 px-2">
            <p className="arabic text-3xl sm:text-5xl md:text-7xl mb-6 leading-normal drop-shadow-2xl text-white">
              خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
            </p>
            <p className="text-[13px] sm:text-xl md:text-3xl font-medium text-slate-100 italic tracking-tight leading-relaxed max-w-3xl mx-auto">
              &quot;The best of you are those who learn the Quran and teach it&quot;
            </p>
          </div>

          {/* Separator & Subtext */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="w-full h-px bg-white/20 mb-10"></div>
            <p className="text-[11px] sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed px-4">
              With our Qualified teachers for 3 days of free trial classes, 
              <br className="hidden sm:block" />
              let&apos;s study how to understand the Holy Quran Online.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white py-7 px-12 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl h-auto border-b-4 border-black/20 transition-all active:scale-95">
              <Link href="/courses">START A COURSE</Link>
            </Button>
            <Button asChild size="lg" className="w-full sm:w-auto bg-accent hover:bg-amber-600 text-slate-900 py-7 px-12 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl h-auto border-b-4 border-black/20 transition-all active:scale-95">
              <Link href="/register">FREE 3 DAYS TRIAL</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Horizontal Categories - Functional Links (Visible ONLY on Mobile) */}
      <div className="px-5 -mt-6 relative z-20 lg:hidden">
        <div className="flex overflow-x-auto gap-3 no-scrollbar pb-2 mask-fade-right">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className={cn(
                "flex-shrink-0 px-6 py-2.5 rounded-full font-bold text-[13px] border shadow-md transition-all active:scale-95",
                cat.active 
                  ? "bg-primary text-white border-primary" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content / Courses Grid - Floating Card Style */}
      <main className="container mx-auto px-5 py-20 bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tight">
            EXPLORE OUR <span className="text-amber-500">COURSES</span>
          </h2>
          <div className="w-20 h-1.5 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">Structured learning programs designed for excellence in Quranic education.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newCourses.map((course) => {
            const courseImage = PlaceHolderImages.find(img => img.id === course.imageId);
            return (
              <div key={course.id} className="bg-white rounded-[24px] shadow-xl shadow-slate-200/50 overflow-hidden border border-white flex flex-col group transition-all hover:-translate-y-2">
                <div className="relative h-64 w-full">
                  {courseImage && (
                    <Image 
                      src={courseImage.imageUrl} 
                      alt={course.title} 
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, 400px"
                      data-ai-hint={courseImage.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-amber-500 text-white text-[9px] px-3 py-1.5 rounded-full font-bold uppercase shadow-lg">
                    NEW BATCH
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-extrabold text-primary mb-4 leading-tight group-hover:text-amber-600 transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1 text-justify">
                    {course.shortDescription}
                  </p>
                  <Link 
                    href={`/courses/${course.slug}`} 
                    className="text-primary font-bold text-xs flex items-center gap-2 uppercase tracking-widest mt-auto group-hover:gap-3 transition-all hover:text-amber-600"
                  >
                    VIEW DETAILS <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Why Rushd Ul Hidayah - Restored Interactive Sidebar */}
      <section className="py-24 bg-white islamic-pattern overflow-hidden">
        <div className="container mx-auto px-5">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h4 className="text-amber-500 font-black tracking-[0.3em] text-xs uppercase">Your Trusted Partner</h4>
                <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                  Why Choose <span className="text-amber-500">Rushd Ul Hidayah?</span>
                </h2>
                <div className="w-24 h-2 bg-amber-500 rounded-full"></div>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                We are committed to providing the most effective and accessible Quranic education for the global Muslim community.
              </p>
              <div className="space-y-4">
                {['Certified Professional Tutors', 'Flexible 24/7 Scheduling', '1-on-1 Personalized Attention'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-500 w-6 h-6" />
                    <span className="font-bold text-primary uppercase text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <ChoiceSidebar />
            </div>
          </div>
        </div>
      </section>

      {/* Class Types Section - Restored Accordion */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-primary uppercase mb-6">
              Everything You <span className="text-amber-500">Need to Know</span>
            </h2>
            <p className="text-slate-500 text-lg">Detailed information about our class structures and methodologies.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ClassTypesAccordion />
          </div>
        </div>
      </section>

      <GiftOfKnowledgeCTA />
    </div>
  );
}
