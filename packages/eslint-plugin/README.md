# `@thorborn/eslint-plugin`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/@thorborn%2Feslint-plugin.svg)](https://badge.fury.io/js/@thorborn%2Feslint-plugin)

Shared ESLint rules and configurations

## Installation

Install the ESLint plugin and its peer dependencies:

```bash
$ npx install-peerdeps --dev @thorborn/eslint-plugin
```

## Usage

Simply extend the relevant configuration in your project’s `.eslintrc`.

```
"extends": "@thorborn/core"
```

Depending on the project you are working on it might make sense to augment the core config. For example, if you are working on a node project:

```
"extends": [
  "@thorborn/core",
  "@thorborn/node"
]
```

To avoid conflicts with prettier:

```
"extends": [
  "@thorborn/core",
  "@thorborn/prettier"
]
```

**Note:** The prettier config should always go last
