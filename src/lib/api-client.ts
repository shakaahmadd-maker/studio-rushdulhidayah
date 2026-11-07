/**
 * Helper to construct backend API URLs and make calls
 * Honors NEXT_PUBLIC_API_URL (e.g. https://api.rushdulhidayah.com)
 */

export function getApiBaseUrl(): string {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL.replace(/\/+$/, '');
  }
  return '';
}

export async function submitRegistration(payload: {
  studentName: string;
  studentAge: number;
  gender: string;
  country: string;
  email: string;
  phone: string;
  course: string;
  classDays: string;
  tutorPreference: string;
  message?: string;
}) {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/registrations`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to submit registration');
  }

  return data;
}

export async function submitContact(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/contacts`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to send message');
  }

  return data;
}

export async function fetchRegistrations() {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/registrations`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch registrations');
  }

  return data.data || [];
}

export async function fetchContacts() {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/contacts`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch contact messages');
  }

  return data.data || [];
}

export async function fetchBlogs() {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/blogs`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch blog posts');
  }

  return data.data || [];
}

export async function createBlog(payload: any) {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/blogs`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to create blog post');
  }

  return data.data;
}

export async function updateBlog(payload: any) {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/blogs`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to update blog post');
  }

  return data.data;
}

export async function deleteBlog(id: string) {
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}/api/blogs?id=${encodeURIComponent(id)}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || 'Failed to delete blog post');
  }

  return true;
}
