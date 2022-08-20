# @roshan-labs/eslint-module

[![npm (scoped)](https://img.shields.io/npm/v/@roshan-labs/eslint-module)](https://www.npmjs.com/package/@roshan-labs/eslint-module)

ESLint module for Nuxt, based on [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint).

## Install

```sh
npm install @roshan-labs/eslint-module --save-dev
# or
yarn install @roshan-labs/eslint-module -D
```

## Usage

```js
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@roshan-labs/eslint-module',
  ],
  eslint: {
    // options
  },
})
```

## Options

View [vite-plugin-eslint](https://github.com/gxmari007/vite-plugin-eslint) options

## License

MIT
