import React from 'react';

const ArticleDetail = ({ article, navigate }) => {
  if (!article) return <p>Article not found. <button onClick={() => navigate('/')}>Back</button></p>;

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '600px', margin: '2rem auto' }}>
      <h2>{article.title}</h2>
      <p><em>{article.byline}</em></p>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noreferrer" style={{ color: 'blue' }}>Read Full Article</a>
      <br /><br />
      <button onClick={() => navigate(-1)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#4681f4',
          border: 'none',
          borderRadius: '5px',
          color: '#fff',
          cursor: 'pointer'
        }}>Back</button>
    </div>
  );
};

export default ArticleDetail;