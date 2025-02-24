import { getTopHeadlines } from '@/core/api/news';
import ArticleCard from '@/ui/components/article-card';
import Container from '@/ui/components/container';

const TopHeadlinesPage = async () => {
  const data = await getTopHeadlines();

  if (data.status !== 'ok' || !data.articles) {
    return <div>Failed to fetch data</div>;
  }

  return (
    <Container className='py-10'>
      <ul className='grid grid-container--fill gap-6'>
        {data.articles.map((article) => (
          <ArticleCard article={article} key={article.url} />
        ))}
      </ul>
    </Container>
  );
};

export default TopHeadlinesPage;
