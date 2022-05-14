# `@thorborn/prettier-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/@thorborn%2Fprettier-config.svg)](https://badge.fury.io/js/@thorborn%2Fprettier-config)

Shared prettier configuration

## Installation

```bash
$ npm install @thorborn/prettier-config --save-dev
```

## Usage

thorborn's prettier config comes bundled in `@thorborn/prettier-config`. To enable these rules add a `prettier` property in your `package.json` and reference this config as follows:

```
"prettier": "@thorborn/prettier-config"
```

Any previous prettier configs (e.g. `.prettierrc`) should be removed in favor of this config.
