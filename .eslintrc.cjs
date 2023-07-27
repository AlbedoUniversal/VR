module.exports = {
	root: true,

	env: {
		node: true,
		es6: true,
	},

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
	],

	plugins: ['@typescript-eslint'],

	parser: '@typescript-eslint/parser',

	parserOptions: {
		ecmaVersion: 'latest',
	},

	ignorePatterns: ['*.d.ts', '*.config.ts'],

	rules: {
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'arrow-parens': ['error', 'always'],
		camelcase: 'error',
		'id-length': [
			'error',
			{
				min: 3,
				max: 40,
				exceptions: ['i', 'j', 'id', 'on', 'to', '_'],
				properties: 'never',
			},
		],
		'no-console': ['warn', { allow: ['error', 'debug'] }],
		'no-debugger': 'off',
		'no-restricted-syntax': [
			'error',
			{
				selector:
					'VariableDeclarator[id.name!=/Dto/][init.callee.name=/^Record/],[id.name!=/Dto/][init.callee.property.name=/extend/],[id.name!=/Dto/][init.callee.property.name=/omit/],[id.name!=/Dto/][init.callee.property.name=/pick/]',
				message: 'Необходимо называть переменную Runtype-а с окончанием Dto.',
			},
			{
				selector: 'VariableDeclarator[id.name=/Dto/][init.callee.name=/Array/]',
				message:
					'Нет смысла присваивать массив Runtype Dto в переменную.' +
					' Имеет смысл использовать Dto в единственном числе и потом по' +
					' необходимости оборачивать его в RtArray(Dto)',
			},
			{
				selector:
					"CallExpression[callee.name='setTimeout'],[callee.name='setInterval']",
				message:
					'setTimeout и setInterval запрещены к использованию. ' +
					'Вместо них нужно использовать useTimeout, useTimeoutFn для timeout-а,' +
					' и useInterval, useIntervalFn для interval-а.',
			},
		],
		'no-undef': 'off',
		'prettier/prettier': 'error',
		'unicorn/consistent-function-scoping': 'off',
		'unicorn/prefer-top-level-await': 'off',
		'unicorn/filename-case': [
			'error',
			{
				// убираем варнинги с переводов и файлов конфигов
				case: 'pascalCase',
				ignore: [
					'^\\w+.json$',
					'\\w+.js$',
					'^\\w+.config.ts$',
					'^\\w+.spec.ts$',
				],
			},
		],
		'unicorn/no-abusive-eslint-disable': 'off',
		'unicorn/no-array-callback-reference': 'off',
		'unicorn/no-array-for-each': 'off',
		'unicorn/no-array-reduce': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-thenable': 'off',
		'unicorn/prefer-logical-operator-over-ternary': 'off',
		'unicorn/prefer-module': 'off',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				allowList: {
					params: true,
					props: true,
					Ref: true,
					Refs: true,
					ref: true,
					acc: true,
					prop: true,
				},
			},
		],
	},
};
