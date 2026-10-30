/**
 * Script to run quick automated sanity checks on backend API endpoints
 * Usage: npx tsx scripts/test-api.ts [baseUrl]
 */

const BASE_URL = process.argv[2] || process.env.API_URL || 'http://localhost:3000';

async function testEndpoint(name: string, url: string, options?: RequestInit) {
  process.stdout.write(`Testing ${name} (${url})... `);
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type') || '';
    const body = contentType.includes('application/json') ? await res.json() : await res.text();

    if (res.ok) {
      console.log(`\x1b[32mPASS\x1b[0m (HTTP ${res.status})`);
      return { success: true, body };
    } else {
      console.log(`\x1b[33mWARN\x1b[0m (HTTP ${res.status}):`, typeof body === 'object' ? JSON.stringify(body) : body);
      return { success: false, status: res.status, body };
    }
  } catch (err: any) {
    console.log(`\x1b[31mFAIL\x1b[0m - ${err.message}`);
    return { success: false, error: err.message };
  }
}

async function runTests() {
  console.log(`\n--- Running API Sanity Checks against: ${BASE_URL} ---\n`);

  // 1. Health check
  await testEndpoint('GET /api/health', `${BASE_URL}/api/health`);

  // 2. CORS Preflight
  await testEndpoint('OPTIONS /api/registrations (CORS)', `${BASE_URL}/api/registrations`, {
    method: 'OPTIONS',
    headers: {
      Origin: 'https://rushdulhidayah.com',
      'Access-Control-Request-Method': 'POST',
    },
  });

  // 3. GET /api/registrations
  await testEndpoint('GET /api/registrations', `${BASE_URL}/api/registrations`);

  // 4. GET /api/contacts
  await testEndpoint('GET /api/contacts', `${BASE_URL}/api/contacts`);

  // 5. Validation failure on empty POST
  await testEndpoint('POST /api/contacts (Validation Check)', `${BASE_URL}/api/contacts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });

  console.log('\n--- API Checks Completed ---\n');
}

runTests();
