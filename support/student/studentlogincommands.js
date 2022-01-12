import selector from '../elementSelectors/selectors'

  Cypress.Commands.add('VerifyWelcomeHeader', () => {
    cy.log('Verifying welcome header :Hello, Pranathi');
    cy.get(selector.HEADER_TITLE).invoke('text').then($text =>{
        $text.includes('Hello');
      })
      
  
 
  })