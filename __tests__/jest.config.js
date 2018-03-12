module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['**/src/*.js'],
  coverageDirectory: './__tests__/__coverage__',
  coveragePathIgnorePatterns: ['dist/', 'node_modules/', '__mocks__/'],
  coverageReporters: ['text-summary', 'text', 'json', 'lcov'],
  rootDir: '..',
};
