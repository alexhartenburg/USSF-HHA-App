const nextJest = require('next/jest');

const creatJestConfig = nextJest( { dir: '.' } );

const customJestConfig = {
    clearMocks: true,
    moduleDirectories: ['node_modules', 'pages'],
};

module.exports = creatJestConfig(customJestConfig);