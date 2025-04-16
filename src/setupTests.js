import '@testing-library/jest-dom';

// cypress/e2e/nyt.cy.js
/// <reference types="cypress" />

describe('NYT Articles', () => {
  it('should load and display articles', () => {
    cy.visit('/');
    cy.contains('NY Times Most Popular Articles');
    cy.get('li').should('have.length.at.least', 1);
  });

  it('should navigate to article detail', () => {
    cy.visit('/');
    cy.get('li').first().click();
    cy.contains('Back');
  });
});
