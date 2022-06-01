/// <reference types="cypress" />

describe('Create New User', ()=>{
    it('Successfully create new user', () => {
        var user = {
            "name": "Angga Trianto",
            "job": "QA Enginner"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).to.equal(user.name)
            expect(response.body.job).to.equal(user.job)
        })
    });
});