import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArticleList from './ArticleList';

const mockArticles = [
  {
    id: 1,
    title: 'Test Article One',
  },
  {
    id: 2,
    title: 'Test Article Two',
  },
];

describe('ArticleList Component', () => {
  test('displays loading message when loading', () => {
    render(
      <MemoryRouter>
        <ArticleList articles={[]} loading={true} error={null} />
      </MemoryRouter>
    );
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays error message when error is present', () => {
    render(
      <MemoryRouter>
        <ArticleList articles={[]} loading={false} error="Something went wrong" />
      </MemoryRouter>
    );
    expect(screen.getByText(/error: something went wrong/i)).toBeInTheDocument();
  });

  test('displays list of articles when data is available', () => {
    render(
      <MemoryRouter>
        <ArticleList articles={mockArticles} loading={false} error={null} />
      </MemoryRouter>
    );

    // Check for title and list items
    expect(screen.getByText(/ny times most popular articles/i)).toBeInTheDocument();
    expect(screen.getByText('Test Article One')).toBeInTheDocument();
    expect(screen.getByText('Test Article Two')).toBeInTheDocument();
  });
});
