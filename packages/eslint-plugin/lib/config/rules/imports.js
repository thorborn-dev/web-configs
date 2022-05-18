module.exports = {
  // Ensures an imported module can be resolved to a module on the local filesystem.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

  // Verifies that all named imports are part of the set of named exports in the referenced module.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
  'import/named': 'error',

  // Enforces names exist at the time they are dereferenced.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
  'import/namespace': 'error',

  // Ensures that there is an default export in the imported module.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
  'import/default': 'error',

  // Reports funny business with exports, like repeated exports of names or defaults.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
  'import/export': 'error',

  // Reports use of an exported name as the locally imported name of a default export.
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 'error',

  // Reports use of an exported name as a property on the default export.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
  'import/no-named-as-default-member': 'error',

  // Style

  // This rule reports any imports that come after non-import statements.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
  'import/first': 'error',

  // Reports if a resolved path is imported more than once.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'import/no-duplicates': 'error',

  // Enforce a convention of not using namespace (a.k.a. "wildcard" *) imports.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
  'import/no-namespace': 'error',

  // Ensure consistent use of file extension within the import path.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    },
  ],

  // Enforce a convention in the order of require() / import statements.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
  'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

  // Enforces having one or more empty lines after the last top-level import statement or require call.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
  'import/newline-after-import': ['error', { count: 1 }],

  // When there is only a single export from a module, prefer using default export over named export.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  'import/prefer-default-export': 'error',

  // Restrict which files can be imported in a given folder.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
  'import/no-restricted-paths': 'off',

  // Forbid modules to have too many dependencies.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
  'import/max-dependencies': 'off',

  // Forbid import of modules using absolute paths.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
  'import/no-absolute-path': 'error',

  // Forbid require() calls with expressions.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
  'import/no-dynamic-require': 'error',

  // Prevent importing the submodules of other modules.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
  'import/no-internal-modules': 'off',

  // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
  'import/unambiguous': 'off',

  // Forbid Webpack loader syntax in imports.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
  'import/no-webpack-loader-syntax': 'error',

  // Prevent unassigned imports.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
  'import/no-unassigned-import': 'off',

  // Prevent importing the default as if it were named.
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
  'import/no-named-default': 'error',

  // Reports if a module's default export is unnamed.
  // https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
  'import/no-anonymous-default-export': 'off',

  // This rule enforces that all exports are declared at the bottom of the file.
  // https://github.com/benmosher/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
  'import/exports-last': 'error',

  // Reports when named exports are not grouped together in a single export declaration or when
  // multiple assignments to CommonJS module.exports or exports object are present in a single file.
  // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
  'import/group-exports': 'off',

  // Prohibit default exports. Mostly an inverse of prefer-default-export.
  // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
  'import/no-default-export': 'off',

  // Prohibit named exports. Mostly an inverse of no-default-export.
  // https://github.com/benmosher/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
  'import/no-named-export': 'off',

  // Forbid a module from importing itself.
  // https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
  'import/no-self-import': 'error',

  // Forbid cyclical dependencies between modules.
  // https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
  'import/no-cycle': ['error', { maxDepth: '∞' }],

  // Ensures that there are no useless path segments.
  // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
  'import/no-useless-path-segments': ['error', { commonjs: true }],

  // Reports any dynamic imports without a webpackChunkName specified in a leading block comment in the proper format.
  // https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
  'import/dynamic-import-chunkname': 'off',

  // Use this rule to prevent imports to folders in relative parent paths.
  // https://github.com/benmosher/eslint-plugin-import/blob/c34f14f67f077acd5a61b3da9c0b0de298d20059/docs/rules/no-relative-parent-imports.md
  'import/no-relative-parent-imports': 'off',

  // Reports modules without any exports, or with unused exports.
  // https://github.com/benmosher/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
  'import/no-unused-modules': 'off',

  // Reports the use of import declarations with CommonJS exports in any module except for the main module.
  // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
  'import/no-import-module-exports': 'error',

  // Use this rule to prevent importing packages through relative paths.
  // https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
  'import/no-relative-packages': 'error',
};
