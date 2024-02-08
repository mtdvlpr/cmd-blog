import { GH_REPO } from './links'
import { editLink, lastUpdated, searchOptions } from './locale/base'

import type { DefaultTheme } from 'vitepress'

export const THEME_CONFIG: DefaultTheme.Config = {
  externalLinkIcon: true,
  logo: '/logo.png',
  editLink: editLink(),
  lastUpdated: lastUpdated(),
  search: searchOptions(),
  socialLinks: [{ icon: 'github', link: GH_REPO, ariaLabel: 'GitHub' }],
}
