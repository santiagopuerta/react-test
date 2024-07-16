describe("App", () => {
  const USER_EMAIL = "test@test.com"

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
    cy.get('[data-testid="email-input"]').type(USER_EMAIL)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
  })

  it("Check if edit and delete buttons are displayed in each post after login", () => {
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(USER_EMAIL)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
    cy.get('[data-testid="post"]').each(($post) => {
      cy.wrap($post).find('[data-testid="edit-button"]').should("exist")
      cy.wrap($post).find('[data-testid="delete-button"]').should("exist")
    })
  })

  it("Check if user email is displayed in navbar after login", () => {
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(USER_EMAIL)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
    cy.get('[data-testid="navbar"]').within(() => {
      cy.get('[data-testid="user-email"]').should("contain", USER_EMAIL)
    })
  })

  it("Check if logout button is displayed in dropdown after login", () => {
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(USER_EMAIL)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
    cy.get('[data-testid="user-email"]').click()
    cy.get('[data-testid="logout-button"]').should("be.visible")
  })

  it("Check if session is closed after clicking logout button", () => {
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(USER_EMAIL)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")
    cy.get('[data-testid="user-email"]').click()
    cy.get('[data-testid="logout-button"]').click()
    cy.get('[data-testid="user-email"]').should("not.exist")
    cy.window().then((win) => {
      expect(win.localStorage.getItem("email")).to.be.null
    })
  })

  it("Check if delete post button removes posts", () => {
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(USER_EMAIL)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")

    cy.get('[data-testid="post"]').then(($postsBefore) => {
      const initialPostCount = $postsBefore.length

      cy.get('[data-testid="post"]')
        .first()
        .within(() => {
          cy.get('[data-testid="delete-button"]').click()
        })

      cy.get('[data-testid="post"]').should("have.length", initialPostCount - 1)
    })
  })

  it("Check if edit post button edits posts", () => {
    cy.visit(Cypress.env("BASE_URL") + "login")
    cy.get('[data-testid="email-input"]').type(USER_EMAIL)
    cy.get('[data-testid="login-form"]').submit()
    cy.location("pathname").should("eq", "/")

    cy.get('[data-testid="post"]')
      .first()
      .within(() => {
        cy.get('[data-testid="edit-button"]').click()
      })

    const newPostTitle = "New title"
    const newPostBody = "New content"
    cy.get('[data-testid="post-title-input"]').clear().type(newPostTitle)
    cy.get('[data-testid="post-body-input"]').clear().type(newPostBody)
    cy.get('[data-testid="post-edit-button"]').click()

    cy.get('[data-testid="post"]')
      .first()
      .within(() => {
        cy.get('[data-testid="post-title"]').should("contain", newPostTitle)
        cy.get('[data-testid="post-body"]').should("contain", newPostBody)
      })
  })
})
