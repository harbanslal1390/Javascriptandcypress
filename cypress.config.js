const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    "MAILOSAUR_API_KEY":"xa5bAP90hcxZiIzwgunS1j7uuxdFCGAG"
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
   
  },
});
