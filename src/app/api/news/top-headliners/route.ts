import environment from '@constants/environment';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const apiKey = environment.newsApiKey;
  const apiUrl = environment.newsApiUrl;

  const params = new URLSearchParams({
    apiKey: apiKey ?? '',
    sources: searchParams.get('sources') || '',
    q: searchParams.get('q') || '',
    category: searchParams.get('category') || '',
    language: searchParams.get('language') || '',
    country: searchParams.get('country') || '',
    pageSize: searchParams.get('pageSize') || '20',
    page: searchParams.get('page') || '1',
  });

  const url = `${apiUrl}/top-headlines?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch top headlines');

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch top headlines' },
      { status: 500 }
    );
  }
}
