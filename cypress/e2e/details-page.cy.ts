import "@percy/cypress";

describe("Details page tests", () => {
  it("page should change to a page with details", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="tbody-table-row"]').eq(0).click();
    cy.location().should((loc) => {
      expect(loc.hostname).to.eq("localhost");
      expect(loc.host).to.eq("localhost:3000");
      expect(loc.origin).to.eq("http://localhost:3000");
      expect(loc.port).to.eq("3000");
      expect(loc.protocol).to.eq("http:");
      expect(loc.href).to.eq("http://localhost:3000/currency/bitcoin");
    });
    cy.percySnapshot();
  });

  it("page should have a currency chart", () => {
    cy.get('[data-cy="canvas"]');
    cy.get('[data-cy="details-add-button"]').first().click();
    cy.get('[data-cy="modal"]').should("be.visible");
    cy.get('[data-cy="input"]').type("1").should("have.value", "1");
    cy.get('[data-cy="modal-form-add-button"]').click();
    cy.percySnapshot();
  });

  it("back-button should return from main page", () => {
    cy.get('[data-cy="details-back-button"]').click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq("http://localhost:3000/");
    });
    cy.percySnapshot();
  });
});
