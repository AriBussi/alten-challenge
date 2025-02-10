describe("Home Page - Product Search Functionality", () => {
  let brand;
  let brandCount;
  let brandIds;

  before(() => {
    cy.fixture("products.json").then((products) => {
      brand = products[0].brand;
      brandCount = products.filter(
        (item) => item.brand.toLowerCase() === brand.toLowerCase()
      ).length;

      brandIds = products
        .filter((product) => product.brand.toLowerCase() === "samsung")
        .map((product) => product.id);
    });
  });

  beforeEach(() => {
    cy.intercept("/api/products?limit=25").as("getProducts");
    cy.visit("/");
    cy.wait("@getProducts");
  });

  it("Shows the correct number of search results for a brand", () => {
    cy.get('[type="search"]').type(`${brand}{enter}`);
    cy.get('[class^="sc"] > p').contains(`${brandCount} results`);
  });

  it("Displays correct products for the searched brand", () => {
    brandIds.forEach((id) => {
      cy.get(`[href="/detail/${id}"]`).should("be.visible");
    });
  });

  it("Ensures each product detail page loads successfully (200 status)", () => {
    brandIds.forEach((id) => {
      cy.request(`detail/${id}`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });

  it('Shows "0 results" message for an invalid search', () => {
    cy.get('[type="search"]').type("42343213refskdjcaskl{enter}");
    cy.get('[class^="sc"] > p').contains("0 results");
  });
});
