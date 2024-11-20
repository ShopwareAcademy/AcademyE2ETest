describe('Registration page: Check register button', function () {

  it('should have a border-radius of 5px', function () {
    cy.visit('/account/login');
    cy.get('.btn.btn-primary').should('have.css', 'border-radius', '5px');
    cy.screenshot();
  });

});