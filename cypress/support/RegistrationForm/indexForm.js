import { el } from "./elementsForm"

const Form = {

    selectTitleMr: function () {
        cy.get(el.titleMr).click()
    },

    selectTitleMrs: function () {
        cy.get(el.titleMrs).click()
    },

    enterPassword: function (senha) {
        cy.get(el.password).type(senha)
    },

    selectDay: function (day) {
        cy.get(el.day).select(day)
    },

    selectMonth: function (month) {
        cy.get(el.month).select(month)
    },

    selectYear: function (year) {
        cy.get(el.year).select(year)
    },

    selectYear: function (year) {
        cy.get(el.year).select(year)
    },

    signNewsletter: function (newslette) {
        if (newslette === 'yes') cy.get(el.newsletter).click()
    },

    selectReceiveOffers: function (receive) {
        if (receive === 'yes') cy.get(el.receive).click()
    },

    enterFirstName: function (name) {
        cy.get(el.firstname).type(name.split(' ')[0])
    },

    enterLastName: function (lastName) {
        const secondWord = lastName.split(' ').length > 1 ? lastName.split(' ')[1] : null;
        cy.get(el.lastName).type(secondWord)
    },

    insertCompany: function (company) {
        cy.get(el.company).type(company)
    },

    enterAddress1: function (address1) {
        cy.get(el.address1).type(address1)
    },

    enterAddress2: function (address2) {
        cy.get(el.address2).type(address2)
    },

    selectCountry: function (country) {
        cy.get(el.country).select(country)
    }
}

export default Form