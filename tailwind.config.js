/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {

		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		extend: {
			colors: {
				LimeGreen: "hsl(163, 72%, 41%)",
				BrightRed: "hsl(356, 69%, 56%)",
	
				Facebook: "hsl(208, 92%, 53%)",
				Twitter: "hsl(203, 89%, 53%)",
				InstagramOne: "hsl(37, 97%, 70%)",
				InstagramTwo: "hsl(329, 70%, 58%)",
				YouTube: "hsl(348, 97%, 39%)",
	
				// #### Dark Theme
	
				darkTogColOne: "hsl(210, 78%, 56%)",
				darkTogColTwo: "hsl(146, 68%, 55%)",
	
				// #### Light Theme
	
				lightTogCol: "hsl(230, 22%, 74%)",
	
				// ### Neutral
	
				// #### Dark Theme
	
				darkBg: "hsl(230, 17%, 14%)",
				darkTopBG: "hsl(232, 19%, 15%)",
				darkCardBG: "hsl(228, 28%, 20%)",
				darkCardhoverBG: "hsl(228, 40%, 23%);",
				darkGrayText: "hsl(228, 34%, 66%)",
				darkMainTextCol: "hsl(0, 0%, 100%)",
	
				// #### Light Theme
	
				lightBG: "hsl(0, 0%, 100%)",
				lightTopBG: "hsl(225, 100%, 98%)",
				lightCardBG: "hsl(227, 47%, 96%)",
				lightCardhoverBG: 'hsl(232, 33% 91%)',
				lightGrayText: "hsl(228, 12%, 44%)",
				lightMianTextCol: "hsl(230, 17%, 14%)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
