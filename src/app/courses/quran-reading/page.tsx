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
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Home,
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function QuranReadingCoursePage() {
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
    { icon: <Clock size={22} />, label: 'Class Duration', value: '1 hour 30 minutes' },
    { icon: <User size={22} />, label: 'Age Level', value: 'Atleast 5 Years' },
    {
      icon: <ShieldCheck size={22} />,
      label: 'Requirements',
      value: 'Noorani Qaida Course',
    },
    {
      icon: <Award size={22} />,
      label: 'Course Level',
      value: 'Beginner, Intermediate',
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

  const courseOutline = [
    'Quran recitation with proper Arabic accent',
    'Recitation with Hadar and Tarteel',
    'How letter changes its form in the Quran',
    'How long harakaat should be stretched',
    'Places where recitation should be stopped',
    'Rules of Izhar, Ikhfa, Idgham and Iqlab',
    'Rules of Izhar/Ikhfa/Idgham-e-shafawi',
    'Quran Reading from Al-Fatiha to Annas',
  ];
  
  const courseImage = PlaceHolderImages.find(img => img.id === 'new-course-2');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.7)), url(${
            courseImage?.imageUrl || ''
          })`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Quran Reading Course
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
            <span className="text-accent">Quran Reading Course</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                About <span className="text-primary">Quran Reading Course</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify">
                <p>
                    It is the duty of every Muslim to read the Holy Quran with Tajweed rules. We have designed a comprehensive online Quran Reading Course for kids and adults of all ages and genders, ensuring that the Quran is read correctly, with proper pronunciation and Tajweed.
                </p>
                <p>
                    This course is ideal for students who have just completed the Noorani Qaida course and can read the Quran, but are not fluent in reading and want to improve their skills. Our Quran Reading Course will provide focused practice to enhance the student's confidence while applying the techniques taught in the Qaida course. We focus on correct pronunciation and Tajweed to avoid any major mistakes that could alter the meaning of the Quran.
                </p>
                <blockquote className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg italic text-slate-700 text-left">
                    <p className="font-bold not-italic text-primary">For example, when reading Surah Al-Fatiha:</p>
                    <p className="mt-2">The phrase <span className="font-bold arabic text-xl">اللَّهُ الصَّمَدُ</span> ("Allah-us-Samad") should be pronounced with ص (Sad). If ص (Sad) is mispronounced as س (Seen), it changes the meaning of the verse.</p>
                    <p className="mt-2"><span className="font-bold arabic text-xl text-primary">اللَّهُ الصَّمَدُ</span> means "Allah, the Eternal and Absolute," but if pronounced incorrectly as <span className="font-bold arabic text-xl">اللَّهُ السَّمَدُ</span>, it could imply a different meaning, potentially changing the interpretation of the verse.</p>
                    <p className="mt-2 text-sm">This shows how a simple mispronunciation can lead to a misunderstanding of the Quranic message.</p>
                </blockquote>
                <p>
                    Our course emphasizes the importance of proper Tajweed and pronunciation to preserve the sacred meaning of every word. Our qualified teachers ensure that students finish the full Quran reading course on time while mastering the essential rules of Tajweed and pronunciation for accurate Quranic recitation.
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Course <span className="text-primary">Requirements</span>
          </h2>
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p className="flex gap-4">
                <span className="text-accent flex-shrink-0 mt-1">
                  <CheckCircle size={22} />
                </span>
                Student is required to know makharij of Arabic letters and how
                to join and read Arabic words and must have knowledge of
                vowels, sukoon, madd, tanween and shaddah.
              </p>
              <p className="flex gap-4">
                <span className="text-accent flex-shrink-0 mt-1">
                  <CheckCircle size={22} />
                </span>
                If you don't know, You just need to go through the Basic
                Noorani Qaida Course first and then you can start Quran
                Reading.
              </p>
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="font-bold text-primary">
                  After going through this course, students become able to read
                  the Holy Quran with correct pronunciation.
                </p>
                <span className="bg-accent/10 text-accent-foreground px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                  Build a lifelong relationship with Quran
                </span>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {courseStructure.map((item, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl flex flex-col gap-4 transition-all hover:-translate-y-1.5 hover:shadow-lg hover:border-primary/40">
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

      {/* Outline Section */}
      <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-4 mb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="container mx-auto px-8 sm:px-12 relative">
          <h2 className="text-3xl font-bold mb-12">
            Quran Reading <span className="text-accent">Course Outline</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {courseOutline.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-3 border-b border-slate-800 last:border-0 md:last:border-b"
              >
                <span className="text-accent">
                  <ArrowRight size={18} />
                </span>
                <span className="text-slate-300 font-medium">{item}</span>
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
              Choose a plan for Quran Reading based on your region.
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
                    Quran Reading Course
                  </h3>
                  <p className="text-xs mb-6 opacity-80 font-semibold tracking-tighter">
                    Individual-focused learning program
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
                      { label: 'Class Time', val: "1 hour 30 minutes" },
                      { label: 'Class Type', val: 'One-on-One' },
                      { label: 'Age Level', val: 'Atleast 5 Years' },
                      {
                        label: 'Requirements',
                        val: 'Noorani Qaida Course',
                      },
                      {
                        label: 'Course Level',
                        val: 'Beginner, Intermediate',
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
            Master Quranic Reading
          </h2>
          <p className="text-slate-200 text-xl mb-10 max-w-xl mx-auto">
            Join Our Quran Reading Course For{' '}
            <span className="text-accent font-bold">Free 3 Days Trial</span>.
            Experience professional tutoring today.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-12 py-5 rounded-2xl text-xl shadow-xl transition-transform hover:scale-105 active:scale-95 h-auto">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
