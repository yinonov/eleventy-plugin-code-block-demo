<h1 align="center">Welcome to eleventy-plugin-code-block-demo 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/eleventy-plugin-code-block-demo" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/eleventy-plugin-code-block-demo.svg">
  </a>
  <a href="https://github.com/yinonov/eleventy-plugin-code-block-demo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/yinonov/eleventy-plugin-code-block-demo/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/yinonov/eleventy-plugin-code-block-demo/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/yinonov/eleventy-plugin-code-block-demo" />
  </a>
  <a href="https://twitter.com/yinon_" target="_blank">
    <img alt="Twitter: yinon_" src="https://img.shields.io/twitter/follow/yinon\_.svg?style=social" />
  </a>
</p>

> This 11ty plugin helps demonstrate HTML code blocks.
It post-processes parsed templates and replaces `pre > code.language-html` HTML elements with rich demonstration features while rendering the actual HTML code.

<details>
  <summary>
    *Key Features*
  </summary>

- A live preview of HTML code blocks (e.g. ```html)
- Hides the original code block within a collapsed expansion panel
- TODO copy to clipboard

</details>

**code-block-demo* is in its diapers. *Feel free* to feedback, contribute and influence its future.

### 🏠 [Homepage](https://github.com/yinonov/eleventy-plugin-code-block-demo#readme)

### ✨ [Demo](https://yinonov.github.io/eleventy-plugin-code-block-demo)

## Install

```sh
npm install eleventy-plugin-code-block-demo
```

Add this plugin to your Eleventy config file (usually .eleventy.js):

```js
const codeBlockDemo = require('eleventy-plugin-code-block-demo');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(codeBlockDemo);
};
```

The plugin will automatically render code blocks with the `language-html` class as HTML.

## Author

👤 **Yinon Oved**

* Twitter: [@yinon\_](https://twitter.com/yinon\_)
* Github: [@yinonov](https://github.com/yinonov)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/yinonov/eleventy-plugin-code-block-demo/issues). You can also take a look at the [contributing guide](https://github.com/yinonov/eleventy-plugin-code-block-demo/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Yinon Oved](https://github.com/yinonov).<br />
This project is [MIT](https://github.com/yinonov/eleventy-plugin-code-block-demo/blob/master/LICENSE) licensed.
