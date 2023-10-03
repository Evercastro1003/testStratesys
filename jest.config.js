module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': require.resolve('babel-jest'),
    },
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  };
  