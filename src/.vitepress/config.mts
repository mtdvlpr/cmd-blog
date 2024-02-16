import { defineConfig } from '@lando/vitepress-theme-default-plus/config'
import { THEME_CONFIG, SIDEBAR, TOPBAR } from './../../constants'
import pkg from './../../package.json'

const base = '/cmd-blog/'

// https://vitepress.dev/reference/site-config
export default async () =>
  defineConfig({
    base,
    srcExclude: ['**/README.md'],
    lang: 'en-US',
    title: 'CMD Blog',
    description: pkg.description,
    head: [
      [
        'link',
        {
          rel: 'icon',
          href: `${base}favicon.svg`,
          type: 'image/png',
          sizes: 'any'
        }
      ]
    ],
    locales: { root: { label: 'English', lang: 'en' } },
    cleanUrls: true,
    lastUpdated: true,
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: TOPBAR,
      sidebar: SIDEBAR,
      ...THEME_CONFIG,
      contributors: false,
      autometa: {
        canonicalUrl: 'https://mtdvlpr.github.io/cmd-blog/',
        image: 'https://mtdvlpr.github.io/cmd-blog/favicon.svg'
      }
    }
  })
