import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

async function runMigration() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error('Error: DATABASE_URL is not set. Cannot run migrations.');
    process.exit(1);
  }

  console.log('Connecting to PostgreSQL database for migration...');
  const pool = new Pool({
    connectionString,
    ssl:
      process.env.DATABASE_SSL === 'true' || connectionString.includes('sslmode=require')
        ? { rejectUnauthorized: false }
        : undefined,
  });

  const db = drizzle(pool, { schema });

  try {
    console.log('Applying pending Drizzle migrations from ./drizzle...');
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('✓ Database migrations applied successfully!');
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigration();
