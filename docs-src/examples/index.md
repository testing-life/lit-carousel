---
layout: example.11ty.cjs
title: <huss-carousel> ⌲ Examples ⌲ Basic
tags: example
name: Basic
description: A basic example
---

<style>
  huss-carousel p {
    border: solid 1px blue;
    padding: 8px;
  }
</style>

<h3>HTML</h3>

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
  <button slot="playPauseButton">||</button>
  <button slot="playStartButton">></button>
  <button slot="nextButton">=></button>
  <button slot="prevButton"><=</button>
</huss-carousel>
```
