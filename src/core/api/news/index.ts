import type {
  EverythingParams,
  TopHeadlinesParams,
  SourcesParams,
  NewsAPIResponseWithArticles,
  NewsAPIResponseWithSources,
} from './types';
import apiRoutes from '@constants/routes/api';

const getTopHeadlines = async (
  params: TopHeadlinesParams
): Promise<NewsAPIResponseWithArticles> => {
  const queryParams = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  const response = await fetch(`${apiRoutes.news.topHeadlines}?${queryParams}`);

  const data: NewsAPIResponseWithArticles = await response.json();
  return data;
};

const getEverything = async (
  params: EverythingParams
): Promise<NewsAPIResponseWithArticles> => {
  const queryParams = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  const response = await fetch(`${apiRoutes.news.everything}?${queryParams}`);
  const data: NewsAPIResponseWithArticles = await response.json();
  return data;
};

const getSources = async (
  params: SourcesParams
): Promise<NewsAPIResponseWithSources> => {
  const queryParams = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  const response = await fetch(`${apiRoutes.news.sources}?${queryParams}`);
  const data: NewsAPIResponseWithSources = await response.json();
  return data;
};

export { getTopHeadlines, getEverything, getSources };
