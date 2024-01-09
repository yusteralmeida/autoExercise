import LoginPage from "../support/Login/indexLogin"
import Header from "../support/components/Header/index"



describe('Dado que estou na página de cadastro', function () {

    beforeEach(() => {
        cy.fixture('data').then(function (user) {
            this.data = user
        })
    });

    context('Quando preencho os campos de login com usuários válidos', function () {

        it('Então deve ser possível logar com sucesso', function () {

            const data = this.data.loginUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            cy.visit('/login')

            LoginPage.fillFormLogin(data)
            LoginPage.submitLoginForm()

            const txt = ' Logged in as ' + data.name
            Header.loggedUserShouldHave(txt)

        })
    })

    context('Quando logo com um user válido', function () {

        it('Então deve ser possível deslogar com sucesso', function () {

            const data = this.data.loginUser

            cy.apiDelete(data)
            cy.apiSignup(data)

            cy.visit('/login')

            LoginPage.fillFormLogin(data)
            LoginPage.submitLoginForm()

            const txt = ' Logged in as ' + data.name
            Header.loggedUserShouldHave(txt)

            Header.logout()
            LoginPage.shouldBeVisible()

        })
    })

    context('Quando preencho os campos de Login com um usuário inválido', function () {

        const errorMsg = 'Your email or password is incorrect!'

        it('Então deve ser retornar a mensagem: ' + errorMsg, function () {

            const badUser = {
                email: 'emailRuim@email.com',
                password: '123456789'
            }

            cy.apiDelete(badUser)

            cy.visit('/login')

            LoginPage.fillFormLogin(badUser)
            LoginPage.submitLoginForm()
            LoginPage.errorMessageShouldBe(errorMsg)

        })
    })


    // Problema aqui
    // const emailMessages = [
    //     { email: 'emailRuim', output: "Please include an '@' in the email address." },
    //     { email: '1231431245', output: "Please include an '@' in the email address." },
    //     { email: '´[´[]~]~´]', output: "Please include an '@' in the email address." },
    //     { email: '{enter}', output: "Please fill out this field" },
    //     { email: 'EMAIL GIGANTE', output: "Please include an '@' in the email address." },
    // ]

    // emailMessages.forEach(function (msg) {
    //     context.only(`Quando preencho o email com "${msg.email}"`, function () {
    //         it(`Então o sistema deve me retornar "${msg.output}"`, function () {
    //             cy.visit('/login')

    //             LoginPage.fillFormLogin(msg)
    //             LoginPage.submitLoginForm()
    //             LoginPage.outputShouldBe(msg)
    //         })
    //     })
    // })
})