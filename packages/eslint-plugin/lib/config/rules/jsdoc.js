module.exports = {
  'jsdoc/check-access': 'error',

  'jsdoc/check-alignment': 'error',

  'jsdoc/check-examples': 'off',

  'jsdoc/check-indentation': 'error',

  'jsdoc/check-line-alignment': 'error',

  'jsdoc/check-param-names': 'error',

  'jsdoc/check-property-names': 'error',

  'jsdoc/check-syntax': 'error',

  'jsdoc/check-tag-names': 'error',

  'jsdoc/check-types': 'error',

  'jsdoc/check-values': 'error',

  'jsdoc/empty-tags': 'error',

  'jsdoc/implements-on-classes': 'error',

  'jsdoc/match-description': 'error',

  'jsdoc/multiline-blocks': 'error',

  'jsdoc/newline-after-description': 'error',

  'jsdoc/no-bad-blocks': 'error',

  'jsdoc/no-defaults': 'error',

  'jsdoc/no-missing-syntax': 'off',

  'jsdoc/no-multi-asterisks': 'error',

  'jsdoc/no-restricted-syntax': 'off',

  'jsdoc/no-types': 'off',

  'jsdoc/no-undefined-types': 'error',

  'jsdoc/require-asterisk-prefix': 'error',

  'jsdoc/require-description': 'error',

  'jsdoc/require-description-complete-sentence': 'error',

  'jsdoc/require-example': 'off',

  'jsdoc/require-file-overview': 'off',

  'jsdoc/require-hyphen-before-param-description': 'error',

  // Checks for presence of jsdoc comments, on class declarations as well as functions.
  // https://github.com/gajus/eslint-plugin-jsdoc#user-content-eslint-plugin-jsdoc-rules-require-jsdoc
  'jsdoc/require-jsdoc': [
    'error',
    {
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: false,
        ClassExpression: false,
        FunctionDeclaration: true,
        FunctionExpression: true,
        MethodDefinition: true,
      },
    },
  ],

  'jsdoc/require-param': 'error',

  'jsdoc/require-param-description': 'error',

  'jsdoc/require-param-name': 'error',

  'jsdoc/require-param-type': 'error',

  'jsdoc/require-property': 'error',

  'jsdoc/require-property-description': 'error',

  'jsdoc/require-property-name': 'error',

  'jsdoc/require-property-type': 'error',

  'jsdoc/require-returns': 'error',

  'jsdoc/require-returns-check': 'error',

  'jsdoc/require-returns-description': 'error',

  'jsdoc/require-returns-type': 'error',

  'jsdoc/require-throws': 'error',

  'jsdoc/require-yields': 'error',

  'jsdoc/require-yields-check': 'error',

  'jsdoc/tag-lines': 'error',

  'jsdoc/valid-types': 'error',
};
