describe('Notes view', () => {
  beforeEach('Allow user to authenticate', () => {
    cy.visit('/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@studybuddy.com');
    cy.findByText(/password/i)
      .click()
      .type('Test123!');
    cy.findByText(/sign in/i).click();
  });

  it('Allow to create a new note and delete it', () => {
    cy.visit('/notes');
    cy.findByText(/title/i).click().type('my new cypress note');
    cy.findByText(/content/i)
      .click()
      .type('cypress ipsum dolor sit amet');
    cy.findByText(/add/i).click();

    cy.findAllByText(/my new cypress note/i).should('exist');
    cy.findAllByText(/cypress ipsum dolor sit amet/i).should('exist');

    cy.findAllByText(/my new cypress note/i)
      .first()
      .parent()
      .findByLabelText(/delete/i)
      .click()
      .should('not.exist');
  });
});
