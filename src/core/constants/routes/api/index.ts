import environment from '@/core/constants/environment';

const apiRoutes = Object.freeze({
  news: {
    everything: `${environment.baseApiUrl}/news/everything`,
    topHeadlines: `${environment.baseApiUrl}/news/top-headlines`,
    sources: `${environment.baseApiUrl}/news/sources`,
  },
});

export default apiRoutes;
