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
    { label: 'All Courses', active: true },
    { label: 'For Kids', active: false },
    { label: 'Tajweed', active: false },
    { label: 'Hifz', active: false },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Redesigned for Mobile-First & Desktop High Impact */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center text-white px-6 py-16 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/75 to-[#0f172a]/85 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight uppercase">
            ONLINE QURAN <span className="gold-underline">LEARNING</span> ACADEMY
          </h1>
          
          <div className="space-y-4">
            <p className="arabic text-4xl md:text-8xl drop-shadow-2xl">خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
            <p className="text-[13px] md:text-2xl font-medium text-slate-100 italic">
              &quot;The best of you are those who learn the Quran and teach it&quot;
            </p>
          </div>

          <p className="text-[11px] md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            With our Qualified teachers for 3 days of free trial classes, let&apos;s study how to understand the Holy Quran Online.
          </p>

          <div className="flex flex-col gap-3 px-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white py-6 md:py-8 md:px-10 rounded-md font-bold text-xs md:text-sm uppercase tracking-widest shadow-lg h-auto">
              <Link href="/courses">START A COURSE</Link>
            </Button>
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 py-6 md:py-8 md:px-10 rounded-md font-bold text-xs md:text-sm uppercase tracking-widest shadow-lg h-auto">
              <Link href="/register">FREE 3 DAYS TRIAL</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Horizontal Categories - Scrollable Pill Navbar (Visible ONLY on Mobile) */}
      <div className="px-5 -mt-6 relative z-20 lg:hidden">
        <div className="flex overflow-x-auto gap-3 no-scrollbar pb-2 mask-fade-right">
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={cn(
                "flex-shrink-0 px-6 py-2.5 rounded-full font-bold text-[13px] border shadow-sm transition-all",
                cat.active ? "bg-[#1e3a8a] text-white border-[#1e3a8a]" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Features Section - Restored from Desktop Version */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content / Courses Grid - Floating Card Style */}
      <main className="container mx-auto px-5 py-20 bg-slate-50/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e3a8a] uppercase tracking-tight">
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
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-amber-500 text-white text-[9px] px-3 py-1.5 rounded-full font-bold uppercase shadow-lg">
                    NEW BATCH
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-extrabold text-[#1e3a8a] mb-4 leading-tight group-hover:text-amber-600 transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1 text-justify">
                    {course.shortDescription}
                  </p>
                  <Link 
                    href={`/courses/${course.slug}`} 
                    className="text-[#1e3a8a] font-bold text-xs flex items-center gap-2 uppercase tracking-widest mt-auto group-hover:gap-3 transition-all hover:text-amber-600"
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
                <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
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
                    <span className="font-bold text-blue-900 uppercase text-sm tracking-wide">{item}</span>
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
            <h2 className="text-3xl md:text-5xl font-black text-blue-900 uppercase mb-6">
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
