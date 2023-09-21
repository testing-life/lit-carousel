---
layout: example.11ty.cjs
title: <huss-carousel> ⌲ Examples ⌲ Elements Reordering
tags: example
name: Elements Reordering
description: Elements Reordering
---

<h3>HTML</h3>

 <style>
    /* CSS */
    .button {
      background: #5e5df0;
      border-radius: 999px;
      box-shadow: #5e5df0 0 10px 20px -10px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      font-family: Inter, Helvetica, 'Apple Color Emoji', 'Segoe UI Emoji',
        NotoColorEmoji, 'Noto Color Emoji', 'Segoe UI Symbol', 'Android Emoji',
        EmojiSymbols, -apple-system, system-ui, 'Segoe UI', Roboto,
        'Helvetica Neue', 'Noto Sans', sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 8px 18px;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: fit-content;
      word-break: break-word;
      border: 0;
    }
  </style>

```html
<huss-carousel
  variant="anyContent"
  elementsInSlideDesktop="3"
  elementsInSlideTablet="2"
  elementsInSlideMobile="1"
>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 1
  </section>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 2
  </section>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 3
  </section>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 4
  </section>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 5
  </section>
  <button class="button" slot="playPauseButton">||</button>
  <button class="button" slot="playStartButton">></button>
  <button class="button" slot="nextButton">&gt;</button>
  <button class="button" slot="prevButton">&lt;</button>
</huss-carousel>
```

<huss-carousel variant="anyContent" elementsInSlideDesktop='3' elementsInSlideTablet='2' elementsInSlideMobile='1'>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 1
  </section>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 2
  </section>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 3
  </section>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 4
  </section>
  <section
    slot="slides"
    class="huss-carousel__item"
    style="height: 250px; background: lightblue"
  >
    i am a nonimage 5
  </section>
  <button class="button"  slot="playPauseButton">||</button>
  <button class="button"  slot="playStartButton">></button>
  <button class="button"  slot="nextButton">&gt;</button>
  <button class="button"  slot="prevButton">&lt;</button>
</huss-carousel>

<p>When displaying content other than images, you can determine how many content elements are visible per slide and how they should recount on different screen sizes. By default, you will see 3 on desktop, 2 on tablet and 1 on mobile. Resize this page to see it working.</p>
