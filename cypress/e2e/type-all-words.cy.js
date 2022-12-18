describe('Should type all the words in given time', () => {
  it('Add style to text elements to make all "typed"', () => {
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
    cy.get('div.letter').each(el => {
      el.addClass(' is-right')
    })
    cy.tick(61000)
    cy.wait('@req')
      .its('request.body')
      .then(body => cy.log(body))
  })
  it('Type all words in 1 minute for cycle', () => {
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
    cy.get('div.letter')
      .invoke('text')
      .then(text => {
        cy.log(text)
        let arr = text.replaceAll(/\u00A0/g, ' ').split('')
        for (let i = 0; i < 500; i++) {
          if (arr[i] === ' ') {
            cy.realPress('Space')
          } else {
            cy.realType(arr[i])
          }
        }
      })
  })
  it('Makes POST request to make typing test pass', () => {
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
