export default {
	darkMode: "selector",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
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
