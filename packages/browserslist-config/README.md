# `@thorborn/browserslist-config`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/@thorborn%2Fbrowserslist-config.svg)](https://badge.fury.io/js/@thorborn%2Fbrowserslist-config)

Shared [browserslist](https://github.com/browserslist/browserslist) configuration

## Supported Browsers

| Browser             | Version |
| ------------------- | ------- |
| Chrome              | last 3  |
| Firefox             | last 3  |
| Safari              | last 3  |
| Edge                | last 3  |
| Opera               | last 3  |
| Chrome for Android  | last 3  |
| Firefox for Android | last 3  |
| Safari iOS          | last 3  |

```bash
$ npx browserslist "last 3 chrome versions, last 3 firefox versions, last 3 safari major versions, last 3 edge versions, last 3 opera versions, last 3 chromeandroid versions, last 3 firefoxandroid versions, last 3 ios major versions"
```

## Installation

```shell
$ npm install @thorborn/browserslist-config --save-dev
```

## Usage

Add a `browserslist` property in your `package.json` and reference this config as follows:

```
"browserslist": ["extends @thorborn/browserslist-config"]
```

Any previous browserslist config (e.g. `.browserslistrc`) should be removed in favor of this config.
