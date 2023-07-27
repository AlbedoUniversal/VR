// Можно заморочится и добавить еще плагином, например из этого конфига @wemake-services/stylelint-config-scss
// https://github.com/wemake-services/wemake-frontend-styleguide/tree/master/packages/stylelint-config-scss

module.exports = {
	rules: {
		'selector-class-pattern': [
			'^([a-z]|[A-Z])[a-zA-Z0-9]+$',
			{
				message:
					'Selector should be written in camelCase (selector-class-pattern)',
			},
		],
	},
};
