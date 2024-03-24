import { GH_REPO } from '../links'
import type { DefaultTheme } from 'vitepress'
import type { LocalSearchTranslations } from 'vitepress/types/local-search'

export const searchOptions = (
  translations?: Required<LocalSearchTranslations>
): { provider: 'local'; options?: DefaultTheme.LocalSearchOptions } => ({
  provider: 'local',
  options: { translations }
})

export const outline = (label?: string): DefaultTheme.Outline => ({
  label,
  level: 'deep'
})

export const editLink = (text?: string): DefaultTheme.EditLink => ({
  text,
  pattern: GH_REPO + '/edit/main/src/:path'
})

export const lastUpdated = (
  text?: string
): DefaultTheme.LastUpdatedOptions => ({
  text: text,
  // @ts-expect-error: timeago is not a valid option for dateStyle
  formatOptions: { dateStyle: 'timeago', forceLocale: true }
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
  docFooter: { prev: options.prev, next: options.next },
  outline: outline(options.outline),
  editLink: editLink(options.editLink),
  lastUpdated: lastUpdated(options.lastUpdated),
  search: searchOptions(options.search)
})
