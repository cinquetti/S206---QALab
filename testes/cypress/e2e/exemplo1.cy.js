/// <reference types="cypress"/>

describe('Criando cenário de teste para o site globalsqa', ()=> {

  it('Caso de teste: Registrando um usuário no site com sucesso', ()=>{

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type('Lulu')
    cy.get('#Text1').type('Zinha')
    cy.get('#username').type('LuL')
    cy.get('#password').type('123')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  })

  it('Segundo Caso de Teste: Verificando se ele deixa entrar caso não seja colocado senha', ()=>{

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Lululz')
    cy.get('#Text1').type('Zinha2')
    cy.get('#username').type('LuLu')
    cy.get('#password').type('12345')
    cy.get('#password').clear()
    cy.get('.btn-primary').should('be.disabled')
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')

  })

  it('Terceiro Caso de Teste: Testando um Login', ()=> {

    let info = criarusuario()
    cy.get('#username').type(info[0])
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])

  })

})


function criarusuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let usuario = horas + minutos + segundos + 'id'
  let senha = minutos + segundos + horas + 'senha'
  let userinfo = [usuario, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(usuario)
  cy.get('#Text1').type(usuario)
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userinfo
}