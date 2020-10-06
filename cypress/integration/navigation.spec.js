/// <reference types="cypress" />

context('Move through navigation and back', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('check category navigation and back arrow', () => {
        cy.get('section').children().first().next().click()
        cy.get('h2').should('have.text', 'Favorites')
        cy.get('section').first().next().children().first().click()
        .url().should('eq', 'http://localhost:3000/')
    })

    it('check favorite navigation and back arrow', () => {
        cy.get('section').children().first().next().click()
        cy.get('h2').should('have.text', 'Favorites')
        cy.get('svg').first().click().url().should('eq', 'http://localhost:3000/')
    })

    it('check rating navigation and back arrow', () => {
        cy.get('section').children().first().next().next().click()
        cy.get('h2').should('have.text', 'Highest rating')
        cy.get('svg').first().click().url().should('eq', 'http://localhost:3000/')
    })
})
