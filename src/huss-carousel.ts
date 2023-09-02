/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, nothing, PropertyValueMap} from 'lit';
import {
  customElement,
  property,
  queryAll,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import {carouselStyles} from './huss-carousel-styles';
import {
  Device,
  checkBreakpoints,
  splitArrayIntoNestedArray,
  throttle,
} from './Utils/utils';

/**
 * A carousel.
 *
 * @slot - This element has a slot
 * @csspart carousel
 */
enum SwipeDirection {
  Prev = 'prev',
  Next = 'next',
}

enum CarouselType {
  Image = 'image',
  AnyContent = 'anyContent',
}

@customElement('huss-carousel')
export class HussCarousel extends LitElement {
  static override styles = [carouselStyles];

  @queryAssignedElements({slot: 'slides', selector: '.huss-carousel__item'})
  _slides!: Array<HTMLElement>;

  @property()
  variant: CarouselType = CarouselType.Image;

  @property()
  slideDelay: string = '5500';

  @property()
  autoplay: string | undefined;

  @property()
  elementsInSlideDesktop: number = 3;

  @property()
  elementsInSlideTablet: number = 2;

  @property()
  elementsInSlideMobile: number = 1;

  @property()
  shouldHug: string | undefined;

  @state()
  protected currentSlide: number = 0;

  @state()
  protected letest: any;

  @state()
  private elementsPerNestedArray: number = 1;

  @state()
  private currentRecords: Array<Element[]> = [];

  @state()
  private sliderInterval: any;

  protected lastSlide: number = 0;
  private touches: {touchStart: number; touchEnd: number} = {
    touchStart: 0,
    touchEnd: 0,
  };

  override connectedCallback(): void {
    window.addEventListener(
      'resize',
      throttle(() => this.handleElemsPerSlide(), 250)
    );
    super.connectedCallback();
  }

  protected override firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    this.letest = this._slides;
    if (this.variant === CarouselType.AnyContent) {
      this.handleElemsPerSlide();
      if (this._slides?.[0]) {
        const childStyles = getComputedStyle(this._slides[0]);
        const carouselHeightFromChild: number = Math.ceil(
          parseFloat(childStyles.blockSize) +
            parseFloat(childStyles.marginBlockStart)
        );
        this.style.setProperty(
          '--teasersHeight',
          `${carouselHeightFromChild}px`
        );
      }
    } else {
      this.sliceArray(this._slides as Element[], this.elementsPerNestedArray);
    }

    if (this.autoplay !== undefined) {
      this.play();
    }
  }

  private handleElemsPerSlide() {
    if (this.variant === CarouselType.Image) {
      return;
    }
    let elementsPerNestedArray: number = 1;
    switch (checkBreakpoints()) {
      case Device.Desktop:
        elementsPerNestedArray = this.elementsInSlideDesktop;
        break;
      case Device.Tablet:
        elementsPerNestedArray = this.elementsInSlideTablet;
        break;
      default:
        elementsPerNestedArray = this.elementsInSlideMobile;
        break;
    }

    const data = this._slides.length ? this._slides : this.letest; // check
    this.sliceArray(data, elementsPerNestedArray);
  }

  private sliceArray(nodeList: Element[], elemsPerArray: number) {
    const slidesArray = Array.from(nodeList);
    this.currentRecords = splitArrayIntoNestedArray(slidesArray, elemsPerArray);
    if (this._slides?.length) {
      this.lastSlide = this.currentRecords.length - 1;
    }
  }

  nextSlideHandler() {
    if (this.currentSlide === this.lastSlide) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }

  previousSlideHandler() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.lastSlide;
    } else {
      this.currentSlide--;
    }
  }

  goToSlideHandler(index: number) {
    this.currentSlide = index;
  }

  private play() {
    this.sliderInterval = setInterval(() => {
      this.nextSlideHandler();
    }, parseInt(this.slideDelay));
  }

  private pause() {
    this.sliderInterval = clearInterval(this.sliderInterval);
  }

  private togglePlay() {
    this.sliderInterval ? this.pause() : this.play();
  }

  private swipeHandler() {
    const swipeDirection =
      this.touches.touchEnd - this.touches.touchStart > 0
        ? SwipeDirection.Next
        : SwipeDirection.Prev;
    if (swipeDirection === SwipeDirection.Prev) {
      this.previousSlideHandler();
    } else {
      this.nextSlideHandler();
    }
  }

  private touchStartHandler(e: TouchEvent) {
    this.touches.touchStart = e.changedTouches[0].pageX;
  }

  private touchEndHandler(e: TouchEvent) {
    const touchEndX = e.changedTouches[0].pageX;
    this.touches.touchEnd = touchEndX;
    const touchDistanceX = touchEndX - this.touches.touchStart;
    if (Math.abs(touchDistanceX) > 50) {
      this.swipeHandler();
    }
  }

  private shouldFlexLess = (slide: Element[], index: number) =>
    this.currentRecords.length === index + 1 &&
    !(slide.length % 2) &&
    checkBreakpoints() === Device.Desktop;

  override render() {
    return html`
      <div
        class="huss-carousel--wrapper ${this.variant === CarouselType.AnyContent
          ? 'huss-carousel--has-teasers'
          : null}"
      >
        <div
          class="huss-carousel__slide-controls ${this.currentRecords.length ===
          1
            ? 'huss-carousel--is-hidden'
            : ''}"
        >
          <slot
            class="huss-button--icon huss-carousel__button"
            @click="${this.previousSlideHandler}"
            name="prevButton"
          ></slot>
          <slot
            class="huss-button--icon huss-carousel__button"
            @click="${this.nextSlideHandler}"
            name="nextButton"
          ></slot>
        </div>
        <div
          class="huss-carousel__play-controls ${this.currentRecords.length === 1
            ? 'huss-carousel--is-hidden'
            : ''} "
        >
          ${this.sliderInterval
            ? html`<slot
                name="playPauseButton"
                class="huss-button--icon huss-carousel__button"
                @click="${this.togglePlay}"
              ></slot>`
            : html`<slot
                name="playStartButton"
                class="huss-button--icon huss-carousel__button"
                @click="${this.togglePlay}"
              ></slot>`}
        </div>
        <ul class="huss-carousel">
          ${this.currentRecords.map((slide: Element[], index: number) => {
            return html`
              <li
                @touchstart=${this.touchStartHandler}
                @touchend=${this.touchEndHandler}
                class="huss-carousel__slide ${this.shouldHug !== undefined &&
                this.currentRecords.length === index + 1 &&
                this.shouldFlexLess(slide, index)
                  ? 'huss-carousel--flex-less'
                  : null}"
                style="transform: translateX(${100 *
                (index - this.currentSlide)}%)"
              >
                ${slide.map((item: Element) => html`${item} `)}
              </li>
            `;
          })}
        </ul>
        <ul class="huss-carousel__dots">
          ${this.currentRecords.length > 1
            ? this.currentRecords.map((_, index: number) => {
                return html`
                  <li class="huss-carousel__dot">
                    <button
                      @click="${() => this.goToSlideHandler(index)}"
                      class="huss-carousel__dot-btn ${index ===
                      this.currentSlide
                        ? 'huss-carousel__dot-btn--is-active'
                        : null}"
                    ></button>
                  </li>
                `;
              })
            : nothing}
        </ul>
        <slot name="slides"> </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'huss-carousel': HussCarousel;
  }
}
