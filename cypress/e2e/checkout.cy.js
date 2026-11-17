describe('Checkout Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.get('.inventory_item')
      .first()
      .find('button')
      .click()

    cy.get('.shopping_cart_link').click()
  })

  it('should proceed to checkout', () => {

    cy.get('[data-test="checkout"]').click()

    cy.url().should('include', '/checkout-step-one.html')

    cy.get('.title')
      .should('contain', 'Checkout: Your Information')
  })

  it('should show error when checkout information is empty', () => {

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'First Name is required')
  })

  it('should complete checkout successfully', () => {

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Yansu')
    cy.get('[data-test="lastName"]').type('Katwal')
    cy.get('[data-test="postalCode"]').type('44600')

    cy.get('[data-test="continue"]').click()

    cy.url().should('include', '/checkout-step-two.html')

    cy.get('[data-test="finish"]').click()

    cy.url().should('include', '/checkout-complete.html')

    cy.get('.complete-header')
      .should('contain', 'Thank you for your order!')
  })

})