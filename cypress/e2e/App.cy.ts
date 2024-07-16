describe("App", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"))
    cy.intercept("GET", "/posts").as("getPosts")
    cy.wait("@getPosts")
  })

  it("Check if 100 posts are rendered", () => {
    cy.get('[data-testid="post"]').should("have.length", 100)
  })

  it("Check if the first post has title and body", () => {
    cy.get('[data-testid="post"]')
      .first()
      .within(() => {
        cy.get('[data-testid="post-title"]').should("exist")
        cy.get('[data-testid="post-body"]').should("exist")
      })
  })

  it("Check if clicking login button navigates to /login", () => {
    cy.get('[data-testid="login-button"]').click()
    cy.location("pathname").should("eq", "/login")
  })

  it("Check if entering email in login form navigates to home", () => {
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type("test@test.com")
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
  })

  it("Check if edit and delete buttons are displayed in each post after login", () => {
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type("test@test.com")
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
    cy.get('[data-testid="post"]').each(($post) => {
      cy.wrap($post).find('[data-testid="edit-button"]').should("exist")
      cy.wrap($post).find('[data-testid="delete-button"]').should("exist")
    })
  })

  it("Check if user email is displayed in navbar after login", () => {
    const userEmail = "test@test.com"
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(userEmail)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
    cy.get('[data-testid="navbar"]').within(() => {
      cy.get('[data-testid="user-email"]').should("contain", userEmail)
    })
  })

  it("Check if logout button is displayed in dropdown after login", () => {
    const userEmail = "test@test.com"
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(userEmail)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
    cy.get('[data-testid="user-email"]').click()
    cy.get('[data-testid="logout-button"]').should("be.visible")
  })

  it("Check if session is closed after clicking logout button", () => {
    const userEmail = "test@test.com"
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(userEmail)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
    cy.get('[data-testid="user-email"]').click()
    cy.get('[data-testid="logout-button"]').click()
    cy.get('[data-testid="user-email"]').should("not.exist")
    cy.window().then((win) => {
      expect(win.localStorage.getItem("email")).to.be.null
    })
  })
})
