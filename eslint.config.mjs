import { defineConfig } from 'eslint/config'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import typescriptEslint from 'typescript-eslint'

export default defineConfig([
  ...typescriptEslint.configs.recommended,
  eslintPluginImport.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/no-empty-interface': ['off', { allowSingleExtends: false }],
      '@typescript-eslint/member-ordering': [
        'off',
        {
          // WHY: does not group properties
          default: [
            'public-static-field',
            'public-static-get',
            'public-static-set',
            'public-static-method',

            'protected-static-field',
            'protected-static-get',
            'protected-static-set',
            'protected-static-method',

            'private-static-field',
            'private-static-get',
            'private-static-set',
            'private-static-method',

            'public-field',
            'public-get',
            'public-set',
            'public-constructor',
            'public-method',

            'protected-field',
            'protected-get',
            'protected-set',
            'protected-constructor',
            'protected-method',

            'private-field',
            'private-get',
            'private-set',
            'private-constructor',
            'private-method',
          ],
        },
      ],
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': 'warn',
      'arrow-parens': ['error', 'as-needed'],
      'brace-style': 'off', // WHY: prettier conflict
      camelcase: ['error', { ignoreImports: true }],
      'class-methods-use-this': 'off',
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'consistent-return': 'error',
      eqeqeq: 'error',
      'default-param-last': 'off', // WHY: DI conflict
      'func-call-spacing': 'off', // WHY: prettier conflict
      'function-paren-newline': 'off', // WHY: prettier conflict
      'generator-star-spacing': ['error', { before: true, after: false }],
      'global-require': 'error',
      'implicit-arrow-linebreak': 'off', // WHY: prettier conflict
      // "import-order-alphabetical/order": "error", // probably fixes import/order secondary sorting?
      'import/default': 'error',
      'import/dynamic-import-chunkname': 'off', // WHY: webpack-specific
      'import/export': 'error',
      'import/exports-last': 'off',
      'import/extensions': 'off',
      'import/first': 'error',
      'import/group-exports': 'off', // WHY: it sucks
      'import/named': 'off', // WHY: throws errors
      'import/namespace': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-commonjs': 'error',
      'import/no-cycle': 'warn',
      'import/no-deprecated': 'error',
      'import/no-duplicates': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-extraneous-dependencies': ['off'], // WHY: buggy as hell
      'import/no-internal-modules': 'off', // WHY: old-code compat
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-namespace': 'off',
      'import/no-nodejs-modules': 'off',
      'import/no-relative-parent-imports': 'off', // WHY: old-code compat
      'import/no-restricted-path': 'off',
      'import/no-self-import': 'error',
      'import/no-unresolved': 'off', // WHY: does not resolve ts aliases
      'import/no-unused-modules': 'off', // WHY: throws an error
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'unknown', 'external', 'internal', 'parent', 'index', 'sibling', 'object'],
          pathGroups: [
            { pattern: '$/**', group: 'internal', position: 'after' },
            { pattern: '#/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
      'import/no-unassigned-import': 'warn',
      'import/no-named-default': 'off',
      'import/no-default-export': 'off',
      'import/no-named-export': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/prefer-default-export': 'warn',
      'import/unambigous': 'off',
      indent: 'off', // WHY: prettier conflict
      'keyword-spacing': ['error'],
      'linebreak-style': ['error', 'unix'],
      'max-classes-per-file': 'off',
      'max-len': 'off', // WHY: controlled by prettier and .editorconfig
      'new-cap': 'off',
      'newline-per-chained-call': 'off', // WHY: prettier conflict
      'no-await-in-loop': 'off',
      'no-console': 'off', // 'error',
      'no-empty-function': 'off',
      'no-extra-semi': 'off',
      'no-confusing-arrow': 'off', // WHY: prettier conflict
      'no-dupe-class-members': 'off', // WHY: conflicts with typescript overloads
      'no-nested-ternary': 'off',
      'no-param-reassign': ['error', { props: false }],
      'no-plusplus': 'off',
      'no-redeclare': 'off', // WHY: prefer @typescript-eslint/no-redeclare
      'no-restricted-exports': ['error', { restrictedNamedExports: [] }],
      'no-restricted-imports': [
        'error',
        {
          name: 'axios',
          message: 'Use node-fetch instead',
        },
        {
          name: 'moment',
          message: 'Use luxon instead',
        },
      ],
      'no-restricted-modules': [
        'error',
        {
          name: 'axios',
          message: 'Use node-fetch instead',
        },
        {
          name: 'moment',
          message: 'Use luxon instead',
        },
      ],
      'no-restricted-syntax': 'off',
      'no-return-await': 'off',
      'no-shadow': 'off', // WHY: superseded by @typescript-eslint/no-shadow
      'no-spaced-func': 'off', // WHY: prettier conflict
      'no-tabs': 'error',
      'no-template-curly-in-string': 'warn',
      'no-underscore-dangle': 'off',
      'no-unexpected-multiline': 'off', // WHY: prettier conflict
      'no-unused-expressions': ['error', { allowShortCircuit: true }],
      'no-unused-vars': 'off', // WHY: eslint typescript parser fails to recognize imports as used
      'no-use-before-define': ['off', { functions: true, classes: false, variables: true }], // WHY: use @typescript-eslint/no-use-before-define instead
      'no-useless-constructor': 'off', // WHY: doesn't recognize ts parameter property syntax
      'object-curly-newline': 'off',
      'operator-linebreak': ['off', 'after', { overrides: { '?': 'before', ':': 'before' } }], // WHY: prettier conflict
      'prefer-arrow-callback': 'error', // NOTE: conflicts with [this] functions if `this` is not used
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: true,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
      ],
      'prettier/prettier': 'error',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      semi: ['error', 'never'],
      'semi-style': ['error', 'first'],
      'sort-imports': [
        'error',
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'space-before-function-paren': 'off', // WHY: conflicts with unnamed constructor signatues in TS types
      'space-in-parens': 'off', // WHY: prettier conflict
    },
  },
])
