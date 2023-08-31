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
<huss-carousel></huss-carousel>
```

  </div>
  <div>

<huss-carousel></huss-carousel>

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
