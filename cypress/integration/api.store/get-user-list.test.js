describe('Get User List', ()=>{
    it('Verify the list user will displayed', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
        cy.get('@users').its('headers').its('content-type').should('include', 'application/json; charset=utf-8')
    });
});