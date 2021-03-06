import url from "../fixtures/url.json"
import loginPage from "./loginPage"
class HomePage {

    emailField () { return cy.get('#email') }
    passwordField () { return cy.get('#password') }
    loginButton () { return cy.get('#logIn') }
    logoutButton () { return cy.get('.hui-globaladditionalitems > .hui-globalusermenu__item') }
    accountDropDownTab () { return cy.get('.hui-globalusermenu') }
    qaHireProjectTab () { return cy.get('#ssr-webnav > div > div.hui-webnav__grid.hui-navcontainer > nav.hui-webnav__grid-col--onewhole.hui-primarynav.uni-environment--dark.uni-env--dark > div.hui-primaryteamswitcher > a') }
    
    logout () {
        loginPage.login()
        cy.url().should("eq", url.homePage)
        this.accountDropDownTab().realHover('mouse')
        this.logoutButton().realClick()
        cy.url().should("eq", url.hudlePage)
    }
    
}

export default new HomePage()