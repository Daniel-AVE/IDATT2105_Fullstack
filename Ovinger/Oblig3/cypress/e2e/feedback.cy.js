// https://docs.cypress.io/api/introduction/api.html

describe('Tests history', () => {
  it('checks if there is history', () => {
    cy.visit('/')
    cy.contains('h1', "History")
  })
})

describe('Test contact form feedback', () => {
  beforeEach(() => {
    cy.visit("/contact")
  });

  it('should be possible to submit form with valid input', () => {
    cy.get('[data-test="name"]').type("John").blur();
    cy.get('[data-test="email"]').type("john@smith.com").blur();
    cy.get('[data-test="message"]').type("This is a test");

    cy.get('[data-test="submit"]').click();
  })

  it('should not be possible to submit form with no input', () => {
    cy.get('[data-test="name"]').clear()
    cy.get('[data-test="email"]').clear()
    cy.get('[data-test="submit"]').should("be.disabled");
  })

  it('should not be possible to submit form with invalid name', () => {
    cy.get('[data-test="name"]').clear()
    cy.get('[data-test="email"]').clear()

    cy.get('[data-test="name"]').type("1234").blur();
    cy.get('[data-test="email"]').type("john@smith.com").blur();
    cy.get('[data-test="message"]').type("Test");

    cy.get('[data-test="submit"]').should("be.disabled");
  })

  it('should not be possible to submit form with invalid email', () => {
    cy.get('[data-test="name"]').clear()
    cy.get('[data-test="email"]').clear()

    cy.get('[data-test="name"]').type("John").blur();
    cy.get('[data-test="email"]').type("abcd").blur();
    cy.get('[data-test="message"]').type("Test");

    cy.get('[data-test="submit"]').should("be.disabled");
  })

  it('should not be possible to submit form with invalid message', () => {
    cy.get('[data-test="name"]').clear()
    cy.get('[data-test="email"]').clear()
    
    cy.get('[data-test="name"]').type("John").blur();
    cy.get('[data-test="email"]').type("John@smith.com").blur();

    cy.get('[data-test="submit"]').should("be.disabled");
  })
})