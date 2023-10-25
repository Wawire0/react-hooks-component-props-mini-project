import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
  return (
    <main>
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </main>
  );
};

export default ArticleList;
