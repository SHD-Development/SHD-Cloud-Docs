module.exports = {
	semi: false,
	singleQuote: true,
	trailingComma: "none",
	arrowParens: "avoid",
	overrides: [
		{
			files: "*.svg",
			options: {
				parser: "html",
			},
		},
	],
	proseWrap: "always", // printWidth line breaks in md/mdx
};
