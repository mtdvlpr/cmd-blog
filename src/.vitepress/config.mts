import { THEME_CONFIG, SIDEBAR, TOPBAR } from './../../constants'
import pkg from './../../package.json'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default async () =>
  defineConfig({
    base: '/cmd-blog/',
    srcExclude: ['**/README.md'],
    lang: 'en-US',
    title: 'CMD Blog',
    description: pkg.description,
    head: [
      [
        'link',
        { rel: 'icon', href: '/favicon.svg', type: 'image/png', sizes: 'any' },
      ],
    ],
    locales: { root: { label: 'English', lang: 'en' } },
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: TOPBAR,
      sidebar: SIDEBAR,
      ...THEME_CONFIG,
    },
  })
