const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "w3k353",
  e2e: {
    baseUrl: 'http://localhost:8080',
  },
});
