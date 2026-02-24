'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  BookOpen,
  MessageSquare,
  Users,
  PenSquare,
  Sparkles,
  ArrowRight,
  Home,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AdditionalCoursesPage() {

  const customCourseTopics = [
    "Advanced Tajweed Rules",
    "In-depth Tafseer of Specific Surahs",
    "Seerah of the Prophet Muhammad (PBUH)",
    "Islamic History",
    "Fiqh of Worship (Salah, Zakat, etc.)",
    "Public Speaking and Khutbah Training"
  ];
  
  const courseImage = PlaceHolderImages.find(img => img.id === 'new-course-9');

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
            Additional & Custom Courses
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
            <span className="text-accent">Additional Courses</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Looking for Something <span className="text-primary">Specific?</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg text-justify">
              <p>
                At Rushd Ul Hidayah Institute, we understand that every student has a unique learning journey. If you have a specific goal or area of interest not covered in our standard courses, we are happy to create a personalized curriculum just for you.
              </p>
              <p>
                Contact us with your learning objectives. We'll schedule a free consultation to understand your needs and goals. Our expert scholars will design a custom curriculum tailored to your specific requirements, timeline, and current knowledge level. We'll match you with a qualified tutor who specializes in your chosen area of study for personalized one-on-one sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
      
       {/* Topics Section */}
       <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                    Potential <span className="text-primary">Custom Course Topics</span>
                </h2>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {customCourseTopics.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 py-3 border-b border-slate-200 group">
                            <ArrowRight size={16} className="text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            <span className="text-slate-700 text-base group-hover:text-primary font-medium transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-8 text-slate-500">...and much more, according to your needs!</p>
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-[2.5rem] p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Your Learning Plan
          </h2>
          <p className="text-slate-200 text-xl mb-10 max-w-2xl mx-auto">
            Ready to start your personalized Islamic learning journey? Contact us today to discuss your goals and book a free trial class.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground font-black px-12 py-5 rounded-2xl text-xl shadow-xl transition-transform hover:scale-105 active:scale-95">
             <Link href="/register">Register for a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
