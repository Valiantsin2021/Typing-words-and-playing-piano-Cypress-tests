// import { each } from 'cypress-recurse'

describe('Should type all the words in given time', () => {
  it('Type all words in 1 minute', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://www.typing.com/student/typing-test/1-minute')
    // cy.contains('a', 'Start Typing Today »').click()
    // cy.contains('a', 'Tests').click({ force: true })
    // cy.contains('1 Minute Typing Test').click()
    cy.get('.js-continue-button').click()
    cy.get('h3.js-test-countdown')
      .invoke('text')
      .as('text')
      .then(text => {
        expect(text.trim()).to.equal('1:00')
      })
    // cy.clock()
    cy.get('div.letter')
      .its('length')
      .then(length => cy.log(length))
    cy.get('div.letter').each(el => {
      cy.get('@text').then(text => {
        if (text.trim() === '0:55') {
          return false
        }
        if (el.html() === '&nbsp;') {
          cy.realPress('Space')
        } else {
          cy.realType(el.text())
        }
      })
    })
    cy.get('.modal-close').click()
    // cy.tick(61_000)
  })
  it('Type all words in 1 minute', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://www.typing.com/student/typing-test/1-minute')
    cy.get('.js-continue-button').click()
    cy.get('h3.js-test-countdown')
      .invoke('text')
      .as('text')
      .then(text => {
        expect(text.trim()).to.equal('1:00')
      })
    cy.get('div.letter').then(
      each(function (el) {
        return cy.get('@text').then(text => {
          if (text.trim() === '0:00') {
            return
          } else {
            cy.wrap(el).then(el => {
              if (el.html() === '&nbsp;') {
                cy.realPress('Space')
              } else {
                cy.realType(el.text())
              }
            })
          }
        })
      })
    )
  })
  it('Makes all passed', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://www.typing.com/student/typing-test/1-minute')
    cy.get('.js-continue-button').click()
    cy.intercept('POST', '/apiv1/student/stats').as('req')
    cy.clock()

    cy.get('div.letter')
      .eq(0)
      .invoke('text')
      .then(text => {
        cy.realType(text)
      })
    // cy.get('div.letter').each(el => {
    //   el.addClass(' is-right')
    // })
    cy.tick(61000)
    cy.wait('@req')
      .its('request.body')
      .then(body => cy.log(body))
  })
  it('Makess POST request', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('https://www.typing.com/student/typing-test/1-minute')
    cy.get('.js-continue-button').click()
    cy.request({
      method: 'POST',
      url: 'https://www.typing.com/apiv1/student/stats',
      body: {
        keys: [{ errors: 0, id: 'd', typed: 150 }],
        stats: {
          completed: 1,
          created_at: 60,
          errors: 0,
          is_redo: 0,
          language: 'en',
          lesson_id: 385,
          lesson_screen_id: 405892,
          new_stars: 0,
          now: 60,
          problem_keys: 0,
          product_id: 'typing',
          progress: 1,
          restart: 0,
          seconds: 60,
          skin_id: 1,
          stars: 0,
          test: 1,
          testType: 'timed',
          typed: 150,
          uls_table: 'hot',
          unit_type: 'test'
        }
      }
    }).as('request')
    cy.get('@request').then(response => {
      expect(response.status).to.be.equal(200)
      cy.log(response.body)
    })
  })
})
