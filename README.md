# svelte-super-tiny-icons

[![NPM][npm]][npm-url]
[![Build][build]][build-badge]

> [Super Tiny Icons](https://github.com/edent/SuperTinyIcons) as Svelte components.

## [Icon Preview](https://metonym.github.io/svelte-super-tiny-icons/)

## Install

This zero dependency library requires Svelte version >=3.20 because it uses `$$restProps`.

```sh
yarn add -D svelte-super-tiny-icons
# OR
npm -i -D svelte-super-tiny-icons
```

## Usage

```html
<script>
  import Acast from "svelte-super-tiny-icons/lib/Acast";
</script>

<Acast width="{48}" height="{48}" />
```

See [ICON_INDEX.md](ICON_INDEX.md) for list of icons.

## API

`$$restProps` are forwarded to the `svg` element.

### Forwarded events

- on:click
- on:mouseover
- on:mouseenter
- on:mouseout
- on:keydown

## [Changelog](CHANGELOG.md)

## Development workflow

Svelte components are generated from [Super Tiny Icons](https://github.com/edent/SuperTinyIcons) SVG files using [svg-to-svelte](https://github.com/metonym/svg-to-svelte).

A single script [build.js](build.js) generates the components, along with documentation in Markdown format.

The generated Svelte components are emitted to the `lib` folder, which is ignored by Git but published to NPM.

Documentation is generated using the list of icon module names from the source library.

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-super-tiny-icons.svg?color=blue
[npm-url]: https://npmjs.com/package/svelte-super-tiny-icons
[build]: https://travis-ci.com/metonym/svelte-super-tiny-icons.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/svelte-super-tiny-icons
