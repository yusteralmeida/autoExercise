import HomePage from "../support/Home/index"
import LoginPage from "../support/Login/indexLogin"
import FormPage from "../support/RegistrationForm/indexForm"


describe('Dado que estou na página de cadastro', function () {
    context('Quando preencho com dados válidos', function () {
        it('Então deve ser possível cadastrar com sucesso', function () {

            const data = {
                name: "Maria Silva",
                email: "mariasilva695@gmail.com",
                title: "Mr",
                newslette: "yes",
                option: "yes",
                password: 'Mortadela@2',
                day: '4',
                month: '3',
                year: '1997',
                company: 'Maria Inc.',
                address1: 'Rua perdida da silva nº69',
                address2: 'Rua Almeida da silva nº24',
                country: 'United States',

            }

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

            // //Sobrenome
            FormPage.enterLastName(data.name)

            //Empresa
            FormPage.insertCompany(data.company)

            //Endereço
            FormPage.enterAddress1(data.address1)

            //Endereço 2
            FormPage.enterAddress2(data.address2)

            //País
            FormPage.selectCountry(data.country)

            // //Estado
            // cy.get('input[data-qa="state"]').type('Ceará')

            // //Cidade
            // cy.get('input[data-qa="city"]').type('Fortaleza')

            // //CEP
            // cy.get('input[data-qa="zipcode"]').type('6012312')

            // //Telefone
            // cy.get('input[data-qa="mobile_number"]').type('85999063943')

            // //Criar conta
            // cy.get('button[data-qa="create-account"]').click()

            // //Conta criada
            // cy.contains('b', 'Account Created').should('be.visible')

        })

    })
})
