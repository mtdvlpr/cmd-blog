import { version } from './../package.json'
import { GH_REPO } from './links'
import type { DefaultTheme } from 'vitepress'
import { getNavItems } from './../scripts/fileFinder'

export const TOPBAR: DefaultTheme.NavItem[] = [
  { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
  {
    text: `v${version}`,
    items: [
      {
        text: 'Changelog',
        link: GH_REPO + '/blob/main/CHANGELOG.md',
      },
      {
        text: 'Report a bug',
        link: GH_REPO + '/issues/new',
      },
    ],
  },
]

export const SIDEBAR: DefaultTheme.Sidebar = [
  {
    text: 'Blog',
    collapsed: false,
    items: getNavItems('blog'),
  },
]
