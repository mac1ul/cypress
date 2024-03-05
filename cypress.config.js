const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    user: 'mac1ul@bosch.com',
    pass: '~!Purge27005737',
    cookie:'{%22consent%22:{%22convenience%22:false%2C%22analysis%22:false%2C%22marketing%22:false%2C%22custom%22:[]}%2C%22timeToLive%22:60%2C%22timestamp%22:1709469455123%2C%22version%22:4}'
  },
  


  e2e: {
   
    experimentalSessionSupport: true, // Add this line to enable experimental session support
    chromeWebSecurity: false, // Add this line to disable Chrome web security
    setupNodeEvents(on, config) {
      // implement node event listeners here
   
    },
  
  },
});
