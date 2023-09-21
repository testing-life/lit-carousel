---
layout: example.11ty.cjs
title: <huss-carousel> ⌲ Examples ⌲ Any Content
tags: example
name: Any Content
description: Displaying any content in the carousel
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
<huss-carousel variant="anyContent">
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

<huss-carousel variant="anyContent">
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
