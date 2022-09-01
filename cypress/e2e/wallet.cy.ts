import "@percy/cypress";

describe("Wallet  tests", () => {
  it("wallet should save currency after reload", () => {
    cy.visit("http://localhost:3000");
    cy.get(".add-button").first().click();
    cy.get(".modal").should("be.visible");
    cy.get(".modal__input").type("1.23").should("have.value", "1.23");
    cy.get(".modal__input-field > .add-button").click();
    cy.get(".header__wallet").click();
    cy.contains("1.23");
    cy.reload();
    cy.get(".header__wallet").click();
    cy.contains("1.23");
    cy.percySnapshot();
  });

  it("check delete-button", () => {
    cy.visit("http://localhost:3000");
    cy.get(".add-button").first().click();
    cy.get(".modal").should("be.visible");
    cy.get(".modal__input").type("1.23").should("have.value", "1.23");
    cy.get(".modal__input-field > .add-button").click();
    cy.get(".header__wallet").click();
    cy.contains("1.23");
    cy.get(".delete-button").click();
    cy.reload();
    cy.get(".header__wallet").contains("$0.000");
    cy.percySnapshot();
  });
});
