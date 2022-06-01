/// <reference types="cypress" />

describe('Contact Test', ()=>{
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('.navbar-nav').contains('Contact').click()
    })
    it('fill New Message', () => {
        cy.get('#recipient-email').type('example@gmail.com')
        cy.get('#recipient-name').type('example')
        cy.get('#message-text').type('example test')
        cy.get('.modal-footer').contains('Send message').click()
    });
    it('After get contact', () => {
        cy.url().should('include', 'index.html')
    });
});