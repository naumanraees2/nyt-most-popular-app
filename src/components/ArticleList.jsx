
import React from 'react';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>NY Times Most Popular Articles</h1>
      <ul data-testid="article-list">
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`} state={{ article }}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;