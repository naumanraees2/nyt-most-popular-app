import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';


class ArticleListContainer extends Component {
  state = {
    articles: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`)
      .then((res) => this.setState({ articles: res.data.results, loading: false }))
      .catch((err) => this.setState({ error: err.message, loading: false }));
  }

  render() {
    return (
      <div>
        <h3 data-testid="data-title-first">Articles List</h3>
        <ArticleList {...this.state} />
      </div>
    )
  }
}

export default ArticleListContainer;