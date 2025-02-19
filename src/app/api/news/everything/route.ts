import environment from '@constants/environment';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const apiKey = environment.newsApiKey;
  const apiUrl = environment.newsApiUrl;

  const params = new URLSearchParams({
    apiKey: apiKey ?? '',
    q: searchParams.get('q') || '',
    searchIn: searchParams.get('searchIn') || '',
    sources: searchParams.get('sources') || '',
    domains: searchParams.get('domains') || '',
    excludeDomains: searchParams.get('excludeDomains') || '',
    from: searchParams.get('from') || '',
    to: searchParams.get('to') || '',
    language: searchParams.get('language') || '',
    sortBy: searchParams.get('sortBy') || '',
    pageSize: searchParams.get('pageSize') || '',
    page: searchParams.get('page') || '',
  });

  const url = `${apiUrl}/everything?${params.toString()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch everything');

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch everything' },
      { status: 500 }
    );
  }
}
