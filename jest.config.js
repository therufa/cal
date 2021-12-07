/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // transformIgnorePatterns: [ "node_modules/(?!(@microsoft/sp-core-library))" ],
  testMatch: ['**/test/**/*.ts'],
};
