---
layout: example.11ty.cjs
title: <huss-carousel> ⌲ Examples ⌲ Hug Components
tags: example
name: Hug Components
description: Leftover components hugging
---

<h3>HTML</h3>

```html
<huss-carousel slideDelay="5500" autoplay shouldHug variant="anyContent">
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

<huss-carousel slideDelay="5500" autoplay shouldHug variant="anyContent">
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

<p>Any leftover components displayed in the last slide can be set up to hug, instead of being laid out with flex. This mean that they will be closely next to each other, relying on their width for layout.</p>
