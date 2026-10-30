import { NextResponse } from 'next/server';
import { desc } from 'drizzle-orm';
import { z } from 'zod';
import { getDb } from '@/db';
import { contacts } from '@/db/schema';
import { getCorsHeaders, handleCorsPreflight } from '@/lib/cors';

export async function OPTIONS(request: Request) {
  return handleCorsPreflight(request);
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export async function GET(request: Request) {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  const database = getDb();
  if (!database) {
    return NextResponse.json(
      { error: 'Database service is temporarily unavailable.' },
      { status: 503, headers }
    );
  }

  try {
    const list = await database
      .select()
      .from(contacts)
      .orderBy(desc(contacts.createdAt));

    return NextResponse.json({ data: list }, { headers });
  } catch (err: any) {
    console.error('[API /contacts GET] Error querying database:', err);
    return NextResponse.json(
      { error: 'Failed to retrieve messages.', details: err.message },
      { status: 500, headers }
    );
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  const database = getDb();
  if (!database) {
    return NextResponse.json(
      { error: 'Database service is temporarily unavailable. Please try again later.' },
      { status: 503, headers }
    );
  }

  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    const inserted = await database
      .insert(contacts)
      .values({
        name: validated.name,
        email: validated.email,
        subject: validated.subject,
        message: validated.message,
      })
      .returning();

    return NextResponse.json(
      { success: true, contact: inserted[0] },
      { status: 201, headers }
    );
  } catch (err: any) {
    console.error('[API /contacts POST] Error saving contact message:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: err.errors },
        { status: 400, headers }
      );
    }
    return NextResponse.json(
      { error: 'Failed to send message.', details: err.message },
      { status: 500, headers }
    );
  }
}
