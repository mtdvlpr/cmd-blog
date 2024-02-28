---
title: Bakken & Bæck
byline: Fenna's main topic was about accessibility and how to make websites more accessible. She also talked about her work at Bakken & Bæck and the technologies she uses.
tags:
  - html
  - css
  - javascript
  - accessibility
  - weekly nerd
author:
  name: Manoah
  link: /about/me
  pic: https://avatars.githubusercontent.com/u/46671786
blog: true
---

# {{ $frontmatter.title}}

Speaker: Fenna de Wilde

## Summary

{{ $frontmatter.byline }}

## Notes

Fenna talked about the importance of accessibility. She mentioned that we should make websites accessible to everyone. This is important because everyone should be able to use the web. She also talked about her work at Bakken & Bæck. She mentioned that she uses the following technologies:

- Language: Next.js + TypeScript
- Deployment: Vercel
- CMS: Sanity

Fenna went on to talk about several accessibility features:

### The focus state

You can use the `:focus` and `:focus-visible` pseudo-classes to style the focus state. This is important because some people can't use a mouse. They use a keyboard or a screen reader and they need to know which element has the focus. You can use the following code to style the focus state:

```css
button:focus,
button:focus-visible {
  outline: 2px solid blue;
}
```

### ARIA labels

You can use the `aria-label` attribute to give an element a label. This is important because some people can't see the screen. They use a screen reader and they need to know what an element does. This is especially important for icon buttons and links with only an image. With an icon, it's clear what a button does, but a screen reader can't see the icon. You can use the following code to make the button accessible:

```html
<button aria-label="close menu">
  <img src="close.svg" alt="close menu" />
</button>
```

The `aria-controls` and `aria-expanded` attributes. You can use the `aria-controls` attribute to link a button to another element. You can use the `aria-expanded` attribute to indicate if the linked element is expanded or not. This is particularly useful for menus, for example.

The `aria-live` and `aria-atomic` attributes. You can use the `aria-live` attribute to indicate if an element should be announced by a screen reader when it updates. You can use the `aria-atomic` attribute to indicate if the whole content should be read or only the updated part.

### Accessible carousels

Accessible carousals are very difficult to make and therefor deserved their own section. Fenna mentioned the following tips to make a carousel accessible:

The carousel container should have the following attributes:

- `role="region"` or use the `section` element
- `aria-roledescription="carousel"`
- `aria-labelledby` or `aria-label` (depending on whether there's a heading or not)

The carousel slides should have the following attributes:

- `role="group"`
- `aria-roledescription="slide"`
- `aria-hidden="true"` for non-active slides
- `tabindex="-1"` for non-active slides

You shouldn't use list items for carousels, because screenreaders will announce the number of list items, which does not match the number of active slides.

The carousel controls should have the following attributes:

- `role="group"`
- `aria-label="slide controls"`
- `aria-disabled="true"` for disabled controls

The controls should go before the carousel, so that screenreaders will announce them first.

### Typography

The typography of a website should also be accessible. The color contrast should be at least 4,5:1. You can use Figma or Lighthouse to check the color contrast. The font size should be at least 16px. The maximum line length should be 50-75 characters. You can use `max-width: 60ch` to achieve this.

## Reflection

I was already familiar with some of the accessibility features Fenna mentioned, because I've done a project for The Accessibility Foundation for my previous UXD minor, but I learned a some new things as well. I didn't know about the `aria-live` and `aria-atomic` attributes. I will definitely use these in the future. I also did not know how to create accessible carousals. I didn't realize how much work it is to make a carousel accessible, but I do think that it is worth it. The web should be accessible to everyone and the target audience is much larger than most realize. You could break your arms and not be able to use a mouse for a while, or you could be in a very bright environment and not be able to see the screen.
