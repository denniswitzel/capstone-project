/// <reference types="cypress" />

context('Visit prodcut list', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('has the right App title', () => {
        cy.title().should('include', 'Planternate')
    })

    it('has categories', () => {
        cy.get('a').should('have.length', '9')
    })

    it('has category image', () => {
        cy.get('img').should('be.visible')
    })

    it('has category names', () => {
        cy.get('h2')
        .first().should('have.text', 'BURGER')
    })

    it('leads to antoher side', () => {
        cy.get('a').first().click()
        .location('href').should('include', '/burger')
    })
})

context('Filter and open detail page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/burger')
    })

    it('has category name', () => {
        cy.get('h2')
        .first().should('have.text', 'BURGER')
    })

    it('opens filter', () => {
        cy.get('h2').next().click()
    })

    it('change filter', () => {
        cy.get('h2').next().click()
        cy.get('button').first().should('have.text', 'Show all')
        .next().click()
        .next().click()
    })

    it('leads back to homepage', () => {
        cy.get('a').first()
        .location('href').should('include', 'http://localhost:3000/')
    })

    it('open detail page', () => {
        cy.get('h3').first().should('have.text', 'amidori - veggie best burger')
        .parent().click()
        .location('href').should('include', '/1')
    })
})
