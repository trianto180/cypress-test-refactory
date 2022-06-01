/// <reference types="cypress" />

describe('update user', ()=>{
    it('Succesfully update user', () => {
        var user = {
            "name" : "Angga Trianto",
            "job" : "Software quality assurance"
        }

        cy.request('PATCH', 'https://reqres.in/api/users/2', user).then((response)=> {
            expect(response.status).equal(200)
            expect(response.body.name).to.equal(user.name)
            expect(response.body.job).to.equal(user.job)
        })
    });
});