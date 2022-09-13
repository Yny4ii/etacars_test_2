import "@percy/cypress";

describe("Main page tests", () => {
  it("must print a warning message", () => {
    cy.visit("http://localhost:3000");
    cy.get(".add-button").first().click();
    cy.get(".modal").should("be.visible");
    cy.get(".modal__input").type("1asd").should("have.value", "1asd");
    cy.get(".modal__input-field > form >.add-button").click();
    cy.get(".modal__warning-message");
    cy.percySnapshot();
  });

  it("must add currency to wallet", () => {
    cy.visit("http://localhost:3000");
    cy.get(".add-button").first().click();
    cy.get(".modal").should("be.visible");
    cy.get(".modal__input").type("1").should("have.value", "1");
    cy.get(".modal__input-field > form >  .add-button").click();
    cy.percySnapshot();
  });

  it("must have pagination", () => {
    cy.visit("http://localhost:3000");
    cy.get(".pagination");
    cy.get(".pagination>.page-item>").eq(2).click();
    cy.percySnapshot();
  });
  it("must show a wallet", () => {
    cy.visit("http://localhost:3000");
    cy.get(".add-button").first().click();
    cy.get(".modal").should("be.visible");
    cy.get(".modal__input").type("1").should("have.value", "1");
    cy.get(".modal__input-field > form > .add-button").click();
    cy.get(".wallet").click();
    cy.get(".modal").should("be.visible");
    cy.get(".delete-button").click();
    cy.percySnapshot();
  });
});
