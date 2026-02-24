'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Clock,
  User,
  Users,
  Globe,
  CheckCircle,
  ArrowRight,
  Award,
  Calendar,
  MessageCircle,
  Star,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  HeartHandshake,
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function DuainCoursePage() {
  const [activeTab, setActiveTab] = useState('USA');

  const regions = ['USA', 'UK', 'CANADA', 'AUSTRALIA', 'UAE'];

  const pricingData: { [key: string]: { symbol: string; tiers: number[] } } = {
    'USA': { symbol: '$', tiers: [30, 40, 50] },
    'UK': { symbol: '£', tiers: [25, 35, 45] },
    'CANADA': { symbol: 'C$', tiers: [40, 55, 68] },
    'AUSTRALIA': { symbol: 'A$', tiers: [45, 60, 75] },
    'UAE': { symbol: 'AED', tiers: [110, 150, 185] },
  };

  const courseStructure = [
    { icon: <Users size={22} />, label: 'Class Type', value: 'One-on-One' },
    { icon: <Clock size={22} />, label: 'Class Duration', value: '30 minutes' },
    { icon: <User size={22} />, label: 'Age Level', value: 'All Ages' },
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
      value: 'Urdu / English',
    },
    {
      icon: <CreditCard size={22} />,
      label: 'Fee/Month',
      value: 'See Pricing Below',
    },
  ];

  const learningOutcomes = [
    "Memorization of 40 essential supplications (Duas) for daily life.",
    "The translation and meaning of each Dua to make them more impactful.",
    "The proper etiquette (Adab) of making Dua to Allah.",
    "The power and importance of Dua in a Muslim's life.",
    "When and how to make specific supplications for various occasions.",
  ];

  const courseOutline = [
    'Dua for Waking Up & Sleeping',
    'Dua for Eating & Drinking',
    'Dua for Entering & Leaving the House',
    'Dua for Entering & Leaving the Mosque',
    'Dua for Dressing & Undressing',
    'Dua for using the Washroom',
    'Dua for Traveling',
    'Dua for Seeking Knowledge',
    'Dua for visiting the sick',
    'Masnoon Duas from the Sunnah',
  ];
  
  const courseImage = PlaceHolderImages.find(img => img.id === 'new-course-8');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-accent py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary inline-block px-4 py-1 rounded text-white font-bold text-lg mb-4 shadow-sm">
            40 Basic Dua'in Course
          </div>
          <div className="flex items-center gap-2 text-primary-foreground font-medium text-sm">
            <span>Home</span> <ChevronRight size={14} />{' '}
            <span>Courses</span> <ChevronRight size={14} />{' '}
            <span>40 Basic Dua'in Course</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">
            About <span className="text-primary">40 Basic Dua'in Course</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                    {courseImage && (
                        <Image 
                            src={courseImage.imageUrl}
                            alt="40 Basic Dua'in Course"
                            fill
                            className="object-cover"
                            data-ai-hint={courseImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                Introduction to 40 Basic Dua'in Course
              </h3>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Enrich your daily life with the remembrance of Allah through our 40 Basic Dua'in Course. Dua (supplication) is a powerful form of worship that directly connects us to Allah (SWT). This course is designed to help students of all ages memorize and understand essential Duas from the Quran and Sunnah, making it an essential tool for daily Islamic practice.
                </p>
                <p>
                  Learn the supplications for various activities, from waking up in the morning to going to sleep at night. Understanding and reciting these Duas not only bring blessings into your actions but also enhance your mindfulness of Allah throughout the day. By making Dua a regular part of your routine, you’ll experience a closer connection to Allah, seeking His mercy, guidance, and blessings in all aspects of your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Dua Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 items-start">
            <div className="hidden sm:block w-1.5 h-48 bg-primary rounded-full relative">
              <div className="absolute -top-1 -left-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
              <div className="absolute -bottom-1 -left-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Dua: Changing Fate and Seeking Allah’s Mercy</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed max-w-4xl">
                  <p>
                      In Islam, Dua is a means of changing your destiny and seeking Allah’s mercy and help. As Allah says in the Quran:
                  </p>
                  <blockquote className="border-l-4 border-accent pl-4 italic text-slate-700">
                      “And your Lord says, 'Call upon Me; I will respond to you.’” (Surah Ghafir, 40:60)
                  </blockquote>
                  <p>
                      Through Dua, we submit our needs to Allah, showing our reliance on Him alone. Asking Allah for guidance, mercy, and support through Dua enables us to experience His wisdom in shaping our destiny. When we make Dua, we acknowledge that Allah's plan is always the best, and through supplication, we seek His help to change our fate and overcome obstacles.
                  </p>
                  <p>
                      By regularly reciting these 40 essential Duas, you invite Allah’s mercy into your daily life, trusting that Allah’s decrees are always in your best interest.
                  </p>
              </div>
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
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Basic Dua'in <span className="text-primary">Course Outline</span></h2>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
            {courseStructure.map((item, index) => (
              <div key={index} className="flex flex-col group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-lg font-extrabold text-slate-800 whitespace-nowrap">
                    {item.label}:
                  </span>
                </div>
                <div className="w-full h-[1px] bg-slate-100 group-hover:bg-primary/20 transition-colors"></div>
                <div className="mt-4">
                  <p className="text-slate-500 text-base font-medium">
                    {item.value}
                  </p>
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
              Choose a plan to learn the Duas for daily life.
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
                    Basic Dua'in Course
                  </h3>
                  <p className="text-xs mb-6 opacity-80 font-semibold tracking-tighter">
                    Daily Supplications
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
                      { label: 'Class Time', val: '30 Minutes/Class' },
                      { label: 'Class Type', val: 'One-on-One' },
                      { label: 'Age Level', val: 'All Ages' },
                      { label: 'Requirements', val: 'None' },
                      { label: 'Course Level', val: 'Beginner' },
                      { label: 'Course Period', val: '1-2 Months' },
                      { label: 'Tutor', val: 'Live Private tutor' },
                      { label: 'Gender', val: 'Both Male/Female' },
                      { label: 'Languages', val: 'Urdu / English' },
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
                  <button
                    className={`w-full py-4 rounded-xl font-bold transition-all ${
                      index === 1
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    Enroll Now
                  </button>
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
            Strengthen Your Bond with Allah
          </h2>
          <p className="text-slate-200 text-xl mb-10 max-w-xl mx-auto">
            Join the Dua course for <span className="text-accent font-bold">Free 3 Days Trial</span> and bring blessings into every moment of your life.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-12 py-5 rounded-2xl text-xl shadow-xl transition-transform hover:scale-105 active:scale-95">
            Start Learning Duas
          </button>
        </div>
      </section>
    </div>
  );
}
