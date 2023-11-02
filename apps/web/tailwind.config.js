const { createGlobPatternsForDependencies } = require("@nx/next/tailwind");
const { join } = require("path");

module.exports = {
	presets: [require("../../tailwind-workspace-preset.js")],
	content: [
		join(__dirname, "app/**/*.{js,ts,jsx,tsx}"),
		join(__dirname, "core/**/*.{js,ts,jsx,tsx}"),
		...createGlobPatternsForDependencies(__dirname),
	],
};
