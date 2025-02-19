export interface EverythingParams {
  q?: string;
  searchIn?: 'title' | 'description' | 'content';
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  pageSize?: number;
  page?: number;
}

export interface TopHeadlinesParams {
  sources?: string;
  q?: string;
  category?: string;
  language?: string;
  country?: string;
  pageSize?: number;
  page?: number;
}

export interface SourcesParams {
  category?: string;
  language?: string;
  country?: string;
}

export interface Source {
  id: string | null;
  name: string;
  description?: string;
  url?: string;
  category?: string;
  language?: string;
  country?: string;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

type NewsAPIResponseBase = { totalResults: number } & (
  | {
      status: 'ok';
    }
  | {
      status: 'error';
      code: string;
      message: string;
    }
);

export type NewsAPIResponseWithArticles = NewsAPIResponseBase & {
  articles: Article[];
};

export type NewsAPIResponseWithSources = NewsAPIResponseBase & {
  sources: Source[];
};
