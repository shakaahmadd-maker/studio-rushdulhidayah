import { NextResponse } from 'next/server';
import { getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from '@/lib/blogs';
import { getCorsHeaders, handleCorsPreflight } from '@/lib/cors';

export async function OPTIONS(request: Request) {
  return handleCorsPreflight(request);
}

export async function GET(request: Request) {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  try {
    const posts = getBlogPosts();
    return NextResponse.json({ success: true, data: posts }, { headers });
  } catch (error: any) {
    console.error('[API /blogs GET] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500, headers }
    );
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  try {
    const body = await request.json();
    if (!body.title || !body.slug) {
      return NextResponse.json(
        { success: false, error: 'Title and slug are required' },
        { status: 400, headers }
      );
    }

    const newPost = createBlogPost({
      title: body.title,
      slug: body.slug,
      category: body.category || 'Islamic Guidance',
      image: body.image || 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
      metaTitle: body.metaTitle || body.title,
      metaDescription: body.metaDescription || (body.blocks?.[0]?.text || body.title),
      blocks: body.blocks || [],
      keywords: body.keywords || {
        shortTail: ['Quran', 'Islam', 'Learning'],
        longTail: [body.title.toLowerCase()],
        lsi: ['authentic guidance', 'spiritual growth'],
        nlpEntities: ['Divine wisdom', 'Islamic studies']
      }
    });

    return NextResponse.json({ success: true, data: newPost }, { status: 201, headers });
  } catch (error: any) {
    console.error('[API /blogs POST] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create blog post' },
      { status: 500, headers }
    );
  }
}

export async function PUT(request: Request) {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json(
        { success: false, error: 'Post ID is required for update' },
        { status: 400, headers }
      );
    }

    const updated = updateBlogPost(body.id, body);
    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404, headers }
      );
    }

    return NextResponse.json({ success: true, data: updated }, { headers });
  } catch (error: any) {
    console.error('[API /blogs PUT] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update blog post' },
      { status: 500, headers }
    );
  }
}

export async function DELETE(request: Request) {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Post ID is required' },
        { status: 400, headers }
      );
    }

    const deleted = deleteBlogPost(id);
    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404, headers }
      );
    }

    return NextResponse.json({ success: true, message: 'Deleted successfully' }, { headers });
  } catch (error: any) {
    console.error('[API /blogs DELETE] Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete blog post' },
      { status: 500, headers }
    );
  }
}
