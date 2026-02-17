'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  BookOpen,
  MessageSquare,
  Users,
  PenSquare,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdditionalCoursesPage() {

  const customCourseTopics = [
    "Advanced Tajweed Rules",
    "In-depth Tafseer of Specific Surahs",
    "Seerah of the Prophet Muhammad (PBUH)",
    "Islamic History",
    "Fiqh of Worship (Salah, Zakat, etc.)",
    "Public Speaking and Khutbah Training"
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero Section */}
      <section className="bg-accent py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary inline-block px-4 py-1 rounded text-white font-bold text-lg mb-4 shadow-sm">
            Additional & Custom Courses
          </div>
          <div className="flex items-center gap-2 text-primary-foreground font-medium text-sm">
            <span>Home</span> <ChevronRight size={14} />{' '}
            <span>Courses</span> <ChevronRight size={14} />{' '}
            <span>Additional Courses</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Looking for Something <span className="text-primary">Specific?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              At Rushd Ul Hidayah Institute, we understand that every student has a unique learning journey. If you have a specific goal or area of interest not covered in our standard courses, we are happy to create a personalized curriculum just for you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-[#0a2a2a] flex flex-col justify-center items-center p-8 text-center">
                 <div className="w-full h-full border-2 border-accent/20 rounded-lg flex flex-col items-center justify-center relative">
                    <Sparkles size={80} className="text-accent mb-4" />
                    <h3 className="text-2xl font-serif text-amber-100 italic">Your Personalized Path</h3>
                    <div className="w-24 h-1 bg-accent/80 my-4"></div>
                    <p className="text-amber-200/70 text-sm">Tailored Learning for Your Goals</p>
                 </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                How It Works
              </h3>
              <ul className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <li className='flex items-start gap-4'>
                    <div className='bg-primary/10 text-primary rounded-full p-2 mt-1'><MessageSquare size={20} /></div>
                    <div>
                        <h4 className='font-bold text-slate-800'>1. Consultation</h4>
                        <p className='text-base'>Contact us with your learning objectives. We'll schedule a free consultation to understand your needs and goals.</p>
                    </div>
                </li>
                <li className='flex items-start gap-4'>
                    <div className='bg-primary/10 text-primary rounded-full p-2 mt-1'><PenSquare size={20} /></div>
                    <div>
                        <h4 className='font-bold text-slate-800'>2. Curriculum Design</h4>
                        <p className='text-base'>Our expert scholars will design a custom curriculum tailored to your specific requirements, timeline, and current knowledge level.</p>
                    </div>
                </li>
                <li className='flex items-start gap-4'>
                    <div className='bg-primary/10 text-primary rounded-full p-2 mt-1'><Users size={20} /></div>
                    <div>
                        <h4 className='font-bold text-slate-800'>3. Tutor Matching</h4>
                        <p className='text-base'>We'll match you with a qualified tutor who specializes in your chosen area of study for personalized one-on-one sessions.</p>
                    </div>
                </li>
              </ul>
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
