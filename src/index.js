module.exports = {
	env: {
		es2021: true,
		node: true,
		commonjs: true
	},
	extends: [
		'eslint:recommended',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		tsconfigRootDir: '.',
		project: './tsconfig.json',
		sourceType: 'script'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/indent': ['error', 'tab'],
		'@typescript-eslint/quotes': ['error', 'single'],
		'@typescript-eslint/semi': ['error', 'never'],
		'block-scoped-var': 'error',
		'brace-style': [2, '1tbs'],
		'eol-last': [2, 'always'],
		eqeqeq: 'error',
		'linebreak-style': ['error', 'unix'],
		'no-console': 'error',
		'no-unused-vars': 'error',
		'no-extra-parens': 'error',
		'no-await-in-loop': 'error',
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'error',
		'no-void': 'error',
		'prefer-const': 'off',
		indent: 'off',
		yoda: 'error'
	}
}
