const nextJest = require('next/jest');

const creatJestConfig = nextJest( { dir: '.' } );

const customJestConfig = {
    clearMocks: true,
    moduleDirectories: ['node_modules', 'pages'],
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

module.exports = creatJestConfig(customJestConfig);