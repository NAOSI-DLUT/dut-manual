// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://man.naosi.org',
	integrations: [
		starlight({
			title: 'DUTManual',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				}
			},
			social: {
				github: 'https://github.com/NAOSI-DLUT/DUTManual',
			},
			sidebar: [{
				label: '引言',
				slug: 'intro'
			}, {
				label: '课程',
				autogenerate: { directory: 'course' },
			}, {
				label: "生活",
				autogenerate: { directory: 'life' },
			}, {
				label: '去向',
				autogenerate: { directory: 'destination' },
			}],
		}),
	],
});
