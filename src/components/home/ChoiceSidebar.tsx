"use client";

import { useState } from 'react';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { sidebarItems } from '@/lib/data';

const sidebarContent = {
  "Leading Online Quran Academy": {
    description: "Rushd Ul Hidayah Quran Academy brings the Quran to your fingertips, connecting students from every corner of the world. From Basic Noorani Qaida to Quran Reading and Memorization, our expert teachers guide every student with personalized care and attention.",
    subheading: "Why choose us?",
    points: [
      "Experienced, passionate teachers",
      "Students from across the globe",
      "Complete courses for beginners to advanced learners"
    ]
  },
  "Effective Quran Teaching Methodology": {
    description: "We blend traditional Quranic teachings with modern online learning to make learning meaningful and fun. Courses like Quran Translation, Asaan Namaz and Islamic Studies for Kids help students understand, memorize and apply the Quran in daily life.",
    subheading: "Why it works:",
    points: [
      "Step-by-Step learning for every level",
      "Focus on Tajweed, memorization and comprehension",
      "Interactive, engaging online classes"
    ]
  },
  "Trustworthy and Reliable Quran Academy": {
    description: "At Rushd Ul Hidayah Quran Academy, trust is our foundation. With courses like 40 Hadees and 40 Basic Du’a’in, parents can track progress transparently while knowing their children are learning in a safe, supportive environment.",
    subheading: "Our promise:",
    points: [
      "Verified student progress",
      "Secure, reliable online platform",
      "Transparent teaching & feedback"
    ]
  },
  "Internationally Acclaimed Quran Academy": {
    description: "Our academy is recognized worldwide, welcoming students from Pakistan, USA, UK, UAE and beyond. With certificate-based courses and specialized programs, students gain Quranic knowledge that is respected internationally.",
    subheading: "Global edge:",
    points: [
      "Students from multiple countries",
      "Courses designed to international standards",
      "Certificates for all major courses"
    ]
  }
};

export function ChoiceSidebar() {
  const [activeSidebarItem, setActiveSidebarItem] = useState(sidebarItems[0]);
  const currentContent = sidebarContent[activeSidebarItem as keyof typeof sidebarContent];

  return (
    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 border-b border-slate-50">
        {sidebarItems.map(item => (
            <div 
            key={item} 
            onClick={() => setActiveSidebarItem(item)}
            className={`p-6 border-r border-slate-50 lg:border-r-0 lg:border-b last:border-0 flex items-center justify-between cursor-pointer transition-all ${activeSidebarItem === item ? 'bg-primary text-white scale-[1.02] z-10 shadow-lg' : 'hover:bg-slate-50 text-slate-600'}`}
            >
                <span className="font-bold text-xs uppercase tracking-wider">{item}</span>
                <ChevronRight className={`w-5 h-5 hidden lg:block transition-colors ${activeSidebarItem === item ? 'text-accent' : 'text-slate-300'}`} />
            </div>
        ))}
      </div>
        
        <div key={activeSidebarItem} className="p-10 flex-1">
            <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium italic border-l-4 border-accent pl-6 text-center md:text-justify">
                {currentContent.description}
            </p>
            <h4 className="font-black text-primary mb-6 uppercase tracking-widest text-sm text-center md:text-left">{currentContent.subheading}</h4>
            <ul className="space-y-4">
                {currentContent.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-4 text-base text-slate-500 font-bold">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                            <CheckCircle className="w-4 h-4 text-accent" />
                        </div>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  );
}
