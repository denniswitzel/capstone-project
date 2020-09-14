/// <reference types="cypress" />

context('App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('has the right App title', () => {
        cy.title().should('include', 'React')
    })

    it('has logo', () => {
        cy.get('svg').should('be.visible')
    })

    it('has categories', () => {
        cy.get('a').should('have.length', '6')
    })

    it('has category image', () => {
        cy.get('img').should('be.visible')
    })

    it('has category names', () => {
        cy.get('h2')
        .first().should('have.text', 'BURGER')
    })
})