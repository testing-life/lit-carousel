/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {HussCarousel} from '../huss-carousel';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('huss-carousel', () => {
  test('is defined', () => {
    const el = document.createElement('huss-carousel');
    assert.instanceOf(el, HussCarousel);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<huss-carousel></huss-carousel>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<huss-carousel name="Test"></huss-carousel>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<huss-carousel></huss-carousel>`)) as HussCarousel;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<huss-carousel></huss-carousel>`)) as HussCarousel;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
