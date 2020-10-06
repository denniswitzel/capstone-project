/// <reference types="cypress" />

context('Add favortie', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/burger/1')
    })

    it('add favorite', () => {
        cy.get('img').next().click()
    })

    it('open favorite list', () => {
        cy.get('img').next().click()
        cy.get('a').next().first().click()
        cy.get('h2').should('have.text', 'Favorites')
    })

    it('remove favorite', () => {
        cy.get('img').next().click()
        cy.get('a').next().first().click()
        cy.get('h2').should('have.text', 'Favorites')
        cy.get('h3').parent().click()
        cy.get('img').next().click()
        cy.get('a').next().first().click()
    })
})
