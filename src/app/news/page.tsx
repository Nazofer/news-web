import { getEverything } from '@api/news';

const NewsPage = async () => {
  const data = await getEverything({ q: 'all' });

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold mb-4'>Latest Bitcoin News</h1>
      <ul>
        {data.articles.map((article) => (
          <li key={article.url} className='border-b py-4'>
            <a
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              {article.title}
            </a>
            <p className='text-sm text-gray-500'>{article.publishedAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsPage;
