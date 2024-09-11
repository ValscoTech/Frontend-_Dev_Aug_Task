export default {
	darkMode: "selector",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					light: "#BB9ED1",
					DEFAULT: "#9E74BE",
					dark: "#9466B7",
				},
				secondary: {
					light: "#04099F",
					DEFAULT: "#03045E",
					dark: "#02044F",
				},
				tertiary: {
					light: "#BADFF3",
					DEFAULT: "#A8D7F0",
					dark: "#ADCEFF",
				},
			},
			fontFamily: {
				sans: ["'Clash Display'", "sans-serif"],
			},
		},
	},
	plugins: [],
};
