import url from "../fixtures/url.json"
class HomePage {

    emailField () { return cy.get('#email') }
    passwordField () { return cy.get('#password') }
    loginButton () { return cy.get('#logIn') }
    accountDropDownTab () { return cy.get('.hui-globalusermenu') }
    qaHireProjectTab () { return cy.get('#ssr-webnav > div > div.hui-webnav__grid.hui-navcontainer > nav.hui-webnav__grid-col--onewhole.hui-primarynav.uni-environment--dark.uni-env--dark > div.hui-primaryteamswitcher > a') }
    
    logout () {
        cy.url().should("eq", url.homePage)
        this.accountDropDownTab().click()
    }
    
}

export default new HomePage()