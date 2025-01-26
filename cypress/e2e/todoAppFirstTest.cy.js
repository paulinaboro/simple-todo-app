describe('To Do Web Test App', () => {
  it('Basic Test', () => {
    cy.visit('http://localhost:3000/')

    cy.get(".container").should('exist');
    cy.get('[data-testid="web-app-title').should('exist');

    cy.get('[data-testid="to-do-input"]').type('new todo');

    cy.get('[data-testid="to-do-submit-button"]').click();

    // check if newly created to do element exists in the DOM
    cy.get('[data-testid="todo-item"]').should('contain', 'new todo');

    // click the delete button associated with newly created item 
    cy.get('[data-testid="todo-item"]')
      .contains('new todo')
      .parent()
      .find('button')
      .click();

    //example: 
    // .should('contain', 'new todo');



  })
})