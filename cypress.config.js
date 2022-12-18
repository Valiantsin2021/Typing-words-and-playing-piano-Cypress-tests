const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true
    // baseUrl: 'https://www.typing.com/',
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
