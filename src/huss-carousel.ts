/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, nothing, PropertyValueMap} from 'lit';
import {customElement, property, queryAll, state} from 'lit/decorators.js';
import { carouselStyles } from './huss-carousel-styles';
import {Device, checkBreakpoints, splitArrayIntoNestedArray, throttle } from './Utils/utils';

/**
 * An carousel.
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
  Teaser = 'teaser',
}

@customElement('huss-carousel')
export class HussCarousel extends LitElement {
    static override styles = [

        carouselStyles,
    
        css`
    
          :host { display: block;
    
            border: 1px solid black;
    
          }`
    
      ];

  @queryAll('.conti-air-carousel__item')
  slides: NodeListOf<HTMLDivElement>;

  @property()
  variant: CarouselType = CarouselType.Image;

  @state()
  protected currentSlide: number = 0;

  @state()
  private isAutoplaying: boolean = false;

  @state()
  private elementsPerNestedArray: number = 1;

  @state()
  private currentRecords: Array<Element[]> = [];

  @state()
  private sliderInterval: any;

  protected lastSlide: number = 0;
  private touches: { touchStart: number; touchEnd: number } = {
    touchStart: 0,
    touchEnd: 0,
  };

  get _slottedChildren() {

    const slot = this.shadowRoot?.querySelector('slot');
    return slot?.assignedElements({flatten: true});
  
  }

  override connectedCallback(): void {
    window.addEventListener(
      'resize',
      throttle(() => this.handleElemsPerSlide(), 250),
    );
    super.connectedCallback();
    console.log(this.slides, this._slottedChildren)
    // if (this.variant === CarouselType.Teaser) {
    //   this.handleElemsPerSlide();
    //   if (this.slides[0].firstElementChild?.classList.contains('huss-events-teaser__teaser')) {
    //     const childStyles = getComputedStyle(this.slides[0].firstElementChild as HTMLElement);
    //     const carouselHeightFromChild: number = Math.ceil(
    //       parseFloat(childStyles.blockSize) + parseFloat(childStyles.marginBlockStart),
    //     );
    //     this.style.setProperty('--teasersHeight', `${carouselHeightFromChild}px`);
    //   }
    // } else {
    //   // this.sliceArray(this.slides, this.elementsPerNestedArray);
    // }
  }

  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    console.log(this.slides, this._slottedChildren, _changedProperties)
    this.sliceArray(this._slottedChildren as Element[], this.elementsPerNestedArray);
  }

  private handleElemsPerSlide() {
    if (this.variant === CarouselType.Image) {
      return;
    }
    let elementsPerNestedArray: number = 1;
    switch (checkBreakpoints()) {
      case Device.Desktop:
        elementsPerNestedArray = 3;
        break;
      case Device.Tablet:
        elementsPerNestedArray = 2;
        break;
      default:
        elementsPerNestedArray = 1;
        break;
    }
    this.sliceArray(this._slottedChildren as Element[], elementsPerNestedArray);
  }

  private sliceArray(nodeList: Element[], elemsPerArray: number) {
    const slidesArray = Array.from(nodeList);
    this.currentRecords = splitArrayIntoNestedArray(slidesArray, elemsPerArray);
    if (this.slides.length) {
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
    }, 5500);
  }

  private pause() {
    this.sliderInterval = clearInterval(this.sliderInterval);
  }

  private toggleAutoplay() {
    this.isAutoplaying = !this.isAutoplaying;
    this.isAutoplaying ? this.play() : this.pause();
  }

  private togglePlay() {
    this.sliderInterval ? this.pause() : this.play();
  }

  private swipeHandler() {
    const swipeDirection =
      this.touches.touchEnd - this.touches.touchStart > 0 ? SwipeDirection.Next : SwipeDirection.Prev;
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
    this.currentRecords.length === index + 1 && !(slide.length % 2) && checkBreakpoints() === Device.Desktop;

  override render() {
    return html`
      <div class="conti-air-carousel--wrapper ${this.variant === 'teaser' ? 'huss-carousel--has-teasers' : null}">
        <div
          class="conti-air-carousel__slide-controls ${this.currentRecords.length === 1
            ? 'huss-carousel--is-hidden'
            : ''}"
        >
          <button class="conti-air-button--icon conti-air-carousel__button" @click="${this.previousSlideHandler}">
            <conti-air-icon class="conti-air-button--icon__image" name="chevron-left"></conti-air-icon>
          </button>
          <button class="conti-air-button--icon conti-air-carousel__button" @click="${this.nextSlideHandler}">
            <conti-air-icon class="conti-air-button--icon__image" name="chevron-right"></conti-air-icon>
          </button>
        </div>
        <div
          class="conti-air-carousel__play-controls ${this.currentRecords.length === 1
            ? 'huss-carousel--is-hidden'
            : ''} "
        >
          <button class="conti-air-button--icon conti-air-carousel__button" @click="${this.toggleAutoplay}">
            <conti-air-icon
              class="conti-air-button--icon__image"
              name="${this.isAutoplaying ? 'autoplay-stop' : 'autoplay'}"
            ></conti-air-icon>
          </button>
          <button
            class="conti-air-button--icon conti-air-carousel__button"
            @click="${this.togglePlay}"
            disabled=${!this.isAutoplaying || nothing}
          >
            <conti-air-icon
              class="conti-air-button--icon__image"
              name="${this.sliderInterval ? 'pause' : 'play'}"
            ></conti-air-icon>
          </button>
        </div>
        <ul class="conti-air-carousel">
          ${this.currentRecords.map((slide: Element[], index: number) => {
            return html`
              <li
                @touchstart=${this.touchStartHandler}
                @touchend=${this.touchEndHandler}
                class="conti-air-carousel__slide ${this.currentRecords.length === index + 1 &&
                this.shouldFlexLess(slide, index)
                  ? 'huss-carousel--flex-less'
                  : null}"
                style="transform: translateX(${100 * (index - this.currentSlide)}%)"
              >

                ${slide.map((item: Element) => html`${item} `)}
      </li>
            `;
          })}
        </ul>
        <ul class="conti-air-carousel__dots">
          ${this.currentRecords.length > 1
            ? this.currentRecords.map((_, index: number) => {
                return html`
                  <li class="conti-air-carousel__dot">
                    <button
                      @click="${() => this.goToSlideHandler(index)}"
                      class="conti-air-carousel__dot-btn ${index === this.currentSlide
                        ? 'huss-carousel__dot-btn--is-active'
                        : null}"
                    ></button>
                  </li>
                `;
              })
            : nothing}
        </ul>
     <slot> </slot>

      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'huss-carousel': HussCarousel;
  }
}
