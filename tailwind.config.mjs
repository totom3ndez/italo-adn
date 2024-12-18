/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'
import defaultTheme from 'tailwindcss/defaultTheme'
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
			},
			fontFamily: {
				sans: ['system-ui', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [animations]
}
