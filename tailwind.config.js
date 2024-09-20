export default {
	darkMode: "selector",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: {
					light: "#F5F5F5",
					DEFAULT: "#121212",
					dark: "#000000",
				},
				primary: {
					light: "#BC96ED",
					DEFAULT: "#B185EA",
					dark: "#A673E7",
				},
				secondary: {
					light: "#5673DC",
					DEFAULT: "#3457D5",
					dark: "#2A4DCB",
				},
				tertiary: {
					light: "#79DDF6",
					DEFAULT: "#79DDF6",
					dark: "#66D8F4",
				},
			},
			fontFamily: {
				sans: ["'Clash Display'", "sans-serif"],
				popins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
