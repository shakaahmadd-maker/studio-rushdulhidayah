# Rushd Ul Hidayah Quran Academy

Online Quran and Islamic learning academy platform built with Next.js (App Router), PostgreSQL, and Drizzle ORM.

## Architecture

- **Frontend Application**: Next.js 15 (React 19, Tailwind CSS, Lucide icons)
  - Production URL: `https://rushdulhidayah.com`
- **Backend / API**: Node.js Next.js API Routes (with CORS configuration for cross-origin hosting)
  - Backend API URL: `https://api.rushdulhidayah.com`
- **Database**: PostgreSQL
- **ORM & Migrations**: Drizzle ORM (`drizzle-kit`, `drizzle-orm/node-postgres`)

---

## Environment Variables

Configure these in your hosting environment (e.g., Dokploy, Vercel, or Docker):

### Backend / Fullstack Environment (`.env`)
```bash
# PostgreSQL connection string
DATABASE_URL=postgresql://<username>:<password>@<db-host>:5432/<database_name>
DATABASE_SSL=false   # Set to true if your database provider requires SSL (e.g. Supabase, Neon, AWS RDS)

# Gemini AI API Key (Server-side)
GEMINI_API_KEY=your-gemini-api-key

# Preserved Firebase Authentication & Storage variables
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=studio-6106608140-351dd
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### Frontend Environment (`.env.production` on `https://rushdulhidayah.com`)
```bash
# Point frontend to the dedicated backend API
NEXT_PUBLIC_API_URL=https://api.rushdulhidayah.com
```

*(Note: If deploying as a unified single container/service where both frontend and API routes run together on the same domain, `NEXT_PUBLIC_API_URL` can be left blank or omitted to use relative paths.)*

---

## Database Commands

```bash
# 1. Generate SQL migration files from schema definition (src/db/schema.ts)
npm run db:generate

# 2. Apply pending migrations to the PostgreSQL database
npm run db:migrate

# 3. Direct schema push (for rapid prototyping or dev environments)
npm run db:push

# 4. Seed initial database records
npm run db:seed
```

---

## Deployment Order (Dokploy / Production)

1. **Deploy PostgreSQL Database**:
   - Provision a PostgreSQL 15+ or 16 instance in Dokploy.
   - Note the internal/external connection string (`DATABASE_URL`).
2. **Run Migrations**:
   - Run `npm run db:migrate` (or apply `drizzle/0000_aromatic_sue_storm.sql`).
3. **Deploy Backend API** (`https://api.rushdulhidayah.com`):
   - Set environment variables: `DATABASE_URL`, `DATABASE_SSL`, `GEMINI_API_KEY`.
   - Health check available at `https://api.rushdulhidayah.com/api/health`.
4. **Deploy Frontend** (`https://rushdulhidayah.com`):
   - Set `NEXT_PUBLIC_API_URL=https://api.rushdulhidayah.com`.
   - Set the Firebase client variables for preserved Authentication.
5. **Verify End-to-End**:
   - Submit trial registration at `/register`.
   - Submit contact form message at `/contact`.
   - Sign in to `/login` and verify entries load in the `/admin` dashboard.

---

## Firebase Authentication & Storage Preservation

- **Firestore database operations** have been migrated to PostgreSQL (`registrations`, `contacts`).
- **Firebase Authentication** (`src/app/login`, `src/app/admin`, `src/firebase/auth/use-user.tsx`) and **Firebase Storage** (`src/lib/placeholder-images.json`) are currently preserved per safety rules.
- To migrate Auth to a self-hosted PostgreSQL-backed solution (e.g. NextAuth / Auth.js or Lucia Auth with argon2/bcrypt password hashing), review the separate Auth Migration Plan.
