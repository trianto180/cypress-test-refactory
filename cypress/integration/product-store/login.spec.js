/// <reference types="cypress" />

describe('Login / Logout Test', ()=>{
    before(() => {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#login2').click()
    })
    it('Invlid Acount', () => {
        cy.get('#loginusername').clear()
        cy.get('#loginusername').type('invalid_username')
        cy.get('#loginpassword').clear()
        cy.get('#loginpassword').type('invalid_password')
        cy.get('.modal-footer').contains('Log in').click()
        cy.url().should('include', 'index.html')
    });
    it('Valid Login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password
            cy.login('username', 'password')
            cy.get('a').should('contain.text', 'Welcome username')
        })
    });

    it('Logout application', () => {
        cy.get('#logout2').click()
        cy.url().should('include', 'index.html')
        cy.get('a').should('contain.text', 'Log in')
    });
});