'use client';

import React, { useState } from 'react';
import {
  Clock,
  User,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Award,
  Calendar,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Home,
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function QuranTranslationCoursePage() {
  const [activeTab, setActiveTab] = useState('USA');

  const regions = ['USA', 'UK', 'CANADA', 'AUSTRALIA', 'UAE'];

  const pricingData: { [key: string]: { symbol: string; tiers: number[] } } = {
    'USA': { symbol: '$', tiers: [45, 55, 65] },
    'UK': { symbol: '£', tiers: [40, 50, 60] },
    'CANADA': { symbol: 'C$', tiers: [60, 75, 90] },
    'AUSTRALIA': { symbol: 'A$', tiers: [65, 80, 100] },
    'UAE': { symbol: 'AED', tiers: [165, 200, 240] },
  };

  const courseStructure = [
    { icon: <Users size={22} />, label: 'Class Type', value: 'One-on-One' },
    { icon: <Clock size={22} />, label: 'Class Duration', value: '30 minutes' },
    { icon: <User size={22} />, label: 'Age Level', value: 'Atleast 12 Years' },
    {
      icon: <ShieldCheck size={22} />,
      label: 'Requirements',
      value: 'Fluent Quran Reading',
    },
    {
      icon: <Award size={22} />,
      label: 'Course Level',
      value: 'Intermediate, Advanced',
    },
    {
      icon: <Calendar size={22} />,
      label: 'Course Period',
      value: 'Student Dependent',
    },
    {
      icon: <MessageCircle size={22} />,
      label: 'Tutor',
      value: 'Live Private Tutor',
    },
    { icon: <Users size={22} />, label: 'Gender', value: 'Both Male / Female' },
    {
      icon: <Globe size={22} />,
      label: 'Languages',
      value: 'Urdu / English / Arabic',
    },
    {
      icon: <CreditCard size={22} />,
      label: 'Fee/Month',
      value: 'See Pricing Below',
    },
  ];

  const learningOutcomes = [
    "Word-for-word translation of Quranic verses.",
    "Basic Arabic grammar to understand sentence structure.",
    "The context and background (Shan-e-Nuzul) of key Surahs.",
    "The core message and themes of the Quran.",
    "A deeper spiritual and practical connection with the Quran.",
  ];

  const courseOutline = [
    'Introduction to Quranic Arabic',
    'Basic Arabic Vocabulary & Root Words',
    'Essential Grammar Rules (Nahw and Sarf)',
    'Translation of Juz Amma (Part 30)',
    'Translation of selected key Surahs',
    'Introduction to Tafseer (Exegesis)',
    'Practical application of Quranic teachings',
    'Understanding the linguistic beauty of the Quran',
  ];
  
  const courseImage = PlaceHolderImages.find(img => img.id === 'new-course-4');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Page Header */}
      <section className="breadcrumb-banner py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Quran Translation <span className="text-accent">Course</span>
          </h1>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <Link
              href="/"
              className="hover:text-accent flex items-center gap-1"
            >
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-4 h-4 text-accent" />
            <Link href="/courses" className="hover:text-accent">
              Courses
            </Link>
            <ChevronRight className="w-4 h-4 text-accent" />
            <span className="text-accent">Quran Translation Course</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 container mx-auto px-4 islamic-pattern">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 border-2 border-accent/20 rounded-[40px] translate-x-4 translate-y-4"></div>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              {courseImage && (
                <Image
                  src={courseImage.imageUrl}
                  alt="Islamic calligraphy"
                  width={800}
                  height={500}
                  className="w-full h-[500px] object-cover"
                  data-ai-hint={courseImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                About <span className="text-primary">Quran Translation Course</span>
              </h2>
              <div className="w-24 h-2 bg-accent rounded-full"></div>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify">
              <p>
                Go beyond just reading and connect with the Quran on a deeper level. Our Quran Translation Course is specifically designed to help you understand the words of Allah directly in Arabic. Through a step-by-step guide, we offer word-for-word translation, basic Quranic grammar and the context of each verse to ensure that you gain a deep understanding of the Quran's message.
              </p>
              <p>
                This course is ideal for those who can already read the Quran fluently but want to unlock its deeper meanings. With qualified tutors, we will guide you through the linguistic beauty and profound wisdom of the Holy Quran, transforming your relationship with the Quran and bringing it to life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Importance Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Prophet Muhammad’s (PBUH) Guidance on Seeking Knowledge</h3>
                    <blockquote className="border-l-4 border-accent pl-6 italic text-slate-700 my-6 text-lg">
                      “Seeking knowledge is an obligation upon every Muslim.”
                      <footer className="text-sm not-italic mt-2 text-slate-500">(Sunan Ibn Majah)</footer>
                    </blockquote>
                    <p className="text-slate-600 leading-relaxed">
                      This Hadith highlights the importance of seeking knowledge in Islam. Studying the Quran’s translation is a form of knowledge that allows you to connect deeply with Allah's words. It helps strengthen your faith and transforms your understanding of the Holy Quran.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Quranic Wisdom and Motivation</h3>
                     <blockquote className="border-l-4 border-accent pl-6 italic text-slate-700 my-6 text-lg">
                      “This is the Book about which there is no doubt, a guidance for those conscious of Allah.”
                      <footer className="text-sm not-italic mt-2 text-slate-500">(Surah Al-Baqarah, 2:2)</footer>
                    </blockquote>
                    <p className="text-slate-600 leading-relaxed">
                      The Quran is a source of guidance for all believers. By learning the translation of the Quran, you not only understand the divine message but also build a stronger connection with Allah's will, helping you apply these teachings in your daily life.
                    </p>
                </div>
            </div>
        </div>
      </section>

       {/* Learning Outcomes & Outline */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">What you will <span className="text-primary">Learn in this Course?</span></h2>
                    <div className="space-y-4">
                        {learningOutcomes.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 group">
                                <div className="mt-1 bg-accent/20 p-1 rounded-full text-accent/80 group-hover:bg-accent group-hover:text-white transition-colors">
                                    <CheckCircle size={16} />
                                </div>
                                <p className="text-slate-600 font-medium py-1 border-b border-slate-200 w-full group-hover:text-slate-900 transition-colors">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Translation <span className="text-primary">Course Outline</span></h2>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                        {courseOutline.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 py-2 border-b border-slate-200 group">
                                <ArrowRight size={14} className="text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                <span className="text-slate-600 text-sm group-hover:text-primary font-medium transition-colors">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-16">
            Course <span className="text-primary">Structure</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {courseStructure.map((item, index) => (
              <div key={index} className="bg-white border border-slate-200/80 p-5 rounded-2xl flex flex-col gap-4 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/40">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-accent">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">{item.label}</div>
                  <div className="text-base font-bold text-primary mt-1">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Pricing & Enrollment
            </h2>
            <p className="text-slate-500">
              Choose your plan based on your region.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setActiveTab(region)}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === region
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[3, 4, 5].map((days, index) => (
              <div
                key={days}
                className={`relative flex flex-col bg-white rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
                  index === 1
                    ? 'border-primary ring-4 ring-primary/10 scale-105 z-10'
                    : 'border-slate-100 shadow-xl'
                }`}
              >
                {index === 1 && (
                  <div className="bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                    Recommended
                  </div>
                )}
                <div
                  className={`p-8 text-center ${
                    index === 1
                      ? 'bg-primary text-white'
                      : 'bg-slate-50 text-slate-900'
                  }`}
                >
                  <h3 className="text-lg font-bold mb-1 uppercase tracking-wider">
                    Translation Course
                  </h3>
                  <p className="text-xs mb-6 opacity-80 font-semibold tracking-tighter">
                    Understanding the Quran
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-bold self-start mt-2">
                      {pricingData[activeTab].symbol}
                    </span>
                    <span className="text-6xl font-black">
                      {pricingData[activeTab].tiers[index]}
                    </span>
                    <div className="text-left">
                      <div className="text-xs font-bold opacity-80">.00</div>
                      <div className="text-xs font-bold opacity-80">/Mo</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    <li className="flex justify-between text-sm py-2 border-b border-slate-50">
                      <span className="text-slate-900 font-bold">
                        Classes In a Week:
                      </span>
                      <span className="text-slate-500 font-medium">
                        {days} days/Week
                      </span>
                    </li>
                    {[
                      { label: 'Class Time', val: '30 minutes' },
                      { label: 'Class Type', val: 'One-on-One' },
                      { label: 'Age Level', val: 'Atleast 12 Years' },
                      {
                        label: 'Requirements',
                        val: 'Fluent Quran Reading',
                      },
                      {
                        label: 'Course Level',
                        val: 'Intermediate, Advanced',
                      },
                      {
                        label: 'Course Period',
                        val: "Depends upon student's ability",
                      },
                      { label: 'Tutor', val: 'Live Private tutor' },
                      { label: 'Gender', val: 'Both Male/Female' },
                      { label: 'Languages', val: 'Urdu / English / Arabic' },
                    ].map((row, i) => (
                      <li
                        key={i}
                        className="flex justify-between text-sm py-2 border-b border-slate-50 last:border-0"
                      >
                        <span className="text-slate-900 font-bold">
                          {row.label}:
                        </span>
                        <span className="text-slate-500 font-medium">
                          {row.val}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    asChild
                    className={`w-full py-4 rounded-xl font-bold transition-all h-auto ${
                      index === 1
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    <Link href="/register">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-4xl font-bold mb-6">
            Understand the Quran
          </h2>
          <p className="text-slate-200 text-xl mb-10 max-w-xl mx-auto">
            Enroll in our Translation Course with a <span className="text-accent font-bold">Free 3 Days Trial</span> and connect with the divine message.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-12 py-5 rounded-2xl text-xl shadow-xl transition-transform hover:scale-105 active:scale-95 h-auto">
            <Link href="/register">Start Your Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
