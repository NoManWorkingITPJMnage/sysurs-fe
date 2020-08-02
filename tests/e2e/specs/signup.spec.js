describe('Test sign up function', () => {
  it('Test router could be correctly navigated', () => {
    cy.visit('/');
    cy.wait(5000);
    cy.url().should('include', '/signin');
    cy.contains('Sign Up').click();
    cy.wait(1000);
    cy.url().should('include', '/signup')
  });

  it('Test sign in page correctly presented', () => {
    cy.contains('h1', 'SYSURS');
    cy.get('i.fa-arrow-alt-circle-left').click();
    cy.wait(1000);
    cy.url().should('include', '/singin');
    cy.contains('Sign Up').click();
    cy.wait(1000);
    cy.url().should('include', '/signup')
    cy.get('input[name=studentid][type=text]').type('17343999');
    cy.get('input[name=realname][type=text]').type('真实名字');
    cy.get('input[name=username][type=text]').type('tester2');
    cy.get('input[name=password][type=password]').type('test.123456');
    cy.contains('NEXT').click();
    cy.wait(500);
    cy.contains('注册成功，请重新登录！');
    cy.url().should('include', '/signin');
  });
});