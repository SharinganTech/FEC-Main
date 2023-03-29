module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['./src/components/Overview/**', '!./src/components/Overview/ZoomedImage.jsx'],
  coverageReporters: ['json', 'text', 'text-summary'],
};
