'use strict'

describe('Pruebas de posts', () => {
    before(() => {
        //cy.exec('npm run test:clean')
        cy.fixture('user.json').as('userData')
        cy.visit('/login')

        cy.get('@userData').then((userData) => {
            cy.createUser(userData)
            cy.visit('/dashboard')
            cy.wait(3000)
        })
    })

    it('Debe crear un post', () => {
        cy.get('@userData').then((userData) => {
            cy.get('textarea').type(Cypress.env('postContent'))
            cy.contains('button', 'Crear').as('botonCrear')
            cy.get('@botonCrear').should('be.enabled')
            cy.get('@botonCrear').click()
            cy.contains('.co12 h5', userData.name).should('be.visible')
            cy.contains('p', Cypress.env('postContent')).should('be.visible')
        })
    })
})