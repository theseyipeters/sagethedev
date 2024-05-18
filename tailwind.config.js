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
				green: {
					1: "#93B1A6",
					2: "#183D3D",
				},
				blue: "#040D12",
				lightblue: "#DCF2FF",
				lightorange: "#DCDCDC",
			},
			borderWidth: {
				0.5: "0.5px",
				1: "1px",
				2: "2px",
				4: "4px",
			},

			backgroundImage: {
				radial:
					"radial-gradient(49.2% 49.18% at 49.43% 50.82%, #0b212d 0%, #040d12 100%)",
				radial2:
					"radial-gradient(49.2% 49.18% at 49.43% 50.82%, #a3c3d4 0%, #dcf2ff 100%)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
