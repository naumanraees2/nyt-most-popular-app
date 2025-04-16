import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleDetail from './ArticleDetail';


describe('ArticleDetail Component', () => {
    const mockNavigate = jest.fn();

    const mockArticle = {
        title: 'Test Title',
        byline: 'By Test Author',
        abstract: 'This is a test abstract.',
        url: 'https://www.nytimes.com/test-article',
    };

    test('renders "Article not found" when article is null', () => {
        render(<ArticleDetail article={null} navigate={mockNavigate} />);
        expect(screen.getByText(/article not found/i)).toBeInTheDocument();

        // Test back button click
        const backButton = screen.getByRole('button', { name: /back/i });
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith('/');
    });

    test('renders article details correctly', () => {
        render(<ArticleDetail article={mockArticle} navigate={mockNavigate} />);

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText(/by test author/i)).toBeInTheDocument();
        expect(screen.getByText(/this is a test abstract/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /read full article/i })).toHaveAttribute('href', mockArticle.url);
    });

    test('calls navigate with -1 when back button is clicked', () => {
        render(<ArticleDetail article={mockArticle} navigate={mockNavigate} />);
        const backButton = screen.getByRole('button', { name: /back/i });
        fireEvent.click(backButton);
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });
});
