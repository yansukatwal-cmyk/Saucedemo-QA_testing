describe('login test', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })
    it('Should login with valid credentials ', ()=>
    {
cy.get('#user-name').type('standard_user')
cy.get('#password').type('secret_sauce')
cy.get('#login-button').click()
cy.url().should('include','/inventory.html')
cy.get('.title').should('contain','Products')
    })
    it('should deny access with invalid password',()=>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secrsauce')
        cy.get('#login-button').click()
      cy.get('[data-test="error"]').should('be.visible')

    })
     it('should show error when username is empty', () => {
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Username is required')
  })
  it('should show error when password is empty', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'Password is required')

  })
})
