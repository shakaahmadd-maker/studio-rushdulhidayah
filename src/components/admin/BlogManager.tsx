'use client';

import React, { useState, useEffect } from 'react';
import {
  PlusCircle,
  Pen,
  Trash2,
  ExternalLink,
  CheckCircle,
  ChartLine,
  X,
  Layers,
  ArrowUp,
  ArrowDown,
  Sparkles,
  BookOpen,
  Image as ImageIcon,
  Loader2,
  Globe,
} from 'lucide-react';
import { BlogPost, ContentBlock } from '@/lib/blogs';
import { fetchBlogs, createBlog, updateBlog, deleteBlog } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const CATEGORIES = [
  'Noorani Qaida',
  'Tajweed Rules',
  'Quran Memorization',
  'Quran Translation',
  'Salah & Duas',
  'Islamic Studies',
  'Online Learning',
  'Spiritual Reflections',
];

const PRESET_IMAGES = [
  { label: 'Mosque & Sky', url: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80' },
  { label: 'Quran & Beads', url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80' },
  { label: 'Open Quran', url: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80' },
  { label: 'Islamic Arch', url: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80' },
];

export function BlogManager() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  // Form state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [image, setImage] = useState(PRESET_IMAGES[0].url);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [blocks, setBlocks] = useState<ContentBlock[]>([
    { type: 'h2', text: 'Introduction' },
    { type: 'p', text: 'Write your introductory paragraph here explaining the sacred virtues and wisdom.' },
  ]);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const data = await fetchBlogs();
      setBlogs(data);
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error Loading Blogs',
        description: err.message || 'Could not fetch blog posts.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!editingId) {
      const generated = val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
      setSlug(generated);
      if (!metaTitle) {
        setMetaTitle(`${val} | Rushd Ul Hidayah`);
      }
    }
  };

  const openCreateModal = () => {
    setEditingId(null);
    setTitle('');
    setSlug('');
    setCategory(CATEGORIES[0]);
    setImage(PRESET_IMAGES[0].url);
    setMetaTitle('');
    setMetaDescription('');
    setBlocks([
      { type: 'h2', text: 'Introduction' },
      { type: 'p', text: 'Write your introductory paragraph here explaining the sacred virtues and wisdom.' },
    ]);
    setIsModalOpen(true);
  };

  const openEditModal = (post: BlogPost) => {
    setEditingId(post.id);
    setTitle(post.title);
    setSlug(post.slug);
    setCategory(post.category);
    setImage(post.image);
    setMetaTitle(post.metaTitle || post.title);
    setMetaDescription(post.metaDescription || '');
    setBlocks(post.blocks && post.blocks.length > 0 ? post.blocks : [
      { type: 'h2', text: 'Introduction' },
      { type: 'p', text: post.metaDescription || '' },
    ]);
    setIsModalOpen(true);
  };

  const handleAddBlock = (type: 'h2' | 'h3' | 'p') => {
    const defaultText =
      type === 'h2'
        ? 'New Key Section (H2)'
        : type === 'h3'
        ? 'Supporting Topic (H3)'
        : 'Detailed explanation paragraph discussing the topic...';
    setBlocks((prev) => [...prev, { type, text: defaultText }]);
  };

  const handleUpdateBlockText = (index: number, text: string) => {
    setBlocks((prev) => {
      const copy = [...prev];
      copy[index].text = text;
      return copy;
    });
  };

  const handleRemoveBlock = (index: number) => {
    setBlocks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMoveBlock = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === blocks.length - 1) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;

    setBlocks((prev) => {
      const copy = [...prev];
      const temp = copy[index];
      copy[index] = copy[targetIndex];
      copy[targetIndex] = temp;
      return copy;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !slug.trim()) {
      toast({
        variant: 'destructive',
        title: 'Validation Error',
        description: 'Please provide both title and slug.',
      });
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        id: editingId || undefined,
        title: title.trim(),
        slug: slug.trim(),
        category,
        image: image.trim(),
        metaTitle: metaTitle.trim() || title.trim(),
        metaDescription:
          metaDescription.trim() ||
          blocks.find((b) => b.type === 'p')?.text ||
          title.trim(),
        blocks: blocks.filter((b) => b.text.trim() !== ''),
      };

      if (editingId) {
        await updateBlog(payload);
        toast({
          title: 'Post Updated',
          description: 'The blog article has been successfully updated.',
        });
      } else {
        await createBlog(payload);
        toast({
          title: 'Post Published',
          description: 'New blog post has been created and published.',
        });
      }

      setIsModalOpen(false);
      await loadPosts();
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Error Saving Post',
        description: err.message || 'Failed to save blog post.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (post: BlogPost) => {
    if (!confirm(`Are you sure you want to delete "${post.title}"?`)) {
      return;
    }

    try {
      await deleteBlog(post.id);
      toast({
        title: 'Post Deleted',
        description: `"${post.title}" has been deleted.`,
      });
      await loadPosts();
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Delete Failed',
        description: err.message || 'Could not delete post.',
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
            <h2 className="text-2xl font-black text-slate-900">Blog Content Management</h2>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Create, edit, and organize SEO-compliant blog posts with structured headings (H1, H2, H3).
          </p>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto">
          <Button asChild variant="outline" className="rounded-2xl text-xs font-bold uppercase tracking-wider">
            <Link href="/blog" target="_blank">
              <Globe className="w-4 h-4 mr-2 text-primary" /> Live Blog View
            </Link>
          </Button>
          <Button
            onClick={openCreateModal}
            className="bg-primary hover:bg-primary/90 text-white rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20"
          >
            <PlusCircle className="w-4 h-4 mr-2 text-accent" /> Create New Post
          </Button>
        </div>
      </div>

      {/* Posts Table Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <span className="font-bold text-slate-700 text-sm">
            All Blog Articles ({blogs.length})
          </span>
          <span className="text-xs text-slate-400 font-medium">
            SEO Rules &amp; Structured Markup Enabled
          </span>
        </div>

        {loading ? (
          <div className="py-16 text-center text-slate-400">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary mb-2" />
            <p className="text-sm">Loading articles...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="py-16 text-center text-slate-400 space-y-3">
            <BookOpen className="w-12 h-12 mx-auto text-slate-300" />
            <p className="font-medium text-sm">No blog posts available. Click &quot;Create New Post&quot; to publish your first article.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50/30">
                  <th className="py-4 px-6">Post Title &amp; Slug</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">SEO Status</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {blogs.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 max-w-xs sm:max-w-md">
                      <div className="font-extrabold text-slate-900 line-clamp-1">{post.title}</div>
                      <div className="text-xs font-mono text-slate-400 mt-0.5">/blog/{post.slug}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-600" /> Optimized (SEO)
                      </span>
                    </td>
                    <td className="py-4 px-6 text-xs text-slate-500 font-medium">{post.date}</td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-primary/10 text-slate-600 hover:text-primary transition-all inline-flex items-center justify-center"
                        title="View Live Article"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => openEditModal(post)}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 transition-all inline-flex items-center justify-center"
                        title="Edit Article"
                      >
                        <Pen className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(post)}
                        className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-600 transition-all inline-flex items-center justify-center"
                        title="Delete Article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Post Editor Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-4xl max-h-[92vh] rounded-[32px] shadow-2xl overflow-y-auto flex flex-col my-auto border border-white">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-100 px-6 sm:px-8 py-5 flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-black text-slate-900">
                  {editingId ? 'Edit Blog Post & SEO Rules' : 'Create New Blog Post'}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Post Title (Main H1 Heading) *
                  </label>
                  <Input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. The Virtues of Seeking Knowledge in Islam"
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    URL Slug (SEO Friendly) *
                  </label>
                  <Input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="virtues-seeking-knowledge"
                    className="rounded-xl font-mono text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Featured Image URL *
                  </label>
                  <Input
                    type="url"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="rounded-xl text-xs"
                  />
                  {/* Preset quick buttons */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="text-[10px] text-slate-400 font-bold uppercase self-center">Presets:</span>
                    {PRESET_IMAGES.map((p, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setImage(p.url)}
                        className={`text-[10px] px-2 py-1 rounded-md border font-medium transition-all ${
                          image === p.url ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* SEO Meta Box */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                  <ChartLine className="w-4 h-4 text-accent" />
                  <span>SEO Optimization Settings</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        SEO Meta Title
                      </label>
                      <span className="text-[10px] text-slate-400 font-mono">{metaTitle.length}/60</span>
                    </div>
                    <Input
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      placeholder="Title displayed on Google search results"
                      className="rounded-xl text-xs bg-white"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                        SEO Meta Description
                      </label>
                      <span className="text-[10px] text-slate-400 font-mono">{metaDescription.length}/160</span>
                    </div>
                    <Textarea
                      rows={2}
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Brief summary for search engine snippets (120-160 chars)"
                      className="rounded-xl text-xs bg-white resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Structured Content Builder */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Structured Content Blocks (H2, H3, Paragraphs)
                    </label>
                    <p className="text-xs text-slate-400">
                      Build your blog post using structured headings for high readability and SEO score.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddBlock('h2')}
                      className="px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 rounded-lg text-xs font-bold transition-all"
                    >
                      + Add H2
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddBlock('h3')}
                      className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 rounded-lg text-xs font-bold transition-all"
                    >
                      + Add H3
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAddBlock('p')}
                      className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 rounded-lg text-xs font-bold transition-all"
                    >
                      + Add Paragraph
                    </button>
                  </div>
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto p-3 border border-slate-200 rounded-2xl bg-slate-50/50">
                  {blocks.map((block, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm"
                    >
                      <div className="flex flex-col gap-1 w-28 flex-shrink-0 pt-1">
                        {block.type === 'h2' ? (
                          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase text-center">
                            H2 Subheading
                          </span>
                        ) : block.type === 'h3' ? (
                          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase text-center">
                            H3 Subheading
                          </span>
                        ) : (
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase text-center">
                            Paragraph
                          </span>
                        )}
                        <div className="flex items-center justify-center gap-1 mt-1 text-slate-400">
                          <button
                            type="button"
                            onClick={() => handleMoveBlock(idx, 'up')}
                            disabled={idx === 0}
                            className="p-1 hover:text-primary disabled:opacity-30"
                            title="Move Up"
                          >
                            <ArrowUp className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleMoveBlock(idx, 'down')}
                            disabled={idx === blocks.length - 1}
                            className="p-1 hover:text-primary disabled:opacity-30"
                            title="Move Down"
                          >
                            <ArrowDown className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <Textarea
                        rows={block.type === 'p' ? 3 : 1}
                        value={block.text}
                        onChange={(e) => handleUpdateBlockText(idx, e.target.value)}
                        placeholder={`Enter ${block.type.toUpperCase()} content...`}
                        className="flex-1 text-sm rounded-lg border-slate-200 resize-none font-normal"
                      />

                      <button
                        type="button"
                        onClick={() => handleRemoveBlock(idx)}
                        className="text-slate-400 hover:text-rose-600 p-2 transition-colors"
                        title="Remove Block"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary hover:bg-primary/90 text-white rounded-xl font-bold px-6"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...
                    </>
                  ) : (
                    'Save & Publish Post'
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
