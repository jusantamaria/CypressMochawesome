const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    specPattern: "cypress/e2e/specs/homeSauce.spec.js",
    setupNodeEvents(on, config){
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
    
    chromeWebSecurity: false,
});
