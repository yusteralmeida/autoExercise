import { el } from "./elementsLogin"

const Login = {

    insertName: function (name) {
        cy.get(el.name).type(name)
    },

    enterEmail: function (email) {
        cy.get(el.email).type(email)
    },

    createAccountButton: function () {
        cy.get(el.createAccount).click()
    },

}

export default Login