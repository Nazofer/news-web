import { getSources } from '@/core/api/news';
import React from 'react';

const SourcesPage = async () => {
  const data = await getSources({});

  return (
    <div>
      <h1>News Sources</h1>
      <ul>
        {data.sources.map((source) => (
          <li key={source.id}>
            <h2>{source.name}</h2>
            <p>{source.description}</p>
            <a href={source.url} target='_blank' rel='noopener noreferrer'>
              Visit Source
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourcesPage;
