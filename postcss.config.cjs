module.exports = {
	plugins: [
		'postcss-nested',
		'postcss-import',
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009',
				},
				stage: 3,
			},
		],
		[
			'cssnano',
			{
				preset: 'default',
			},
		],
	],
};
