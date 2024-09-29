// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '大工生存手册',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				}
			},
			social: {
				github: 'https://github.com/NAOSI-DLUT/DUTManual',
			},
			sidebar: [
				{ label: '引言', slug: 'intro' },
				{
					label: '课程',
					autogenerate: { directory: 'course' },
				},
			],
		}),
	],
});
