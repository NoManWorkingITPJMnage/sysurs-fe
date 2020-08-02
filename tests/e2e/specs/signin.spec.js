// https://docs.cypress.io/api/introduction/api.html

describe('Test sign in function', () => {
  it('Test router guard', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.url().should('include', '/signin');
  });

  it('Test sign in page correctly presented', () => {
    cy.contains('SYSURS');
    cy.contains('SIGN IN');
    cy.get('input[type=text]').type('test1');
    cy.get('input[type=password]').type('test.123456');
    cy.contains("SIGN IN").click();
    cy.contains('登录成功，欢迎回来！');
  });
});
