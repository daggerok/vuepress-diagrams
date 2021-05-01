---
home: true
heroText: VuePress
tagline: Quickstart
footer: Made by Maksim Kostromin with ❤️ 🤘

---

# vuepress-docs-how-too [![GitHub actions](https://github.com/daggerok/vuepress-docs-how-too/actions/workflows/ci.yaml/badge.svg)](https://github.com/daggerok/vuepress-docs-how-too/actions/workflows/ci.yaml)

Quick and fast rapid VuePress documentation development
[[toc]]

<!--
## Table of Content
* [VuePress docs](#vuepress-docs)
-->

## Quickstrat new project

Start from documentation:

```bash
wget -qO- https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip | tar xvf -
mkdir /tmp/1 && wget -qO- https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip | tar xvf - -C $_
# tar -xvf <(curl -sL https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip)
# jar -xvf <(curl -sL https://github.com/daggerok/vuepress-docs-how-too/archive/master.zip)
mv vuepress-docs-how-too my-new-project
cd my-new-project/
# find and replace: vuepress-docs-how-too -> my-new-project
# such as: BASE='/my-new-project/'
vi package.json
vi .vuepress/config.js
```

## Build and serve

```sh
# npm i -E
npm run build
npx serve .vuepress/dist/
```

open [http://localhost:8080/](http://localhost:8080/) url

## Publish via CI

Checkout `.github/workflows/ci.yaml` file to see how easily you can deploy your VuePress docs on GitHub Pages:

@[code transcludeWith=::include lang=yaml](@/.github/workflows/ci.yaml)

That README.md documentation file is compiled and deployed on [GitHub Pages](https://daggerok.github.io/vuepress-docs-how-too/)
