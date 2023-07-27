const createTextToken = (
	fontSize: string,
	lineHeight: string,
	fontWeight: number
) => ({
	fontSize,
	lineHeight,
	fontWeight,
});

const createLightText = (fontSize: string, lineHeight: string) =>
	createTextToken(fontSize, lineHeight, 400);
const createSemiboldText = (fontSize: string, lineHeight: string) =>
	createTextToken(fontSize, lineHeight, 600);

const typography = {
	textStyles: {
		h1: createSemiboldText('60px', '72px'),
		h2: createSemiboldText('48px', '58px'),
		h3: createSemiboldText('32px', '38px'),
		h4: createSemiboldText('28px', '34px'),

		xl: createLightText('32px', '40px'),
		lg: createLightText('28px', '34px'),
		md: createLightText('24px', '30px'),
		sm: createLightText('20px', '26px'),
		xs: createLightText('16px', '22px'),
	},
};

export default typography;
