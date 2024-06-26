---
title: Meesterproef
byline: My process and reflection on the Meesterproef.
tags:
  - html
  - css
  - javascript
  - course
author:
  name: Manoah
  link: /about/me
  pic: https://avatars.githubusercontent.com/u/46671786
blog: true
---

# {{ $frontmatter.title }}

## Summary

{{ $frontmatter.byline }}

## Learning Goals

### Design

I'd like to improve my design skills during the meesterproef and come up with a good design for the web app. Specifically, I want to be able to come up with creative solutions to visualize functionalities. I'll work on this by brainstorming ideas, experimenting with different designs and getting feedback on them. I'll be happy if the client is happy with the design.

### Client communication

I'd also like to learn how to work with a real client. I want to be able to effectively translate the user needs to requirements and an actual product. I will try to do this by asking the right questions, listening to the client and making sure I understand their needs. I'll be happy if the client is happy with the end result.

### Server-rendered JavaScript

Furthermore, I'd like to continue working with server-rendered JavaScript and improve on my existing knowledge from the API course. I will do this by experimenting with more advanced server-rendered JavaScript functionalities and by implementing them in the web app. I'll be happy if the web app works well.

## Product Biography

In the product biography, I will document the process, iterations, way of working and planning of the Meesterproef for each week. Tristan, Quinten and I will work together on the Meesterproef. We will work on the Anno Amsterdam project.

### Week 1

We started the week with preparing for the briefing with the client.We started the week with preparing for the briefing with the client.

#### Preparation

We went through the assignment description and created an initial MoSCoW analysis. We also created a list of questions for the client and started researching possible solutions for the assignment. The client described a native app for Android and IOS, so I immediately started researching how we could create a native app using web technologies. I found Quasar, a Vue.js framework that allows you to create a native app using Vue.js. With one code base, we could create a PWA, android app and IOS app.

We have divided the roles within the team. I will be mainly responsible for writing the notes for every meeting and discussion. Tristan will oversee the planning and make sure we stay on track. Quinten will be responsible for the contact with the client. We will all work on the design and code together.

We talked with our coach, Victor, and he encouraged us to focus on the PWA and not on creating a native app. He proposed to use Astro or SvelteKit and discouraged using React. He was not against Vue/Nuxt, because Vue is much closer to the Browser APIs than React and is not included in the build output.

#### Briefing

During the briefing, we asked the client all our questions and got a better understanding of the assignment. The client was very open and gave us a lot of information. We convinced him that a PWA would be a better solution than a native app. We discussed our MoSCoW analysis and adjusted it based on the client's feedback. We also discussed the clickable prototype that was created by the client. We decided to use the prototype as a reference and not as a final design and the client agreed. The client showed us the "backoffice" that was created by other students. It is a CMS to store the different buildings. The client told us that one of the students that created the "backoffice" is still available for questions, so we contacted him and set up an online meeting for the very next day.

#### Code Review

I had a code review with Victor. I told him about the briefing with the client and mentioned we were currently researching possible tech stacks to use. We were considering Nuxt, Astro and SvelteKit. I thought Astro would not be a good fit and Nuxt and SvelteKit were similar. Because I'm already familiar with Nuxt, I favored Nuxt. Victor agreed that Astro would not be a good fit, but thought SvelteKit might be a nice choice, so that I'd learn something new.

I also explained that we're currently not planning to implement the AR feature, but that we're going to research it on the side. Victor suggested to create a PoC for the AR feature, next to the actual product.
naast product, poc voor AR

Afterwards, we agreed on a framework to use. We chose [SvelteKit](https://kit.svelte.dev/), because it's new for all of us and the tutorials are very clear. We started doing the SvelteKit tutorials to get familiar with it.

We had a meeting with one of the students who created the "backoffice" for the client, Sebastian. He explained briefly what had been made. We asked him some questions and he was very helpful. He was under the impression that we were going to create a new front-end for the "backoffice" instead of a new app. We explained that we were going to create a new app and that we would use the "backoffice" as a CMS. He was surprised, but he was still willing to help us if we had any questions. He did explain that the current front-end of the "backoffice" was not really functional and needed a lot fo work for the client to be able to use it. We decided to extend the scope of the project and create a new front-end for the "backoffice" as well. Sebastian agreed to make the back-end of the "backoffice" available for us to use.

#### Design Review

I had a design review with Tamara. I showed her the [clickable prototype](https://www.figma.com/proto/sgxBwUCgij0C1eRSYI93jf/Anno-Amsterdam?node-id=1906-2261&t=WrW5JsSwykwd6RgM-1&scaling=scale-down&content-scaling=fixed&page-id=1712%3A106&starting-point-node-id=1906%3A2261&show-proto-sidebar=1) that the client provided and explained that we were going to use it as a reference, but not as a final design. Tamara suggested to test the prototype with actual users to see if it's usable and change it based on the results. One of my learning goals is to improve my creative design skills, so Tamara also suggested to create a moodboard with different styles to get inspiration from. We talked about the internationalization of the app. The app is intended for both Dutch people in Amsterdam and tourists. The CMS only offers one language thought, so we have to come up with a solution for that. Tamara suggested to translate it dynamically using Google Translate or a similar service.

#### Client Meeting

We had a meeting with the client to discuss the progress. We talked about our plan to also work on the "backoffice" and discussed the agreements we've made with Sebastian. We've discussed the possibility of internationalization and that it depends on wether Sebastian can make it available in the back-end. The client mentioned we could reach out to another student, who was responsible for the iOS app. We discussed the domains and hosting for the final product.

The following day, I focused on the structure of the app. I created a new SvelteKit project and implemented the basic code structure, routing, meta tags and internationalization.

### Week 2

Tuesday I started creating the base layout of the application, using [Tailwind](https://tailwindcss.com/) and [Skeleton.dev](https://www.skeleton.dev/) for faster development. I implemented the header, bottom navigation and a dark/light mode.

#### Code Review

I had a code review with Cyd. I showed her my work on the base layout and she thought I was on a good track. She suggested I document more of my code to make it clear what it does and how it works.

![First setup of base layout](https://github.com/mtdvlpr/cmd-blog/assets/46671786/004dda57-c437-4642-a126-e5d39f404f44)

Afterwards, we had a talk with our coach, Victor. We discussed wether we should be moving forward with Tailwind and Skeleton.dev and came to the conclusion to not use it. I started reverting my work.

I created a new base layout with some basic styling.

![New base layout](https://github.com/mtdvlpr/cmd-blog/assets/46671786/0a50736f-d750-43ff-a3ec-94a1ce9abdcd)

#### Design Review

I had a design review with Vasilis. I showed him the new base layout and mentioned our descision to move away from Tailwind and Skeleton.dev. Vasilis agreed with the descision and thought we would learn more by writing our own CSS.

I started working on the list view of the buildings.

#### Client Meeting

We had a meeting with the client to discuss the progress. We showed the client the base layout and he was excited about it. We also set up the domains and hosting for the final product.

Afterwards, I continued working on the list view.

![List view](https://github.com/mtdvlpr/cmd-blog/assets/46671786/68d275b7-f487-41c7-867e-a803d81b0d7a)

### Week 3

We had a meeting with Victor. We did a retrospective of the past weeks and discussed what we should stop, start and continue doing. We agreed that the communication with each other and the client was going excellent. We also agreed that we should start working on the final documentation and prevent increasing the scope of the project (again).

I continued working on the list view and a popup to ask for the user's location. I also worked on the detail page.

::: half
![Detail page](https://github.com/mtdvlpr/cmd-blog/assets/46671786/98c3d6c9-0fb5-4deb-b2f2-2c3c2c7cfd04)
:::

::: half
![Location popup](https://github.com/mtdvlpr/cmd-blog/assets/46671786/88b8106d-4b22-45e4-afda-2d6babc84c31)
:::

We had another meeting with Sebastian to discuss the backend of the "backoffice". He showed us the API and its documentation and we discussed how we could use it in our app.

### Week 4

We had another meeting with Victor, and did another retrospective. Besides the things from last week, we also agreed that we should start experimenting more with the design and the AR feature.

I worked on the arrow functionality where an arrow would point to where the building is located, based on its location and the location of the user.

::: half
![Detail page with arrow functionality](https://github.com/mtdvlpr/cmd-blog/assets/46671786/8e9969de-a372-4fed-93a2-5d78fbca6221)
:::

We had a virtual meeting with Sebastian and the client to discuss the progress. We showed our work on the map and list view and the "backoffice". The client was very happy with the progress. We discussed with Sebastian what still needed to be implemented in the API and talked about possible ways to improve the map view.

### Week 5

We talked with Victor again and discussed the progess. I showed him my work on the arrow functionality and the experimentation I did with the AR function.

The arrow was pointing to the building, but it assumes that the user is facing north. I started working on a way to calculate the direction the user is facing and adjust the arrow accordingly. I made it work using the device orientation API, but only if the user is holding the phone vertically.

Because we still didn't have a working API, I decided to create a mock database and API for us to talk to, so that we could continue working on the app, and once the real API was available, we could easily switch to that.

#### Code Review

I had a code review with Marten. I showed him the arrow functionality and the code behind it. He though it was cool, and agreed I should also make it work when the user is holding the phone horizontally. He also suggested I should document my code more.

#### Design Review

I had a design review with Sanne. I showed the entire app and got some valueable feedback on the design. Besides the obvious things, like the unstyled back button, I received the feedback that the title on the detail view did not match the title on the list view and should be more prominent. The text on the map view was also interfering with the colors of the buildings.

The rest of the week, I focused on implementing the sorting and search functionality. I had to implement this functionality in the list view, in the API wrapper, the mock API and the mock database.

### Week 6

I started this week being ill, so I could not be there for the last session with Victor. I did meet with the team and I finalized the sorting and search functionality. We were now sure that we would not receive a working API, so I started working on a mongoDB alternative. I could not get the search functionality to work with mongoDB, unfortunately.

#### Client Presentation

We had the final presentation with the client and Victor was also present. We prepared a presentation and showed the end result. Both the web app and the "backoffice" were working. The client was very happy with the result.

::: half
![List view](https://github.com/mtdvlpr/cmd-blog/assets/46671786/e17945eb-d6c0-4719-bbcf-9c26ec3f32ac)
:::

::: half
![Detail page](https://github.com/mtdvlpr/cmd-blog/assets/46671786/6b830082-0797-4e7d-9b77-e8ebcea92d07)
:::

## Reflection

I am very pleased with the entire process. We had a great team, a great coach and a great client. Especially the communication with the client was excellent. We had a lot of freedom in the project and the client was very open to our ideas. I am also very happy with the end result. The app looks great and works well. I am especially proud of the arrow functionality. I learned a lot during the project. I learned how to work with a client, how to work in a team and how to work with a new technology. I am very happy with the choice of SvelteKit. It was a great learning experience and I will definitely use it in future projects.

It was a shame that we did not receive a working API and had to come up with a quick and dirty solution to continue working on the app. I would have liked to work with a real API and database, so that the "backoffice" and the web app would actually be connected.

All in all, I thought it was a great project!

### Learning Goals

I wanted to work on three things: design, client communication and server-rendered JavaScript. I think I did well on all three.

#### Design

I am not completely satisfied with this learning goal. I got stuck too much in the basic design. I do believe I improved my design skills during the project. I started the project by using a UI library, but moved away from it to write my own CSS. This was a great learning experience. I also experimented with different designs. For example, for the list view, I started with a grid view and I also made a vertical version of the grid card for smaller screens. After some feedback, I changed it to a list view.

#### Client communication

The client communication went very smoothly. Right from the start, we had a good connection with the client. I asked the right questions and listened to the client. I also made sure I understood the client's needs. The client was very happy with the end result, and so was I.

#### Server-rendered JavaScript

I learned a lot about server-rendered JavaScript during the project. We chose to work with SvelteKit, which has great server-side rendering capabilities. I fetched data from the API on the server and passed it to the client. I also handled form submissions on the server and even created a mock API on the server.
