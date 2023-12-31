// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const { version } = require('../packages/react-hooks/package.json')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '@utiliser/react-hooks',
	tagline: 'The simple react hooks.',
	baseUrl: '/utiliser/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	url: 'https://utiliser.github.io',
	organizationName: 'utiliser', // Usually your GitHub org/user name.
	projectName: 'react-hooks', // Usually your repo name.
	trailingSlash: false,
	deploymentBranch: 'deployment',

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/utiliser/utiliser',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: '@utiliser/react-hooks',
				items: [
					{
						type: 'doc',
						position: 'left',
						label: 'Docs',
						docId: 'intro',
					},
					{
						href: `https://www.npmjs.com/package/@utiliser/react-hooks/v/${version}`,
						position: 'right',
						label: `v${version}`,
					},
					{
						href: 'https://www.npmjs.com/package/@utiliser/react-hooks',
						position: 'right',
						label: 'npm',
					},
					{
						href: 'https://github.com/utiliser/utiliser',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config
