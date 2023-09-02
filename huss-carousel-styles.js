import { css } from 'lit';
export const carouselStyles = css `
  :host {
    --mobileHeight: 275px;
    --tabletHeight: 369px;
    --desktopHeight: 639px;
    --dotInlineSize: 10px;
    --dotBlockSize: 10px;
    --dotBorderRadius: 50%;
    --dotColour: purple;
    --activeDotColour: goldenrod;
    --focusedDotColour: green;
    --hoveredDotColour: yellow;
    --carouselBgColour: aquamarine;
  }

  :host ul,
  :host ol {
    padding: 0;
    margin: 0;
  }

  :host li {
    list-style-type: none;
  }

  .huss-carousel--wrapper {
    position: relative;
    background: var(--carouselBgColour);
  }

  :host([variant='anyContent']) {
    --teasersHeight: 480px;
    display: block;
    padding-block-end: 55px;
  }

  .huss-carousel {
    inline-size: 100%;
    block-size: var(--mobileHeight);
    position: relative;
    overflow: hidden;
  }

  @media (width > 560px) {
    .huss-carousel {
      block-size: var(--tabletHeight);
    }
  }
  @media (width > 960px) {
    .huss-carousel {
      block-size: var(--desktopHeight);
    }
  }

  .huss-carousel__slide {
    position: absolute;
    inset-inline-start: 0;
    inset-inline-end: 0;
    block-size: 100%;
    transition: all 0.5s;
    touch-action: pan-x;
    display: flex;
    gap: 24px;
  }

  .huss-carousel__slide > * {
    flex: 1;
  }

  .huss-carousel__item,
  .huss-carousel__slide img,
  .huss-carousel__slide video {
    inline-size: 100%;
    block-size: 100%;
  }

  .huss-carousel__slide > img {
    object-fit: contain;
  }

  .huss-carousel--has-teasers .huss-carousel--flex-less .huss-carousel__item {
    flex: 0;
  }

  .huss-carousel--has-teasers
    .huss-carousel--flex-less
    .huss-carousel__item
    .huss-events-teaser__teaser {
    inline-size: 368px;
  }

  .huss-carousel__dots {
    display: flex;
    justify-content: center;
    position: absolute;
    inset-block-end: 20px;
    align-items: center;
    inset-inline-start: 0;
    inset-inline-end: 0;
    line-height: 1;
    gap: 10px;
  }

  .huss-carousel__dot-btn {
    padding: 0;
    block-size: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
  }

  .huss-carousel__dot-btn:hover,
  .huss-carousel__dot-btn:focus {
    cursor: pointer;
  }

  .huss-carousel__dot-btn:focus-visible {
    outline: none;
    border-radius: 2px;
    box-shadow: 0 0 0 1px var(--black);
  }

  .huss-carousel__dot-btn:after {
    content: '';
    inline-size: var(--dotInlineSize);
    block-size: var(--dotBlockSize);
    background: var(--dotColour);
    border-radius: var(--dotBorderRadius);
  }

  .huss-carousel__dot-btn:hover:after {
    background: var(--hoveredDotColour);
  }

  .huss-carousel__dot-btn--is-active:after {
    content: '';
    background: var(--activeDotColour);
  }

  .huss-carousel__slide-controls {
    position: absolute;
    z-index: 1;
    inset-inline-start: 0;
    inset-inline-end: 0;
    display: flex;
    justify-content: space-between;
    inset-block-start: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .huss-carousel__slide-controls .huss-carousel__button {
    pointer-events: all;
  }

  .huss-carousel__play-controls {
    position: absolute;
    inset-inline-start: 20px;
    inset-block-end: 20px;
    z-index: 1;
  }

  .huss-carousel--has-teasers .huss-carousel {
    block-size: var(--teasersHeight);
  }

  .huss-carousel--has-teasers .huss-carousel__play-controls {
    display: none;
  }

  .huss-carousel--has-teasers .huss-carousel__slide {
    gap: 15px;
  }

  .huss-carousel--has-teasers .huss-carousel__item {
    display: flex;
  }

  .huss-carousel--has-teasers > *:not(:only-child) {
    flex: 1;
  }

  .huss-carousel--has-teasers .huss-carousel__slide-controls {
    inset-block-start: calc(100% + 16px);
    transform: unset;
  }

  .huss-carousel--has-teasers .huss-carousel__dots {
    inset-block-end: -45px;
    inset-inline-start: 25%;
    inset-inline-end: 25%;
    z-index: 1;
  }

  .huss-carousel--has-teasers .huss-carousel__play-controls {
    inset-block-end: -45px;
    inset-inline-start: 45px;
  }

  .huss-carousel--is-hidden {
    display: none;
  }
`;
//# sourceMappingURL=huss-carousel-styles.js.map