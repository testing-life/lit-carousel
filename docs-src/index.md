---
layout: page.11ty.cjs
title: <huss-carousel> ⌲ Home
---

# &lt;huss-carousel>

`<huss-carousel>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<huss-carousel>` is just an HTML element. You can it anywhere you can use HTML!

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
<huss-carousel>
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
  <button class="button" slot="playStartButton">&gt;&gt;</button>
  <button class="button" slot="nextButton">&gt;</button>
  <button class="button" slot="prevButton">&lt;</button>
</huss-carousel>
```

  </div>
  <div>

<huss-carousel>
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
  <button class="button" slot="playStartButton">&gt;&gt;</button>
  <button class="button" slot="nextButton">&gt;</button>
  <button class="button" slot="prevButton">&lt;</button>
</huss-carousel>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<huss-carousel>` can be configured with attributed in plain HTML.

```html
<huss-carousel autoplay slideDelay="1234"
  ><img
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
  <button class="button" slot="playStartButton">&gt;&gt;</button>
  <button class="button" slot="nextButton">&gt;</button>
  <button class="button" slot="prevButton">&lt;</button>
</huss-carousel>
```

  </div>
  <div>

<huss-carousel autoplay slideDelay="1234"><img
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
<button class="button" slot="playStartButton">&gt;&gt;</button>
<button class="button" slot="nextButton">&gt;</button>
<button class="button" slot="prevButton">&lt;</button>
</huss-carousel>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<huss-carousel>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;huss-carousel&gt;</h2>
    <huss-carousel
      ><img
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
      <button class="button" slot="playStartButton">&gt;&gt;</button>
      <button class="button" slot="nextButton">&gt;</button>
      <button class="button" slot="prevButton">&lt;</button>
    </huss-carousel>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;huss-carousel&gt;</h2>
<huss-carousel>
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
  <button class="button" slot="playStartButton">&gt;&gt;</button>
  <button class="button" slot="nextButton">&gt;</button>
  <button class="button" slot="prevButton">&lt;</button>
</huss-carousel>

  </div>
</section>
