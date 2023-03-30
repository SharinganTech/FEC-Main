module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['./src/components/**', '!**/index.js/**'],
  coverageReporters: ['json', 'text', 'text-summary'],
};
