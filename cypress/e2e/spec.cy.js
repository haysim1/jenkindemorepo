describe('Login', () => {
  it('Backoffice', () => {
    cy.visit('http://118.127.127.166:81/backoffice/account/login')
    cy.get("input[name=name]").type(0);
    cy.get("input[name=password]").type(0).type("{enter}")
    cy.wait(3000)
    cy.get('#_73199').click()
    cy.wait(2000)
    cy.get('.button.addPro.button.tooltip_cvr').click()
    cy.get('input[formcontrolname=ClerkName]').type("Haysim")
    cy.get('.input.form-control.ng-pristine.ng-invalid.is-invalid ng-touched').click()
  })
})