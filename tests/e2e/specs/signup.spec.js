describe('Test sign up function', () => {

  it('Test router could be correctly navigated', () => {
    cy.request('POST', '/api/signout');
    cy.wait(500);
    cy.visit('/');
    cy.wait(2000);
    cy.url().should('include', '/signin');
    cy.contains('Sign Up').click();
    cy.wait(1000);
    cy.url().should('include', '/signup')
  });

  it('Test sign in page correctly presented', () => {
    cy.contains('h1', 'SYSURS');
    cy.get('a[href="/signin"]').click();
    cy.wait(1000);
    cy.url().should('include', '/signin');
    cy.contains('Sign Up').click();
    cy.wait(1000);
    cy.url().should('include', '/signup')
    cy.get('input[placeholder=ID][type=text]').type('17343999');
    cy.get('input[placeholder="Real Name"][type=text]').type('真实名字');
    cy.get('input[placeholder=Username][type=text]').type('tester2');
    cy.get('input[placeholder=Password][type=password]').type('test.123456');
    cy.contains('NEXT').click();
    cy.wait(2000);
    cy.contains('注册成功，请重新登录');
    cy.url().should('include', '/signin');
  });
});