import fg from 'fast-glob'
import matter from 'gray-matter'
import type { DefaultTheme } from 'vitepress/types/default-theme'

export const getNavItems = (path: string): DefaultTheme.SidebarItem[] => {
  const navItems: (DefaultTheme.SidebarItem & { order: number })[] = []
  const files = fg.sync([`**/src/${path}/*.md`])
  files.forEach((file) => {
    const { data } = matter.read(file)
    navItems.push({
      text: data.title,
      link: file.replace('src', '').replace('.md', '').replace('index', ''),
      order: data.order ?? 99,
    })
  })
  return navItems.sort((a, b) => a.order - b.order)
}
