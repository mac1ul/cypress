describe('YouTube Test', () => {
    it(' should search with google ', () => {
      cy.visit('https://www.google.com/');

      cy.get('#L2AGLb > .QS5gu').click()
      cy.get('#APjFqb').click()
      cy.get('#APjFqb').type("funny videos")
      cy.get('#APjFqb').type('{enter}')
      cy.get('#rso > :nth-child(1) > :nth-child(1) > .g > :nth-child(1) > :nth-child(1) > [jscontroller="rTuANe"] > :nth-child(1) > .iHxmLe > a > .gY2b2c > .AZJdrc > .kSFuOd').click()
    //   cy.wait(2000);




    // cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
    // cy.get('#search-form > #container').type('google');
    // cy.get('#search-input > #search').type('google');
    // cy.get('#search-icon-legacy').click()

 
    // Accept terms and conditions
  // Click on the first video in the search results
      // cy.get('ytd-video-renderer').first().click()
      // // Find the search input and type a query
      // cy.get('input#search').type('Cypress testing');
  
      // // Click on the search button
      // cy.get('button#search-icon-legacy').click();
  
      // // Click on the first video in the search results
      // cy.get('ytd-video-renderer').first().click();
  
      // // Assert that the video is playing
      // cy.get('video').should('be.visible');
    });
  });
  