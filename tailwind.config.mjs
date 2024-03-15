/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				darkGreen: '#5c6e6c',
				lightGreen: '#a6b7aa',
				yellow: '#d2a96a',
				lightRed: '#d39d87',
				darkRed: '#bb7154',
				greenWp: '#25D366'
			}
		}
	},
	plugins: []
}
