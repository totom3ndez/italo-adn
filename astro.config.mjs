import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

import netlify from '@astrojs/netlify'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), react()],
	output: 'server',
	adapter: netlify()
})
