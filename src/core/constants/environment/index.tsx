const environment = Object.freeze({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  baseApiUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api`,

  newsApiKey: process.env.NEWS_API_KEY,
  newsApiUrl: process.env.NEWS_API_URL,
});

export default environment;
