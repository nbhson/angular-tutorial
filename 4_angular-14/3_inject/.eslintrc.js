module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'unused-imports'],
    extends: ['plugin:@typescript-eslint/recommended'],
    rules: {
        'unused-imports/no-unused-imports': 'error',
    },
};