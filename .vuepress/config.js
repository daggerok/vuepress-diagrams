const base = process.env.BASE || '/';

module.exports = {
  base,
  title: 'VuePress diagrams howto',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  // extend: '@vuepress/theme-default',
  // theme: 'default-prefers-color-scheme',
  theme: 'cool',
  displayAllHeaders: true,
  editLinks: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '../img',
      },
    },
  },
  themeConfig: {
    repo: 'daggerok/vuepress-diagrams',
  },
  markdown: {
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require('markdown-it-katex'));
      md.use(require('markdown-it-plantuml'));
      md.use(require('markdown-it-admonition'));
      md.use(require('markdown-it-vuepress-code-snippet-enhanced'));
    },
  },
};
