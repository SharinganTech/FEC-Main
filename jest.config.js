module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['./src/components/RatingsAndReviews/**', '!./src/components/RatingsAndReviews/index.jsx'],
  coverageReporters: ['json', 'text', 'text-summary'],
};
