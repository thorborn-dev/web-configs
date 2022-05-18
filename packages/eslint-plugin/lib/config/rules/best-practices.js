const confusingBrowserGlobals = require('confusing-browser-globals');

// https://eslint.org/docs/rules/#suggestions

module.exports = {
  // Enforce getter and setter pairs in objects and classes
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'off',

  // Require braces around arrow function bodies
  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: true,
    },
  ],

  // Enforce the use of variables within the scope they are defined
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // Enforce camelcase naming convention
  // https://eslint.org/docs/rules/camelcase
  camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

  // Enforce or disallow capitalization of the first letter of a comment
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': [
    'error',
    'always',
    {
      ignoreConsecutiveComments: true,
    },
  ],

  // Enforce that class methods utilize `this`
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': 'off',

  // Enforce a maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  complexity: 'off',

  // Require `return` statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': 'error',

  // Enforce consistent naming when capturing the current execution context
  // https://eslint.org/docs/rules/consistent-this
  'consistent-this': 'off',

  // Enforce consistent brace style for all control statements
  // https://eslint.org/docs/rules/curly
  curly: ['error', 'multi-line'],

  // Require `default` cases in `switch` statements
  // https://eslint.org/docs/rules/default-case
  'default-case': ['error', { commentPattern: '^No default$' }],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 'error',

  // Enforce default parameters to be last
  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 'error',

  // Enforce dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': ['error', { allowKeywords: true }],

  // Require the use of `===` and `!==`
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // Require function names to match the name of the variable or property to which they are assigned
  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': 'off',

  // Require or disallow named `function` expressions
  // https://eslint.org/docs/rules/func-names
  'func-names': 'warn',

  // Enforce the consistent use of either `function` declarations or expressions
  // https://eslint.org/docs/rules/func-style
  'func-style': 'error',

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // Require `for-in` loops to include an `if` statement
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // Disallow specified identifiers
  // https://eslint.org/docs/rules/id-denylist
  'id-denylist': 'error',

  // Enforce minimum and maximum identifier lengths
  // https://eslint.org/docs/rules/id-length
  'id-length': 'off',

  // Require identifiers to match a specified regular expression
  // https://eslint.org/docs/rules/id-match
  'id-match': 'off',

  // Require or disallow initialization in variable declarations
  // https://eslint.org/docs/rules/init-declarations
  'init-declarations': 'off',

  // Enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // Enforce a maximum depth that blocks can be nested
  // https://eslint.org/docs/rules/max-depth
  'max-depth': 'off',

  // Enforce a maximum number of lines per file
  // https://eslint.org/docs/rules/max-lines
  'max-lines': 'off',

  // Enforce a maximum number of lines of code in a function
  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': 'off',

  // Enforce a maximum depth that callbacks can be nested
  // https://eslint.org/docs/rules/max-nested-callbacks
  'max-nested-callbacks': 'off',

  // Enforce a maximum number of parameters in function definitions
  // https://eslint.org/docs/rules/max-params
  'max-params': 'off',

  // Enforce a maximum number of statements allowed in function blocks
  // https://eslint.org/docs/rules/max-statements
  'max-statements': 'off',

  // Enforce a particular style for multiline comments
  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': ['error', 'separate-lines'],

  // Require constructor names to begin with a capital letter
  // https://eslint.org/docs/rules/new-cap
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],

  // Disallow the use of `alert`, `confirm`, and `prompt`
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'warn',

  // Disallow `Array` constructors
  // https://eslint.org/docs/rules/no-array-constructor
  'no-array-constructor': 'error',

  // Disallow bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // Disallow the use of `arguments.caller` or `arguments.callee`
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // Disallow lexical declarations in case clauses
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // Disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  'no-confusing-arrow': [
    'error',
    {
      allowParens: true,
    },
  ],

  // Disallow the use of `console`
  // https://eslint.org/docs/rules/no-console
  'no-console': 'warn',

  // Disallow `continue` statements
  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'error',

  // Disallow deleting variables
  // https://eslint.org/docs/rules/no-delete-var
  'no-delete-var': 'error',

  // Disallow division operators explicitly at the beginning of regular expressions
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // Disallow `else` blocks after `return` statements in `if` statements
  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // Disallow empty block statements
  // https://eslint.org/docs/rules/no-empty
  'no-empty': ['error', { allowEmptyCatch: true }],

  // Disallow empty functions
  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  // Disallow `null` comparisons without type-checking operators
  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',

  // Disallow the use of `eval()`
  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',

  // Disallow extending native types
  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',

  // Disallow unnecessary calls to `.bind()`
  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',

  // Disallow unnecessary boolean casts
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // Disallow unnecessary labels
  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // Disallow unnecessary semicolons
  // https://eslint.org/docs/rules/no-extra-semi
  'no-extra-semi': 'error',

  // Disallow leading or trailing decimal points in numeric literals
  // https://eslint.org/docs/rules/no-floating-decimal
  'no-floating-decimal': 'error',

  // Disallow assignments to native objects or read-only global variables
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': 'error',

  // Disallow shorthand type conversions
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': 'off',

  // Disallow declarations in the global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'off',

  // Disallow the use of `eval()`-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // Disallow inline comments after code
  // https://eslint.org/docs/rules/no-inline-comments
  'no-inline-comments': 'off',

  // Disallow use of `this` in contexts where the value of `this` is `undefined`
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',

  // Disallow the use of the `__iterator__` property
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // Disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // Disallow labeled statements
  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // Disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',

  // Disallow `if` statements as the only statement in `else` blocks
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'error',

  // Disallow function declarations that contain unsafe references inside loop statements
  // https://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // Disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  'no-magic-numbers': 'off',

  // Disallow mixed binary operators
  // https://eslint.org/docs/rules/no-mixed-operators
  'no-mixed-operators': [
    'error',
    {
      // The list of arithmetic groups disallows mixing `%` and `** with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    },
  ],

  // Disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': 'error',

  // Disallow multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // Disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'off',

  // Disallow nested ternary expressions
  // https://eslint.org/docs/rules/no-nested-ternary
  'no-nested-ternary': 'error',

  // Disallow `new` operators outside of assignments or comparisons
  // https://eslint.org/docs/rules/no-new
  'no-new': 'error',

  // Disallow `new` operators with the `Function` object
  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',

  // Disallow `Object` constructors
  // https://eslint.org/docs/rules/no-new-object
  'no-new-object': 'error',

  // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',

  // Disallow `\8` and `\9` escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  'no-nonoctal-decimal-escape': 'error',

  // Disallow octal literals
  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',

  // Disallow octal escape sequences in string literals
  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',

  // Disallow reassigning `function` parameters
  // https://eslint.org/docs/rules/no-param-reassign
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // For reduce accumulators
        'accumulator', // For reduce accumulators
        'e', // For e.returnvalue
        'ctx', // For Koa routing
        'context', // For Koa routing
        'req', // For Express requests
        'request', // For Express requests
        'res', // For Express responses
        'response', // For Express responses
        '$scope', // For Angular 1 scopes
        'staticContext', // For ReactRouter context
      ],
    },
  ],

  // Disallow the unary operators `++` and `--`
  // https://eslint.org/docs/rules/no-plusplus
  'no-plusplus': 'error',

  // Disallow the use of the `__proto__` property
  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // Disallow variable redeclaration
  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',

  // Disallow multiple spaces in regular expressions
  // https://eslint.org/docs/rules/no-regex-spaces
  'no-regex-spaces': 'error',

  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'default', // Use `export default` to provide a default export
        'then', // This will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    },
  ],

  // Disallow specified global variables
  // https://eslint.org/docs/rules/no-restricted-globals
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message: 'Use Number.isFinite instead',
    },
    {
      name: 'isNaN',
      message: 'Use Number.isNaN instead',
    },
  ].concat(confusingBrowserGlobals),

  // Disallow specified modules when loaded by `import`
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': 'off',

  // Disallow certain properties on certain objects
  // https://eslint.org/docs/rules/no-restricted-properties
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],

  // Disallow specified syntax
  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // Disallow assignment operators in `return` statements
  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // Disallow unnecessary `return await`
  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': 'error',

  // Disallow `javascript:` urls
  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // Disallow comma operators
  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // Disallow variable declarations from shadowing variables declared in the outer scope
  // https://eslint.org/docs/rules/no-shadow
  'no-shadow': 'error',

  // Disallow identifiers from shadowing restricted names
  // https://eslint.org/docs/rules/no-shadow-restricted-names
  'no-shadow-restricted-names': 'error',

  // Disallow ternary operators
  // https://eslint.org/docs/rules/no-ternary
  'no-ternary': 'off',

  // Disallow throwing literals as exceptions
  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // Disallow initializing variables to `undefined`
  // https://eslint.org/docs/rules/no-undef-init
  'no-undef-init': 'error',

  // Disallow the use of `undefined` as an identifier
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // Disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      enforceInMethodNames: true,
    },
  ],

  // Disallow ternary operators when simpler alternatives exist
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // Disallow unused expressions
  // https://eslint.org/docs/rules/no-unused-expressions
  'no-unused-expressions': 'error',

  // Disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',

  // Disallow unnecessary calls to `.call()` and `.apply()`
  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'off',

  // Disallow unnecessary `catch` clauses
  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',

  // Disallow unnecessary computed property keys in objects and classes
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // Disallow unnecessary concatenation of literals or template literals
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // Disallow unnecessary constructors
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // Disallow unnecessary escape characters
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // Disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': 'error',

  // Disallow redundant return statements
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

  // Require `let` or `const` instead of `var`
  // https://eslint.org/docs/rules/no-var
  'no-var': 'error',

  // Disallow `void` operators
  // https://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // Disallow specified warning terms in comments
  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': 'off',

  // Disallow `with` statements
  // https://eslint.org/docs/rules/no-with
  'no-with': 'error',

  // Require or disallow method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // Enforce variables to be declared either together or separately in functions
  // https://eslint.org/docs/rules/one-var
  'one-var': ['error', 'never'],

  // Require or disallow newlines around variable declarations
  // https://eslint.org/docs/rules/one-var-declaration-per-line
  'one-var-declaration-per-line': ['error', 'always'],

  // Require or disallow assignment operator shorthand where possible
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // Require using arrow functions for callbacks
  // https://eslint.org/docs/rules/prefer-arrow-callback
  'prefer-arrow-callback': 'error',

  // Require `const` declarations for variables that are never reassigned after declared
  // https://eslint.org/docs/rules/prefer-const
  'prefer-const': [
    'error',
    {
      ignoreReadBeforeAssign: true,
    },
  ],

  // Require destructuring from arrays and/or objects
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  // Disallow the use of `Math.pow` in favor of the `**` operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',

  // Enforce using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',

  // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
  // https://eslint.org/docs/rules/prefer-object-has-own
  'prefer-object-has-own': 'off',

  // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

  // Require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // Disallow use of the `RegExp` constructor in favor of regular expression literals
  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],

  // Require rest parameters instead of `arguments`
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // Require spread operators instead of `.apply()`
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // Require template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // Require quotes around object literal property names
  // https://eslint.org/docs/rules/quote-props
  'quote-props': ['error', 'as-needed', { keywords: false, numbers: false }],

  // Enforce the consistent use of the radix argument when using `parseInt()`
  // https://eslint.org/docs/rules/radix
  radix: 'error',

  // Disallow async functions which have no `await` expression
  // https://eslint.org/docs/rules/require-await
  'require-await': 'off',

  // Enforce the use of `u` flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',

  // Require generator functions to contain `yield`
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // Enforce sorted import declarations within modules
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': 'off',

  // Require object keys to be sorted
  // https://eslint.org/docs/rules/sort-keys
  'sort-keys': 'off',

  // Require variables within the same declaration block to be sorted
  // https://eslint.org/docs/rules/sort-vars
  'sort-vars': 'off',

  // Enforce consistent spacing after the `//` or `/*` in a comment
  // https://eslint.org/docs/rules/spaced-comment
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    },
  ],

  // Require or disallow strict mode directives
  // https://eslint.org/docs/rules/strict
  // Babel inserts `'use strict';` for us
  strict: ['error', 'never'],

  // Require symbol descriptions
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',

  // Require `var` declarations be placed at the top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'error',

  // Require or disallow "Yoda" conditions
  // https://eslint.org/docs/rules/yoda
  yoda: 'error',
};
