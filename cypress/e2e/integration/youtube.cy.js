describe('YouTube Test', () => {

  beforeEach(() => {
    // This will be executed before each test
    cy.visit('https://www.youtube.com/');
    cy.get(':nth-child(1) > :nth-child(2) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();

  });


  it('should search for something', () => {
    cy.get('#search-input > #search').click();
    cy.get('#search-input > #search').type('google{enter}');
  });

  // Add more tests as needed

});