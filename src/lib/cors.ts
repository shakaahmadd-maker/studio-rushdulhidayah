import { NextResponse } from 'next/server';

const ALLOWED_ORIGINS = [
  'https://rushdulhidayah.com',
  'https://www.rushdulhidayah.com',
  'http://localhost:3000',
  'http://localhost:3001',
];

export function getCorsHeaders(requestOrigin?: string | null) {
  let origin = 'https://rushdulhidayah.com';
  if (requestOrigin && (ALLOWED_ORIGINS.includes(requestOrigin) || process.env.NODE_ENV !== 'production')) {
    origin = requestOrigin;
  }

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
}

export function handleCorsPreflight(request: Request) {
  const origin = request.headers.get('origin');
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(origin),
  });
}
