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
  Book,
  ChevronRight,
  ShieldCheck,
  CreditCard,
} from 'lucide-react';

export default function QuranMemorizationCoursePage() {
  const [activeTab, setActiveTab] = useState('USA');

  const regions = ['USA', 'UK', 'CANADA', 'AUSTRALIA', 'UAE'];

  const pricingData: { [key: string]: { symbol: string; tiers: number[] } } = {
    'USA': { symbol: '$', tiers: [42, 51, 60] },
    'UK': { symbol: '£', tiers: [35, 42, 50] },
    'CANADA': { symbol: 'C$', tiers: [55, 68, 80] },
    'AUSTRALIA': { symbol: 'A$', tiers: [60, 75, 90] },
    'UAE': { symbol: 'AED', tiers: [150, 185, 220] },
  };

  const courseStructure = [
    { icon: <Users size={22} />, label: 'Class Type', value: 'One-on-One' },
    { icon: <Clock size={22} />, label: 'Class Duration', value: '30 minutes' },
    { icon: <User size={22} />, label: 'Age Level', value: 'Atleast 7 Years' },
    {
      icon: <ShieldCheck size={22} />,
      label: 'Requirements',
      value: 'Quran Reading Course',
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
      value: 'Urdu / English',
    },
    {
      icon: <CreditCard size={22} />,
      label: 'Fee/Month',
      value: 'See Pricing Below',
    },
  ];

  const learningOutcomes = [
    "Techniques for effective memorization.",
    "Structured plan for memorizing new verses.",
    "Systematic revision schedule to retain what is learned.",
    "The virtues and rewards of memorizing the Quran.",
    "Tips to improve concentration and focus.",
  ];

  const courseOutline = [
    'Memorization of selected Surahs',
    'Memorization of Juz Amma (Part 30)',
    'Full Quran Hifz plan',
    'Daily/Weekly revision sessions',
    'Application of Tajweed rules during memorization',
    'Understanding the meaning of memorized verses',
    'Techniques for long-term retention',
    'Mock tests and assessments',
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-accent py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary inline-block px-4 py-1 rounded text-white font-bold text-lg mb-4 shadow-sm">
            Quran Memorization Course
          </div>
          <div className="flex items-center gap-2 text-primary-foreground font-medium text-sm">
            <span>Home</span> <ChevronRight size={14} />{' '}
            <span>Courses</span> <ChevronRight size={14} />{' '}
            <span>Quran Memorization Course</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">
            About <span className="text-primary">Quran Memorization Course</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#0a2a2a] flex flex-col justify-center items-center p-8 text-center">
                <div className="w-full h-full border-2 border-accent/20 rounded-lg flex flex-col items-center justify-center relative">
                  <div className="absolute top-4 right-4 opacity-20"><Star size={48} className="text-amber-200" /></div>
                  <Book size={80} className="text-accent mb-4" />
                  <h3 className="text-2xl font-serif text-amber-100 italic">Al-Hifz (The Memorization)</h3>
                  <div className="w-24 h-1 bg-accent/80 my-4"></div>
                  <p className="text-amber-200/70 text-sm">Locking the Quran in Your Heart</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                Introduction
              </h3>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Embark on the noble journey of Hifz-ul-Quran with our dedicated memorization course. This program is tailored for students who wish to commit the words of Allah to their hearts. Our expert tutors provide a structured, supportive, and motivational environment to make this sacred goal achievable.
                </p>
                <p>
                  We focus on strong memorization with correct Tajweed, along with a revision schedule that ensures long-term retention. Whether you aim to memorize a few Surahs or the entire Quran, our personalized approach will guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
       {/* Learning Outcomes & Outline */}
       <section className="py-20 bg-slate-50">
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
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Memorization <span className="text-primary">Course Outline</span></h2>
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
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
              Pricing & Enrollment
            </h2>
            <p className="text-slate-500">
              Choose your Hifz plan based on your region.
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
                    Memorization Course
                  </h3>
                  <p className="text-xs mb-6 opacity-80 font-semibold tracking-tighter">
                    Personalized Hifz Program
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
                      { label: 'Age Level', val: 'Atleast 7 Years' },
                      {
                        label: 'Requirements',
                        val: 'Quran Reading Fluency',
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
            Begin Your Hifz Journey
          </h2>
          <p className="text-slate-200 text-xl mb-10 max-w-xl mx-auto">
            Start with a <span className="text-accent font-bold">Free 3 Days Trial</span> and take the first step towards becoming a Hafiz/Hafiza of the Quran.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-12 py-5 rounded-2xl text-xl shadow-xl transition-transform hover:scale-105 active:scale-95">
            Register for Trial
          </button>
        </div>
      </section>
    </div>
  );
}
