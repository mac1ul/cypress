

describe('portal Test', () => {
    it(' login into portal ', () => {
                          cy.clearCookies()

        cy.setCookie('privacy-settings', '{%22consent%22:{%22convenience%22:false%2C%22analysis%22:false%2C%22marketing%22:false%2C%22custom%22:[]}%2C%22timeToLive%22:60%2C%22timestamp%22:1709469455123%2C%22version%22:4}')

      cy.visit('https://www.boschrexroth.com/en/de/');

                  cy.wait(2000);

                //   cy.clearCookies()
                  Cypress.Cookies.debug(true, { verbose: false })
                        // cy.get('#cookie-settings').click();
// 






                  

    //   cy.get('#cookie-settings').click();
    //   cy.wait(1000);
    //         cy.contains('save').click();


    //   cy.contains('Decline All').click();


            // cy.wait(1000);
            // cy.get('.header-top > .meta-nav > ul > :nth-child(2) > a').click()  
//   cy.contains('Alles ablehnen').click()
    //   cy.get('#L2AGLb > .QS5gu').click()
    //   cy.get('#APjFqb').click()
    //   cy.get('#APjFqb').type("funny videos")
    //   cy.get('#APjFqb').type('{enter}')
    //   cy.get('#rso > :nth-child(1) > :nth-child(1) > .g > :nth-child(1) > :nth-child(1) > [jscontroller="rTuANe"] > :nth-child(1) > .iHxmLe > a > .gY2b2c > .AZJdrc > .kSFuOd').click()
    //   cy.wait(2000);


    https://www.boschrexroth.com/de/de/myrexroth/portal/#/portfolios



    cy.get(':nth-child(2) > .MuiImageList-root > .MuiImageListItem-root > [data-testid="tile"] > .MuiCardActions-root > .MuiButtonBase-root').click()





    });
  });

  cy.wait(2000);

  cy.get(':nth-child(2) > .MuiImageList-root > .MuiImageListItem-root > [data-testid="tile"] > .MuiCardActions-root > .MuiButtonBase-root > .MuiTypography-root').click()
  cy.get('.MuiCardActions-root > .MuiButtonBase-root').click()
  cy.get(':nth-child(2) > [data-testid="productsGrid-card"] > .MuiCardActions-root > .MuiButtonBase-root').click()
  cy.get(':nth-child(1) > [data-testid="productsGrid-card"] > .MuiCardActions-root > .MuiButtonBase-root').click()
  cy.get(':nth-child(1) > [data-testid="productsGrid-card"] > .MuiCardActions-root > .MuiButtonBase-root').click()
  cy.wait(4000);

  cy.get('.MuiTabs-flexContainer > [tabindex="-1"]').click()
  cy.get(':nth-child(2) > .css-1ik4laa > .css-2tsgnr > :nth-child(1)').click()
  