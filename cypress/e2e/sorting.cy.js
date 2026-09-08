describe('Product Sorting Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
  })

  it('should sort products by name A to Z', () => {

    cy.get('.product_sort_container')
      .select('az')

    cy.get('.inventory_item_name')
      .then(($names) => {
        const names = [...$names].map(el => el.innerText)
        const sortedNames = [...names].sort()

        expect(names).to.deep.equal(sortedNames)
      })

  })

  it('should sort products by name Z to A', () => {

    cy.get('.product_sort_container')
      .select('za')

    cy.get('.inventory_item_name')
      .then(($names) => {
        const names = [...$names].map(el => el.innerText)
        const sortedNames = [...names].sort().reverse()

        expect(names).to.deep.equal(sortedNames)
      })

  })

  it('should sort products by price low to high', () => {

    cy.get('.product_sort_container')
      .select('lohi')

    cy.get('.inventory_item_price')
      .then(($prices) => {
        const prices = [...$prices].map(el =>
          parseFloat(el.innerText.replace('$', ''))
        )

        const sortedPrices = [...prices].sort((a, b) => a - b)

        expect(prices).to.deep.equal(sortedPrices)
      })

  })

  it('should sort products by price high to low', () => {

    cy.get('.product_sort_container')
      .select('hilo')

    cy.get('.inventory_item_price')
      .then(($prices) => {
        const prices = [...$prices].map(el =>
          parseFloat(el.innerText.replace('$', ''))
        )

        const sortedPrices = [...prices].sort((a, b) => b - a)

        expect(prices).to.deep.equal(sortedPrices)
      })

  })

})