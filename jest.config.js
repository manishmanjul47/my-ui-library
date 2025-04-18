module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest'
    },
    moduleFileExtensions: ['js'],
    roots: ['<rootDir>/src', '<rootDir>/components']
  };
  