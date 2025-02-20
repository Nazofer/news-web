const routes = Object.freeze({
  home: '/',
  news: '/news',
  sources: '/news/sources',
});

export const routeNames = Object.freeze({
  [routes.home]: 'Top Headlines',
  home: 'Top Headlines',
  [routes.news]: 'News',
  news: 'News',
  [routes.sources]: 'Sources',
  sources: 'Sources',
});

export default routes;
