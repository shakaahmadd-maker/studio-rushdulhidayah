import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

async function seed() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('Error: DATABASE_URL is not set. Cannot run seed.');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString,
    ssl:
      process.env.DATABASE_SSL === 'true' || connectionString.includes('sslmode=require')
        ? { rejectUnauthorized: false }
        : undefined,
  });

  const db = drizzle(pool, { schema });

  try {
    console.log('Seeding initial demonstration records...');

    // Insert sample registration if empty
    const existingRegs = await db.select().from(schema.registrations).limit(1);
    if (existingRegs.length === 0) {
      await db.insert(schema.registrations).values([
        {
          studentName: 'Zainab Ahmed',
          studentAge: 10,
          gender: 'female',
          country: 'United Kingdom',
          email: 'zainab.sample@example.com',
          phone: '+44 7123 456789',
          course: 'noorani-qaida',
          classDays: '3 Days / Week',
          tutorPreference: 'female',
          message: 'Interested in evening weekend slots.',
        },
      ]);
      console.log('✓ Seeded sample registration');
    } else {
      console.log('Registrations table already contains data, skipping seed.');
    }

    // Insert sample contact message if empty
    const existingContacts = await db.select().from(schema.contacts).limit(1);
    if (existingContacts.length === 0) {
      await db.insert(schema.contacts).values([
        {
          name: 'Ibrahim Malik',
          email: 'ibrahim.sample@example.com',
          subject: 'Question regarding Quran Tajweed course for adults',
          message: 'As-salamu alaykum, do you offer trial lessons for adult working professionals during weekends?',
        },
      ]);
      console.log('✓ Seeded sample contact message');
    } else {
      console.log('Contacts table already contains data, skipping seed.');
    }

    console.log('✓ Seeding complete!');
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seed();
