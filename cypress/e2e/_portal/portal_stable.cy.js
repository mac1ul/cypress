

describe('portal Test', () => {

    const username = Cypress.env('user');
    const password = Cypress.env('pass');
    const cookie = Cypress.env('cookie');

    it('cookies setup and authentification ', () => {
      
        cy.setCookie('privacy-settings', cookie)
        cy.visit('https://www.boschrexroth.com/en/dc/');
        cy.visit('https://www.boschrexroth.com/de/de/');
    
                  Cypress.Cookies.debug(true, { verbose: false })
               
      cy.visit('https://www.boschrexroth.com/de/de/myrexroth/portal/');
    
    
                  cy.wait(1000);
    
      cy.get('#social-ciam-authn-prod').click();
    
       cy.get('.input__placeholder').click().type(`${username}{enter}`);
    
       cy.wait(1000);
    
       cy.get('.input__placeholder').click().type(password);
    
       cy.get('[data-testid="enter-password.submit"]').click();
    
        cy.wait(5000);
    
       
    });


    it(' accessing the portal ', () => {
      
        cy.visit('https://www.boschrexroth.com/de/de/myrexroth/portal/');
        cy.wait(2000);
    });

    it('should travel through categories and find pumps ', () => {   
        
        cy.get(':nth-child(2) > .MuiImageList-root > .MuiImageListItem-root > [data-testid="tile"] > .MuiCardActions-root > .MuiButtonBase-root > .MuiTypography-root').click()
    cy.get('.MuiCardActions-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(2) > [data-testid="productsGrid-card"] > .MuiCardActions-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(1) > [data-testid="productsGrid-card"] > .MuiCardActions-root > .MuiButtonBase-root').click()
    cy.get(':nth-child(1) > [data-testid="productsGrid-card"] > .MuiCardActions-root > .MuiButtonBase-root').click()
    cy.wait(4000);
  
      });

      it('check pump details ', () => {   cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()
      cy.get(':nth-child(2) > .css-1ik4laa > .css-2tsgnr > :nth-child(1)').click()
      

    });


     


   
  });
  