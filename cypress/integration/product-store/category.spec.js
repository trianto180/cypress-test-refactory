/// <reference types="cypress" />

describe('Category Test', ()=>{
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('Categories Phone', () => {
        cy.get('.list-group').contains('Phones').click()
        cy.get('h4').should('contain.text', 'Samsung galaxy s6')
        cy.get('.list-group').contains('Laptops').click()
        cy.get('h4').should('contain.text', 'Sony vaio i5')
        cy.get('.list-group').contains('Monitors').click()
    });
    it('Show Categories page', () => {
        cy.get('h4').should('contain.text', 'Apple monitor 24')
        cy.url().should('include', 'index.html')
    });
});