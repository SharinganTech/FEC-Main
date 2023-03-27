module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['./src/components/QA/**'],
  coverageReporters: ['json', 'text', 'text-summary'],
};
