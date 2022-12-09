module.exports = {
    extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
    plugins: ['import', 'unused-imports'],
    globals: {
        React: 'readonly',
    },
    rules: {
        'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                pathGroups: ['config', 'lib', 'app', 'components', 'pages', 'res'].map((path) => ({
                    pattern: `${path}/**`,
                    group: 'external',
                    position: 'after',
                })),
                pathGroupsExcludedImportTypes: ['builtin'],
            },
        ],
    },
}

// const pathGroups = ['types', 'config', 'lib', 'app', 'components', 'pages', 'res']

// module.exports = {
//     parser: '@typescript-eslint/parser',
//     extends: [
//         'plugin:react/recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:react-hooks/recommended',
//         'prettier',
//         'plugin:prettier/recommended',
//         'plugin:@next/next/recommended',
//     ],
//     plugins: ['import', 'unused-imports'],
//     parserOptions: {
//         ecmaVersion: 2020,
//         sourceType: 'module',
//         ecmaFeatures: {
//             jsx: true,
//         },
//     },
//     rules: {
//         'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
//         '@typescript-eslint/padding-line-between-statements': [
//             'error',
//             {
//                 blankLine: 'always',
//                 prev: ['const', 'let', 'var', 'export', 'interface', 'type'],
//                 next: '*',
//             },
//             {
//                 blankLine: 'any',
//                 prev: ['const', 'let', 'var'],
//                 next: ['const', 'let', 'var'],
//             },
//             // { 'blankLine': 'always', 'prev': '*', 'next': ['interface', 'type'] },
//         ],
//         '@typescript-eslint/no-explicit-any': 'off',
//         '@typescript-eslint/no-empty-interface': 'error',
//         '@typescript-eslint/no-unused-vars': 'error',
//         '@typescript-eslint/no-var-requires': 'off',
//         '@typescript-eslint/explicit-module-boundary-types': 'off',
//         'import/order': [
//             'error',
//             {
//                 'newlines-between': 'always',
//                 pathGroups: pathGroups.map((path) => ({
//                     pattern: `${path}/**`,
//                     group: 'external',
//                     position: 'after',
//                 })),
//                 pathGroupsExcludedImportTypes: ['builtin'],
//             },
//         ],
//         'padding-line-between-statements': 'off',
//         'prettier/prettier': ['error', { endOfLine: 'auto' }],
//         'unused-imports/no-unused-imports-ts': 'error',
//         'unused-imports/no-unused-vars-ts': [
//             'warn',
//             {
//                 vars: 'all',
//                 varsIgnorePattern: '^_',
//                 args: 'after-used',
//                 argsIgnorePattern: '^_',
//             },
//         ],
//         'react/react-in-jsx-scope': 'off',
//     },
//     settings: {
//         react: {
//             version: 'detect',
//         },
//     },
// }
