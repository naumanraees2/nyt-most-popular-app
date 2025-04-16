import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import ArticleListContainer from './components/ArticleListContainer';
import ArticleDetailContainer from './components/ArticleDetailContainer';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<ArticleListContainer />} />
        <Route path="/article/:id" element={<ArticleDetailContainer />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
