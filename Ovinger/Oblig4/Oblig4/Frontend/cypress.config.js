const { defineConfig } = require('cypress')

module.exports = defineConfig({
  videoCompression: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5173'
  }
})
