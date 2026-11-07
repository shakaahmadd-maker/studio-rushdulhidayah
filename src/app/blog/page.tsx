'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  BookOpen,
  Calendar,
  ArrowRight,
  Clock,
  Shield,
  Loader2,
  Home,
  ChevronRight,
  Sparkles,
  CheckCircle,
  GraduationCap,
} from 'lucide-react';
import { BlogPost, getBlogPosts } from '@/lib/blogs';
import { fetchBlogs } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BackButton } from '@/components/BackButton';
import { useToast } from '@/hooks/use-toast';

const CATEGORIES = [
  'All Topics',
  'Noorani Qaida',
  'Tajweed Rules',
  'Quran Memorization',
  'Quran Translation',
  'Salah & Duas',
  'Islamic Studies',
  'Online Learning',
  'Spiritual Reflections',
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Topics');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function loadBlogs() {
      try {
        const data = await fetchBlogs();
        if (data && data.length > 0) {
          setBlogs(data);
        } else {
          setBlogs(getBlogPosts());
        }
      } catch (err) {
        console.warn('Using fallback blogs:', err);
        setBlogs(getBlogPosts());
      } finally {
        setLoading(false);
      }
    }
    loadBlogs();
  }, []);

  const filteredBlogs = blogs.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.metaDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.blocks.some((b) => b.text.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All Topics' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      toast({
        variant: 'destructive',
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
      });
      return;
    }
    setNewsletterSubscribed(true);
    toast({
      title: 'Subscribed Successfully!',
      description: 'You will receive our latest Islamic insights and reminders.',
    });
    setNewsletterEmail('');
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen pb-20">
      {/* Breadcrumb Header Banner */}
      <section className="breadcrumb-banner py-16 text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <BackButton variant="light" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-4">
            <div>
              <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-amber-400/30 inline-block mb-3">
                Guidance &amp; Knowledge Portal
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
                Authentic <span className="text-accent">Islamic Blog</span>
              </h1>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80 mt-3">
                <Link href="/" className="hover:text-accent flex items-center gap-1">
                  <Home className="w-3 h-3" /> Home
                </Link>
                <ChevronRight className="w-4 h-4 text-accent" />
                <span className="text-accent">Articles &amp; Guides</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-xl text-xs font-bold uppercase tracking-wider">
                <Link href="/admin">
                  <Shield className="w-4 h-4 mr-2 text-amber-400" />
                  Admin Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Hero Feature Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-primary to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-white/10">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
            <BookOpen className="w-96 h-96 text-white" />
          </div>
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest border border-amber-400/30 inline-block">
              Rushd Ul Hidayah Learning Resources
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
              Illuminating Hearts Through Quranic Wisdom &amp; Sunnah
            </h2>
            <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed">
              Explore authentic guides on Noorani Qaida, Tajweed rules, Quran memorization, prayer mastery, and family Islamic education. Click any article below to read the complete individual guide.
            </p>
          </div>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-4 top-3.5 text-slate-400" />
              <Input
                type="text"
                placeholder="Search articles, topics or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus-visible:ring-primary"
              />
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium self-end md:self-center">
              Showing <span className="text-primary font-black">{filteredBlogs.length}</span> Published Articles
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-slate-100">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Articles Grid - Every card navigates directly to /blog/[slug] */}
        {loading ? (
          <div className="py-24 text-center">
            <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto mb-4" />
            <p className="text-slate-500 text-sm">Loading authentic articles...</p>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center border border-slate-100 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-xl font-bold text-slate-800">No articles found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              We couldn&apos;t find any articles matching your search criteria. Try a different search term or category.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Topics');
              }}
              className="mt-2"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-[26px] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col group"
              >
                {/* Featured Image Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative h-56 w-full overflow-hidden bg-slate-100 block"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur text-amber-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10 shadow">
                    {post.category}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" /> {post.date}
                      </span>
                      {post.readTime && (
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-accent" /> {post.readTime}
                        </span>
                      )}
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block">
                      <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
                      {post.metaDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1.5"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </Link>

                    <span className="text-[11px] font-medium text-slate-400">
                      {post.author || 'Editorial Board'}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Newsletter & Free Trial Banner Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-primary text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-accent/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-amber-400/30 inline-block">
                Start Learning Quran Today
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Book a Free 3-Day Trial Quran Class For Your Family
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Take the first step in learning Noorani Qaida, Tajweed, Quran recitation, and Islamic studies with certified male and female teachers in one-on-one live sessions.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button asChild className="bg-accent hover:bg-amber-600 text-slate-900 font-bold px-6 py-6 rounded-xl shadow-lg">
                  <Link href="/register">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Register for Free Trial
                  </Link>
                </Button>
                <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-6 py-6 rounded-xl font-bold">
                  <Link href="/courses">Explore All Courses</Link>
                </Button>
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-bold text-white">Weekly Quranic Insights</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Subscribe to receive authentic Hadith reflections, parenting tips, and new article releases directly in your inbox.
              </p>

              {newsletterSubscribed ? (
                <div className="bg-emerald-900/60 border border-emerald-500/40 p-4 rounded-xl flex items-center gap-3 text-emerald-200 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>JazakAllah Khair! You are subscribed to our weekly newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl text-slate-900 bg-white focus-visible:ring-accent"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-amber-600 text-slate-900 font-bold rounded-xl py-3 text-sm transition-all shadow"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
