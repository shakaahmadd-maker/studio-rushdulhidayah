import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

let pool: Pool | null = null;
let dbInstance: any = null;

// In-memory fallback storage for when PostgreSQL is not connected
const inMemoryRegistrations: any[] = [
  {
    id: 1,
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
    createdAt: new Date('2026-02-15T10:00:00Z'),
  },
  {
    id: 2,
    studentName: 'Hamza Khan',
    studentAge: 14,
    gender: 'male',
    country: 'United States',
    email: 'hamza.k@example.com',
    phone: '+1 415 555 2671',
    course: 'quran-reading',
    classDays: '5 Days / Week',
    tutorPreference: 'male',
    message: 'Would like to focus on Tajweed and Makharij.',
    createdAt: new Date('2026-02-28T14:30:00Z'),
  },
];

const inMemoryContacts: any[] = [
  {
    id: 1,
    name: 'Ibrahim Malik',
    email: 'ibrahim.sample@example.com',
    subject: 'Question regarding Quran Tajweed course for adults',
    message: 'As-salamu alaykum, do you offer trial lessons for adult working professionals during weekends?',
    createdAt: new Date('2026-03-01T09:15:00Z'),
  },
];

let nextRegId = 3;
let nextContactId = 2;

function createInMemoryDb() {
  console.info('[AI Studio] Using in-memory database mock for contacts and registrations');
  return {
    select: () => ({
      from: (table: any) => {
        const isReg =
          table === schema.registrations ||
          table?._?.name === 'registrations' ||
          table?.name === 'registrations';
        const sourceData = isReg ? inMemoryRegistrations : inMemoryContacts;

        return {
          orderBy: () => Promise.resolve([...sourceData].reverse()),
          limit: (n: number) => Promise.resolve([...sourceData].slice(0, n)),
          then: (resolve: (val: any) => void) => resolve([...sourceData]),
        };
      },
    }),
    insert: (table: any) => ({
      values: (val: any) => {
        const isReg =
          table === schema.registrations ||
          table?._?.name === 'registrations' ||
          table?.name === 'registrations';

        return {
          returning: async () => {
            if (isReg) {
              const record = {
                id: nextRegId++,
                ...val,
                createdAt: new Date(),
              };
              inMemoryRegistrations.push(record);
              return [record];
            } else {
              const record = {
                id: nextContactId++,
                ...val,
                createdAt: new Date(),
              };
              inMemoryContacts.push(record);
              return [record];
            }
          },
        };
      },
    }),
  };
}

export function getPool(): Pool | null {
  if (pool) return pool;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }

  try {
    pool = new Pool({
      connectionString,
      ssl:
        process.env.DATABASE_SSL === 'true' || connectionString.includes('sslmode=require')
          ? { rejectUnauthorized: false }
          : undefined,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    });

    pool.on('error', (err) => {
      console.error('[Database] Unexpected error on idle client', err);
    });

    return pool;
  } catch (err) {
    console.error('[Database] Failed to initialize PostgreSQL pool:', err);
    return null;
  }
}

export function getDb(): any {
  if (dbInstance) return dbInstance;
  const activePool = getPool();
  if (activePool) {
    try {
      dbInstance = drizzle(activePool, { schema });
      return dbInstance;
    } catch (err) {
      console.warn('[Database] Drizzle initialization failed, falling back to mock:', err);
    }
  }

  dbInstance = createInMemoryDb();
  return dbInstance;
}

export const db = getDb();
export { schema };
