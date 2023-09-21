---
layout: example.11ty.cjs
title: <huss-carousel> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
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
<huss-carousel slideDelay="2500" autoplay>
  <img
    slot="slides"
    class="huss-carousel__item"
    src="https://upload.wikimedia.org/wikipedia/commons/1/10/Stoa_of_Attalos_at_the_Ancient_Agora_of_Athens_3.jpg"
    alt="stoa"
  />
  <img
    slot="slides"
    class="huss-carousel__item"
    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Epictetus.jpg"
    alt="epictetus"
  />
  <img
    slot="slides"
    class="huss-carousel__item"
    src="https://upload.wikimedia.org/wikipedia/commons/2/29/UWASocrates_gobeirne_cropped.jpg"
    alt="socrates"
  /><img
    slot="slides"
    class="huss-carousel__item"
    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Socrates_Louvre.jpg"
    alt="socrates"
  />
  <button class="button" slot="playPauseButton">||</button>
  <button class="button" slot="playStartButton">></button>
  <button class="button" slot="nextButton">&gt;</button>
  <button class="button" slot="prevButton">&lt;</button>
</huss-carousel>
```

<huss-carousel slideDelay="2500" autoplay>
  <img
    slot="slides"
    class="huss-carousel__item"
    src="https://upload.wikimedia.org/wikipedia/commons/1/10/Stoa_of_Attalos_at_the_Ancient_Agora_of_Athens_3.jpg"
    alt="stoa"
  />
  <img
    slot="slides"
    class="huss-carousel__item"
    src="https://upload.wikimedia.org/wikipedia/commons/9/90/Epictetus.jpg"
    alt="epictetus"
  />
  <img
    slot="slides"
    class="huss-carousel__item"
    src="https://upload.wikimedia.org/wikipedia/commons/2/29/UWASocrates_gobeirne_cropped.jpg"
    alt="socrates"
  /><img
    slot="slides"
    class="huss-carousel__item"
    src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Socrates_Louvre.jpg"
    alt="socrates"
  />
  <button class="button"  slot="playPauseButton">||</button>
  <button class="button"  slot="playStartButton">></button>
  <button class="button"  slot="nextButton">&gt;</button>
  <button class="button"  slot="prevButton">&lt;</button>
</huss-carousel>
