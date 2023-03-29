module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['./src/components/RIC/**', '!**/index.js/**'],
  coverageReporters: ['json', 'text', 'text-summary'],
};
