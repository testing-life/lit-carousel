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
  <button slot="playPauseButton">||</button>
  <button slot="playStartButton">></button>
  <button slot="nextButton">=></button>
  <button slot="prevButton"><=</button>
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
  <button slot="playPauseButton">||</button>
  <button slot="playStartButton">></button>
  <button slot="nextButton">=></button>
  <button slot="prevButton"><=</button>
</huss-carousel>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<huss-carousel>` can be configured with attributed in plain HTML.

```html
<huss-carousel name="HTML"></huss-carousel>
```

  </div>
  <div>

<huss-carousel name="HTML"></huss-carousel>

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
    <huss-carousel .name=${name}></huss-carousel>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;huss-carousel&gt;</h2>
<huss-carousel name="lit-html"></huss-carousel>

  </div>
</section>
