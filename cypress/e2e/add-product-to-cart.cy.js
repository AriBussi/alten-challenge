import { randomIndex } from "../../src/utils/getRandomIndex";

describe("Cart Functionality - Adding a Random Product", () => {
  let id;

  before(() => {
    cy.fixture("products.json").then((products) => {
      id = products[randomIndex]?.id;
    });
  });

  beforeEach(() => {
    cy.intercept(`/api/products/${id}`).as("productDetail");
    cy.visit(`/detail/${id}`);
  });

  it("Displays correct initial cart count and allows adding a product", () => {
    cy.get('[class^="sc"] p').eq(0).contains("0").should("be.visible");
    cy.wait("@productDetail").then(({ response }) => {
      const { storageOptions, colorOptions } = response.body;
      const capacities = storageOptions.map((option) => option.capacity);
      const colors = colorOptions.map((option) => option.name);

      cy.get(`[for="${capacities[0]}"]`).should("be.visible").click();
      cy.get(`[for="${colors[0]}"]`).should("be.visible").click();

      cy.contains("Añadir").should("be.visible").click();
      cy.url().should("eq", Cypress.config().baseUrl);
      cy.get('[class^="sc"] p').eq(0).contains("1").should("be.visible");
    });
  });
});
