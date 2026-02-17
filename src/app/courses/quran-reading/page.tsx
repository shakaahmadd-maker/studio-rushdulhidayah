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
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    { icon: <Clock size={22} />, label: 'Class Duration', value: '30 minutes' },
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
      value: 'Urdu / English',
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
      <section className="bg-accent py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary inline-block px-4 py-1 rounded text-white font-bold text-lg mb-4 shadow-sm">
            Quran Reading Course
          </div>
          <div className="flex items-center gap-2 text-primary-foreground font-medium text-sm">
            <span>Home</span> <ChevronRight size={14} />{' '}
            <span>Courses</span> <ChevronRight size={14} />{' '}
            <span>Quran Reading Course</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">
            About <span className="text-primary">Quran Reading Course</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                    {courseImage && (
                        <Image 
                            src={courseImage.imageUrl}
                            alt="Quran Reading Course"
                            fill
                            className="object-cover"
                            data-ai-hint={courseImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                Introduction
              </h3>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  It is duty of every Muslim to read the Holy Quran with Tajweed
                  rules. We have designed comprehensive online Quran Reading
                  Course for kids and adults of all ages and genders.
                </p>
                <p>
                  This course is designed for students who have just completed
                  Noorani Qaida course and can read Quran but are not fluent in
                  reading and want to improve their reading skills. Quran
                  Reading course will provide practice in order to enhance
                  student's confidence while applying methods which were taught
                  in Qaida course. Our teacher will ensure that student
                  finishes the full Quran reading course on time.
                </p>
              </div>
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
                      { label: 'Class Time', val: '30 Minutes/Class' },
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
            Master Quranic Reading
          </h2>
          <p className="text-slate-200 text-xl mb-10 max-w-xl mx-auto">
            Join Our Quran Reading Course For{' '}
            <span className="text-accent font-bold">Free 3 Days Trial</span>.
            Experience professional tutoring today.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-12 py-5 rounded-2xl text-xl shadow-xl transition-transform hover:scale-105 active:scale-95">
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
