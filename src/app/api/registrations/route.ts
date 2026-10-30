import { NextResponse } from 'next/server';
import { desc } from 'drizzle-orm';
import { z } from 'zod';
import { getDb } from '@/db';
import { registrations } from '@/db/schema';
import { getCorsHeaders, handleCorsPreflight } from '@/lib/cors';

export async function OPTIONS(request: Request) {
  return handleCorsPreflight(request);
}

const registrationSchema = z.object({
  studentName: z.string().min(2, 'Student name is required.'),
  studentAge: z.coerce.number().min(4, 'Student must be at least 4 years old.'),
  gender: z.string().min(1, 'Please select a gender.'),
  country: z.string().min(2, 'Country is required.'),
  email: z.string().email('A valid email is required.'),
  phone: z.string().min(5, 'A valid phone number is required.'),
  course: z.string().min(1, 'Please select a course.'),
  classDays: z.string().min(1, 'Please select a class schedule.'),
  tutorPreference: z.string().min(1, 'Please select a tutor preference.'),
  message: z.string().optional().nullable(),
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
      .from(registrations)
      .orderBy(desc(registrations.createdAt));

    return NextResponse.json({ data: list }, { headers });
  } catch (err: any) {
    console.error('[API /registrations GET] Error querying database:', err);
    return NextResponse.json(
      { error: 'Failed to retrieve registrations.', details: err.message },
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
    const validated = registrationSchema.parse(body);

    const inserted = await database
      .insert(registrations)
      .values({
        studentName: validated.studentName,
        studentAge: validated.studentAge,
        gender: validated.gender,
        country: validated.country,
        email: validated.email,
        phone: validated.phone,
        course: validated.course,
        classDays: validated.classDays,
        tutorPreference: validated.tutorPreference,
        message: validated.message || null,
      })
      .returning();

    return NextResponse.json(
      { success: true, registration: inserted[0] },
      { status: 201, headers }
    );
  } catch (err: any) {
    console.error('[API /registrations POST] Error processing registration:', err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: err.errors },
        { status: 400, headers }
      );
    }
    return NextResponse.json(
      { error: 'Failed to save registration.', details: err.message },
      { status: 500, headers }
    );
  }
}
