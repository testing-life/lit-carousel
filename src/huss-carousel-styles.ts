import { css } from "lit";

export const carouselStyles = css`
.conti-air-carousel--wrapper {
    position: relative;
  }
  
  conti-air-carousel[variant='teaser'] {
    --teasersHeight: 480px;
    display: block;
    padding-block-end: 55px;
  }
  
  .conti-air-carousel {
    --mobileHeight: 275px;
    --tabletHeight: 369px;
    --desktopHeight: 639px;
    inline-size: 100%;
    block-size: var(--mobileHeight);
    position: relative;
    overflow: hidden;
    @media (width > 48rem) {
      block-size: var(--tabletHeight);
    }
    @media (width > 70rem) {
      block-size: var(--desktopHeight);
    }
  }
  
  .conti-air-carousel__slide {
    position: absolute;
    inset-inline-start: 0;
    inset-inline-end: 0;
    block-size: 100%;
    transition: all 0.5s;
    touch-action: pan-x;
    display: flex;
    gap: 24px;
  
    & > * {
      flex: 1;
    }
  
    .conti-air-carousel__item,
    img,
    video {
      inline-size: 100%;
      block-size: 100%;
    }
  
    & > img {
      object-fit: contain;
    }
  }
  
  .conti-air-carousel--has-teasers .conti-air-carousel--flex-less .conti-air-carousel__item {
      flex: 0;
    & .conti-air-events-teaser__teaser { 
      inline-size: 368px;
    }  
  }
  
  
  .conti-air-carousel__dots {
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
  
  .conti-air-carousel__dot-btn {
    padding: 0;
    block-size: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
  
    &:hover,
    &:focus {
      cursor: pointer;
    }
  
    &:focus-visible {
      outline: none;
      border-radius: 2px;
      box-shadow: 0 0 0 1px var(--black);
    }
  
    &:after {
      content: '';
      inline-size: 10px;
      block-size: 10px;
      background: var(--grey4);
      border-radius: 50%;
    }
  
    &:hover:after {
      background: var(--grey4);
    }
  }
  
  .conti-air-carousel__dot-btn--is-active {
    &:after {
      content: '';
      background: var(--grey2);
    }
  }
  
  .conti-air-carousel__slide-controls {
    position: absolute;
    z-index: 1;
    inset-inline-start: 0;
    inset-inline-end: 0;
    display: flex;
    justify-content: space-between;
    inset-block-start: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  
    .conti-air-carousel__button {
      pointer-events: all;
    }
  }
  
  .conti-air-carousel__play-controls {
    position: absolute;
    inset-inline-start: 20px;
    inset-block-end: 20px;
    z-index: 1;
  }
  
  .conti-air-carousel__button {
    background: var(--grey5);
  }
  
  .conti-air-carousel--has-teasers {
    .conti-air-carousel {
      block-size: var(--teasersHeight);
    }
  
    .conti-air-carousel__play-controls {
      display: none;
    }
  
    .conti-air-carousel__slide {
      gap: 15px;
    }
  
    .conti-air-carousel__item {
      display: flex;
      & > *:not(:only-child) {
        flex: 1;
      }
    }
  
    .conti-air-carousel__slide-controls {
      inset-block-start: calc(100% + 16px);
      transform: unset;
    }
  
    .conti-air-carousel__dots {
      inset-block-end: -45px;
      inset-inline-start: 25%;
      inset-inline-end: 25%;
      z-index: 1;
    }
  
    .conti-air-carousel__play-controls {
      inset-block-end: -45px;
      inset-inline-start: 45px;
    }
  }
  
  .conti-air-carousel--is-hidden {
    display: none;
  }`;