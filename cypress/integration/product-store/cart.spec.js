/// <reference types="cypress" />

describe('Cart Test', ()=>{
    before(()=> {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('Checkout Product', () => {
        cy.contains('Samsung galaxy s6').click()
        cy.contains('Add to cart').click()
        cy.get('.navbar-nav').contains('Cart').click()
        cy.contains('Place Order').click()

        cy.get('#name').type('Angga')
        cy.get('#country').type('Country')
        cy.get('#city').type('City')
        cy.get('#card').type('0198777272')
        cy.get('#month').type('12')
        cy.get('#year').type('2022')
        cy.get('.modal-footer').contains('Purchase').click()
    });

    it('After Checkout', () => {
        cy.get('h2').should('contain.text', 'Thank you for your purchase!')
        cy.get('.confirm').contains('OK').click()
    });
});