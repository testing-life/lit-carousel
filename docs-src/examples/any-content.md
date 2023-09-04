---
layout: example.11ty.cjs
title: <huss-carousel> ⌲ Examples ⌲ Any Content
tags: example
name: Any Content
description: Displaying any content in the carousel
---

<h3>HTML</h3>

```html
<huss-carousel slideDelay="5500" variant="anyContent">
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
  <button slot="playPauseButton">||</button>
  <button slot="playStartButton">></button>
  <button slot="nextButton">=></button>
  <button slot="prevButton"><=</button>
</huss-carousel>
```
