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
    const str = `1 1 5 5 6 6 5 * 4 4 3 3 2 2 1 * 5 5 4 4 3 3 2 * 5 5 4 4 3 3 2 * 1 1 5 5 6 6 5 * 4 4 3 3 2 2 1`
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '*') {
        cy.wait(300)
        continue
      }
      cy.contains('div.keyname', `${arr[i]}`).parent().click()
      cy.wait(100)
    }
  })
  it.only('Play "Godfather"', () => {
    cy.visit('https://pianobynumber.com/pages/the-godfather')
    let str = `* 3 6 8 7 6 8 6 7 6 4 5 3 * * * * 3 6 8 7 6 8 6 7 6 3 b3 2 * * *`
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '*') {
        cy.wait(300)
        continue
      }
      cy.contains('div.keyname', `${arr[i]}`).parent().click()
      cy.wait(100)
    }
  })
})
