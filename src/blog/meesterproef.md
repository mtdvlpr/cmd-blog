---
title: Meesterproef
byline: My process and reflection on the Meesterproef.
tags:
  - html
  - css
  - javascript
author:
  name: Manoah
  link: /about/me
  pic: https://avatars.githubusercontent.com/u/46671786
blog: true
---

# {{ $frontmatter.title }}

## Summary

{{ $frontmatter.byline }}

## Product Biography

In the product biography, I will document the process, iterations, way of working and planning of the Meesterproef for each week. Tristan, Quinten and I will work together on the Meesterproef. We will work on the Anno Amsterdam project.

### Week 1

#### Preparation

We started the week with preparing for the briefing with the client. We went through the assignment description and created an initial MoSCoW analysis. We also created a list of questions for the client and started researching possible solutions for the assignment. The client described a native app for Android and IOS, so I immediately started researching how we could create a native app using web technologies. I found Quasar, a Vue.js framework that allows you to create a native app using Vue.js. With one code base, we could create a PWA, android app and IOS app.

We have divided the roles within the team. I will be mainly responsible for writing the notes for every meeting and discussion. Tristan will oversee the planning and make sure we stay on track. Quinten will be responsible for the contact with the client. We will all work on the design and code together.

We talked with our coach, Victor, and he encouraged us to focus on the PWA and not on creating a native app. He proposed to use Astro or SvelteKit and discouraged using React. He was not against Vue/Nuxt, because Vue is much closer to the Browser APIs than React and is not included in the build output.

#### Briefing

During the briefing, we asked the client all our questions and got a better understanding of the assignment. The client was very open and gave us a lot of information. We convinced him that a PWA would be a better solution than a native app. We discussed our MoSCoW analysis and adjusted it based on the client's feedback. We also discussed the clickable prototype that was created by the client. We decided to use the prototype as a reference and not as a final design and the client agreed. The client showed us the "backoffice" that was created by other students. It is a CMS to store the different buildings. The client told us that one of the students that created the "backoffice" is still available for questions, so we contacted him and set up an online meeting for the very next day.

#### Code Review

I had a code review with Victor. I told him about the briefing with the client and mentioned we were currently researching possible tech stacks to use. We were considering Nuxt, Astro and SvelteKit. I thought Astro would not be a good fit and Nuxt and SvelteKit were similar. Because I'm already familiar with Nuxt, I favored Nuxt. Victor agreed that Astro would not be a good fit, but thought SvelteKit might be a nice choice, so that I'd learn something new.

I also explained that we're currently not planning to implement the AR feature, but that we're going to research it on the side. Victor suggested to create a PoC for the AR feature, next to the actual product.
naast product, poc voor AR

Afterwards, we agreed on a framework to use. We chose SvelteKit, because it's new for all of us and the tutorials are very clear. We started doing the SvelteKit tutorials to get familiar with it.

We had a meeting with one of the students who created the "backoffice" for the client, Sebastian. He explained briefly what had been made. We asked him some questions and he was very helpful. He was under the impression that we were going to create a new front-end for the "backoffice" instead of a new app. We explained that we were going to create a new app and that we would use the "backoffice" as a CMS. He was surprised, but he was still willing to help us if we had any questions. He did explain that the current front-end of the "backoffice" was not really functional and needed a lot fo work for the client to be able to use it. We decided to extend the scope of the project and create a new front-end for the "backoffice" as well. Sebastian agreed to make the back-end of the "backoffice" available for us to use.

#### Design Review

I had a design review with Tamara. I showed her the clickable prototype that the client provided and explained that we were going to use it as a reference, but not as a final design. Tamara suggested to test the prototype with actual users to see if it's usable and change it based on the results. One of my learning goals is to improve my creative design skills, so Tamara also suggested to create a moodboard with different styles to get inspiration from. We talked about the internationalization of the app. The app is intended for both Dutch people in Amsterdam and tourists. The CMS only offers one language thought, so we have to come up with a solution for that. Tamara suggested to translate it dynamically using Google Translate or a similar service.

#### Client Meeting

We had a meeting with the client to discuss the progress. We talked about our plan to also work on the "backoffice" and discussed the agreements we've made with Sebastian. We've discussed the possibility of internationalization and that it depends on wether Sebastian can make it available in the back-end. The client mentioned we could reach out to another student, who was responsible for the iOS app. We discussed the domains and hosting for the final product.

The following day, I focused on the structure of the app. I created a new SvelteKit project and implemented the basic code structure, routing, meta tags and internationalization.

### Week 2

Soon.

#### Code Review

Soon.

#### Design Review

Soon.

### Week 3

Soon.

#### Code Review

Soon.

#### Design Review

Soon.

### Week 4

Soon.

#### Code Review

Soon.

#### Design Review

Soon.

### Week 5

Soon.

#### Code Review

Soon.

#### Design Review

Soon.

### Week 6

Soon.

#### Code Review

Soon.

#### Design Review

Soon.

## Reflection

Soon.
