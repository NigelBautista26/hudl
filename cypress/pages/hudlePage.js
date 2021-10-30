import url from "../fixtures/url.json"
class HudlePage {

    loginButton () { return cy.get('body > div.outer > header > div > a.mainnav__btn.mainnav__btn--primary') }
    goToURL () { return cy.visit(url.hudlePage) }

    loginTab () {
       this.loginButton().click()
    }
    
}

export default new HudlePage()