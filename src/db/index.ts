import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

let pool: Pool | null = null;
let dbInstance: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getPool(): Pool | null {
  if (pool) return pool;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    if (process.env.NODE_ENV === 'production') {
      console.warn('[Database] DATABASE_URL environment variable is not defined.');
    }
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

export function getDb() {
  if (dbInstance) return dbInstance;
  const activePool = getPool();
  if (!activePool) return null;
  dbInstance = drizzle(activePool, { schema });
  return dbInstance;
}

export const db = getDb();
export { schema };
