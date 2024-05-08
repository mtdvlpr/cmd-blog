---
title: 9elements
byline: Nils talked about his work for 9elements.
tags:
  - html
  - css
  - weekly nerd
author:
  name: Manoah
  link: /about/me
  pic: https://avatars.githubusercontent.com/u/46671786
blog: true
---

# {{ $frontmatter.title }}

Speaker: Nils Binder

## Summary

{{ $frontmatter.byline }}

## Notes

3 different units:

- communication design
  - corproate identity, logo, branding (non-coding designers)
- product development
  - big web, app, software development
- web development
  - small to medium websites

20 years ago, 3 people wanted to start a company, 3elements was already taken.

wrapper makes sure the content doesn't get to big, adds some padding and margins. And might center the content.

Old:

```css
.wrapper {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1.5 rem;
}
```

New:

```css
.wrapper {
  width: min(100% - 3rem, 75rem);
  margin-inline: auto;
}
```

One-liner:

```css
.wrapper {
  margin-inline: max(1.5rem, ((100% - 75rem) / 2));
}
```

`--wrapper-max` is a CSS variable that can be used to set the max-width of the wrapper.

Currently designers use a lot of white-space, but why? This comes from the time of Photoshop

Currently, we have Figma, which is much closer to the CSS solution.

> The control which designers know in the print medium, and often desire in the web medium, is simply a function of the limitation of the printed page. We should embrace the fact that the web doesn’t have the same constraints, and design for this flexibility.

~ John Allsopp, A Dao of Web Design - 200

Forget the idea that you always need to decide how something should look. Instead, you should let the browser decide how something should look.

Units in Figma: `px`, `%`, `rem`
Units in CSS: `px`, `%`, `rem`, `ch`, `ex`, `em`, `vw`, `vh`, `vmin`, `vmax`, etc.

The optional column technique

```css
.fancy-text {
  display: grid;
  grid-template-columns: 2fr 3fr auto 1fr;
}

h1 {
  grid-column: 2 / 4;
}
p {
  grid-column: 3 / 4;
}
```

Use the space that you have, and don't be afraid to use it.

## Reflection

Nils' talk was very interesting.
