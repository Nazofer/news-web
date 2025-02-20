import environment from '@/core/constants/environment';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const apiKey = environment.newsApiKey;
  const apiUrl = environment.newsApiUrl;

  const params = new URLSearchParams({
    apiKey: apiKey ?? '',
    category: searchParams.get('category') || '',
    language: searchParams.get('language') || '',
    country: searchParams.get('country') || '',
  });

  const url = `${apiUrl}/top-headlines/sources?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch sources');

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch sources' },
      { status: 500 }
    );
  }
}
