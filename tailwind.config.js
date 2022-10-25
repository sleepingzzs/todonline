/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				lg: {
					max: "1200px",
				},
			},
			fontFamily: {
				poppins: "Poppins",
			},
		},
	},
	plugins: [],
};
