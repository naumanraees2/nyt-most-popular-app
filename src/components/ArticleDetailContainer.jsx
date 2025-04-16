
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';

const ArticleDetailContainer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return <ArticleDetail article={state?.article} navigate={navigate} />;
};

export default ArticleDetailContainer;