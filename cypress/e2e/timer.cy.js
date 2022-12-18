// import { each } from 'cypress-recurse'

describe('Should check timer in given time', () => {
  it('Check timer change each second', () => {
    cy.visit('https://timerdoro.com/')
    cy.get('.btn-dark').click();
    cy.get('[data-preset="timerdoro"]').click();
    cy.get('.flex-grow-0').click();
    cy.get('.btn-group.mb-4 > .active').click();
    cy.get('p.mb-4 > .btn').click();
    cy.get('div.TimerList div.dropdown')
      .eq(2)
      .find('a')
      .as('sec')
      .should('have.text', '00')
    cy.get('.flex-grow-1').click()
    cy.wait(1000)
    cy.get('@sec').should('have.text', '59')
    cy.wait(1000)
    cy.get('@sec').should('have.text', '58')
    cy.get('.btn-group > .flex-fill').click()
    cy.get('@sec').should('have.text', '00')
  })
})
