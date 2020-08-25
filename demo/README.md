# demo

> Demo website showcasing `svelte-super-tiny-icons` built with [sapper](https://sapper.svelte.dev/).

## Getting Started

First, build the `svelte-super-tiny-icons` library:

```sh
# svelte-super-tiny-icons/
yarn install
yarn prepack
```

Then, link `svelte-super-tiny-icons` package:

```sh
yarn link

cd demo/
yarn link "svelte-super-tiny-icons"
```

Install the dependencies and start it in development mode:

```sh
yarn install
yarn develop
```

## Build

Run `yarn build` to build the app for production. This executes the `sapper export` script, which exports the app as a static website.

## Deploy

Deploy the app to [GitHub Pages](https://pages.github.com/):

```sh
npx gh-pages -d public/svelte-super-tiny-icons
```
