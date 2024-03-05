

describe('portal Test', () => {
    it(' login into portal ', () => {

        // cy.clearCookies()
        // click action with cypress
        // cy.get('body').click(100, 200, { force: true });

        cy.setCookie('privacy-settings', '{%22consent%22:{%22convenience%22:false%2C%22analysis%22:false%2C%22marketing%22:false%2C%22custom%22:[]}%2C%22timeToLive%22:60%2C%22timestamp%22:1709469455123%2C%22version%22:4}')
        
        cy.visit('https://www.boschrexroth.com/en/dc/');

      cy.visit('https://www.boschrexroth.com/de/de/');
      cy.get('.header-top > .meta-nav > ul > :nth-child(2) > a > .icon').click()

        cy.get('.wrapper-right > .module-button > .btn').click()


        cy.get('#social-ciam-authn-prod').click();

           cy.get('.input__placeholder').click().type("mac1ul@bosch.com{enter}");
            //    cy.get('.input__placeholder').click().type("Thomas.Mueller11+CPTestuser1@bosch.com{enter}");
    
           cy.wait(1000);
        //    cy.get('.input__placeholder').click().type("Stockholm7");
    
           cy.get('.input__placeholder').click().type(pass);
                  cy.get('[data-testid="enter-password.submit"]').click();

                  cy.wait(2000);
                          cy.visit('https://www.boschrexroth.com/de/de/myrexroth/portal/');

                //   cy.visit('https://www.boschrexroth.com/de/de/');
                //       cy.visit('https://www.boschrexroth.com/de/de/');



    //               Cypress.Cookies.debug(true, { verbose: false })
               
    //   cy.visit('https://www.boschrexroth.com/de/de/myrexroth/portal/');
    //               cy.wait(1000);

    //   cy.get('#social-ciam-authn-prod').click();

    //    cy.get('.input__placeholder').click().type("mac1ul@bosch.com{enter}");
    //     //    cy.get('.input__placeholder').click().type("Thomas.Mueller11+CPTestuser1@bosch.com{enter}");

    //    cy.wait(1000);
    // //    cy.get('.input__placeholder').click().type("Stockholm7");

    //    cy.get('.input__placeholder').click().type("~!Purge27005737");

    //    cy.get('[data-testid="enter-password.submit"]').click();
    //         //    cy.clearCookies()
    //     cy.setCookie('privacy-settings', '{%22consent%22:{%22convenience%22:false%2C%22analysis%22:false%2C%22marketing%22:false%2C%22custom%22:[]}%2C%22timeToLive%22:60%2C%22timestamp%22:1709469455123%2C%22version%22:4}')

    //     cy.wait(10000);
        
    //     cy.visit('https://www.boschrexroth.com/de/de/myrexroth/portal/');
    //     cy.wait(10000);

    //     cy.visit('https://www.boschrexroth.com/de/de/myrexroth/portal/');

    //    cy.setCookie('privacy-settings', '{%22consent%22:{%22convenience%22:false%2C%22analysis%22:false%2C%22marketing%22:false%2C%22custom%22:[]}%2C%22timeToLive%22:60%2C%22timestamp%22:1709469455123%2C%22version%22:4}')
    //    cy.visit('https://www.boschrexroth.com/de/de/myrexroth/portal/');

            // cy.wait(1000);
            // cy.get('.header-top > .meta-nav > ul > :nth-child(2) > a').click()  
//   cy.contains('Alles ablehnen').click()
    //   cy.get('#L2AGLb > .QS5gu').click()
    //   cy.get('#APjFqb').click()
    //   cy.get('#APjFqb').type("funny videos")
    //   cy.get('#APjFqb').type('{enter}')
    //   cy.get('#rso > :nth-child(1) > :nth-child(1) > .g > :nth-child(1) > :nth-child(1) > [jscontroller="rTuANe"] > :nth-child(1) > .iHxmLe > a > .gY2b2c > .AZJdrc > .kSFuOd').click()
    //   cy.wait(2000);




    });
  });
  