/// <reference types="cypress" />

context('Rate product', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/burger/1')
    })

    it('set rating', () => {
        cy.get('button').first().next().next().click()
        cy.get('button').contains('Set rating').click()
    })
    
    it('change rating', () => {
        cy.get('button').first().next().next().click()
        cy.get('button').contains('Set rating').click()
        cy.get('button').contains('Change rating').click()
        cy.get('button').first().next().click()
        cy.get('button').contains('Set rating').click()
    })
})
