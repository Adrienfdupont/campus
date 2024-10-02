/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#06725b',
				'secondary': '#faf7e8',
			},
			fontFamily: {
				arrow: ['Arrow'],
			},
		},
	},
	plugins: [],
}
