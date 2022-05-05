module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
    
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-trailing-spaces': 'off',
    'no-multi-spaces': 'off',
    'no-tabs': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',

  },
    
};
