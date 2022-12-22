![@perp/curie-contract](https://img.shields.io/badge/%40perp%2Fcurie--contract-2.4.0-brightgreen)
![@perp/perp-oracle-contract](https://img.shields.io/badge/%40perp%2Fperp--oracle--contract-0.5.0-brightgreen)
# Website
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

# Contributing to Perp Docs
Contributing to the docs site is a great way to get involved in the dev community and help other devs along the way!.
Please feel free to open pull requests!

# How to generate markdown files from solidity Natspec comments
```sh
$ yarn docgen
```
If you wanna generate markdown files with local contract files. Please try `yarn docgen:local`.

# How to add a new page
Create a markdown file in its respective directories.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
