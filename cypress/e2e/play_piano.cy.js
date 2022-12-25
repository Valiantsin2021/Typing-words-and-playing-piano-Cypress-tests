describe('Should play piano', () => {
  it('Press all piano keys consequently', () => {
    Cypress.on('uncaught:exception', () => {
      return false
    })
    cy.visit('https://www.musicca.com/piano')
    cy.contains('AGREE').click()
    cy.get('.white-key').each(el => cy.wrap(el).realClick())
    cy.get('.black-key').each(el => cy.wrap(el).realClick())
  })
  it('Play "Jingle Bels"', () => {
    cy.visit('https://pianobynumber.com/pages/online-piano')
    for (let j = 0; j < 4; j++) {
      let str = ''
      cy.get('div b')
        .eq(j)
        .invoke('text')
        .then(text => {
          str += text.replace(/[^(\d)]/g, '')
          let arr = str.split('')
          for (let i = 0; i < arr.length; i++) {
            cy.contains('div.keyname', `${arr[i]}`).click()
          }
        })
    }
  })
  it('Play "Twinkle-twinkle"', () => {
    cy.visit('https://pianobynumber.com/pages/twinkle-twinkle-little-star')
    for (let j = 1; j < 4; j++) {
      let str = ''
      cy.get('p[style="text-align: center;"]')
        .eq(j)
        .invoke('text')
        .then(text => {
          str += text.replace(/[^(\d)]/g, '')
          let arr = str.split('')
          for (let i = 0; i < arr.length; i++) {
            cy.contains('div.keyname', `${arr[i]}`).click()
          }
        })
    }
  })
  it('Play "First noel"', () => {
    cy.visit('https://pianobynumber.com/pages/first-noel')
    for (let j = 0; j < 2; j++) {
      let str = ''
      cy.get('div[style="text-align: center;"]>div>div')
        .eq(j)
        .invoke('text')
        .then(text => {
          str += text.replace(/[^(\d)]/g, '')
          let arr = str.split('')
          for (let i = 0; i < arr.length; i++) {
            cy.contains('div.keyname', `${arr[i]}`).click()
          }
        })
    }
  })
  it('Play "Godfather"', () => {
    cy.visit('https://pianobynumber.com/pages/the-godfather')
    for (let j = 0; j < 2; j++) {
      let str = ''
      cy.get('div b')
        .eq(j)
        .invoke('text')
        .then(text => {
          str += text.replace(/[^(\d)]/g, '')
          let arr = str.split('')
          for (let i = 0; i < arr.length; i++) {
            cy.contains('div.keyname', `${arr[i]}`).click()
          }
        })
    }
  })
})
