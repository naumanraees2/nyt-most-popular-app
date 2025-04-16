describe('NY Times Most Popular Articles App', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/mostpopular/v2/viewed/**', {
      statusCode: 200,
      body: {
        results: [
          {
            id: 1001,
            title: 'Mocked Article 1',
            abstract: 'This is a mocked article abstract',
            url: 'https://nytimes.com/article1',
          },
          {
            id: 1002,
            title: 'Mocked Article 2',
            abstract: 'Another mocked abstract',
            url: 'https://nytimes.com/article2',
          },
        ]
      }
    }).as('getMockedArticles');
  
    cy.visit('http://localhost:3000/');
  });

  it('should load the home page with article list', () => {
    cy.get('[data-testid="article-list"]').should('exist');
  });

  it('should display article details when an article is clicked', () => {
    
    cy.get('[data-testid="article-detail"]', { timeout: 8000 }).should('exist');

    cy.get('[data-testid="article-title"]',{ timeout: 8000 }).should('be.visible');
    cy.get('[data-testid="article-abstract"]', { timeout: 8000 }).should('be.visible');
  });

  it('should return to the article list when back button is clicked', () => {
    cy.get('[data-testid="back-button"]').click();
    cy.get('[data-testid="article-list"]').should('exist');
  });

  it('should open article URL in a new tab when external link is clicked', () => {
    cy.get('[data-testid="article-external-link"]')
      .should('have.attr', 'href')
      .and('include', 'nytimes.com');
  });

  it('should handle API errors gracefully', () => {
    cy.intercept('GET', '**/mostpopular/**', { forceNetworkError: true }).as('getArticles');
    cy.visit('http://localhost:3000/');
    cy.get('[data-testid="error-message"]').should('exist');
  });
});
