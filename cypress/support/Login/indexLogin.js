import { el } from "./elementsLogin"

const Login = {

    fillSignupForm: function (data) {
        cy.get(el.name).type(data.name)
        cy.get(el.email).type(data.email)
    },
    createAccountButton: function () {
        cy.get(el.createAccount).click()
    },
    errorMessageShouldBe: function (text) {
        cy.get(el.errorMessage).should('have.text', text)
    },

    fillForm: function (user) {
        cy.get(el.title + user.title).click()
        cy.get(el.password).type(user.password)
        cy.get(el.day).select(user.birthday.day)
        cy.get(el.month).select(user.birthday.month)
        cy.get(el.year).select(user.birthday.year)

        if (user.newsletter === "yes") cy.get(el.newsletter).click()
        if (user.optin === "yes") cy.get(el.optin).click()

        cy.get(el.firstName).type(user.name.split(' ')[0])
        cy.get(el.lastName).type(user.name.split(' ')[1])
        cy.get(el.company).type(user.company)
        cy.get(el.address1).type(user.address1)
        cy.get(el.address2).type(user.address2)
        cy.get(el.country).select(user.country)
        cy.get(el.state).type(user.state)
        cy.get(el.city).type(user.city)
        cy.get(el.zipCode).type(user.zipcode)
        cy.get(el.number).type(user.number)
    },

    fillFormLogin: function (user) {
        if (user.email) cy.get(el.loginEmail).type(user.email)
        if (user.password) cy.get(el.loginPass).type(user.password)
    },

    submitLoginForm: function () {
        cy.get(el.submitLogin).click()
    },

    shouldBeVisible: function () {
        cy.get(el.loginForm).should('be.visible')
    },

    outputShouldBe: function (msg) {
        cy.get(el.loginEmail)
            .invoke('prop', 'validationMessage')
            .should('to.contains', msg.output)
    },
}

export default Login