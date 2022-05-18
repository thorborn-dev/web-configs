module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  plugins: ['import', 'jsdoc'],

  rules: {
    ...require('./rules/best-practices'),
    ...require('./rules/possible-problems'),
    ...require('./rules/style'),

    // Plugins
    ...require('./rules/imports'),
    ...require('./rules/jsdoc'),
  },
};
