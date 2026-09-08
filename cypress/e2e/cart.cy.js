describe('saucedemo cart test',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    })
     it('should login successfully', () => {

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')

  })
  it('should display all the product',()=>{
    cy.get('.inventory_item').should('have.length',6)
  })
it('should add product to the cart', ()=>{
    cy.get('.inventory_item').each(($product)=>{
        cy.wrap($product).find('button').click()
    })
cy.get('.shopping_cart_badge')
      .should('contain', '6')

})
 it('should remove all products from the cart', () => {

    // Add all products
    cy.get('.inventory_item').each(($product) => {

      cy.wrap($product)
        .find('button')
        .click()

    })
     cy.get('.shopping_cart_badge')
      .should('contain', '6')

    // Remove all products
    cy.get('.inventory_item').each(($product) => {

      cy.wrap($product)
        .find('button')
        .click()

    })
     cy.get('.shopping_cart_badge')
      .should('not.exist')

  })
   it('should display all added products in the cart', () => {

    // Add all products
    cy.get('.inventory_item').each(($product) => {

      cy.wrap($product)
        .find('button')
        .click()

    })
  cy.get('.shopping_cart_link').click()

    cy.get('.cart_item')
      .should('have.length', 6)
})
})