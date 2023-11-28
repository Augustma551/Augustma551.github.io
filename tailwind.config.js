/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/*.{html,js}'],
	theme: {
		extend: {
			borderRadius: {
				extraLarge:"20rem"
			}
		},
	},
	plugins: [],
};
