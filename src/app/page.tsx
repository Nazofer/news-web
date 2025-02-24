import { getTopHeadlines } from '@/core/api/news';
import ArticleCard from '@/ui/components/article-card';

const TopHeadlinesPage = async () => {
  const data = await getTopHeadlines();

  if (data.status !== 'ok' || !data.articles) {
    return <div>Failed to fetch data</div>;
  }

  return (
    <div className='flex py-10 px-4'>
      <ul className='container grid grid-container--fill gap-6 max-w-[1400px] w-full mx-auto'>
        {data.articles.map((article) => (
          <ArticleCard article={article} key={article.url} />
        ))}
      </ul>
    </div>
  );
};

export default TopHeadlinesPage;
