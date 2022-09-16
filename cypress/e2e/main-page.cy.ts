import "@percy/cypress";

describe("Main page tests", () => {
  it("must print a warning message", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="currency-add-button"]').first().click();
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="input"]').type("1asd").should("have.value", "1asd");
    cy.get('[data-cy="modal-form-add-button"]').click();
    cy.get('[data-cy="modal__warning-message"]');
    cy.percySnapshot();
  });

  it("must add currency to wallet", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="currency-add-button"]').first().click();
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="input"]').type("1").should("have.value", "1");
    cy.get('[data-cy="modal-form-add-button"]').click();

    cy.percySnapshot();
  });

  it("must have pagination", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="pagination"]');
    cy.get('[data-cy="page-item"]').eq(2).click();
    cy.percySnapshot();
  });
  it("must show a wallet", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="currency-add-button"]').first().click();
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="input"]').type("1").should("have.value", "1");
    cy.get('[data-cy="modal-form-add-button"]').click();
    cy.get('[data-cy="wallet"]').click();
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="wallet-delete-button"]').click();
    cy.percySnapshot();
  });
});
