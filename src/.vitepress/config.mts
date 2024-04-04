import { defineConfig } from '@lando/vitepress-theme-default-plus/config'
import { THEME_CONFIG, SIDEBAR, TOPBAR, CANONICAL_URL } from './../../constants'
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
          href: base + 'favicon.svg',
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
      // https://vitepress-theme-default-plus.lando.dev/config/config.html
      contributors: {
        merge: 'name',
        debotify: true,
        include: [
          {
            avatar: 'https://avatars.githubusercontent.com/u/46671786',
            name: 'Manoah Tervoort',
            email: '149895ja@gmail.com',
            title: 'Author',
            links: [{ icon: 'github', link: 'https://github.com/mtdvlpr' }],
            mergeOnly: true,
            mergeWith: '46671786+mtdvlpr@users.noreply.github.com'
          }
        ]
      },
      collections: { post: { frontmatter: { aside: true } } },
      autometa: {
        canonicalUrl: CANONICAL_URL,
        image: CANONICAL_URL + 'favicon.svg'
      }
    }
  })
