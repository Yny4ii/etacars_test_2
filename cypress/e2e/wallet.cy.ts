import "@percy/cypress";

describe("Wallet  tests", () => {
  it("wallet should save currency after reload", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="currency-add-button"]').first().click();
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="input"]').type("1.23").should("have.value", "1.23");
    cy.get('[data-cy="modal-form-add-button"]').click();
    cy.get('[data-cy="wallet"]').click();
    cy.contains("1.23");
    cy.reload();
    cy.get('[data-cy="wallet"]').click();
    cy.contains("1.23");
    cy.percySnapshot();
  });

  it("check delete-button", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="currency-add-button"]').first().click();
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="input"]').type("1.23").should("have.value", "1.23");
    cy.get('[data-cy="modal-form-add-button"]').click();
    cy.get('[data-cy="wallet"]').click();
    cy.contains("1.23");
    cy.get('[data-cy="wallet-delete-button"]').click();
    cy.reload();
    cy.get('[data-cy="wallet"]').contains("$0.000");
    cy.percySnapshot();
  });
});
