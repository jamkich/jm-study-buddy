describe('Dashboard view', () => {
  beforeEach('Allow user to authenticate', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i)
      .click()
      .type('Test123!');
    cy.findByText(/sign in/i).click();
  });

  it('Allow to click a StudentsListItem, Modal should be displayed and able to close', () => {
    cy.visit('/');
    cy.findByText(/list/i).should('exist');
    cy.findByText(/kale/i).click();
    cy.findByText(/save/i).should('exist').click();
    cy.findByText(/save/i).should('not.exist');
  });
});
