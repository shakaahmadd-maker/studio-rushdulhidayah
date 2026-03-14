'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Home, ChevronRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { GiftOfKnowledgeCTA } from '@/components/GiftOfKnowledgeCTA';

const faqData = [
  {
    category: 'Technical/Platform-Related Questions',
    questions: [
      {
        q: 'What if I face technical issues during my online classes?',
        a: 'If you encounter any technical difficulties, please reach out to our support team. We offer troubleshooting guidance and ensure that you continue your lessons without interruptions.',
      },
      {
        q: 'What platform do you use for online classes?',
        a: 'We use Zoom & Teams for live online classes, which is accessible on all devices. Detailed instructions on how to log in will be provided once you register.',
      },
      {
        q: 'Can I join the class from a mobile phone or tablet?',
        a: 'Yes, our classes are compatible with smartphones, tablets and desktops for your convenience.',
      },
    ],
  },
  {
    category: 'Certification & Evaluation Questions',
    questions: [
      {
        q: 'Will I get a certificate after completing the course?',
        a: 'Yes, upon successful completion of each course, you will receive a certificate of completion from Rushdul Hidayah Quran Academy.',
      },
      {
        q: 'How are the students evaluated in the course?',
        a: 'Students are evaluated based on weekly assessments, quizzes and final exams. We focus on continuous learning and support throughout your educational journey.',
      },
    ],
  },
  {
    category: 'Group & One-on-One Sessions',
    questions: [
      {
        q: 'Do you offer group classes or only one-on-one sessions?',
        a: 'We offer both group classes and one-on-one sessions. You can choose the learning format that works best for you.',
      },
      {
        q: 'Can I switch between group classes and one-on-one sessions during the course?',
        a: 'Yes, you can switch between group and private lessons depending on your progress and personal preference.',
      },
    ],
  },
  {
    category: 'Support and Assistance',
    questions: [
      {
        q: 'How can I get extra help if I’m struggling with the course material?',
        a: 'We provide one-on-one tutoring and study support. Feel free to reach out to your tutor, and they will guide you through any challenges.',
      },
      {
        q: 'Do you provide any additional study resources?',
        a: 'Yes, we provide ebooks, study guides, and extra practice material to help reinforce your learning.',
      },
    ],
  },
  {
    category: 'Access & Enrollment',
    questions: [
      {
        q: 'How do I register for a course?',
        a: 'Simply visit our Registration Page, select your course, and complete the sign-up process. You will then receive all the information to get started.',
      },
      {
        q: 'Can I start the course at any time, or are there fixed start dates?',
        a: 'Our courses are flexible, allowing you to join at any time. However, we do have course cohorts if you prefer to start with a specific group.',
      },
    ],
  },
  {
    category: 'Pricing & Payment',
    questions: [
      {
        q: 'Do you offer any discounts or scholarships?',
        a: 'Yes, we offer seasonal discounts and scholarship opportunities. Please contact with support team. They will communicate with you and assist you in.',
      },
      {
        q: 'Can I pay for the course in installments?',
        a: 'Yes, we offer installment plans for some of our courses. Contact our support team for more details about the payment plans available.',
      },
    ],
  },
  {
    category: 'Personalized Learning',
    questions: [
      {
        q: 'Can I personalize the learning path for my child?',
        a: 'Yes, we can tailor lessons based on your child’s level and pace, ensuring an individualized learning experience that suits their needs.',
      },
      {
        q: 'Can I customize the course schedule?',
        a: 'We offer flexible scheduling for many courses. Speak to your tutor about adjusting your class time to suit your personal schedule.',
      },
    ],
  },
  {
    category: 'Religious/Spiritual Focus',
    questions: [
      {
        q: 'How do your courses help strengthen my spiritual connection to Islam?',
        a: 'Our courses emphasize not just academic learning but also spiritual growth through a deep understanding of Islamic principles, Dua and daily practices that align with the teachings of the Quran and Sunnah.',
      },
      {
        q: 'How does this course contribute to my personal growth as a Muslim?',
        a: 'By learning the teachings of the Quran and Sunnah, you’ll gain the knowledge and skills to lead a more meaningful and faith-driven life, strengthening your connection with Allah.',
      },
    ],
  },
  {
    category: 'Parent & Family Involvement (For Kids’ Courses)',
    questions: [
      {
        q: 'Can parents track their child’s progress in the course?',
        a: 'Yes, we offer parent progress reports on weekly & Monthly basis so that parents can monitor their child\'s learning journey and achievements.',
      },
      {
        q: 'Do you offer courses for children in multiple age groups?',
        a: 'Yes, we have customized courses for different age groups, from young children to teenagers, with age-appropriate content and teaching methods.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="bg-white text-slate-800">
      {/* Page Header */}
      <section className="breadcrumb-banner py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <Link href="/" className="hover:text-accent flex items-center gap-1">
              <Home className="w-3 h-3" /> Home
            </Link>
            <ChevronRight className="w-4 h-4 text-accent" />
            <span className="text-accent">FAQ</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                    <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-primary">
                  {category.category}
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem value={`item-${index}-${faqIndex}`} key={faqIndex} className="bg-secondary/50 rounded-xl border border-border transition-colors data-[state=open]:border-primary">
                    <AccordionTrigger className="p-6 text-left font-bold text-slate-800 hover:no-underline hover:text-primary transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <GiftOfKnowledgeCTA />
    </div>
  );
}
