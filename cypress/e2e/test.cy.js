import HomePage from "../support/Home/index"
import LoginPage from "../support/Login/indexLogin"
import FormPage from "../support/RegistrationForm/indexForm"


describe('Dado que estou na página de cadastro', function () {
    context('Quando preencho com dados válidos', function () {


        beforeEach(() => {
            cy.fixture('data').then(function (user) {
                this.data = user
            })
        });


        it('Então deve ser possível cadastrar com sucesso', function () {


            const data = this.data

            cy.apiDelete(data)

            HomePage.go()
            HomePage.login()

            // Clicar no botão Login
            LoginPage.insertName(data.name)

            //Inserir Email
            LoginPage.enterEmail(data.email)

            //Botão Criar Conta
            LoginPage.createAccountButton()

            //Senhor
            FormPage.selectTitleMrs()

            // Senha
            FormPage.enterPassword(data.password)

            //Dia
            FormPage.selectDay(data.day)

            //Mês
            FormPage.selectMonth(data.month)

            //Ano
            FormPage.selectYear(data.year)

            //Selecionar opções
            FormPage.signNewsletter(data.newslette)
            FormPage.selectReceiveOffers(data.option)

            //Primeiro Nome
            FormPage.enterFirstName(data.name)

            //Sobrenome
            FormPage.enterLastName(data.name)

            //Empresa
            FormPage.insertCompany(data.company)

            //Endereço
            FormPage.enterAddress1(data.address1)

            //Endereço 2
            FormPage.enterAddress2(data.address2)

            //País
            FormPage.selectCountry(data.country)

            //Estado
            FormPage.selectState(data.state)

            //Cidade
            FormPage.insertCity(data.city)

            //CEP
            FormPage.insertZipCode(data.code)

            //Telefone
            FormPage.insertNumber(data.number)

            // Criar conta
            FormPage.clickCreateAccount()

            FormPage.successfulTxtShouldBe('Account Created!')

        })

    })
})
