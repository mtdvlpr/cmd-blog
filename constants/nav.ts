import { version } from './../package.json'
import { GH_REPO } from './links'
import type { DefaultTheme } from 'vitepress'

export const TOPBAR: DefaultTheme.NavItem[] = [
  { text: 'About', link: '/about/me', activeMatch: '/about' },
  { text: 'Blog', link: '/blog', activeMatch: '/blog' },
  {
    text: `v${version}`,
    items: [
      {
        text: 'Changelog',
        link: GH_REPO + '/blob/main/CHANGELOG.md'
      },
      {
        text: 'Report a bug',
        link: GH_REPO + '/issues/new'
      }
    ]
  }
]

export const SIDEBAR: DefaultTheme.Sidebar = [
  {
    text: 'About',
    base: '/about/',
    collapsed: false,
    items: [
      { text: 'About me', link: 'me' },
      { text: 'About the minor', link: 'minor' }
    ]
  }
]
