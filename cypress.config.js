const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    experimentalStudio: true
    // baseUrl: 'https://www.typing.com/',
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    charts: true,
    reportPageTitle: 'IMDB Cypress test for Verisk',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  waitForAnimation: true,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  video: false,
  screenshotOnRunFailure: true,
  failOnStatusCode: false,
  trashAssetsBeforeRuns: true
});
