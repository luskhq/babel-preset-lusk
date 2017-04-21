# Babel Preset Lusk

[![npm](https://img.shields.io/npm/v/babel-preset-lusk.svg)](https://www.npmjs.com/package/babel-preset-lusk)

[Babel](https://babeljs.io/) preset used at [Lusk](https://lusk.io).

## Installation

```sh
# Using yarn
yarn add babel-preset-lusk

# Using npm
npm install babel-preset-lusk
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["lusk"]
}
```

### Via CLI

```sh
$ babel index.js --presets lusk
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["lusk"]
});
