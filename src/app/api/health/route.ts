import { NextResponse } from 'next/server';
import { getPool } from '@/db';
import { getCorsHeaders, handleCorsPreflight } from '@/lib/cors';

export async function OPTIONS(request: Request) {
  return handleCorsPreflight(request);
}

export async function GET(request: Request) {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  const pool = getPool();
  let dbStatus = 'disconnected';

  if (pool) {
    try {
      const client = await pool.connect();
      await client.query('SELECT 1');
      client.release();
      dbStatus = 'connected';
    } catch (err: any) {
      dbStatus = `error: ${err.message}`;
    }
  }

  return NextResponse.json(
    {
      status: 'ok',
      service: 'rushdulhidayah-api',
      timestamp: new Date().toISOString(),
      database: dbStatus,
    },
    { headers }
  );
}
