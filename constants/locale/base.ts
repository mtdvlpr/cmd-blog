import { GH_REPO } from '../links'
import type { DefaultTheme } from 'vitepress'
import type { LocalSearchTranslations } from 'vitepress/types/local-search'

export const searchOptions = (
  translations?: Required<LocalSearchTranslations>
): { provider: 'local'; options?: DefaultTheme.LocalSearchOptions } => ({
  provider: 'local',
  options: { translations }
})

export const editLink = (text?: string): DefaultTheme.EditLink => ({
  text,
  pattern: GH_REPO + '/-/edit/main/src/:path'
})

export const lastUpdated = (
  text?: string
): DefaultTheme.LastUpdatedOptions => ({
  text,
  formatOptions: { dateStyle: 'medium', forceLocale: true }
})

type LocaleOptions = Required<
  Pick<
    DefaultTheme.Config,
    | 'darkModeSwitchLabel'
    | 'lightModeSwitchTitle'
    | 'darkModeSwitchTitle'
    | 'returnToTopLabel'
  >
> & {
  outline: string
  prev: string
  next: string
  editLink: string
  lastUpdated: string
  search: Required<LocalSearchTranslations>
}

export const localOptions = (options: LocaleOptions): DefaultTheme.Config => ({
  darkModeSwitchLabel: options.darkModeSwitchLabel,
  darkModeSwitchTitle: options.darkModeSwitchTitle,
  lightModeSwitchTitle: options.lightModeSwitchTitle,
  returnToTopLabel: options.returnToTopLabel,
  outline: { label: options.outline },
  docFooter: { prev: options.prev, next: options.next },
  editLink: editLink(options.editLink),
  lastUpdated: lastUpdated(options.lastUpdated),
  search: searchOptions(options.search)
})
