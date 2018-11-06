module.exports = {
	parser: 'babel-eslint',
	env: {
		node: true,
		jest: true
	},
	extends: [
		'./eslintRules/best-practices.js',
		'./eslintRules/errors.js',
		'./eslintRules/node.js',
		'./eslintRules/es6.js',
		'./eslintRules/variables.js'
	],
	rules: {},
	parserOptions: {
		ecmaVersion: 2017,
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	}
};
