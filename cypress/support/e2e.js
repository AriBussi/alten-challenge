import "./commands";

before(() => {
  cy.request({
    url: "/api/products?limit=25",
    headers: {
      "x-api-key": Cypress.env("VITE_API_KEY"),
      "Content-Type": "application/json",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.writeFile("cypress/fixtures/products.json", response.body);
  });
});
