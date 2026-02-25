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

export default function AsaanNamazCoursePage() {
  const [activeTab, setActiveTab] = useState('USA');

  const regions = ['USA', 'UK', 'CANADA', 'AUSTRALIA', 'UAE'];

  const pricingData: { [key: string]: { symbol: string; tiers: number[] } } = {
    'USA': { symbol: '$', tiers: [35, 45, 55] },
    'UK': { symbol: '£', tiers: [30, 40, 50] },
    'CANADA': { symbol: 'C$', tiers: [48, 60, 75] },
    'AUSTRALIA': { symbol: 'A$', tiers: [55, 70, 85] },
    'UAE': { symbol: 'AED', tiers: [130, 165, 200] },
  };

  const courseStructure = [
    { icon: <Users size={22} />, label: 'Class Type', value: 'One-on-One' },
    { icon: <Clock size={22} />, label: 'Class Duration', value: '30 minutes' },
    { icon: <User size={22} />, label: 'Age Level', value: 'Atleast 7 Years' },
    {
      icon: <ShieldCheck size={22} />,
      label: 'Requirements',
      value: 'None',
    },
    {
      icon: <Award size={22} />,
      label: 'Course Level',
      value: 'Beginner',
    },
    {
      icon: <Calendar size={22} />,
      label: 'Course Period',
      value: '1-2 Months',
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
    "The importance and spiritual virtues of Salah.",
    "The complete and correct method of performing Wudu (Ablution).",
    "A step-by-step practical guide to performing Salah.",
    "The meanings of recitations within Salah to improve focus.",
    "How to correct common mistakes made during prayer.",
  ];

  const courseOutline = [
    'Pre-requisites of Salah (Cleanliness, Qibla, Niyyah)',
    'Practical Wudu Demonstration',
    'All Postures of Salah (Qiyam, Ruku, Sajdah, Jalsah)',
    'Recitation of Surah Al-Fatihah & Short Surahs',
    'Recitation of Tashahhud, Durood, and Final Dua',
    'Understanding Fard, Sunnah, and Nafl Prayers',
    'Method of Congregational Prayer',
    'Handling Mistakes (Sajdah Sahw)',
  ];
  
  const courseImage = PlaceHolderImages.find(img => img.id === 'new-course-6');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Page Header */}
      <section className="breadcrumb-banner py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Asaan Namaz <span className="text-accent">Course</span>
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
            <span className="text-accent">Asaan Namaz Course</span>
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
                  alt="Person praying on a prayer mat"
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
                About <span className="text-primary">Asaan Namaz Course</span>
              </h2>
              <div className="w-24 h-2 bg-accent rounded-full"></div>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify">
              <p>
                Salah (Namaz) is the second and most important pillar of Islam. Our Asaan Namaz Course provides a comprehensive, step-by-step guide to learning how to perform prayer correctly according to the Quran and Sunnah. This course is essential for new Muslims, children, and anyone looking to perfect their prayer.
              </p>
              <p>
                Our tutors will practically guide you through every step, from making Wudu (ablution) to the final Tasleem. You will also learn the meanings of the Arabic recitations in Salah to help you concentrate and connect with Allah during your prayers.
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
                    <h3 className="text-2xl font-bold text-primary mb-4">Hadith for importance of Namaz (Salah)</h3>
                    <blockquote className="border-l-4 border-accent pl-6 italic text-slate-700 my-6 text-lg">
                      "The first thing that the servant will be asked about on the Day of Judgment is his prayer. If it is good, then he will be successful, but if it is bad, then he will be a loser."
                      <footer className="text-sm not-italic mt-2 text-slate-500">(Sunan al-Tirmidhi)</footer>
                    </blockquote>
                    <p className="text-slate-600 leading-relaxed">
                      This Hadith emphasizes that Salah (Namaz) is the most important act of worship and the first thing that will be judged on the Day of Judgment. Learning how to pray correctly and performing it with sincerity is not only a vital act of faith but also crucial for success in the Hereafter.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Quranic Verse for the Importance of Prayer:</h3>
                     <blockquote className="border-l-4 border-accent pl-6 italic text-slate-700 my-6 text-lg">
                      "Indeed, prayer has been decreed upon the believers by a decree of specified times."
                      <footer className="text-sm not-italic mt-2 text-slate-500">(Surah An-Nisa, 4:103)</footer>
                    </blockquote>
                    <p className="text-slate-600 leading-relaxed">
                      This verse from the Quran highlights that Salah is an obligatory act for every believer and is prescribed at specific times throughout the day. It is an essential part of a Muslim's daily routine and a direct means of connection with Allah.
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
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Namaz Course <span className="text-primary">Outline</span></h2>
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
              Choose a plan to perfect your Salah.
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
                    Most Popular
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
                    Asaan Namaz Course
                  </h3>
                  <p className="text-xs mb-6 opacity-80 font-semibold tracking-tighter">
                    Step-by-Step Prayer Guide
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
                      { label: 'Age Level', val: 'Atleast 7 Years' },
                      { label: 'Requirements', val: 'None' },
                      { label: 'Course Level', val: 'Beginner' },
                      { label: 'Course Period', val: '1-2 Months' },
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
            Establish Your Connection with Allah
          </h2>
          <p className="text-slate-200 text-xl mb-10 max-w-xl mx-auto">
            Join our Asaan Namaz Course with a <span className="text-accent font-bold">Free 3 Days Trial</span> and bring peace and discipline to your life.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-12 py-5 rounded-2xl text-xl shadow-xl transition-transform hover:scale-105 active:scale-95 h-auto">
            <Link href="/register">Start My Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
