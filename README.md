# Web Configs

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

This repository contains common configurations for building web apps at thorborn.

## Usage

This repo is managed as a monorepo that is composed of many npm packages. Each package has its own `README` and documentation describing its usage.

### Package Index

| Name                                                | NPM                                                                                                                                      |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [browserslist-config](packages/browserslist-config) | [![npm version](https://badge.fury.io/js/@thorborn%2Fbrowserslist-config.svg)](https://badge.fury.io/js/@thorborn%2Fbrowserslist-config) |
| [eslint-plugin](packages/eslint-plugin)             | [![npm version](https://badge.fury.io/js/@thorborn%2Feslint-plugin.svg)](https://badge.fury.io/js/@thorborn%2Feslint-plugin)             |
| [prettier-config](packages/prettier-config)         | [![npm version](https://badge.fury.io/js/@thorborn%2Fprettier-config.svg)](https://badge.fury.io/js/@thorborn%2Fprettier-config)         |

## Releasing

The release process currently involves some manual steps to complete. Once your PR has been merged, our team will orchestrate when to cut a new release.

**Note:** Version numbers in `package.json` files should never be altered manually. This will be done via scripts as part of the release process.

## License

MIT &copy; [thorborn](https://thorborn.com), see [LICENSE.md](LICENSE.md) for details.
