/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            options: {
                parser: 'typescript',
            },
        },
    ],
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    arrowParens: 'always',
};
