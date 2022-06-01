/// <reference types="cypress" />

describe('About as test', ()=>{
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('.navbar-nav').contains('About us').click()
    })
    it('', () => {
        cy.get('.vjs-big-play-button').click()
        cy.get('h5').should('contain.text', 'About us')
        cy.get('.modal-footer').contains('Close').click({force: true})
    });
    it('', () => {
        cy.url().should('include', 'index.html')
    });
});