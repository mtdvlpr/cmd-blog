---
title: Polypane
byline: Kilian's main topic was about how we need less and less JavaScript and more and more HTML and CSS. He also talked about Polypane, a browser for web developers that he created and maintains.
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

# {{ $frontmatter.title }}

Speaker: Kilian Valkhof

## Summary

{{ $frontmatter.byline }}

## Notes

> Choose the least powerful language suitable for a given purpose.

Kilian talked about the rule of least power (mentioned above). It means that you should use HTML if possible, then CSS, and then JavaScript. This is because HTML is the least powerful language, meaning it is the most efficient. Furthermore, it is already accessible and works out of the box. If something can't be done with HTML, you can move on to CSS. For example, when you want to have a switch instead of a checkbox. If that doesn't work, you can move on to JavaScript. This is the most powerful language, but it is also the heaviest and most error-prone.

> Once your learn something, you don't learn it again.

Kilian explained that once you learn how to create something in HTML, CSS and JavaScript, you don't have to learn it again. This is because the languages are backward-compatible. The very first website ever created still works today. But, just because it works, doesn't mean it can't be improved. The web is constantly evolving, and so should our websites.

Next, Kilian talked about several built-in HTML and CSS features that reduce the need for JavaScript:

- safari has a built-in switch `<input type="checkbox" switch />`
- datalist can give suggestions for input fields
- color picker
- smooth scroll
- scroll margin
- target pseudo class to style current internal link
- sticky
- scroll-snap-\*
- accordion `<details><summary></summary></details>`
- dialog

Kilian also talked about accessibility. For example, he mentioned that you can use the `prefers-reduced-motion` media query to check if the user prefers reduced motion. If they do, you can disable animations. This is important because some people get motion sickness from animations. You can use the following code to only enable animations if the user is not against it:

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

## Reflection

I really liked his talk! I learned that we can do a lot with HTML and CSS, and that we should use JavaScript as a last resort. I also learned about several built-in HTML and CSS features that I didn't know about. The dialog was especially an eye-opener for me. I didn't know HTML already supported dialogs. I will definitely use these in the future. I also learned about Polypane, a browser for web developers. I will definitely check it out. I think it will be very useful for me. I also learned about the `prefers-reduced-motion` media query. I will definitely use this in the future. I think it is very important to make websites accessible to everyone. I will definitely keep this in mind when I create websites in the future.
