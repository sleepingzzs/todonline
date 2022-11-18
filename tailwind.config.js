/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				xsmPhone: {
					max: "305",
				},
				smPhone: {
					max: "368px",
				},
				phone: {
					max: "727px",
				},
				tab: {
					max: "1028px",
				},
			},
			fontFamily: {
				poppins: "Poppins",
			},
		},
	},
	plugins: [],
};
