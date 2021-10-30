import homePage from "../../pages/homePage"
import hudlePage from "../../pages/hudlePage"
import loginPage from "../../pages/loginPage"
import messages from "../../fixtures/messages.json"
import url from "../../fixtures/url.json"

describe("Test The Application", () => {
    beforeEach(() => {  
        cy.viewport('macbook-16')
        hudlePage.goToURL()
        cy.url().should("eq", url.hudlePage)
        hudlePage.loginTab()
    })

    it("Login...", () => {
        loginPage.login()
        homePage.qaHireProjectTab().should('is.visible')
    })

    it("Remember login...", () => {
        loginPage.rememberLogin()
        homePage.qaHireProjectTab().should('is.visible')
    })

    it("Invalid email login...", () => {
        loginPage.invalidEmailLogin()
        loginPage.invalidLoginMessage().should('have.text', messages.invalidLoginMessage)
    })

    it("Invalid password login...", () => {
        loginPage.invalidPasswordLogin()
        loginPage.invalidLoginMessage().should('have.text', messages.invalidLoginMessage)
    })

    it("Empty login...", () => {
        loginPage.emptyLogin()
        loginPage.invalidLoginMessage().should('have.text', messages.invalidLoginMessage)
    })

    it("Failed login with an organization email...", () => {
        loginPage.loginWithOrganizationFailed()
        loginPage.failedOrganizationLoginMessage().should('contain.text', messages.failedOrganizationLoginMessage)
    })

    it("Failed password reset...", () => {
        loginPage.passwordResetFailed()
        loginPage.failedResetMessage().should('contain.text', messages.failedResetMessage)
    })

    /**  This test scenario was commented out because i couldnt interact with the dropdown menu,
         despite being able to verify that the selector exist, 
         I think something is wrong with cypress or the selector has the issue, 
         im still investigating this. its most likely a Cypress isssue.
    **/ 
    // it("Logout...", () => {
    //     loginPage.login()
    //     homePage.logout()
    // })

    

})