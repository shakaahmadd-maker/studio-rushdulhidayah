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
  CreditCard
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NooraniQaidaCoursePage() {
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
    { icon: <Users size={22} />, label: "Class Type", value: "One-on-One" },
    { icon: <Clock size={22} />, label: "Class Duration", value: "1 hour 30 minutes" },
    { icon: <User size={22} />, label: "Age Level", value: "At least 5 Years" },
    { icon: <ShieldCheck size={22} />, label: "Requirements", value: "None" },
    { icon: <Award size={22} />, label: "Course Level", value: "Beginner" },
    { icon: <Calendar size={22} />, label: "Course Period", value: "Student Dependent" },
    { icon: <MessageCircle size={22} />, label: "Tutor", value: "Live Private Tutor" },
    { icon: <Users size={22} />, label: "Gender", value: "Male / Female" },
    { icon: <Globe size={22} />, label: "Languages", value: "Urdu / English / Arabic" },
    { icon: <CreditCard size={22} />, label: "Fee/Month", value: "See Pricing Below" },
  ];

  const courseOutline = [
    "Correct pronunciation (Makhraj)",
    "Learning Alphabet shapes",
    "Compound Letters (Huroof e Murakkabat)",
    "Harakaat (Movements)",
    "Standing Movements (Vertical Harakaat)",
    "Maddah Letters",
    "Leen Letters",
    "Sukoon (Jazm)",
    "Tashdeed",
    "Nunnation (Tanween)",
    "Rules of Noon Sakin",
    "Rules of Meem Sakin",
    "Rules of Stop (Waqf)",
    "Tajweed Exercises"
  ];

  const learningOutcomes = [
    "Recognition of Arabic letters in different shapes and sounds.",
    "Mastery of Makharij (Origins) of the Arabic Alphabets.",
    "Fundamental rules of Tajweed for beautiful recitation.",
    "Proper Quranic pronunciation from day one.",
    "Foundational Islamic knowledge for young learners."
  ];

  const courseImage = PlaceHolderImages.find(img => img.id === 'new-course-1');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="bg-accent py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-primary inline-block px-4 py-1 rounded text-white font-bold text-lg mb-4">
            Basic Noorani Qaida Course
          </div>
          <div className="flex items-center gap-2 text-primary-foreground font-medium text-sm">
            <span>Home</span> <ChevronRight size={14} /> <span>Courses</span> <ChevronRight size={14} /> <span>Basic Noorani Qaida Course</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">About <span className="text-primary">Basic Noorani Qaida Course</span></h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                    {courseImage && (
                        <Image 
                            src={courseImage.imageUrl}
                            alt="Noorani Qaida Course"
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
                Introduction
              </h3>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Our Noorani Qaida Course is the perfect starting point for anyone eager to read and understand the Quran. Whether you're a beginner or looking to improve your Quranic pronunciation, this course will guide you step by step. With personalized, one-on-one lessons tailored to your pace, we ensure that you build a solid foundation in Quranic reading and recitation.
                </p>
                <p>
                  Designed for both kids and adults, our comprehensive Online Noorani Qaida Course teaches the essential rules of Quranic recitation using the Noorani Qaida syllabus. Starting from basic Arabic alphabets, this course is the first step for beginners to learn the Quran. Perfect for those who are new to Arabic, it helps you read the Quran with correct pronunciation and Tajweed, setting the foundation for proper Quranic recitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8 items-start">
                <div className="hidden sm:block w-1.5 h-48 bg-primary rounded-full relative">
                    <div className="absolute -top-1 -left-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div className="absolute -bottom-1 -left-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Why Noorani Qaida Course?</h2>
                    <div className="w-16 h-1 bg-accent mb-6"></div>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-4xl">
                        Noorani Qaida course is an initial first course for Quran reading. This course is required for kids before starting Quran. Adults who don't know how to read the Quran can also learn it step by step. Noorani Qaida exercises help students to learn Arabic with Tajweed Rules. Noorani Qaida course is started with Arabic Alphabet. With the help of our expert tutors student can learn hard exercises very easily.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Redesigned Course Structure Section */}
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
                                <p className="text-slate-600 font-medium py-1 border-b border-slate-200 w-full group-hover:text-slate-900 transition-colors">You will learn {item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Noorani Qaida <span className="text-primary">Course Outline</span></h2>
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Pricing & Enrollment</h2>
                <p className="text-slate-500">Choose a plan that fits your schedule and region.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {regions.map(region => (
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
                    <div key={days} className={`relative flex flex-col bg-white rounded-3xl overflow-hidden border transition-all duration-500 hover:shadow-2xl ${index === 1 ? 'border-primary ring-4 ring-primary/10 scale-105 z-10' : 'border-slate-100 shadow-xl'}`}>
                        {index === 1 && (
                            <div className="bg-primary text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
                                Most Popular
                            </div>
                        )}
                        <div className={`p-8 text-center ${index === 1 ? 'bg-primary text-white' : 'bg-slate-50 text-slate-900'}`}>
                            <h3 className="text-lg font-bold mb-1 uppercase tracking-wider">Noorani Qaida Course</h3>
                            <p className="text-xs mb-6 opacity-80 uppercase tracking-tighter font-semibold">Individual-focused learning program</p>
                            <div className="flex items-center justify-center gap-1">
                                <span className="text-2xl font-bold self-start mt-2">{pricingData[activeTab].symbol}</span>
                                <span className="text-6xl font-black">{pricingData[activeTab].tiers[index]}</span>
                                <div className="text-left">
                                    <div className="text-xs font-bold opacity-80">.00</div>
                                    <div className="text-xs font-bold opacity-80">/Mo</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 flex-grow">
                            <ul className="space-y-3">
                                <li className="flex justify-between text-sm py-2 border-b border-slate-50">
                                    <span className="text-slate-900 font-bold">Classes In a Week:</span>
                                    <span className="text-slate-500 font-medium">{days} days/Week</span>
                                </li>
                                {[
                                    { label: "Class Time", val: "1 hour 30 minutes" },
                                    { label: "Class Type", val: "One-on-One" },
                                    { label: "Age Level", val: "Atleast 7 Years" },
                                    { label: "Requirements", val: "None" },
                                    { label: "Course Level", val: "Beginner Level" },
                                    { label: "Course Period", val: "Depends upon student's ability" },
                                    { label: "Tutor", val: "Live Private tutor" },
                                    { label: "Gender", val: "Both Male/Female" },
                                    { label: "Languages", val: "Urdu / English / Arabic" },
                                ].map((row, i) => (
                                    <li key={i} className="flex justify-between text-sm py-2 border-b border-slate-50 last:border-0">
                                        <span className="text-slate-900 font-bold">{row.label}:</span>
                                        <span className="text-slate-500 font-medium">{row.val}</span>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-4xl font-bold mb-6">Start Learning Today</h2>
          <p className="text-slate-200 text-xl mb-10 max-w-xl mx-auto">
            Join Our Noorani Qaida Course For <span className="text-accent font-bold">Free 3 Days Trial</span>. No registration fee required to start.
          </p>
          <Button asChild className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-12 py-5 rounded-2xl text-xl shadow-xl transition-transform hover:scale-105 active:scale-95 h-auto">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
