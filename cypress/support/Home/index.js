import { el } from "./elements"

const HomePage = {

    go: function () {
        cy.visit('/')
        cy.get(el.feauresItens).should('be.visible')
    },

    login: function () {
        cy.get(el.registrationLogin).click()
        cy.get(el.registrationField).should('be.visible')

    }

}

export default HomePage