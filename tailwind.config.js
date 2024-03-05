/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				grotta: ["Grotta-Trial", "sans-serif"],
			},
			colors: {
				white: "#cecece",
				green: "#93B1A6",
				blue: "#040D12",
			},
		},
	},
	plugins: [],
};
