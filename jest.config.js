module.exports = {
  testPathIgnorePatterns: ['node_modules', '\\.cache', '\\.history', '<rootDir>.*/public'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js',
  ],
};
