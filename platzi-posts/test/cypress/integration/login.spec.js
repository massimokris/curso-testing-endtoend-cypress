'use stric'

describe('Pruebas del login', () => {
    // before(() => {
    //     cy.exec('npm run test:clean')
    // })
    beforeEach(() => {
        cy.fixture('user.json').as('userData')
        cy.visit('/login')
        cy.contains('h1', 'Bienvenido').should('be.visible')
    })

    it('Debe registrar un usuario', () => {
        cy.get('@userData').then((userData) => {
            cy.createUser(userData)
            cy.get('.error-msg').should('not.exist')
            cy.screenshot('create-user')
        })
        
    })

    it('Debe loguear un usuario', () => {
        cy.get('@userData').then((userData) => {
            cy.loginUser(userData.email, userData.password)
            cy.screenshot('login-user', {blackout: ['#email1']})
            cy.contains('a', 'Dashboard').should('be.visible') 
        })
    })

    it('Debe fallar con un usuario erroneo', () => {
        cy.loginUser('fail@test.com', 'fallara')
        cy.get('.error-msg').should('be.visible')
        cy.screenshot('login-failed')
    })

    after(() => {
        cy.log('Test finalizados')
    })
})