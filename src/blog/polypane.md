---
title: Polypane
speaker: Kilian Valkhof
---

# {{ $frontmatter.title}}

The rule of least power: choose the least powerful language suitable for a given purpose.

- HTML > CSS > JS

Browser makers are listening to developers.

Once your learn something, you don't learn it again

- Alles blijft werken, maar misschien kan het nu beter

HTML kan al heel veel, maar we gebruiken het niet

- safari heeft ingebouwde switch `<input type="checkbox" switch />`
- datalist kan suggesties geven
- color picker
- smooth scroll
- scroll margin
- target pseudo class om interne link aan te geven
- sticky
- scroll-snap-\*
- accordion `<details><summary></summary></details>`
- dialog

Pas toevoegen als mensen kunnen aangeven of ze animatie willen en niet willen uitschakelen

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```
