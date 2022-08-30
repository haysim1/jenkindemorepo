describe('backoffice testing', () => {
  it('Test case 1', () => {
    cy.visit('http://118.127.127.166:81/backoffice/account/login')
    cy.wait(3000)
  cy.get("input[name=name]").type(0);
  cy.get("input[name=password]").type(0).type("{enter}");
  cy.wait(3000)  
})
    it('Test case 2', () => {
      cy.visit('http://118.127.127.166:81/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type(1121121);
    cy.get("input[name=password]").type(0).type("{enter}");
    cy.wait(3000)  
  })
    it('Test case 3', () => {
      cy.visit('http://118.127.127.166:81/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type(0);
    cy.get("input[name=password]").type(454454545).type("{enter}");
    cy.wait(3000)  
  })
    it('Test case 4', () => {
      cy.visit('http://118.127.127.166:81/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type("                ");
    cy.get("input[name=password]").type(0).type("{enter}");
    cy.wait(9000)  
  })
    it('Test case 5', () => {
      cy.visit('http://118.127.127.166:81/backoffice/account/login')
      cy.wait(3000)
    cy.get("input[name=name]").type("aaa");
    cy.get("input[name=password]").type("aaa").type("{enter}");
    cy.wait(9000)
    })
    it('Test case 6', () => {
      cy.visit('http://118.127.127.166:81/backoffice/account/login')
      cy.wait(3000)
      cy.get('.signin_blk').click()
    cy.wait(3000)
    })
  })
  

