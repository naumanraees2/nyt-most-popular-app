import { render, screen } from '@testing-library/react';
import ArticleList from './components/ArticleList';

test('renders article titles', () => {
  const mockArticles = [{ id: 1, title: 'Test Title', url: 'https://example.com' }];
  render(<ArticleList articles={mockArticles} loading={false} error={null} />);
  expect(screen.getByText(/Test Title/i)).toBeInTheDocument();
});
