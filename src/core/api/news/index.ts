import { stringifyObjectValues } from '@/core/utils/stringify-object-values';
import type {
  EverythingParams,
  TopHeadlinesParams,
  SourcesParams,
  NewsAPIResponseWithArticles,
  NewsAPIResponseWithSources,
} from './types';
import apiRoutes from '@/core/constants/routes/api';
import { DEFAULT_LANGUAGE, DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from './constants';

const getEverything = async (
  params?: EverythingParams
): Promise<NewsAPIResponseWithArticles> => {
  const queryParams = new URLSearchParams(
    stringifyObjectValues({
      language: DEFAULT_LANGUAGE,
      pageSize: DEFAULT_PAGE_SIZE,
      page: DEFAULT_PAGE,
      ...params,
    })
  ).toString();

  const response = await fetch(`${apiRoutes.news.everything}?${queryParams}`);
  const data: NewsAPIResponseWithArticles = await response.json();
  return data;
};

const getTopHeadlines = async (
  params?: TopHeadlinesParams
): Promise<NewsAPIResponseWithArticles> => {
  const queryParams = new URLSearchParams(
    stringifyObjectValues({
      language: DEFAULT_LANGUAGE,
      pageSize: 100,
      page: DEFAULT_PAGE,
      ...params,
    })
  ).toString();

  const response = await fetch(`${apiRoutes.news.topHeadlines}?${queryParams}`);

  const data: NewsAPIResponseWithArticles = await response.json();
  return data;
};

const getSources = async (
  params?: SourcesParams
): Promise<NewsAPIResponseWithSources> => {
  const queryParams = new URLSearchParams(
    stringifyObjectValues({
      language: DEFAULT_LANGUAGE,
      ...params,
    })
  ).toString();

  const response = await fetch(`${apiRoutes.news.sources}?${queryParams}`);
  const data: NewsAPIResponseWithSources = await response.json();
  return data;
};

export { getTopHeadlines, getEverything, getSources };
