import user from "../fixtures/user.json"
import url from "../fixtures/url.json"

class LoginPage {

    emailField () { return cy.get('#email') }
    passwordField () { return cy.get('#password') }
    loginButton () { return cy.get('#logIn') }
    invalidLoginMessage () { return cy.get('body > div.super-wrap > form.login-container > div.login-error.fade-in-expand > div > p') }
    loginWithOrganizationButton () { return cy.get('#logInWithOrganization') }
    organizationEmailField () { return cy.get('#uniId_1') }
    organizationLoginButton () { return cy.get('.uni-bg--level0 > .uni-button') }
    failedOrganizationLoginMessage () { return cy.get('.login-error-container-code') }
    needHelpButton () { return cy.get('#forgot-password-link') }
    forgotEmailField () { return cy.get('#forgot-email') }
    resetButton () { return cy.get('#resetBtn') }
    failedResetMessage () { return cy.get('.reset-error-container') }
    rememberMeButton () { return cy.get('.form__label--custom') }

    login () {
       cy.url().should("eq", url.loginPage)
       this.emailField().type(user.email)
       this.passwordField().type(user.password)
       this.loginButton().click()
    }

    rememberLogin () {
        cy.url().should("eq", url.loginPage)
        this.emailField().type(user.email)
        this.passwordField().type(user.password)
        this.rememberMeButton().click()
        this.loginButton().click()
     }

     invalidEmailLogin () {
        cy.url().should("eq", url.loginPage)
        this.emailField().type(user.invalidEmail)
        this.passwordField().type(user.password)
        this.loginButton().click()
     }

    invalidPasswordLogin () {
        cy.url().should("eq", url.loginPage)
        this.emailField().type(user.email)
        this.passwordField().type(user.invalidPassword)
        this.loginButton().click()
     }

     emptyLogin () {
        cy.url().should("eq", url.loginPage)
        this.loginButton().click()
     }

     loginWithOrganizationFailed () {
        cy.url().should("eq", url.loginPage)
        this.loginWithOrganizationButton().click()
        this.organizationEmailField().type(user.email)
        this.organizationLoginButton().click()
     }

     passwordResetFailed () {
        cy.url().should("eq", url.loginPage)
        this.needHelpButton().click()
        this.forgotEmailField().type(user.emailReset) 
        this.resetButton().click()
     }
    
}

export default new LoginPage()