describe('Product Display Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('should display all products correctly', () => {

    cy.get('.inventory_item')
      .should('have.length', 6)

    const names = []
    const images = []

    cy.get('.inventory_item').each(($product) => {

      cy.wrap($product)
        .find('.inventory_item_name')
        .should('be.visible')
        .and('not.be.empty')
        .invoke('text')
        .then((name) => {
          names.push(name.trim())
        })

      cy.wrap($product)
        .find('.inventory_item_price')
        .should('be.visible')
        .and('not.be.empty')

      cy.wrap($product)
        .find('.inventory_item_img img')
        .should('be.visible')
        .invoke('attr', 'src')
        .then((src) => {
          images.push(src)
        })

    })

    cy.then(() => {
      expect(new Set(names).size).to.equal(names.length)
      expect(new Set(images).size).to.be.greaterThan(1)
    })

  })

})