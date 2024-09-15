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
					light: "#E2B5A2",
					DEFAULT: "#DDA892",
					dark: "#D89B83",
				},
				tertiary: {
					light: "#79DDF6",
					DEFAULT: "#79DDF6",
					dark: "#66D8F4",
				},
			},
			fontFamily: {
				sans: ["'Clash Display'", "sans-serif"],
			},
		},
	},
	plugins: [],
};
