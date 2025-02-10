import { randomIndex } from "../../src/utils/getRandomIndex";

describe("Product Details Page - Random Product Validation", () => {
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

  it("Displays all necessary product information correctly", () => {
    cy.wait("@productDetail").then(({ response }) => {
      const { imageUrl } = response.body.colorOptions[0];
      const { name, basePrice, description, storageOptions, colorOptions } =
        response.body;
      const capacities = storageOptions.map((option) => option.capacity);
      const colors = colorOptions.map((option) => option.name);

      cy.contains(name).should("be.visible");
      cy.contains(basePrice).should("be.visible");
      cy.contains(description).should("be.visible");
      cy.get(`[src="${imageUrl}"]`).should("be.visible");

      capacities.forEach((capacity) => {
        cy.get(`[for="${capacity}"]`).should("be.visible");
      });

      colors.forEach((color) => {
        cy.get(`[for="${color}"]`).should("be.visible");
      });

      cy.get("button")
        .contains("Añadir")
        .should("be.visible")
        .and("have.attr", "aria-disabled", "true");
    });
  });
});
