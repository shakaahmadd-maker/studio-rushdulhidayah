import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPostBySlug, getBlogPosts, BlogPost } from '@/lib/blogs';
import { BackButton } from '@/components/BackButton';
import {
  Calendar,
  Compass,
  Tags,
  BookOpen,
  Bookmark,
  ArrowLeft,
  Clock,
  User,
  GraduationCap,
  MessageSquare,
  ChevronRight,
  Home,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShareButtons } from '@/components/blog/ShareButtons';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {
      title: 'Article Not Found | Rushd Ul Hidayah Quran Academy',
    };
  }

  return {
    title: `${post.metaTitle || post.title} | Rushd Ul Hidayah`,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 4);

  // Map category to a relevant course link
  const getRelevantCourse = (category: string) => {
    switch (category) {
      case 'Noorani Qaida':
        return { title: 'Online Noorani Qaida Course', href: '/courses/noorani-qaida' };
      case 'Tajweed Rules':
        return { title: 'Quran Reading with Tajweed', href: '/courses/quran-reading' };
      case 'Quran Memorization':
        return { title: 'Quran Memorization (Hifz) Course', href: '/courses/quran-memorization' };
      case 'Quran Translation':
        return { title: 'Quran Translation & Tafseer Course', href: '/courses/quran-translation' };
      case 'Salah & Duas':
        return { title: 'Asaan Namaz & 40 Duas Course', href: '/courses/asaan-namaz-course' };
      case 'Islamic Studies':
        return { title: 'Islamic Studies for Kids', href: '/courses/islamic-studies-for-kids' };
      default:
        return { title: 'Explore All Online Quran Courses', href: '/courses' };
    }
  };

  const relevantCourse = getRelevantCourse(post.category);

  // Schema.org BlogPosting structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    description: post.metaDescription,
    author: {
      '@type': 'Person',
      name: post.author || 'Rushd Ul Hidayah Faculty',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rushd Ul Hidayah Quran Academy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rushdulhidayah.com/logo.webp',
      },
    },
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="breadcrumb-banner py-16 text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <BackButton variant="light" />

          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80 mt-4 mb-4">
            <Link href="/" className="hover:text-accent flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <Link href="/blog" className="hover:text-accent">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent">{post.category}</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <span className="bg-amber-400/20 text-amber-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest border border-amber-400/30 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-black leading-tight text-white">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-slate-300 text-xs sm:text-sm font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-accent" /> Published on {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-accent" /> {post.readTime || '6 min read'}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-accent" /> {post.author || 'Rushd Ul Hidayah Faculty'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
          {/* Main Article Body (8 cols) */}
          <article className="lg:col-span-8 space-y-8">
            {/* Featured Image */}
            <div className="relative rounded-3xl overflow-hidden h-80 sm:h-[440px] bg-slate-100 shadow-xl border-4 border-white">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Social Share Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
              <ShareButtons title={post.title} slug={post.slug} />
            </div>

            {/* Key Takeaways Callout */}
            <div className="bg-amber-50/80 border-l-4 border-accent p-6 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-accent" />
                Key Insight &amp; Overview
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                &ldquo;{post.metaDescription}&rdquo;
              </p>
            </div>

            {/* Article Content Blocks */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
              {post.blocks && post.blocks.length > 0 ? (
                post.blocks.map((block, idx) => {
                  if (block.type === 'h2') {
                    return (
                      <h2
                        key={idx}
                        className="text-2xl sm:text-3xl font-black text-primary mt-10 mb-4 border-l-4 border-accent pl-4 leading-tight"
                      >
                        {block.text}
                      </h2>
                    );
                  } else if (block.type === 'h3') {
                    return (
                      <h3
                        key={idx}
                        className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-2"
                      >
                        {block.text}
                      </h3>
                    );
                  } else {
                    return (
                      <p key={idx} className="text-justify leading-relaxed text-slate-600">
                        {block.text}
                      </p>
                    );
                  }
                })
              ) : (
                <p className="text-justify leading-relaxed">{post.metaDescription}</p>
              )}

              {/* Related Course In-Article Banner */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 rounded-2xl border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Recommended Academy Course
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {relevantCourse.title}
                  </h4>
                  <p className="text-xs text-slate-600">
                    Learn one-on-one with certified male or female tutors at your own flexible pace.
                  </p>
                </div>
                <Button asChild className="bg-primary hover:bg-slate-900 text-white rounded-xl text-xs font-bold whitespace-nowrap">
                  <Link href={relevantCourse.href}>View Course Details &rarr;</Link>
                </Button>
              </div>
            </div>

            {/* Author Attribution Box */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <GraduationCap className="w-10 h-10" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h4 className="text-lg font-bold text-slate-900">
                    {post.author || 'Rushd Ul Hidayah Editorial Faculty'}
                  </h4>
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Scholar
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Written and reviewed by the academic faculty at Rushd Ul Hidayah Quran Academy. Our mission is to spread authentic Islamic and Quranic literacy with excellence, sound methodology, and personalized care.
                </p>
              </div>
            </div>

            {/* SEO Keywords & NLP Section */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6 shadow-sm">
              <div className="flex items-center space-x-2 text-primary">
                <Tags className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-extrabold text-primary">
                  SEO Keywords &amp; NLP Content Analysis
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                Optimized semantic keywords and latent semantic indexing (LSI) entities embedded in this article for top search engine positioning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-2">
                    Short-Tail Keywords
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(post.keywords?.shortTail || ['Quran', 'Tajweed', 'Islam']).map((k, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-2">
                    Long-Tail Keywords
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(post.keywords?.longTail || ['online Quran classes', 'learn Quran with Tajweed']).map((k, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-medium">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-2">
                    LSI Keywords
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(post.keywords?.lsi || ['Quranic verses', 'authentic Hadith', 'spiritual growth']).map((k, i) => (
                      <span key={i} className="bg-primary/5 text-primary px-2.5 py-1 rounded-lg text-xs font-medium">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block mb-2">
                    NLP Entities &amp; Concepts
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {(post.keywords?.nlpEntities || ['Divine wisdom', 'Islamic jurisprudence', 'heart tranquility']).map((k, i) => (
                      <span key={i} className="bg-blue-50 text-blue-800 px-2.5 py-1 rounded-lg text-xs font-medium">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-slate-200">
              <Button asChild variant="outline" className="rounded-xl w-full sm:w-auto">
                <Link href="/blog">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Articles
                </Link>
              </Button>
              <Button asChild className="bg-accent hover:bg-amber-600 text-slate-900 font-bold rounded-xl w-full sm:w-auto">
                <Link href="/register">Book a Free 3-Day Trial Class &rarr;</Link>
              </Button>
            </div>
          </article>

          {/* Sticky Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-6">
              {/* Related Articles Box */}
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-100 shadow-sm space-y-5">
                <div className="flex items-center space-x-2 text-primary border-b border-slate-100 pb-3">
                  <Compass className="w-5 h-5 text-accent" />
                  <h3 className="font-extrabold text-base text-primary">Related Articles</h3>
                </div>

                <div className="space-y-4">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/blog/${rel.slug}`}
                      className="flex space-x-3 group p-2 hover:bg-slate-50 rounded-2xl transition-all"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-200">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="64px"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-primary font-bold block uppercase tracking-tight">
                          {rel.category}
                        </span>
                        <h4 className="text-xs font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 block">
                          {rel.readTime || '5 min read'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Free Trial Conversion Box */}
              <div className="bg-gradient-to-br from-slate-900 to-primary text-white p-7 rounded-3xl space-y-4 relative overflow-hidden shadow-xl border border-white/10">
                <div className="absolute -right-6 -bottom-6 opacity-10 text-accent pointer-events-none">
                  <BookOpen className="w-32 h-32" />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest block">
                  Gift of Knowledge
                </span>
                <h4 className="font-extrabold text-lg text-white leading-tight">
                  Start Your Child&apos;s Quranic Journey Today
                </h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Join hundreds of families learning Quran recitation, Tajweed, and Islamic studies from the comfort of home.
                </p>
                <div className="space-y-2 pt-1">
                  <Button asChild className="w-full bg-accent hover:bg-amber-600 text-slate-900 font-bold rounded-xl text-xs py-5 shadow">
                    <Link href="/register">Register For Free 3-Day Trial</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-xl text-xs py-5">
                    <a
                      href="https://wa.me/923319937355"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-400" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
