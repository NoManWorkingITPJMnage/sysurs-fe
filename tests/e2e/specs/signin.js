// https://docs.cypress.io/api/introduction/api.html

describe('Test sign in function', () => {
  it('Test router guard', () => {
    cy.visit('/');
    cy.url().should('include', '/login');
  });

  it('Test sign in page correctly presented', () => {
    cy.contains('SYSURS');
    cy.contains('SIGN IN');
    cy.get('#username > .signin-input').type('test1');
    cy.get('#password > .signin-input').type('test.123456');
    cy.get('#signin').click();
    cy.contains('登录成功！');
  });
});
