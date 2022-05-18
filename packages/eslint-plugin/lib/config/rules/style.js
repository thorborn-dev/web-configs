// These rules care about how the code looks rather than how it executes
// https://eslint.org/docs/rules/#layout-formatting

module.exports = {
  // Enforce linebreaks after opening and before closing array brackets
  // https://eslint.org/docs/rules/array-bracket-newline
  'array-bracket-newline': 'off',

  // Enforce consistent spacing inside array brackets
  // https://eslint.org/docs/rules/array-bracket-spacing
  'array-bracket-spacing': 'error',

  // Enforce line breaks after each array element
  // https://eslint.org/docs/rules/array-element-newline
  'array-element-newline': 'off',

  // Require parentheses around arrow function arguments
  // https://eslint.org/docs/rules/arrow-parens
  'arrow-parens': 'error',

  // Enforce consistent spacing before and after the arrow in arrow functions
  // https://eslint.org/docs/rules/arrow-spacing
  'arrow-spacing': 'error',

  // Disallow or enforce spaces inside of blocks after opening block and before closing block
  // https://eslint.org/docs/rules/block-spacing
  'block-spacing': 'error',

  // Enforce consistent brace style for blocks
  // https://eslint.org/docs/rules/brace-style
  'brace-style': 'error',

  // Require or disallow trailing commas
  // https://eslint.org/docs/rules/comma-dangle
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    },
  ],

  // Enforce consistent spacing before and after commas
  // https://eslint.org/docs/rules/comma-spacing
  'comma-spacing': 'error',

  // Enforce consistent comma style
  // https://eslint.org/docs/rules/comma-style
  'comma-style': [
    'error',
    'last',
    {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    },
  ],

  // Enforce consistent spacing inside computed property brackets
  // https://eslint.org/docs/rules/computed-property-spacing
  'computed-property-spacing': 'error',

  // Enforce consistent newlines before and after dots
  // https://eslint.org/docs/rules/dot-location
  'dot-location': ['error', 'property'],

  // Require or disallow newline at the end of files
  // https://eslint.org/docs/rules/eol-last
  'eol-last': 'error',

  // Require or disallow spacing between function identifiers and their invocations
  // https://eslint.org/docs/rules/func-call-spacing
  'func-call-spacing': 'error',

  // Enforce line breaks between arguments of a function call
  // https://eslint.org/docs/rules/function-call-argument-newline
  'function-call-argument-newline': ['error', 'consistent'],

  // Enforce consistent line breaks inside function parentheses
  // https://eslint.org/docs/rules/function-paren-newline
  'function-paren-newline': ['error', 'multiline-arguments'],

  // Enforce consistent spacing around `*` operators in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  'generator-star-spacing': ['error', { before: false, after: true }],

  // Enforce the location of arrow function bodies
  // https://eslint.org/docs/rules/implicit-arrow-linebreak
  'implicit-arrow-linebreak': 'error',

  // Enforce consistent indentation
  // https://eslint.org/docs/rules/indent
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // List derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      ignoreComments: false,
    },
  ],

  // Enforce the consistent use of either double or single quotes in JSX attributes
  // https://eslint.org/docs/rules/jsx-quotes
  'jsx-quotes': 'off',

  // Enforce consistent spacing between keys and values in object literal properties
  // https://eslint.org/docs/rules/key-spacing
  'key-spacing': 'error',

  // Enforce consistent spacing before and after keywords
  // https://eslint.org/docs/rules/keyword-spacing
  'keyword-spacing': 'error',

  // Enforce position of line comments
  // https://eslint.org/docs/rules/line-comment-position
  'line-comment-position': 'error',

  // Enforce consistent linebreak style
  // https://eslint.org/docs/rules/linebreak-style
  'linebreak-style': 'error',

  // Require empty lines around comments
  // https://eslint.org/docs/rules/lines-around-comment
  'lines-around-comment': 'off',

  // Require or disallow an empty line between class members
  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': 'error',

  // Enforce a maximum line length
  // https://eslint.org/docs/rules/max-len
  'max-len': [
    'error',
    100,
    2,
    {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],

  // Enforce a maximum number of statements allowed per line
  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': 'off',

  // Enforce newlines between operands of ternary expressions
  // https://eslint.org/docs/rules/multiline-ternary
  'multiline-ternary': 'off',

  // Enforce or disallow parentheses when invoking a constructor with no arguments
  // https://eslint.org/docs/rules/new-parens
  'new-parens': 'error',

  // Require a newline after each call in a method chain
  // https://eslint.org/docs/rules/newline-per-chained-call
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

  // Disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  'no-extra-parens': 'off',

  // Disallow mixed spaces and tabs for indentation
  // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
  'no-mixed-spaces-and-tabs': 'error',

  // Disallow multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  'no-multi-spaces': 'error',

  // Disallow multiple empty lines
  // https://eslint.org/docs/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

  // Disallow all tabs
  // https://eslint.org/docs/rules/no-tabs
  'no-tabs': 'error',

  // Disallow trailing whitespace at the end of lines
  // https://eslint.org/docs/rules/no-trailing-spaces
  'no-trailing-spaces': 'error',

  // Disallow whitespace before properties
  // https://eslint.org/docs/rules/no-whitespace-before-property
  'no-whitespace-before-property': 'error',

  // Enforce the location of single-line statements
  // https://eslint.org/docs/rules/nonblock-statement-body-position
  'nonblock-statement-body-position': 'error',

  // Enforce consistent line breaks after opening and before closing braces
  // https://eslint.org/docs/rules/object-curly-newline
  'object-curly-newline': 'error',

  // Enforce consistent spacing inside braces
  // https://eslint.org/docs/rules/object-curly-spacing
  'object-curly-spacing': ['error', 'always'],

  // Enforce placing object properties on separate lines
  // https://eslint.org/docs/rules/object-property-newline
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],

  // Enforce consistent linebreak style for operators
  // https://eslint.org/docs/rules/operator-linebreak
  'operator-linebreak': [
    'error',
    'after',
    { overrides: { '?': 'before', ':': 'before' } },
  ],

  // Require or disallow padding within blocks
  // https://eslint.org/docs/rules/padded-blocks
  'padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    },
    {
      allowSingleLineBlocks: true,
    },
  ],

  // Require or disallow padding lines between statements
  // https://eslint.org/docs/rules/padding-line-between-statements
  'padding-line-between-statements': 'off',

  // Enforce the consistent use of either backticks, double, or single quotes
  // https://eslint.org/docs/rules/quotes
  quotes: ['error', 'single', { avoidEscape: true }],

  // Enforce spacing between rest and spread operators and their expressions
  // https://eslint.org/docs/rules/rest-spread-spacing
  'rest-spread-spacing': 'error',

  // Require or disallow semicolons instead of ASI
  // https://eslint.org/docs/rules/semi
  semi: 'error',

  // Enforce consistent spacing before and after semicolons
  // https://eslint.org/docs/rules/semi-spacing
  'semi-spacing': 'error',

  // Enforce location of semicolons
  // https://eslint.org/docs/rules/semi-style
  'semi-style': 'error',

  // Enforce consistent spacing before blocks
  // https://eslint.org/docs/rules/space-before-blocks
  'space-before-blocks': 'error',

  // Enforce consistent spacing before `function` definition opening parenthesis
  // https://eslint.org/docs/rules/space-before-function-paren
  'space-before-function-paren': [
    'error',
    {
      named: 'never',
    },
  ],

  // Enforce consistent spacing inside parentheses
  // https://eslint.org/docs/rules/space-in-parens
  'space-in-parens': 'error',

  // Require spacing around infix operators
  // https://eslint.org/docs/rules/space-infix-ops
  'space-infix-ops': 'error',

  // Enforce consistent spacing before or after unary operators
  // https://eslint.org/docs/rules/space-unary-ops
  'space-unary-ops': [
    'error',
    {
      words: true,
      nonwords: false,
    },
  ],

  // Enforce spacing around colons of switch statements
  // https://eslint.org/docs/rules/switch-colon-spacing
  'switch-colon-spacing': 'error',

  // Require or disallow spacing around embedded expressions of template strings
  // https://eslint.org/docs/rules/template-curly-spacing
  'template-curly-spacing': 'error',

  // Require or disallow spacing between template tags and their literals
  // https://eslint.org/docs/rules/template-tag-spacing
  'template-tag-spacing': 'error',

  // Require or disallow Unicode byte order mark (BOM)
  // https://eslint.org/docs/rules/unicode-bom
  'unicode-bom': 'error',

  // Require parentheses around immediate `function` invocations
  // https://eslint.org/docs/rules/wrap-iife
  'wrap-iife': 'error',

  // Require parenthesis around regex literals
  // https://eslint.org/docs/rules/wrap-regex
  'wrap-regex': 'off',

  // Require or disallow spacing around the `*` in `yield*` expressions
  // https://eslint.org/docs/rules/yield-star-spacing
  'yield-star-spacing': 'error',
};
