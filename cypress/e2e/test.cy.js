

describe('Dado', function () {
    context('Quando', function () {


        it('Então', function () {

            const data = {
                name: "Maria Silva",
                email: "mariasilva695@gmail.com",
                title: "Mr",
                newslette: "yes",
                option: "yes"
            }


            cy.visit('https://automationexercise.com/')
            cy.get('div[class="features_items"]').should('be.visible')

            //Clicar no botão Login
            cy.get('a[href="/login"]').click()
            cy.get('div[class="signup-form"]').should('be.visible')

            //Inserir Nome
            cy.get('input[data-qa="signup-name"]').type(data.name)

            //Inserir Email
            cy.get('input[data-qa="signup-email"]').type(data.email)

            //Botão Criar Conta
            cy.get('button[data-qa="signup-button"]').click()


            //Senhor
            cy.get('input[id="id_gender1"]').click()

            // Senha
            cy.get('input[data-qa="password"]').type('Mortadela@2')

            //Dia
            cy.get('select[data-qa="days"]').select('4')

            //Mês
            cy.get('select[data-qa="months"]').select('3')

            //Ano
            cy.get('select[data-qa="years"]').select('1997')

            if (data.newslette === 'yes') cy.get('#newsletter').click()
            if (data.option === 'yes') cy.get('#optin').click()

            // //Primeiro Nome
            // cy.get('#first_name').type(data.name.split(' ')[0])

            // const segundaPalavra = data.name.split(' ').length > 1 ? data.name.split(' ')[1] : null;
            // //Sobrenome
            // cy.get('#last_name').type(segundaPalavra)

            // //Empresa
            // cy.get('input[data-qa="company"]').type('Maria Inc.')

            // //Endereço
            // cy.get('input[data-qa="address"]').type('Rua perdida da silva nº69')

            // //Endereço 2
            // cy.get('input[data-qa="address2"]').type('Rua Almeida da silva nº24')

            // //País
            // cy.get('select[data-qa="country"]').select('United States')

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
