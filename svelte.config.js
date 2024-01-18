// import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})


	},
	preprocess: sveltePreprocess(),
};

export default config;