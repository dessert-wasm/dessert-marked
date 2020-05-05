[![](https://user-images.githubusercontent.com/25987204/78205790-10b0c680-74d8-11ea-9767-5bb93e920044.png)](https://dessert.dev/)

Dessert Marked
============

[![npm-badge]][npm-url]
[![license-badge]][license]

[npm-badge]: https://img.shields.io/npm/v/dessert-marked.svg
[npm-url]: https://www.npmjs.org/package/dessert-marked
[license-badge]: https://img.shields.io/github/license/dessert-wasm/dessert-marked
[license]: LICENSE_MIT

> [marked], but implemented with Rust and WebAssembly  

[marked]: https://github.com/markedjs/marked

## Table of contents
* [Usage](#usage)
* [API](#api)
* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)

## Usage

```js
const marked = require('dessert-marked');
console.log(marked("hello world"));
```

### Output 

```html
<p>hello world</p>
```

## Advance usage

```html
// Create reference instance
const marked = require('marked');

// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  gfm: true,
  breaks: false,
  headerPrefix: 'Hello'
});

// Compile
console.log(marked(markdownString));
```

## API

### marked(src, opt, callback)

Converts Markdown to HTML

### marked.parse(src, opt, callback)

Same as the `marked` function

### getDefaults()

Returns the defaults options

### setOptions({obj})

| Member|    type | Default|    Notes  |
|:------|:-------:|:-------|:----------:|
| breaks| `boolean`  | `false`    | gf true, add `<br>` on a single line break (copies GitHub behavior on comments, but not on rendered markdown files). Requires `gfm` be `true`.     |
| gfm   | `boolean` | `true`  | If true, use approved [GitHub Flavored Markdown (GFM) specification](https://github.github.com/gfm/).    |
| headerIds | `boolean` | `true`  | If true, include an `id` attribute when emitting headings (h1, h2, h3, etc).    |
| headerPrefix | `string` | `''`  | A string to prefix the `id` attribute when emitting headings (h1, h2, h3, etc).    |
| silent | `boolean` | `false`  | If true, the parser does not throw any exception. |

## Installation
With [npm](https://npmjs.org/):
```shell
npm install dessert-marked
```

## License
This software is licensed under the MIT license (see [LICENSE](LICENSE_MIT)).

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md)
