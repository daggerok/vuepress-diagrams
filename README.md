---
home: true
heroText: VuePress
tagline: Diagrams quickstart
footer: Made by Maksim Kostromin with ❤️ 🤘

---

# vuepress-diagrams [![GitHub actions](https://github.com/daggerok/vuepress-diagrams/actions/workflows/ci.yaml/badge.svg)](https://github.com/daggerok/vuepress-diagrams/actions/workflows/ci.yaml)

Quick and fast rapid VuePress documentation diagrams development
[[toc]]

## Mermaid

```
<mermaid>
graph TD
  A[Silvester] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>
```

<mermaid>
graph TD
  A[Silvester] -->|Get money| B(Go shopping)
  B --> C{Let me think}
  C -->|One| D[Laptop]
  C -->|Two| E[iPhone]
  C -->|Three| F[Car]
  C -->|Four| F[Mac]
</mermaid>

## Quickstart new project

Start from documentation:

```bash
mkdir /tmp/1 && wget -qO- https://github.com/daggerok/vuepress-diagrams/archive/master.zip | tar xvf - -C $_
# wget -qO- https://github.com/daggerok/vuepress-diagrams/archive/master.zip | tar xvf -
# tar -xvf <(curl -sL https://github.com/daggerok/vuepress-diagrams/archive/master.zip)
# jar -xvf <(curl -sL https://github.com/daggerok/vuepress-diagrams/archive/master.zip)
mv /tmp/1/vuepress-diagrams /tmp/my-new-project
cd /tmp/my-new-project/
# find and replace: vuepress-diagrams -> my-new-project
# such as: BASE='/my-new-project/'
vi package.json
vi .vuepress/config.js
```

## Build and serve

```sh
npm i -E ; npm run build ; npx serve .vuepress/dist/
```

open [http://localhost:8080/](http://localhost:8080/) url

## Publish via CI

Checkout `.github/workflows/ci.yaml` file to see how easily you can deploy your VuePress docs on GitHub Pages:

@[code transcludeWith=::include lang=yaml](@/.github/workflows/ci.yaml)

That README.md documentation file is compiled and deployed on [GitHub Pages](https://daggerok.github.io/vuepress-diagrams/)
