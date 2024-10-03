/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#06725b',
				secondary: '#faf7e8',
				footer: '#222222',
			},
			fontFamily: {
				arrow: ['Arrow'],
			},
			animation: {
				'text-appearance': 'text-appearance 2s ease-in-out forwards',
				'image-appearance': 'image-appearance 1s ease-in-out forwards',
			},
			keyframes: {
				'text-appearance': {
					from: { opacity: 0 },
					to: { opacity: 0.7 }
				},
				'image-appearance': {
					from: { opacity: 0 },
					to: { opacity: 1 }
				}
			}
		},
	},
	plugins: [],
}
