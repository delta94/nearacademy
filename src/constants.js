const constants = {
	repoName: 'onthi247',
};

export const appColors = {
	primary: '#ffc600',
	primaryDark: '#fc9e31',
	primaryLight: '#ffd099',
	secondary: '#2e293b',
	tertiary: '#c9e167',
	greyLight1: '#f5f5f5',
	greyLight2: '#eee',
	greyLight3: '#dddddd',
	greyDark1: '#999',
	greyDark2: '#777',
	greyDark3: '#585858',
	white: '#fff',
	black: '#00',
};

export const mixins = {
	// https://stackoverflow.com/a/16878602/9449426
	// somewhat mitigate blurried text when applying scaling transform
	applyScale: (scale) => `
	backface-visibility: hidden;
	transform: translateZ(0);
	-webkit-font-smoothing: subpixel-antialiased;
	${scale}
	`,
};

export const helperStyles = {
	marginRightTiny: '{ margin-right: .5rem; }',
	marginLeftTiny: '{ margin-left: .5rem; }',
	marginTopTiny: '{ margin-top: .5rem; }',
	marginBottomTiny: '{ margin-bottom: .5rem; }',
	marginRightSmall: '{ margin-right: 1rem; }',
	marginLeftSmall: '{ margin-left: 1rem; }',
	marginTopSmall: '{ margin-top: 1rem; }',
	marginBottomSmall: '{ margin-bottom: 1rem; }',
	marginRightMedium: '{ margin-right: 2rem; }',
	marginLeftMedium: '{ margin-left: 2rem; }',
	marginTopMedium: '{ margin-top: 2rem; }',
	marginBottomMedium: '{ margin-bottom: 2rem; }',
	marginRightLarge: '{ margin-right: 4rem; }',
	marginLeftLarge: '{ margin-left: 4rem; }',
	marginTopLarge: '{ margin-top: 4rem; }',
	marginBottomLarge: '{ margin-bottom: 4rem; }',
	marginRightHuge: '{ margin-right: 8rem; }',
	marginLeftHuge: '{ margin-left: 8rem; }',
	marginTopHuge: '{ margin-top: 8rem; }',
	marginBottomHuge: '{ margin-bottom: 8rem; }',
	marginBottom0: '{ margin-bottom: 0; }',
	bold: '{ font-weight: 600; }',
};

export const theme = {
	fontColor: appColors.greyDark2,
	shadowDark: '0 2rem 4rem rgba(0, 0, 0, 0.3)',
	shadowLight: '0 2rem 5rem rgba(0, 0, 0, 0.06)',
	borderRound: '.6rem',
	cardPadding: '1.25rem 1.5rem',
	pageContainerWidth: '99rem',
	primaryFont: '"Open Sans", sans-serif',
	displayFont: '"Noto Sans", sans-serif',
};

export default constants;
