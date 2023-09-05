# LitElement custom carousel

This carousel enables you to display either images or essentially any other type of components. If displaying anythign else than images, you can specify how many elements are shown per slide for large, medium and small screen sizes. The carousel will recalculate accordingly on screen resize.

## Features:

- play, pause, autoplay
- flexibility in terms of carousel control buttons via slots
- you can specify how many items are show pre slide for each screen size
- flexible styling through custom CSS properties

## Options

| attribute                | optional | type   | possible values        | purpose                                                                                                   |
| ------------------------ | -------- | ------ | ---------------------- | --------------------------------------------------------------------------------------------------------- |
| `variant`                | optional | bool   | 'image' , 'anyContent' | An option telling the carousel that you are displaying either images or other components.                 |
| `slideDelay`             | optional | number |                        | How long one slide is displayed.                                                                          |
| `autoplay`               | optional | bool   | boolean attribute      | Should the carousel start autoplaying.                                                                    |
| `elementsInSlideDesktop` | optional | number |                        | How many elements should fit in one slide on large screen.                                                |
| `elementsInSlideTablet`  | optional | number |                        | How many elements should fit in one slide on medium screen.                                               |
| `elementsInSlideMobile`  | optional | number |                        | How many elements should fit in one slide on small screen.                                                |
| `shouldHug`              | optional | bool   | boolean attribute      | Should the remaining elements on last slide be rendered closely together, rather than laid out with flex. |

## Usage example

`slot="slides"` and `class="huss-carousel__item"` are important for content. Other slots are needed for controls.

```html
<huss-carousel variant="anyContent">
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
  <button slot="playPauseButton">||</button>
  <button slot="playStartButton">></button>
  <button slot="nextButton">=></button>
  <button slot="prevButton"><=</button>
</huss-carousel>
```

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

## Setup

Install dependencies:

```bash
npm i @m-hussariush/huss-carousel
```

## Build

This sample uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing

This sample uses modern-web.dev's
[@web/test-runner](https://www.npmjs.com/package/@web/test-runner) for testing. See the
[modern-web.dev testing documentation](https://modern-web.dev/docs/test-runner/overview) for
more information.

Tests can be run with the `test` script, which will run your tests against Lit's development mode (with more verbose errors) as well as against Lit's production mode:

```bash
npm test
```

For local testing during development, the `test:dev:watch` command will run your tests in Lit's development mode (with verbose errors) on every change to your source files:

```bash
npm test:watch
```

Alternatively the `test:prod` and `test:prod:watch` commands will run your tests in Lit's production mode.

## Dev Server

This sample uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html. Note that this command will serve your code using Lit's development mode (with more verbose errors). To serve your code against Lit's production mode, use `npm run serve:prod`.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when committing files, but this can be added with Husky and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Static Site

This project includes a simple website generated with the [eleventy](https://11ty.dev) static site generator and the templates and pages in `/docs-src`. The site is generated to `/docs` and intended to be checked in so that GitHub pages can serve the site [from `/docs` on the master branch](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

To enable the site go to the GitHub settings and change the GitHub Pages &quot;Source&quot; setting to &quot;master branch /docs folder&quot;.</p>

To build the site, run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:watch
```

The site will usually be served at http://localhost:8000.

## Bundling and minification

This starter project doesn't include any build-time optimizations like bundling or minification. We recommend publishing components as unoptimized JavaScript modules, and performing build-time optimizations at the application level. This gives build tools the best chance to deduplicate code, remove dead code, and so on.

For information on building application projects that include LitElement components, see [Build for production](https://lit.dev/docs/tools/production/) on the Lit site.

## More information

See [Get started](https://lit.dev/docs/getting-started/) on the Lit site for more information.
