module.exports = {
  testEnvironment: 'jsdom',
<<<<<<< HEAD
  collectCoverageFrom: ['./src/components/QA/**'],
=======
  collectCoverageFrom: ['./src/components/**', '!**/index.js/**'],
>>>>>>> main
  coverageReporters: ['json', 'text', 'text-summary'],
};
